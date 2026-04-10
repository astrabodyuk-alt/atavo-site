import Reveal from "@/components/reveal";

const tags = ["Restaurant", "Portsmouth", "7 days", "£699"];

export default function DemoStrip() {
  return (
    <section id="work" className="bg-[#f7f7f7] py-24 px-6 md:px-12">
      {/* Section label */}
      <p className="text-xs font-semibold tracking-[0.3em] text-[#00c47a] uppercase font-body">
        FEATURED WORK
      </p>

      {/* Title */}
      <h2 className="mt-4 font-heading font-bold text-4xl md:text-5xl text-black max-w-2xl">
        See what we built in 7 days.
      </h2>

      {/* Project card */}
      <Reveal>
        <div className="mt-16 bg-white border border-[#e8e8e8] rounded-2xl overflow-hidden">
          {/* Preview area */}
          <div className="h-64 md:h-80 bg-[#f7f7f7] overflow-hidden relative">
            <iframe
              src="https://lushbites2.vercel.app"
              className="w-full h-full"
              style={{
                pointerEvents: "none",
                transform: "scale(0.75)",
                transformOrigin: "top left",
                width: "133%",
                height: "133%",
              }}
              loading="lazy"
              title="Lush Bites Portsmouth — live preview"
            />
          </div>

          {/* Card bottom */}
          <div className="p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            {/* Left */}
            <div>
              <h3 className="text-black font-heading font-bold text-2xl">
                Lush Bites Portsmouth
              </h3>
              <div className="flex flex-wrap gap-2 mt-3">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-[#f7f7f7] text-[#6b6b6b] border border-[#e8e8e8] text-xs px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right */}
            <a
              href="https://lushbites2.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-6 py-3 rounded-full text-sm hover:bg-[#00c47a] hover:text-black transition shrink-0"
            >
              View live site →
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
