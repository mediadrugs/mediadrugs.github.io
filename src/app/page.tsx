import Link from "next/link";

const services = [
  {
    icon: "◈",
    title: "Digital Advertising",
    desc: "Targeted campaigns across Google, Meta, and programmatic networks — built for conversion.",
    color: "cyan",
  },
  {
    icon: "◉",
    title: "Social Media",
    desc: "Strategy, content creation, and community management that grows real audiences.",
    color: "magenta",
  },
  {
    icon: "◎",
    title: "Brand Strategy",
    desc: "Identity, messaging, and positioning that cuts through the noise.",
    color: "green",
  },
  {
    icon: "◇",
    title: "Data & Analytics",
    desc: "Insight-led optimization so every budget dollar drives measurable impact.",
    color: "cyan",
  },
];

const stats = [
  { value: "50+", label: "Clients" },
  { value: "3×", label: "Avg. ROI" },
  { value: "5+", label: "Years" },
  { value: "24/7", label: "Monitoring" },
];

export default function Home() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative cyber-grid overflow-hidden min-h-[90vh] flex items-center">
        {/* ambient glow blobs */}
        <div
          className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #00ffff 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-32 -right-32 w-96 h-96 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #ff00ff 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            {/* eyebrow */}
            <p className="font-mono-tech text-neon-green text-sm tracking-[0.3em] uppercase mb-6 animate-slide-in">
              {"// Digital Marketing Agency"}
            </p>

            {/* headline */}
            <h1
              className="font-orbitron text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6"
              style={{ animationDelay: "0.1s" }}
            >
              <span
                className="glitch-text neon-text-cyan"
                data-text="INNOVATIVE"
              >
                INNOVATIVE
              </span>
              <br />
              <span className="text-white">ADVERTISING</span>
              <br />
              <span className="neon-text-magenta">FOR MODERN</span>
              <br />
              <span className="text-white">BUSINESSES</span>
            </h1>

            <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl animate-slide-in">
              We blend creativity, technology, and data-driven strategies to
              craft impactful campaigns that deliver real results — from
              startups to established enterprises.
            </p>

            <div className="flex flex-wrap gap-4 animate-slide-in">
              <Link
                href="/contact"
                className="neon-btn-cyan px-8 py-3 font-orbitron text-sm font-bold tracking-widest uppercase rounded"
              >
                Get in Touch
              </Link>
              <Link
                href="/services"
                className="neon-btn-magenta px-8 py-3 font-orbitron text-sm font-bold tracking-widest uppercase rounded"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────── */}
      {/* <section className="bg-cyber-dark border-y border-cyber-border py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center">
                <dt className="font-orbitron text-3xl font-black neon-text-cyan">
                  {value}
                </dt>
                <dd className="font-mono-tech text-xs text-gray-500 tracking-widest uppercase mt-1">
                  {label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section> */}

      {/* ── Services preview ─────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <p className="font-mono-tech text-neon-cyan text-xs tracking-[0.3em] uppercase mb-3">
            {"// what we do"}
          </p>
          <h2 className="font-orbitron text-3xl sm:text-4xl font-black text-white">
            Core Services
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon, title, desc, color }) => (
            <div key={title} className="cyber-card rounded-lg p-6 group">
              <div
                className={`font-mono-tech text-3xl mb-4 ${
                  color === "cyan"
                    ? "neon-text-cyan"
                    : color === "magenta"
                      ? "neon-text-magenta"
                      : "neon-text-green"
                }`}
              >
                {icon}
              </div>
              <h3 className="font-orbitron text-sm font-bold text-white uppercase tracking-wide mb-3">
                {title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="neon-btn-cyan inline-block px-8 py-3 font-orbitron text-sm font-bold tracking-widest uppercase rounded"
          >
            Explore All Services
          </Link>
        </div>
      </section>

      {/* ── Mission CTA ──────────────────────────────────── */}
      <section className="relative bg-cyber-gray border-y border-cyber-border overflow-hidden py-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #00ffff 0, #00ffff 1px, transparent 0, transparent 50%)",
            backgroundSize: "30px 30px",
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-mono-tech text-neon-magenta text-xs tracking-[0.3em] uppercase mb-3">
            {"// our mission"}
          </p>
          <h2 className="font-orbitron text-3xl sm:text-4xl font-black text-white mb-6">
            Build Lasting Partnerships
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-10">
            To provide personalized, high-touch service that helps our clients
            achieve their unique goals, and to always strive for excellence in
            everything we do.
          </p>
          <Link
            href="/about"
            className="neon-btn-magenta inline-block px-8 py-3 font-orbitron text-sm font-bold tracking-widest uppercase rounded"
          >
            About Us
          </Link>
        </div>
      </section>
    </>
  );
}
