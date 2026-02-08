import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Demo – Håndverker landingssider",
  description: "Eksempelsider for håndverkere. Velg en demo.",
  robots: { index: false, follow: false },
};

function IconHouse(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M3 10.5L12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1V10.5z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const demos = [
  {
    href: "/rorlegger",
    label: "Rørlegger",
    description: "Blå profil – service, bad og vann & avløp",
    color: "#1f6fd7",
  },
  {
    href: "/snekker",
    label: "Snekker",
    description: "Brun profil – terrasse, oppussing og reparasjoner",
    color: "#8B5E3C",
  },
  {
    href: "/ventilasjon",
    label: "Ventilasjon",
    description: "Oransje profil – snekkerarbeid, oppussing og VVS",
    color: "#d76b1f",
  },
  {
    href: "/bilmekaniker",
    label: "Bilmekaniker",
    description: "Rød profil – bilreparasjoner, EU-klargjøring og diagnostikk",
    color: "#c0392b",
  },
];

export default function HandverkerHub() {
  return (
    <div className="min-h-screen text-white">
      {/* Bakgrunn */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_70%_20%,rgba(255,255,255,0.10),transparent_55%),radial-gradient(900px_500px_at_20%_80%,rgba(255,128,0,0.10),transparent_60%)]" />
        <div className="absolute inset-0 bg-[#141414]" />
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(0deg,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:28px_28px]" />
        <div className="absolute inset-0 opacity-35 [background-image:radial-gradient(rgba(255,255,255,0.10)_1px,transparent_1px)] [background-size:20px_20px]" />
      </div>

      {/* Top bar */}
      <header className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/10">
            <IconHouse className="h-5 w-5 text-white" />
          </span>
          <span className="font-extrabold tracking-wide">HÅNDVERKER DEMO</span>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24 text-center">
        <h1 className="text-4xl sm:text-5xl font-black leading-[1.05]">
          LANDINGSSIDER FOR{" "}
          <span className="text-[#d76b1f]">HÅNDVERKERE</span>
        </h1>

        <p className="mt-5 text-lg sm:text-xl text-white/70 max-w-2xl mx-auto">
          Eksempelsider som viser hvordan en enkel, effektiv landingsside kan se
          ut for ulike håndverkerfag. Velg en demo nedenfor.
        </p>

        <div className="mt-6 h-px w-64 mx-auto bg-white/20" />
      </section>

      {/* Demo cards */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-6 sm:grid-cols-3">
          {demos.map((d) => (
            <Link
              key={d.href}
              href={d.href}
              className="group rounded-lg border border-white/10 bg-white/5 p-8 text-center hover:bg-white/10 transition-colors"
            >
              <div
                className="mx-auto mb-5 inline-flex h-16 w-16 items-center justify-center rounded-full"
                style={{ backgroundColor: `${d.color}20` }}
              >
                <IconHouse
                  className="h-8 w-8"
                  style={{ color: d.color }}
                />
              </div>
              <div
                className="text-xl font-black tracking-wide"
                style={{ color: d.color }}
              >
                {d.label}
              </div>
              <div className="mt-2 text-sm text-white/60">
                {d.description}
              </div>
              <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white/80 group-hover:text-white transition-colors">
                Se demo
                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-6 text-center text-xs text-white/45">
          Eksempelside &ndash; kun for demonstrasjon
        </div>
      </section>
    </div>
  );
}
