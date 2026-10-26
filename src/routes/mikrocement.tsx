import { createFileRoute, Link } from "@tanstack/react-router";

import { Navigacia, Paticka } from "@/components/coralpool/Navigacia";
import { useOdhalenie } from "@/components/coralpool/pouzit";
import makro from "@/assets/makro-mikrocement.jpg";
import tech from "@/assets/tech-mikrocement.jpg";

export const Route = createFileRoute("/mikrocement")({
  head: () => ({
    meta: [
      { title: "Mikrocement na bazén — bezškárový povrch | Coralpool" },
      {
        name: "description",
        content:
          "Mikrocement na nové aj rekonštruované bazény: štyri vrstvy, 3 mm, žiadne škáry. Postup, údrŦba a životnosť povrchu.",
      },
      { property: "og:title", content: "Mikrocement na bazén — bezškárový povrch | Coralpool" },
      {
        property: "og:description",
        content: "Liaty bezškárový povrch bazéna. Ako sa nanáša, ako sa udržiava a koľko vydrží.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Mikrocement,
});

const VRSTVY = [
  ["01", "Príprava podkladu", "Prebrúsenie, spevnenie a penetrácia. Bez pevného podkladu nemá zmysel pokračovať."],
  ["02", "Základné vrstvy", "Dve vrstvy s armovacou sieťkou v rohoch a na prechodoch. Medzibrúsenie po každej."],
  ["03", "Pohľadové vrstvy", "Dve tenké vrstvy hladidlom. Tu vzniká kresba, ktorá bude vidieť pod vodou."],
  ["04", "Uzavretie", "Dvojzložková polyuretánová penetrácia v troch náteroch. Voda ani chlór sa do hmoty nedostanú."],
];

function Mikrocement() {
  const ref = useOdhalenie(0.1);
  return (
    <main>
      <div className="px-6 py-8 md:px-12 md:py-10">
        <Navigacia />
      </div>

      <section ref={ref} className="px-6 pb-16 md:px-12">
        <h1 className="max-w-4xl">Mikrocement</h1>
        <p className="tichy mt-8" style={{ fontSize: "21px" }}>
          Tri milimetre hmoty, ktoré nahradia obklad, škáry aj silikón. Nanáša sa ručne priamo na konštrukciu bazéna —
          na nový betón, na tvárnice aj na starý obklad, ktorý drží.
        </p>
        <div className="mono tichy mt-8" style={{ color: "var(--cement-tmavy)", transitionDelay: "120ms" }}>
          Hrúbka 3 mm · 8 odtieňov · realizácia 10–14 dní · záruka 10 rokov
        </div>
      </section>

      <img
        src={tech}
        alt="Bazén s hladkým šedým mikrocementovým povrchom pri pohľade zhora"
        width={1280}
        height={1280}
        loading="lazy"
        className="h-[52vw] w-full object-cover md:h-[62vh]"
      />

      <section className="sekcia px-6 md:px-12">
        <h2>Ako to robíme</h2>
        <ol className="mt-12 grid gap-10 md:grid-cols-2 md:gap-14">
          {VRSTVY.map(([c, t, p]) => (
            <li key={c} className="border-t pt-6" style={{ borderColor: "var(--cement)" }}>
              <div className="mono" style={{ color: "var(--cement-tmavy)" }}>{c}</div>
              <h3 className="mt-4" style={{ fontFamily: "var(--font-text)", fontWeight: 600, fontSize: "19px" }}>
                {t}
              </h3>
              <p className="mt-2" style={{ color: "var(--cement-tmavy)", fontSize: "17px" }}>
                {p}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section className="grid md:grid-cols-2">
        <img
          src={makro}
          alt="Detail mikrocementového povrchu pod vodou"
          width={1280}
          height={1600}
          loading="lazy"
          className="h-[70vw] w-full object-cover md:h-full"
        />
        <div className="flex flex-col justify-center px-6 py-16 md:px-16">
          <h2>ÚdrŦba</h2>
          <p className="mt-8">
            Steny sa umývajú kefou a bežnou vodou. Špina sa nemá kde drŦať, pretože nie sú škáry. Chlór v bežnej
            koncentrácii povrchu neprekáža, tvrdú chémiu na plesne nepotrebujete.
          </p>
          <p className="mt-5">
            Ak sa niečo poškodí, opravuje sa len to miesto — prebrúsi sa, doplní vrstva, prejde penetráciou. Za deň je
            to hotové a nehľadá sa dlaždica z tej istej várky.
          </p>
          <Link
            to="/"
            hash="kontakt"
            className="mt-10 inline-block self-start px-8 py-4 font-semibold"
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
