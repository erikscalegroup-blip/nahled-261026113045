import { createFileRoute, Link } from "@tanstack/react-router";

import { Navigacia, Paticka } from "@/components/coralpool/Navigacia";
import { useOdhalenie } from "@/components/coralpool/pouzit";
import g1 from "@/assets/galeria-1.jpg";
import g2 from "@/assets/galeria-2.jpg";
import g3 from "@/assets/galeria-3.jpg";
import g4 from "@/assets/galeria-4.jpg";
import g5 from "@/assets/galeria-5.jpg";
import g6 from "@/assets/galeria-6.jpg";

export const Route = createFileRoute("/realizacie")({
  head: () => ({
    meta: [
      { title: "Realizácie bazénov — galéria prác | Coralpool" },
      {
        name: "description",
        content:
          "Dokončené bazény s mikrocementovým povrchom a 3D fóliou. Nové stavby aj rekonštrukcie po celom Slovensku.",
      },
      { property: "og:title", content: "Realizácie bazénov — galéria prác | Coralpool" },
      { property: "og:description", content: "Fotky dokončených bazénov: mikrocement aj 3D fólia." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Realizacie,
});

const PRACE = [
  { src: g1, alt: "Obdĺžnikový záhradný bazén s bezškárovým povrchom vo večernom svetle", lokalita: "Nitra", tech: "Mikrocement", rok: "2025", rozsah: "Nová stavba · 8 × 4 m", w: 1600, h: 1000 },
  { src: g2, alt: "Detail okraja bazéna s hladkým mikrocementovým povrchom", lokalita: "Senec", tech: "Mikrocement", rok: "2025", rozsah: "Rekonštrukcia · 7 × 3,5 m", w: 1000, h: 1200 },
  { src: g3, alt: "Dvorový bazén s tmavým bezškárovým povrchom", lokalita: "Trnava", tech: "Mikrocement", rok: "2024", rozsah: "Nová stavba · 6 × 3 m", w: 1000, h: 1200 },
  { src: g4, alt: "Rekonštruovaný záhradný bazén s novou 3D fóliou", lokalita: "Banská Bystrica", tech: "3D fólia", rok: "2024", rozsah: "Rekonštrukcia · 9 × 4 m", w: 1200, h: 900 },
  { src: g5, alt: "Úzky plavecký bazén s piesočným okrajom a čistou vodou", lokalita: "Piešťany", tech: "Mikrocement", rok: "2024", rozsah: "Nová stavba · 10 × 4 m", w: 1200, h: 900 },
  { src: g6, alt: "Roh bazéna za súmraku s podvodným osvetlením a šedým povrchom", lokalita: "Košice", tech: "3D fólia", rok: "2023", rozsah: "Rekonštrukcia · 8 × 3,5 m", w: 1200, h: 912 },
];

function Realizacie() {
  const ref = useOdhalenie(0.05);
  return (
    <main>
      <div className="px-6 py-8 md:px-12 md:py-10">
        <Navigacia />
      </div>

      <section ref={ref} className="px-6 pb-4 md:px-12">
        <h1 className="max-w-4xl">Realizácie</h1>
        <p className="tichy mt-8" style={{ fontSize: "21px" }}>
          Nové bazény aj rekonštrukcie starých vaní, ktoré si majitelia už chceli dať zasypať. Pri každej práci píšeme,
          čo sa robilo a akou technológiou.
        </p>
      </section>

      <section className="sekcia px-6 md:px-12">
        <div className="grid gap-x-10 gap-y-20 md:grid-cols-2">
          {PRACE.map((p, i) => (
            <figure key={p.alt} className={i % 3 === 0 ? "md:col-span-2" : ""}>
              <img
                src={p.src}
                alt={p.alt}
                width={p.w}
                height={p.h}
                loading="lazy"
                className={`w-full object-cover ${i % 3 === 0 ? "h-[60vw] md:h-[70vh]" : "h-[70vw] md:h-[58vh]"}`}
              />
              <figcaption
                className="mt-5 flex flex-wrap items-baseline justify-between gap-3 border-t pt-4"
                style={{ borderColor: "var(--cement)" }}
              >
                <span style={{ fontFamily: "var(--font-nadpis)", fontSize: "24px" }}>{p.lokalita}</span>
                <span className="mono" style={{ color: "var(--cement-tmavy)" }}>
                  {p.tech} · {p.rok}
                </span>
                <span className="mono w-full" style={{ color: "var(--cement-tmavy)" }}>
                  {p.rozsah}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-24 border-t pt-12" style={{ borderColor: "var(--cement)" }}>
          <p style={{ fontFamily: "var(--font-nadpis)", fontSize: "clamp(20px, 2.4vw, 28px)", lineHeight: 1.35 }}>
            Chcete vidieť bazén naživo? Po dohode s majiteľmi vieme ukázať hotovú realizáciu vo vašom okolí.
          </p>
          <Link
            to="/"
            hash="kontakt"
            className="mt-8 inline-block px-8 py-4 font-semibold"
            style={{ background: "var(--hlbka)", color: "var(--biela)", borderRadius: "2px", fontSize: "17px" }}
          >
            Nezáväzná obhliadka
          </Link>
        </div>
      </section>

      <Paticka />
    </main>
  );
}
