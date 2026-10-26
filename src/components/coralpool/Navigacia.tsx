import { Link } from "@tanstack/react-router";

const ODKAZY = [
  { to: "/mikrocement", text: "Mikrocement" },
  { to: "/3d-folia", text: "3D fólia" },
  { to: "/realizacie", text: "Realizácie" },
] as const;

/**
 * Horná navigácia. Na hero je svetlá (na fotke), na podstránkach tmavá.
 */
export function Navigacia({ svetla = false }: { svetla?: boolean }) {
  const farba = svetla ? "var(--piesok)" : "var(--hlbka)";
  return (
    <nav className="flex flex-wrap items-center justify-between gap-6" style={{ color: farba }}>
      <Link to="/" style={{ fontFamily: "var(--font-nadpis)", fontSize: "22px", fontWeight: 500 }}>
        coralpool
      </Link>
      <div className="mono flex flex-wrap items-center gap-6 md:gap-8">
        {ODKAZY.map((o) => (
          <Link
            key={o.to}
            to={o.to}
            className="border-b border-transparent pb-1 transition-colors"
            activeProps={{ style: { borderBottomColor: "currentColor" } }}
          >
            {o.text}
          </Link>
        ))}
        <Link to="/" hash="kontakt" className="border-b pb-1" style={{ borderColor: "currentColor" }}>
          Kontakt
        </Link>
      </div>
    </nav>
  );
}

/**
 * Spoločná pätička podstránok.
 */
export function Paticka() {
  return (
    <footer
      className="mono flex flex-col gap-4 border-t px-6 py-10 sm:flex-row sm:items-center sm:justify-between md:px-12"
      style={{ borderColor: "var(--cement)", color: "var(--cement-tmavy)" }}
    >
      <span>© 2026 Coralpool</span>
      <span className="flex flex-wrap gap-8">
        <Link to="/ochrana-osobnych-udajov">Ochrana osobných údajov</Link>
        <Link to="/cookies">Cookies</Link>
        <a href="tel:+421908721723">+421 908 721 723</a>
      </span>
    </footer>
  );
}
