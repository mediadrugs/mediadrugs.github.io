import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services — Mediadrugs",
  description:
    "Digital advertising, social media management, brand strategy, and data analytics services.",
};

const services = [
  {
    id: "01",
    icon: "◈",
    color: "cyan",
    title: "Digital Advertising",
    tagline: "Reach the right people at the right moment",
    features: [
      "Google Ads (Search, Display, Shopping)",
      "Meta & Instagram campaigns",
      "Programmatic & display networks",
      "Retargeting & lookalike audiences",
      "A/B creative testing",
      "Budget optimization & bidding strategy",
    ],
    desc: "We design and manage data-driven paid campaigns across every major platform. From first impression to conversion, we optimize the entire funnel to maximize your return on ad spend.",
  },
  {
    id: "02",
    icon: "◉",
    color: "magenta",
    title: "Social Media Management",
    tagline: "Build communities, not just followers",
    features: [
      "Content strategy & editorial calendar",
      "Creative production (graphics & copy)",
      "Community engagement & moderation",
      "Influencer partnerships",
      "Social listening & sentiment tracking",
      "Monthly performance reporting",
    ],
    desc: "We take full ownership of your social presence — strategy, creation, scheduling, and community management — so you can focus on running your business.",
  },
  {
    id: "03",
    icon: "◎",
    color: "green",
    title: "Brand Strategy",
    tagline: "Stand out in a crowded market",
    features: [
      "Brand identity & visual system",
      "Tone of voice & messaging frameworks",
      "Competitive positioning analysis",
      "Audience persona development",
      "Brand guidelines documentation",
      "Rebranding & brand refresh",
    ],
    desc: "We help you define who you are, who you serve, and how to communicate your value with clarity and confidence across every channel.",
  },
  {
    id: "04",
    icon: "◇",
    color: "cyan",
    title: "Data & Analytics",
    tagline: "Intelligence behind every decision",
    features: [
      "Analytics setup & tagging (GA4, GTM)",
      "Custom dashboard creation",
      "Conversion tracking & attribution",
      "Audience segmentation",
      "Campaign performance analysis",
      "Actionable monthly insights",
    ],
    desc: "We instrument your digital properties, build dashboards that matter, and translate raw data into clear recommendations that improve outcomes.",
  },
];

type Color = "cyan" | "magenta" | "green";

const colorMap: Record<Color, { text: string; border: string; label: string }> =
  {
    cyan: {
      text: "neon-text-cyan",
      border: "border-neon-cyan/30 group-hover:border-neon-cyan",
      label: "text-neon-cyan",
    },
    magenta: {
      text: "neon-text-magenta",
      border: "border-neon-magenta/30 group-hover:border-neon-magenta",
      label: "text-neon-magenta",
    },
    green: {
      text: "neon-text-green",
      border: "border-neon-green/30 group-hover:border-neon-green",
      label: "text-neon-green",
    },
  };

export default function ServicesPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative cyber-grid overflow-hidden py-24">
        <div
          className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #00ffff 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-mono-tech text-neon-cyan text-xs tracking-[0.3em] uppercase mb-4">
            {"// services"}
          </p>
          <h1 className="font-orbitron text-4xl sm:text-5xl font-black text-white mb-6">
            What We <span className="neon-text-cyan">Offer</span>
          </h1>
          <div className="h-px bg-gradient-to-r from-neon-cyan to-transparent mb-8 max-w-xs" />
          <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
            A full-stack digital marketing approach — from strategy through
            execution to measurement. Every service is tailored to your goals
            and budget.
          </p>
        </div>
      </section>

      {/* ── Services list ────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 space-y-10">
        {services.map((s) => {
          const c = colorMap[s.color as Color];
          return (
            <article
              key={s.id}
              className={`cyber-card rounded-lg border ${c.border} p-8 group transition-all duration-300`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left: meta */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`font-mono-tech text-4xl ${c.text}`}>
                      {s.icon}
                    </span>
                    <span
                      className={`font-mono-tech text-xs ${c.label} tracking-widest`}
                    >
                      {s.id}
                    </span>
                  </div>
                  <h2 className="font-orbitron text-xl font-black text-white mb-2">
                    {s.title}
                  </h2>
                  <p
                    className={`font-mono-tech text-xs ${c.label} tracking-wide mb-4`}
                  >
                    {s.tagline}
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {s.desc}
                  </p>
                </div>

                {/* Right: features */}
                <div className="lg:col-span-2">
                  <p className="font-mono-tech text-xs text-gray-600 tracking-widest uppercase mb-4">
                    {"// includes"}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {s.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2 text-sm text-gray-400"
                      >
                        <span
                          className={`mt-0.5 text-xs ${c.label} flex-shrink-0`}
                        >
                          ▹
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          );
        })}
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="bg-cyber-dark border-t border-cyber-border py-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <p className="font-mono-tech text-neon-magenta text-xs tracking-[0.3em] uppercase mb-3">
            {"// ready to start?"}
          </p>
          <h2 className="font-orbitron text-3xl font-black text-white mb-6">
            Let's Build Something{" "}
            <span className="neon-text-cyan">Extraordinary</span>
          </h2>
          <p className="text-gray-500 mb-8">
            Schedule a free consultation and let's craft a strategy tailored to
            your goals.
          </p>
          <Link
            href="/contact"
            className="neon-btn-cyan inline-block px-10 py-3 font-orbitron text-sm font-bold tracking-widest uppercase rounded"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
