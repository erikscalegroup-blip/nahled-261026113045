import { useState, type FormEvent } from "react";

export function Formular() {
  const [odoslane, setOdoslane] = useState(false);

  const odosli = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setOdoslane(true);
  };

  if (odoslane) {
    return (
      <div className="py-10">
        <p style={{ fontFamily: "var(--font-nadpis)", fontSize: "28px", lineHeight: 1.25 }}>
          Ďakujeme. Ozveme sa do 24 hodín.
        </p>
        <p className="mt-4" style={{ color: "var(--cement)" }}>
          Ak to súri, zavolajte rovno na{" "}
          <a href="tel:+421908721723" className="underline underline-offset-4">
            +421 908 721 723
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={odosli} className="grid gap-7">
      <div className="grid gap-7 sm:grid-cols-2">
        <label className="grid gap-2">
          <span className="mono" style={{ color: "var(--cement)" }}>
            Meno
          </span>
          <input required name="meno" className="pole" autoComplete="name" />
        </label>
        <label className="grid gap-2">
          <span className="mono" style={{ color: "var(--cement)" }}>
            Telefón
          </span>
          <input required name="telefon" type="tel" className="pole" autoComplete="tel" />
        </label>
        <label className="grid gap-2">
          <span className="mono" style={{ color: "var(--cement)" }}>
            E-mail
          </span>
          <input name="email" type="email" className="pole" autoComplete="email" />
        </label>
        <label className="grid gap-2">
          <span className="mono" style={{ color: "var(--cement)" }}>
            Obec
          </span>
          <input name="obec" className="pole" autoComplete="address-level2" />
        </label>
      </div>
      <label className="grid gap-2">
        <span className="mono" style={{ color: "var(--cement)" }}>
          Správa
        </span>
        <textarea name="sprava" rows={3} className="pole resize-none" />
      </label>
      <div>
        <button
          type="submit"
          className="px-8 py-4 font-semibold"
          style={{
            background: "var(--voda)",
            color: "var(--biela)",
            borderRadius: "2px",
            fontSize: "17px",
          }}
        >
          Odoslať
        </button>
      </div>
    </form>
  );
}
