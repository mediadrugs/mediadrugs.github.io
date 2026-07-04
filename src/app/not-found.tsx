import Link from "next/link";

export default function NotFound() {
  return (
    <section className="cyber-grid min-h-[80vh] flex items-center justify-center">
      <div className="text-center px-4">
        <p className="font-mono-tech text-neon-green text-xs tracking-[0.3em] uppercase mb-4">
          {"// error 404"}
        </p>
        <h1
          className="font-orbitron text-7xl sm:text-9xl font-black neon-text-cyan mb-4 glitch-text"
          data-text="404"
        >
          404
        </h1>
        <p className="font-orbitron text-xl text-white mb-4">Page Not Found</p>
        <p className="font-mono-tech text-gray-500 text-sm mb-10">
          The signal was lost in the grid.
        </p>
        <Link
          href="/"
          className="neon-btn-cyan inline-block px-8 py-3 font-orbitron text-sm font-bold tracking-widest uppercase rounded"
        >
          Return Home
        </Link>
      </div>
    </section>
  );
}
