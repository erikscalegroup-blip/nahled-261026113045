import { useRef, useState } from "react";

const OTAZKY = [
  {
    o: "Koľko stojí bazén s mikrocementom?",
    a: "Cena závisí od rozmerov, stavu konštrukcie a technológie. Samotný mikrocementový povrch sa účtuje za m² — orientačne 95 – 140 €/m². Kompletná realizácia od výkopu po napustenie sa pri bežnom rodinnom bazéne pohybuje od 14 900 €. Presné číslo dostanete v položkovej ponuke po obhliadke, nie po telefóne.",
  },
  {
    o: "Dá sa mikrocement použiť na starý bazén?",
    a: "Áno, to je jeho hlavná výhoda. Nanáša sa priamo na existujúcu konštrukciu — betón, obklad, staré laminátové vane. Nemusí sa búrať. Podmienkou je, že konštrukcia je stabilná a netečie. Ak je popraskaná, opraví sa najprv ona, až potom ide povrch.",
  },
  {
    o: "Aký je rozdiel v cene medzi mikrocementom a 3D fóliou?",
    a: "Fólia je lacnejšia a rýchlejšia. Rozdiel v cene je pri bežnom bazéne približne 30 %. Mikrocement stojí viac, pretože je to ručná práca v štyroch vrstvách a trvá dlhšie. Za tie peniaze dostanete povrch bez jedinej škáry a bez zvarov.",
  },
  {
    o: "Ako dlho trvá celá realizácia?",
    a: "Samotný mikrocementový povrch trvá 10 až 14 dní vrátane zrenia a penetrácie. Fólia sa osadí za 2 až 4 dni. Ak sa robí bazén od výkopu, počítajte so 6 až 9 týždňami podľa počasia a technológie.",
  },
  {
    o: "Aká je záruka a čo pokrýva?",
    a: "Na povrch dávame 10 rokov, na technológiu platí záruka výrobcu. Záruka pokrýva praskliny, odlupovanie a nedostatky v prevedení. Nepokrýva mechanické poškodenie a zanedbanú chémiu vody — hodnoty pH vám odovzdáme písomne pri preberaní.",
  },
  {
    o: "Robíte aj technológiu — filtráciu, kúrenie, osvetlenie?",
    a: "Áno. Filtráciu, protiprúd, tepelné čerpadlo, osvetlenie aj zakrytie riešime ako súčasť dodávky. Nemusíte koordinovať troch dodávateľov. Ak už technológiu máte, napojíme sa na ňu.",
  },
  {
    o: "Pôsobíte po celom Slovensku?",
    a: "Áno, pracujeme po celej SR. Obhliadka je zdarma bez ohľadu na vzdialenosť. Pri realizáciách nad 120 km sa v ponuke objaví položka za dopravu — vždy viditeľne, nikdy skryto v cene za m².",
  },
];

function Polozka({ o, a }: { o: string; a: string }) {
  const [otvorene, setOtvorene] = useState(false);
  const telo = useRef<HTMLDivElement | null>(null);

  return (
    <div className="border-t" style={{ borderColor: "var(--cement)" }}>
      <button
        type="button"
        onClick={() => setOtvorene((s) => !s)}
        aria-expanded={otvorene}
        className="flex w-full items-center justify-between gap-8 py-7 text-left"
      >
        <span className="font-semibold" style={{ fontSize: "19px" }}>
          {o}
        </span>
        <span aria-hidden="true" className={`plus ${otvorene ? "otvoreny" : ""}`} />
      </button>
      <div
        ref={telo}
        style={{
          maxHeight: otvorene ? `${telo.current?.scrollHeight ?? 600}px` : "0px",
          transition: "max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease",
          opacity: otvorene ? 1 : 0,
          overflow: "hidden",
        }}
      >
        <p className="pb-8" style={{ color: "var(--cement-tmavy)" }}>
          {a}
        </p>
      </div>
    </div>
  );
}

export function Otazky() {
  return (
    <div className="border-b" style={{ borderColor: "var(--cement)" }}>
      {OTAZKY.map((p) => (
        <Polozka key={p.o} {...p} />
      ))}
    </div>
  );
}
