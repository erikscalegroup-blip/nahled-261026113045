import { createFileRoute, Link } from "@tanstack/react-router";

import { Navigacia, Paticka } from "@/components/coralpool/Navigacia";
import { useOdhalenie } from "@/components/coralpool/pouzit";
import tech from "@/assets/tech-folia.jpg";
import g4 from "@/assets/galeria-4.jpg";

export const Route = createFileRoute("/3d-folia")({
  head: () => ({
    meta: [
      { title: "3D fólia do bazéna — rýchla rekonštrukcia | Coralpool" },
      {
        name: "description",
        content:
          "Tlačená 3D fólia s priestorovým dekorom, zváraná na mieste. Rekonštrukcia bazéna za 2–4 dni bez búrania obkladu.",
      },
      { property: "og:title", content: "3D fólia do bazéna — rýchla rekonštrukcia | Coralpool" },
      {
        property: "og:description",
        content: "Priestorový dekor, zváranie na mieste, hotovo za pár dní. Kedy dáva fólia väčší zmysel ako mikrocement.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Folia,
});

const PRE = [
  ["Rekonštrukcia starého bazéna", "Konštrukcia drží, ale obklad opadáva a škáry černejú. Fólia sa položí naň."],
  ["Krátky termín", "Dva až štyri dni na mieste. Sezóna sa nemusí obetovať."],
  ["Netesniaca vaňa", "Fólia je zároveň hydroizolácia. Zvary sa robia teplovzdušne, na mieru tvaru."],
  ["Nižší rozpočet", "Za tú istú čistotu bez obkladu zaplatíte menej ako za liaty povrch."],
];

function Folia() {
  const ref = useOdhalenie(0.1);
  return (
    <main>
      <div className="px-6 py-8 md:px-12 md:py-10">
        <Navigacia />
      </div>

      <section ref={ref} className="px-6 pb-16 md:px-12">
        <h1 className="max-w-4xl">3D fólia</h1>
        <p className="tichy mt-8" style={{ fontSize: "21px" }}>
          Tlačená fólia s priestorovým dekorom — od kameňa po hladké odtiene. Zvárame ju priamo na mieste, presne podľa
          tvaru vane, vrátane schodov, dýz a svetiel.
        </p>
        <div className="mono tichy mt-8" style={{ color: "var(--cement-tmavy)", transitionDelay: "120ms" }}>
          Hrúbka 1,5 mm · dekory na výber · realizácia 2–4 dni · záruka 10 rokov
        </div>
      </section>

      <img
        src={tech}
        alt="Bazén s jemným kamenným dekorom 3D fólie a čistou vodou"
        width={1280}
        height={1280}
        loading="lazy"
        className="h-[52vw] w-full object-cover md:h-[62vh]"
      />

      <section className="sekcia px-6 md:px-12">
        <h2>Kedy zvoliť fóliu</h2>
        <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-14">
          {PRE.map(([t, p]) => (
            <div key={t} className="border-t pt-6" style={{ borderColor: "var(--cement)" }}>
              <h3 style={{ fontFamily: "var(--font-text)", fontWeight: 600, fontSize: "19px" }}>{t}</h3>
              <p className="mt-2" style={{ color: "var(--cement-tmavy)", fontSize: "17px" }}>
                {p}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid md:grid-cols-2">
        <img
          src={g4}
          alt="Rekonštruovaný záhradný bazén s novou 3D fóliou"
          width={1200}
          height={900}
          loading="lazy"
          className="h-[70vw] w-full object-cover md:h-full"
        />
        <div className="flex flex-col justify-center px-6 py-16 md:px-16">
          <h2>Fólia, alebo mikrocement?</h2>
          <p className="mt-8">
            Fólia je rýchla a lacnejšia, mikrocement je monolit bez jediného zvaru a vydrží dlhšie. Z fotky to za vás
            nerozhodneme — závisí to od stavu konštrukcie, termínu a rozpočtu.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/"
              hash="kontakt"
              className="inline-block px-8 py-4 font-semibold"
              style={{ background: "var(--hlbka)", color: "var(--biela)", borderRadius: "2px", fontSize: "17px" }}
            >
              Nezáväzná obhliadka
            </Link>
            <Link
              to="/mikrocement"
              className="inline-block border px-8 py-4 font-semibold"
              style={{ borderColor: "var(--hlbka)", borderRadius: "2px", fontSize: "17px" }}
            >
              Porovnať s mikrocementom
            </Link>
          </div>
        </div>
      </section>

      <Paticka />
    </main>
  );
}
