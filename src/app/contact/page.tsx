import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Mediadrugs",
  description:
    "Get in touch with Mediadrugs OÜ. We're ready to elevate your brand.",
};

const details = [
  {
    label: "Email",
    value: "contact@mediadrugs.com",
    href: "mailto:contact@mediadrugs.com",
    icon: "✉",
    color: "cyan",
  },
  {
    label: "Working Hours",
    value: "Mon–Fri: 10:00–16:00",
    href: null,
    icon: "◷",
    color: "magenta",
  },
  // {
  //   label: "LinkedIn",
  //   value: "linkedin.com/company/mediadrugs",
  //   href: "https://www.linkedin.com/company/mediadrugs",
  //   icon: "◈",
  //   color: "cyan",
  // },
  // {
  //   label: "Address",
  //   value: "Ehitajate tee 110, 13517 Tallinn, Estonia",
  //   href: null,
  //   icon: "◎",
  //   color: "green",
  // },
];

export default function ContactPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative cyber-grid overflow-hidden py-24">
        <div
          className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #ff00ff 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-mono-tech text-neon-cyan text-xs tracking-[0.3em] uppercase mb-4">
            {"// contact"}
          </p>
          <h1 className="font-orbitron text-4xl sm:text-5xl font-black text-white mb-6">
            Get In <span className="neon-text-magenta">Touch</span>
          </h1>
          <div className="h-px bg-gradient-to-r from-neon-magenta to-transparent mb-8 max-w-xs" />
          <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
            Whether you have questions about our services or are ready to launch
            your next campaign, we're just a message away.
          </p>
        </div>
      </section>

      {/* ── Contact grid ─────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact details */}
          <div>
            <p className="font-mono-tech text-xs text-neon-cyan tracking-widest uppercase mb-8">
              {"// reach us at"}
            </p>
            <div className="space-y-6">
              {details.map(({ label, value, href, icon, color }) => (
                <div
                  key={label}
                  className="cyber-card rounded-lg p-6 border border-cyber-border flex items-start gap-4 group"
                >
                  <span
                    className={`font-mono-tech text-xl flex-shrink-0 ${
                      color === "cyan"
                        ? "neon-text-cyan"
                        : color === "magenta"
                          ? "neon-text-magenta"
                          : "neon-text-green"
                    }`}
                  >
                    {icon}
                  </span>
                  <div>
                    <p className="font-mono-tech text-xs text-gray-600 tracking-widest uppercase mb-1">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={
                          href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="text-gray-300 hover:text-neon-cyan transition-colors text-sm"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-gray-300 text-sm">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Message prompt */}
          <div className="flex flex-col justify-center">
            <div className="cyber-card rounded-lg neon-border-cyan border p-8">
              <p className="font-mono-tech text-xs text-neon-green tracking-widest mb-6">
                {"> INITIATE_CONTACT.exe"}
              </p>
              <h2 className="font-orbitron text-2xl font-black text-white mb-4">
                Ready to Elevate Your Brand?
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                We're happy to schedule a free consultation to understand your
                needs and craft a tailored strategy that aligns with your goals
                and budget. Whether you're a small business or a large
                organization, we're committed to delivering impactful results.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                Don't wait — contact us today and let's create something great
                together!
              </p>
              <a
                href="mailto:contact@mediadrugs.com"
                className="neon-btn-cyan inline-block px-8 py-3 font-orbitron text-sm font-bold tracking-widest uppercase rounded"
              >
                Send Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
