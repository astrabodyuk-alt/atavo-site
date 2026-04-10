'use client'
import { motion, type Variants } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
type Point = { x: number; y: number };
interface WaveConfig { offset: number; amplitude: number; frequency: number; color: string; opacity: number; }
const containerVariants: Variants = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.12 } } };
const itemVariants: Variants = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };
export function GlowyWavesHero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef<Point>({ x: 0, y: 0 });
  const targetMouseRef = useRef<Point>({ x: 0, y: 0 });
  useEffect(() => {
    const canvas = canvasRef.current; if (!canvas) return undefined;
    const ctx = canvas.getContext("2d"); if (!ctx) return undefined;
    let animationId: number; let time = 0;
    const computeThemeColors = () => {
      const rootStyles = getComputedStyle(document.documentElement);
      const resolveColor = (variables: string[], alpha = 1) => {
        const tempEl = document.createElement("div");
        tempEl.style.position = "absolute"; tempEl.style.visibility = "hidden"; tempEl.style.width = "1px"; tempEl.style.height = "1px";
        document.body.appendChild(tempEl);
        let color = `rgba(255, 255, 255, ${alpha})`;
        for (const variable of variables) {
          tempEl.style.backgroundColor = `var(${variable})`;
          const computedColor = getComputedStyle(tempEl).backgroundColor;
          if (computedColor && computedColor !== "rgba(0, 0, 0, 0)") {
            if (alpha < 1) { const m = computedColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/); if (m) color = `rgba(${m[1]}, ${m[2]}, ${m[3]}, ${alpha})`; else color = computedColor; }
            else { color = computedColor; } break;
          }
        }
        document.body.removeChild(tempEl); return color;
      };
      return {
        backgroundTop: resolveColor(["--background"], 1),
        backgroundBottom: resolveColor(["--muted", "--background"], 0.95),
        wavePalette: [
          { offset: 0, amplitude: 70, frequency: 0.003, color: resolveColor(["--primary"], 0.8), opacity: 0.45 },
          { offset: Math.PI / 2, amplitude: 90, frequency: 0.0026, color: resolveColor(["--accent", "--primary"], 0.7), opacity: 0.35 },
          { offset: Math.PI, amplitude: 60, frequency: 0.0034, color: resolveColor(["--secondary", "--foreground"], 0.65), opacity: 0.3 },
          { offset: Math.PI * 1.5, amplitude: 80, frequency: 0.0022, color: resolveColor(["--primary-foreground", "--foreground"], 0.25), opacity: 0.25 },
          { offset: Math.PI * 2, amplitude: 55, frequency: 0.004, color: resolveColor(["--foreground"], 0.2), opacity: 0.2 },
        ] satisfies WaveConfig[],
      };
    };
    let themeColors = computeThemeColors();
    const observer = new MutationObserver(() => { themeColors = computeThemeColors(); });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class", "data-theme"] });
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mouseInfluence = prefersReducedMotion ? 10 : 70;
    const influenceRadius = prefersReducedMotion ? 160 : 320;
    const smoothing = prefersReducedMotion ? 0.04 : 0.1;
    const resizeCanvas = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    const recenterMouse = () => { const c = { x: canvas.width / 2, y: canvas.height / 2 }; mouseRef.current = c; targetMouseRef.current = c; };
    const handleResize = () => { resizeCanvas(); recenterMouse(); };
    const handleMouseMove = (e: MouseEvent) => { targetMouseRef.current = { x: e.clientX, y: e.clientY }; };
    resizeCanvas(); recenterMouse();
    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", recenterMouse);
    const drawWave = (wave: WaveConfig) => {
      ctx.save(); ctx.beginPath();
      for (let x = 0; x <= canvas.width; x += 4) {
        const dx = x - mouseRef.current.x; const dy = canvas.height / 2 - mouseRef.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const influence = Math.max(0, 1 - distance / influenceRadius);
        const mouseEffect = influence * mouseInfluence * Math.sin(time * 0.001 + x * 0.01 + wave.offset);
        const y = canvas.height / 2 + Math.sin(x * wave.frequency + time * 0.002 + wave.offset) * wave.amplitude + Math.sin(x * wave.frequency * 0.4 + time * 0.003) * (wave.amplitude * 0.45) + mouseEffect;
        x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.lineWidth = 2.5; ctx.strokeStyle = wave.color; ctx.globalAlpha = wave.opacity; ctx.shadowBlur = 35; ctx.shadowColor = wave.color; ctx.stroke(); ctx.restore();
    };
    const animate = () => {
      time += 1;
      mouseRef.current.x += (targetMouseRef.current.x - mouseRef.current.x) * smoothing;
      mouseRef.current.y += (targetMouseRef.current.y - mouseRef.current.y) * smoothing;
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, themeColors.backgroundTop); gradient.addColorStop(1, themeColors.backgroundBottom);
      ctx.fillStyle = gradient; ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.globalAlpha = 1; ctx.shadowBlur = 0;
      themeColors.wavePalette.forEach(drawWave);
      animationId = window.requestAnimationFrame(animate);
    };
    animationId = window.requestAnimationFrame(animate);
    return () => { window.removeEventListener("resize", handleResize); window.removeEventListener("mousemove", handleMouseMove); window.removeEventListener("mouseleave", recenterMouse); cancelAnimationFrame(animationId); observer.disconnect(); };
  }, []);
  return (
    <section className="relative isolate flex min-h-screen w-full items-center justify-center overflow-hidden bg-background" role="region">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-6 py-24 text-center md:px-8">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="w-full">
          <motion.div variants={itemVariants} className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/40 bg-background/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-foreground/70">
            <Sparkles className="h-4 w-4 text-primary" aria-hidden="true" />
            Web · SaaS · Automation
          </motion.div>
          <motion.h1 variants={itemVariants} className="mb-6 text-5xl font-bold tracking-tight text-foreground md:text-7xl lg:text-8xl">
            Your competitors are online.{" "}
            <span className="bg-gradient-to-r from-primary via-primary/70 to-foreground/80 bg-clip-text text-transparent">Are you?</span>
          </motion.h1>
          <motion.p variants={itemVariants} className="mx-auto mb-10 max-w-2xl text-lg text-foreground/70 md:text-xl">
            We build websites and business tools that get you more customers. Custom-built. Any industry. From £699.
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="#audit-form" className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full text-base font-medium hover:bg-gray-900 transition-colors uppercase tracking-wide">
              Let&apos;s build yours <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#demo" className="inline-flex items-center gap-2 rounded-full border border-border/40 bg-background/60 px-8 py-4 text-base text-foreground/80 backdrop-blur hover:bg-background/80 transition-colors">
              See our work
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
