import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/ochrana-osobnych-udajov")({
  head: () => ({
    meta: [
      { title: "Ochrana osobných údajov — Coralpool" },
      { name: "description", content: "Informácie o spracúvaní osobných údajov spoločnosti Coralpool." },
      { property: "og:title", content: "Ochrana osobných údajov — Coralpool" },
      { property: "og:description", content: "Informácie o spracúvaní osobných údajov spoločnosti Coralpool." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Stranka,
});

function Stranka() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-32">
      <h1 style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>Ochrana osobných údajov</h1>
      <p className="mt-8" style={{ color: "var(--cement-tmavy)" }}>
        Tieto stránky používame len na základnú prevádzku a anonymnú štatistiku návštevnosti. Vaše údaje z kontaktného formulára používame výhradne na spracovanie cenovej ponuky a neposkytujeme ich tretím stranám. Kontakt: coralpool@coralpool.sk
      </p>
      <Link to="/" className="mono mt-10 inline-block underline underline-offset-4">
        Späť na úvod
      </Link>
    </main>
  );
}
