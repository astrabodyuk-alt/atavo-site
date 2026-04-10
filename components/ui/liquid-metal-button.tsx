'use client'
import { useRef, useEffect, useState } from "react";
import { ShaderMount, liquidMetalFragmentShader } from "@paper-design/shaders";
import { Sparkles } from "lucide-react";
import { clsx } from "clsx";

interface LiquidMetalButtonProps {
  label?: string;
  viewMode?: "full" | "icon";
  onClick?: () => void;
  className?: string;
}

export default function LiquidMetalButton({
  label = "Get Started",
  viewMode = "full",
  onClick,
  className,
}: LiquidMetalButtonProps) {
  const shaderContainerRef = useRef<HTMLDivElement>(null);
  const shaderMountRef = useRef<InstanceType<typeof ShaderMount> | null>(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const el = shaderContainerRef.current;
    if (!el) return;

    shaderMountRef.current = new ShaderMount(
      el,
      liquidMetalFragmentShader,
      {
        u_patternScale: 1.2,
        u_refraction: 0.1,
        u_edge: 0.4,
        u_patternBlur: 0.005,
        u_liquid: 0.3,
      },
      undefined,
      0.4
    );

    return () => {
      shaderMountRef.current?.dispose?.();
    };
  }, []);

  useEffect(() => {
    const mount = shaderMountRef.current;
    if (!mount) return;
    mount.setUniforms({
      u_patternScale: hovered ? 1.8 : 1.2,
      u_refraction: hovered ? 0.18 : 0.1,
      u_liquid: hovered ? 0.6 : 0.3,
    });
    mount.setSpeed(hovered ? 0.8 : 0.4);
  }, [hovered]);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={clsx(
        "relative overflow-hidden rounded-full font-semibold text-white transition-transform duration-200 active:scale-95 cursor-pointer",
        viewMode === "icon"
          ? "w-12 h-12 flex items-center justify-center"
          : "px-10 py-5 text-lg",
        className
      )}
      style={{ isolation: "isolate" }}
    >
      {/* Shader background */}
      <div
        ref={shaderContainerRef}
        className="absolute inset-0 z-0"
        style={{ borderRadius: "inherit" }}
        aria-hidden
      />

      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">
        {viewMode === "icon" ? (
          <Sparkles className="w-5 h-5" />
        ) : (
          <>
            {label}
            <Sparkles className="w-4 h-4" />
          </>
        )}
      </span>
    </button>
  );
}
