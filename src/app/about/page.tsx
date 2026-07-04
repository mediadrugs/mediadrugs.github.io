import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Mediadrugs",
  description:
    "We are a team of passionate professionals dedicated to helping businesses thrive in the digital age.",
};

const values = [
  {
    icon: "◈",
    title: "Creativity",
    desc: "Every campaign is a unique story crafted to resonate with your audience.",
  },
  {
    icon: "◉",
    title: "Technology",
    desc: "Cutting-edge tools and platforms to amplify reach and precision.",
  },
  {
    icon: "◎",
    title: "Data",
    desc: "Every decision backed by analytics to maximize your ROI.",
  },
  {
    icon: "◇",
    title: "Partnership",
    desc: "We don't just execute strategies — we build lasting relationships.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative cyber-grid overflow-hidden py-24">
        <div
          className="pointer-events-none absolute -top-24 right-0 w-80 h-80 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #ff00ff 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-mono-tech text-neon-cyan text-xs tracking-[0.3em] uppercase mb-4">
            {"// about us"}
          </p>
          <h1 className="font-orbitron text-4xl sm:text-5xl font-black text-white mb-6">
            Who We <span className="neon-text-magenta">Are</span>
          </h1>
          <div className="max-w-2xl">
            <div className="h-px bg-gradient-to-r from-neon-cyan to-transparent mb-8" />
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              At Mediadrugs, we are a team of passionate professionals dedicated
              to helping businesses and organizations thrive in the digital age.
              As an innovative advertising and social media agency, we blend
              creativity, technology, and data-driven strategies to craft
              impactful campaigns that deliver real results.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              Our mission is to empower clients with tailored solutions that
              drive brand awareness, generate leads, and boost sales. Whether
              you're a startup or an established enterprise, we take a
              personalized approach to understand your unique goals and create
              strategies that align with your vision, budget, and timeline.
            </p>
            <p className="text-gray-400 leading-relaxed">
              With expertise in advertising, social media, design, and data
              analysis, our team is committed to staying ahead of industry
              trends. We leverage cutting-edge technologies and insights to
              optimize every campaign, ensuring maximum impact and ROI.
            </p>
          </div>
        </div>
      </section>

      {/* ── Values ───────────────────────────────────────── */}
      <section className="bg-cyber-dark border-y border-cyber-border py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="font-mono-tech text-neon-cyan text-xs tracking-[0.3em] uppercase mb-3">
              {"// core values"}
            </p>
            <h2 className="font-orbitron text-3xl font-black text-white">
              What Drives Us
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="cyber-card rounded-lg p-8 text-center group"
              >
                <div className="font-mono-tech text-4xl neon-text-cyan mb-4 group-hover:neon-text-magenta transition-colors">
                  {icon}
                </div>
                <h3 className="font-orbitron text-sm font-bold text-white uppercase tracking-wide mb-3">
                  {title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Vision ───────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-mono-tech text-neon-magenta text-xs tracking-[0.3em] uppercase mb-4">
              {"// our vision"}
            </p>
            <h2 className="font-orbitron text-3xl font-black text-white mb-6">
              Building the Future of{" "}
              <span className="neon-text-cyan">Digital Marketing</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              At Mediadrugs, we don't just execute strategies — we build lasting
              partnerships. If you're looking for a dedicated team to elevate
              your brand and drive meaningful growth, let's work together to
              make it happen.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Based in Tallinn, Estonia, we work with clients across Europe and
              beyond, bringing a global perspective to every campaign.
            </p>
          </div>

          {/* Cyber decorative block */}
          <div className="relative">
            <div className="cyber-card rounded-lg p-8 neon-border-cyan border">
              <p className="font-mono-tech text-xs text-neon-green mb-6 tracking-widest">
                {"> MEDIADRUGS_MISSION.exe"}
              </p>
              <blockquote className="font-orbitron text-white text-lg font-bold leading-relaxed mb-6">
                "To provide personalized, high-touch service that helps our
                clients achieve their unique goals, and to always strive for
                excellence in everything we do."
              </blockquote>
              <p className="font-mono-tech text-xs text-gray-600">
                — Mediadrugs OÜ, Tallinn, Estonia
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
