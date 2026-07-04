import Link from "next/link";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/mediadrugs",
    icon: (
      <svg
        className="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 310 310"
        aria-hidden="true"
      >
        <path d="M72.16 99.73H9.927c-2.762 0-5 2.239-5 5v199.928c0 2.762 2.238 5 5 5H72.16c2.762 0 5-2.238 5-5V104.73c0-2.761-2.238-5-5-5z" />
        <path d="M41.066.341C18.422.341 0 18.743 0 41.362 0 63.991 18.422 82.4 41.066 82.4c22.626 0 41.033-18.41 41.033-41.038C82.1 18.743 63.692.341 41.066.341z" />
        <path d="M230.454 94.761c-24.995 0-43.472 10.745-54.679 22.954V104.73c0-2.761-2.238-5-5-5h-59.599c-2.762 0-5 2.239-5 5v199.928c0 2.762 2.238 5 5 5h62.097c2.762 0 5-2.238 5-5v-98.918c0-33.333 9.054-46.319 32.29-46.319 25.306 0 27.317 20.818 27.317 48.034v97.204c0 2.762 2.238 5 5 5H305c2.762 0 5-2.238 5-5V194.995C310 145.43 300.549 94.761 230.454 94.761z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://facebook.com/mediadrugs",
    icon: (
      <svg
        className="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-cyber-dark border-t border-cyber-border">
      {/* top accent */}
      <div className="h-px bg-gradient-to-r from-transparent via-neon-magenta to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <p className="font-orbitron text-xl font-black tracking-widest mb-3">
              <span className="neon-text-cyan">MEDIA</span>
              <span className="neon-text-magenta">DRUGS</span>
            </p>
            <p className="font-mono-tech text-xs text-gray-500 leading-relaxed">
              Innovative advertising for modern businesses.
              <br />
              Estonia, Tallinn
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="font-mono-tech text-xs text-neon-cyan tracking-widest uppercase mb-4">
              Navigation
            </p>
            <ul className="space-y-2">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="font-mono-tech text-sm text-gray-400 hover:text-neon-cyan transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-mono-tech text-xs text-neon-cyan tracking-widest uppercase mb-4">
              Contact
            </p>
            <ul className="space-y-2 font-mono-tech text-sm text-gray-400">
              <li>
                <a
                  href="mailto:contact@mediadrugs.com"
                  className="hover:text-neon-cyan transition-colors"
                >
                  contact@mediadrugs.com
                </a>
              </li>
              <li>Mon–Fri: 10:00–16:00</li>
              <li className="text-xs text-gray-600">
                Ehitajate tee 110, 13517 Tallinn
              </li>
            </ul>

            {/* Social */}
            <div className="flex gap-4 mt-6">
              {socialLinks.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-gray-500 hover:text-neon-cyan transition-colors"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-cyber-border flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="font-mono-tech text-xs text-gray-600">
            © {year} Mediadrugs OÜ. All rights reserved.
          </p>
          <p className="font-mono-tech text-xs text-gray-700">
            {"// made with neon & data"}
          </p>
        </div>
      </div>
    </footer>
  );
}
