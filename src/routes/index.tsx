import { createFileRoute, Link } from "@tanstack/react-router";

import { Hladina, FotkaSHladinou } from "@/components/coralpool/Hladina";
import { Navigacia } from "@/components/coralpool/Navigacia";
import { Hviezdy } from "@/components/coralpool/Hviezdy";
import { Otazky } from "@/components/coralpool/Otazky";
import { Formular } from "@/components/coralpool/Formular";
import { useOdhalenie, usePostup, usePocitadlo } from "@/components/coralpool/pouzit";

import hero from "@/assets/hero-bazen.jpg";
import makro from "@/assets/makro-mikrocement.jpg";
import techMikrocement from "@/assets/tech-mikrocement.jpg";
import techFolia from "@/assets/tech-folia.jpg";
import g1 from "@/assets/galeria-1.jpg";
import g2 from "@/assets/galeria-2.jpg";
import g3 from "@/assets/galeria-3.jpg";
import g4 from "@/assets/galeria-4.jpg";
import g5 from "@/assets/galeria-5.jpg";
import g6 from "@/assets/galeria-6.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Coralpool — bazény s mikrocementovým povrchom a 3D fóliou" },
      {
        name: "description",
        content:
          "Realizácia bazénov s bezškárovým mikrocementovým povrchom a 3D fóliou. Obhliadka a cenová ponuka zdarma. Pôsobíme po celom Slovensku.",
      },
      { property: "og:title", content: "Coralpool — bazény s mikrocementovým povrchom a 3D fóliou" },
      {
        property: "og:description",
        content:
          "Bazén bez jedinej škáry. Mikrocement a 3D fólia, realizácia od výkopu po prvé napustenie. Obhliadka zdarma.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Nadpis({ riadky, className = "" }: { riadky: string[]; className?: string }) {
  return (
    <>
      {riadky.map((r, i) => (
        <span key={r} className={`riadok ${className}`}>
          <span style={{ transitionDelay: `${i * 90}ms` }}>{r}</span>
        </span>
      ))}
    </>
  );
}

function Hero() {
  return (
    <header className="relative h-[100svh] w-full overflow-hidden">
      <FotkaSHladinou
        src={hero}
        alt="Záhradný bazén s hladkým bezškárovým mikrocementovým povrchom v neskorom popoludňajšom svetle"
        className="absolute inset-0 h-full w-full"
        eager
        width={1920}
        height={1280}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, color-mix(in oklab, var(--hlbka) 88%, transparent) 0%, color-mix(in oklab, var(--hlbka) 55%, transparent) 38%, transparent 72%)",
        }}
      />
      <div className="relative z-20 flex h-full flex-col justify-between px-6 py-8 md:px-12 md:py-10">
        <Navigacia svetla />


        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl" style={{ color: "var(--piesok)" }}>
            <h1 className="je-vidno">
              <Nadpis riadky={["Bazén bez", "jedinej škáry."]} />
            </h1>
            <p className="mt-7" style={{ fontSize: "19px" }}>
              Mikrocement a 3D fólia. Realizácia od výkopu po prvé napustenie.
            </p>
            <a
              href="#kontakt"
              className="cta mt-9 inline-block px-8 py-4 font-semibold"
              style={{
                background: "var(--hlbka)",
                color: "var(--biela)",
                borderRadius: "2px",
                fontSize: "17px",
              }}
            >
              Nezáväzná obhliadka
            </a>
          </div>
          <span className="mono flex items-center gap-3" style={{ color: "var(--piesok)" }}>
            <span className="plavat" aria-hidden="true">↓</span>
            Coralpool · Slovensko
          </span>
        </div>
      </div>
    </header>
  );
}

const DOVERA: { cislo: string; ciel?: number; pripona?: string; jednotka: string; popis: string }[] = [
  { cislo: "12", ciel: 12, jednotka: "rokov", popis: "na trhu" },
  { cislo: "180+", ciel: 180, pripona: "+", jednotka: "realizácií", popis: "dokončených bazénov" },
  { cislo: "10", ciel: 10, jednotka: "rokov", popis: "záruka na povrch" },
  { cislo: "Celá SR", jednotka: "", popis: "pôsobnosť" },
];

function Cislo({ ciel, pripona = "", text }: { ciel?: number | undefined; pripona?: string | undefined; text: string }) {
  const { ref, hodnota } = usePocitadlo(ciel ?? 0);
  if (ciel === undefined) return <span>{text}</span>;
  return (
    <span ref={ref}>
      {hodnota}
      {pripona}
    </span>
  );
}

function PasDovery() {
  const ref = useOdhalenie(0.3);
  return (
    <section ref={ref} className="px-6 py-16 md:px-12 md:py-20">
      <div className="grid grid-cols-2 md:grid-cols-4">
        {DOVERA.map((d, i) => (
          <div
            key={d.popis}
            className={`tichy py-6 ${i % 2 === 1 ? "border-l pl-6" : "pr-4"} ${i > 0 ? "md:border-l md:pl-8" : "md:pl-0"} md:pr-4`}
            style={{ borderColor: "var(--cement)", transitionDelay: `${i * 80}ms` }}
          >
            <div
              style={{
                fontFamily: "var(--font-cislo)",
                fontSize: "clamp(20px, 3.2vw, 40px)",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
              }}
            >
              <Cislo ciel={d.ciel} pripona={d.pripona} text={d.cislo} />
            </div>
            {d.jednotka ? (
              <div className="mono mt-2" style={{ color: "var(--cement-tmavy)" }}>
                {d.jednotka}
              </div>
            ) : null}
            <div className="mt-3" style={{ color: "var(--cement-tmavy)", fontSize: "17px" }}>
              {d.popis}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const SLOVA = [
  "Mikrocement",
  "3D fólia",
  "Bez škár",
  "Obhliadka zdarma",
  "Položková ponuka",
  "10 rokov záruka",
  "Celá SR",
];

function BeziacyPas() {
  return (
    <div
      aria-hidden="true"
      className="overflow-hidden border-y py-4"
      style={{ borderColor: "var(--cement)", background: "var(--hlbka)", color: "var(--piesok)" }}
    >
      <div className="beh">
        {[0, 1].map((k) => (
          <div key={k} className="flex shrink-0">
            {SLOVA.map((w) => (
              <span key={k + w} className="mono flex items-center gap-8 px-8">
                {w}
                <span style={{ color: "var(--voda)" }}>◆</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function PrecoMikrocement() {
  const ref = useOdhalenie(0.15);
  return (
    <section
      ref={ref}
      className="sekcia px-6 md:px-12"
      style={{ background: "linear-gradient(to bottom, var(--piesok), var(--cement))" }}
    >
      <div className="grid items-start gap-14 md:grid-cols-2 md:gap-20">
        <div>
          <h2>
            <Nadpis riadky={["Obklad praská.", "Škáry černejú.", "Fólia sa krčí."]} />
          </h2>
          <div className="mt-10 grid gap-6" style={{ color: "var(--hlbka)" }}>
            <p className="tichy" style={{ transitionDelay: "80ms" }}>
              Mikrocement nie je obklad. Je to liata hmota, ktorú nanášame v štyroch vrstvách priamo na konštrukciu
              bazéna. Celková hrúbka sú tri milimetre. Nikde nie je spoj, nikde škára, nikde silikón, ktorý za dve
              sezóny sčernie.
            </p>
            <p className="tichy" style={{ transitionDelay: "160ms" }}>
              Špina sa nemá kde držať. Steny sa umývajú kefou, nie chemickým odstraňovačom plesní. Povrch je uzavretý
              polyuretánovou penetráciou, takže voda ani chlór do hmoty nevojdú.
            </p>
            <p className="tichy" style={{ transitionDelay: "240ms" }}>
              Keď sa niečo poškodí, opravuje sa len to miesto. Nebúra sa stena, nehľadá sa dlaždica z tej istej várky.
              Prebrúsi sa, doplní sa vrstva, prejde sa penetráciou. Za deň je to hotové.
            </p>
            <p className="tichy" style={{ transitionDelay: "320ms" }}>
              Robíme to na nových bazénoch aj na starých, ktoré si majitelia už chceli dať zasypať. Konštrukcia
              zostáva, mení sa len to, čoho sa dotknete.
            </p>
          </div>
        </div>
        <FotkaSHladinou
          src={makro}
          alt="Detail mikrocementového povrchu pod vodou s jemnou štruktúrou a prelivom šedých a piesočných odtieňov"
          className="fotka-obal relative aspect-[4/5] w-full"
          width={1280}
          height={1600}
        />
      </div>
    </section>
  );
}

function Pas({
  fotka,
  alt,
  nadpis,
  odstavce,
  technicke,
  fotkaVpravo,
  sirka,
  vyska,
}: {
  fotka: string;
  alt: string;
  nadpis: string;
  odstavce: string[];
  technicke: string;
  fotkaVpravo?: boolean;
  sirka: number;
  vyska: number;
}) {
  const ref = useOdhalenie(0.12);
  return (
    <div ref={ref} className="grid md:min-h-[70vh] md:grid-cols-2">
      <FotkaSHladinou
        src={fotka}
        alt={alt}
        width={sirka}
        height={vyska}
        className={`fotka-obal relative h-[58vw] w-full md:h-full ${fotkaVpravo ? "md:order-2" : ""}`}
      />
      <div className="flex flex-col justify-center px-6 py-16 md:px-16 md:py-24">
        <h2>
          <Nadpis riadky={[nadpis]} />
        </h2>
        <div className="mt-8 grid gap-5">
          {odstavce.map((o, i) => (
            <p key={o} className="tichy" style={{ transitionDelay: `${100 + i * 80}ms` }}>
              {o}
            </p>
          ))}
        </div>
        <div className="mono tichy mt-10" style={{ color: "var(--cement-tmavy)", transitionDelay: "340ms" }}>
          {technicke}
        </div>
      </div>
    </div>
  );
}

function DveTechnologie() {
  const ref = useOdhalenie(0.2);
  return (
    <section style={{ background: "var(--cement)" }}>
      <Pas
        fotka={techMikrocement}
        alt="Bazén s hladkým šedým mikrocementovým povrchom pri pohľade zhora"
        nadpis="Mikrocement"
        sirka={1280}
        vyska={1280}
        odstavce={[
          "Bezškárový liaty povrch na nové aj rekonštruované bazény. Nanáša sa ručne, hladidlom, v štyroch vrstvách s medzibrúsením. Hodí sa všade, kde konštrukcia drží a netečie — betón, tvárnice aj starý obklad.",
          "Životnosť pri bežnej údržbe je desiatky rokov. Odtieň sa mieša podľa vzorkovníka a keďže sa nanáša ručne, každý bazén vyzerá trochu inak. To nie je chyba, to je ten povrch.",
        ]}
        technicke="Hrúbka 3 mm · 8 odtieňov · realizácia 10–14 dní"
      />
      <div style={{ height: "1px", background: "var(--cement-tmavy)", opacity: 0.35 }} />
      <Pas
        fotka={techFolia}
        alt="Bazén s jemným kamenným dekorom 3D fólie a čistou vodou pri bočnom pohľade"
        nadpis="3D fólia"
        fotkaVpravo
        sirka={1280}
        vyska={1280}
        odstavce={[
          "Tlačená fólia s priestorovým dekorom. Rýchlejšia a lacnejšia cesta k tomu istému cieľu — čistý bazén bez obkladu. Zvárame ju na mieste, presne podľa tvaru vane.",
          "Výber dekorov je veľký, od kameňa po hladké odtiene. Dobre sa hodí na rekonštrukciu starého bazéna, kde treba hotovo za pár dní a nie za dva týždne.",
        ]}
        technicke="Hrúbka 1,5 mm · dekory na výber · realizácia 2–4 dni"
      />
      <div ref={ref} className="px-6 pb-20 md:px-16 md:pb-28">
        <p className="tichy" style={{ fontFamily: "var(--font-nadpis)", fontSize: "clamp(20px, 2.4vw, 28px)", lineHeight: 1.35 }}>
          Nevieme za vás rozhodnúť z fotky. Na obhliadke vám povieme, čo dáva zmysel pre váš bazén a rozpočet.
        </p>
        <div className="mono tichy mt-8 flex flex-wrap gap-8" style={{ transitionDelay: "120ms" }}>
          <Link to="/mikrocement" className="border-b pb-1" style={{ borderColor: "currentColor" }}>
            Viac o mikrocemente
          </Link>
          <Link to="/3d-folia" className="border-b pb-1" style={{ borderColor: "currentColor" }}>
            Viac o 3D fólii
          </Link>
        </div>
      </div>
    </section>
  );
}

const GALERIA = [
  { src: g1, alt: "Obdĺžnikový záhradný bazén s bezškárovým povrchom vo večernom svetle", popis: "Nitra · Mikrocement · 2025", trieda: "md:col-span-2 md:row-span-3", w: 1600, h: 1000 },
  { src: g2, alt: "Detail okraja bazéna s hladkým mikrocementovým povrchom", popis: "Senec · Mikrocement · 2025", trieda: "md:row-span-3", w: 1000, h: 1200 },
  { src: g3, alt: "Dvorový bazén s tmavým bezškárovým povrchom", popis: "Trnava · Mikrocement · 2024", trieda: "md:row-span-3", w: 1000, h: 1200 },
  { src: g4, alt: "Rekonštruovaný záhradný bazén s novou 3D fóliou", popis: "Banská Bystrica · 3D fólia · 2024", trieda: "md:row-span-2", w: 1200, h: 900 },
  { src: g5, alt: "Úzky plavecký bazén s piesočným okrajom a čistou vodou", popis: "Piešťany · Mikrocement · 2024", trieda: "md:col-span-2 md:row-span-2", w: 1200, h: 900 },
  { src: g6, alt: "Roh bazéna za súmraku s podvodným osvetlením a šedým povrchom", popis: "Košice · 3D fólia · 2023", trieda: "md:row-span-2", w: 1200, h: 912 },
];

function Realizacie() {
  const ref = useOdhalenie(0.08);
  return (
    <section ref={ref} className="sekcia px-6 md:px-12">
      <h2>
        <Nadpis riadky={["Naše bazény"]} />
      </h2>
      <div
        className="mt-12 grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-4"
        style={{ gridAutoRows: "160px" }}
      >
        {GALERIA.map((f, i) => (
          <figure
            key={f.alt}
            className={`fotka-obal group relative h-[62vw] sm:h-[38vw] md:h-auto ${f.trieda}`}
            style={{ transitionDelay: `${i * 70}ms` }}
          >
            <img
              src={f.src}
              alt={f.alt}
              width={f.w}
              height={f.h}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.04]"
            />
            <figcaption
              className="mono absolute inset-x-0 bottom-0 translate-y-full px-4 py-3 transition-transform duration-[600ms] ease-out group-hover:translate-y-0"
              style={{ background: "var(--hlbka)", color: "var(--piesok)" }}
            >
              {f.popis}
            </figcaption>
          </figure>
        ))}
      </div>
      <Link
        to="/realizacie"
        className="odkaz mono tichy mt-10 inline-block"
        style={{ borderColor: "currentColor", transitionDelay: "300ms" }}
      >
        Všetky realizácie
      </Link>
    </section>
  );
}

const KROKY = [
  ["01", "Obhliadka", "Prídeme, zmeriame, poradíme. Zdarma a nezáväzne."],
  ["02", "Cenová ponuka", "Do 5 dní, položkovito, bez skrytých položiek."],
  ["03", "Príprava", "Výkop, konštrukcia, izolácia, technológia."],
  ["04", "Povrch", "Mikrocement alebo fólia. Toto je časť, na ktorej záleží."],
  ["05", "Odovzdanie", "Napustenie, zaškolenie, záručný list."],
];

function AkoToPrebieha() {
  const { ref, postup } = usePostup<HTMLElement>();
  const odhalenie = useOdhalenie(0.1);

  return (
    <section
      ref={(el: HTMLElement | null) => {
        ref.current = el;
        odhalenie.current = el as HTMLDivElement | null;
      }}
      className="sekcia px-6 md:px-12"
    >
      <h2>
        <Nadpis riadky={["Ako to prebieha"]} />
      </h2>

      <div className="relative mt-16">
        <div
          aria-hidden="true"
          className="absolute left-[14px] top-0 h-full w-px md:left-0 md:top-[30px] md:h-px md:w-full"
          style={{ background: "var(--cement)", opacity: 0.6 }}
        />
        <div
          aria-hidden="true"
          className="absolute left-[14px] top-0 w-px md:hidden"
          style={{
            background: "var(--cement-tmavy)",
            height: `${postup * 100}%`,
            transition: "height 0.2s linear",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute left-0 top-[30px] hidden h-px md:block"
          style={{ background: "var(--cement-tmavy)", width: `${postup * 100}%`, transition: "width 0.2s linear" }}
        />

        <ol className="grid gap-12 pl-12 md:grid-cols-5 md:gap-8 md:pl-0 md:pt-16">
          {KROKY.map(([cislo, titul, text], i) => (
            <li key={cislo} className="tichy md:pr-6" style={{ transitionDelay: `${i * 90}ms` }}>
              <div style={{ fontFamily: "var(--font-cislo)", fontSize: "40px", color: "var(--cement)", lineHeight: 1 }}>
                {cislo}
              </div>
              <h3 className="mt-5" style={{ fontFamily: "var(--font-text)", fontWeight: 600, fontSize: "19px" }}>
                {titul}
              </h3>
              <p className="mt-2" style={{ color: "var(--cement-tmavy)", fontSize: "17px" }}>
                {text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

const REFERENCIE = [
  {
    hviezdy: 5,
    meno: "Martin Bahna",
    lokalita: "Nitra",
    praca: "Mikrocement · 2025",
    citat: "Povrch je naozaj bez jedinej škáry. Chalani prišli na obhliadku, dali položkovú ponuku a termín dodržali do dňa.",
  },
  {
    hviezdy: 5,
    meno: "Lucia Ondrejková",
    lokalita: "Senec",
    praca: "3D fólia · 2024",
    citat: "Starý bazén nám tridsať rokov tiekol. Za štyri dni bol ako nový a voda konečne drží.",
  },
  {
    hviezdy: 4,
    meno: "Peter Královič",
    lokalita: "Trnava",
    praca: "Rekonštrukcia · 2024",
    citat: "Odovzdali nám aj písomné hodnoty pH a vysvetlili údržbu. Po roku na povrchu nevidno nič.",
  },
];


function Referencie() {
  const ref = useOdhalenie(0.12);
  return (
    <section ref={ref} className="sekcia px-6 md:px-12">
      <div className="flex flex-wrap items-end justify-between gap-8">
        <h2 className="max-w-3xl">
          <Nadpis riadky={["Čo hovoria ľudia,", "ktorým sme bazén postavili"]} />
        </h2>
        <div className="tichy" style={{ transitionDelay: "120ms" }}>
          <Hviezdy velkost={22} />
          <div className="mono mt-3" style={{ color: "var(--cement-tmavy)" }}>
            <span className="iskra">47 hodnotení · priemer 4,9 / 5</span>
          </div>
        </div>
      </div>

      <div className="mt-14 grid gap-x-10 md:grid-cols-3 md:gap-x-12">
        {REFERENCIE.map((r, i) => (
          <blockquote
            key={i}
            className="tichy border-t py-10"
            style={{ borderColor: "var(--cement)", transitionDelay: `${i * 100}ms` }}
          >
            <Hviezdy pocet={r.hviezdy} />
            <p
              className="mt-6"
              style={{ fontFamily: "var(--font-nadpis)", fontWeight: 400, fontSize: "24px", lineHeight: 1.35 }}
            >
              „{r.citat}“
            </p>
            <footer className="mono mt-6" style={{ color: "var(--cement-tmavy)" }}>
              — {r.meno}, {r.lokalita}
              <br />
              {r.praca}
            </footer>
          </blockquote>
        ))}
      </div>

      <p className="mono tichy mt-10" style={{ color: "var(--cement-tmavy)", transitionDelay: "340ms" }}>
        Radi vás spojíme s majiteľmi, ktorým sme bazén robili — uvidíte hotovú prácu naživo.
      </p>
    </section>
  );
}

function CasteOtazky() {
  const ref = useOdhalenie(0.1);
  return (
    <section ref={ref} className="sekcia px-6 md:px-12">
      <h2>
        <Nadpis riadky={["Časté otázky"]} />
      </h2>
      <div className="mt-12 max-w-4xl">
        <Otazky />
      </div>
    </section>
  );
}

function Kontakt() {
  const ref = useOdhalenie(0.1);
  return (
    <section
      id="kontakt"
      ref={ref}
      className="sekcia px-6 md:px-12"
      style={{ background: "var(--hlbka)", color: "var(--piesok)" }}
    >
      <div className="grid gap-16 md:grid-cols-2 md:gap-24">
        <div>
          <h2>
            <Nadpis riadky={["Prídeme sa pozrieť."]} />
          </h2>
          <p className="tichy mt-8" style={{ color: "var(--cement)", transitionDelay: "120ms" }}>
            Obhliadka aj cenová ponuka sú zdarma a nezáväzné. Prídeme, pozrieme sa na pozemok alebo na starý bazén a
            povieme, čo sa dá spraviť a za koľko.
          </p>
          <address className="mt-12 grid gap-2 not-italic" style={{ fontSize: "17px" }}>
            <span>Dalibor Kiss</span>
            <a href="tel:+421908721723" className="odkaz">
              +421 908 721 723
            </a>
            <a href="mailto:daliborkiss33@gmail.com" className="odkaz">
              daliborkiss33@gmail.com
            </a>
          </address>
        </div>
        <div className="tichy" style={{ transitionDelay: "160ms" }}>
          <Formular />
        </div>
      </div>

      <div
        className="mono mt-24 flex flex-col gap-4 border-t pt-8 sm:flex-row sm:items-center sm:justify-between"
        style={{ borderColor: "color-mix(in oklab, var(--piesok) 25%, transparent)", color: "var(--cement)" }}
      >
        <span>© 2026 Coralpool</span>
        <span className="flex gap-8">
          <Link to="/ochrana-osobnych-udajov" className="odkaz">Ochrana osobných údajov</Link>
          <Link to="/cookies" className="odkaz">Cookies</Link>
        </span>
      </div>
    </section>
  );
}

function Index() {
  return (
    <>
      <Hladina />
      <main>
        <Hero />
        <PasDovery />
        <BeziacyPas />
        <PrecoMikrocement />
        <DveTechnologie />
        <Realizacie />
        <AkoToPrebieha />
        <Referencie />
        <CasteOtazky />
        <Kontakt />
      </main>
    </>
  );
}
