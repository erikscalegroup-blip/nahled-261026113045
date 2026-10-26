import { useEffect, useRef, useState } from "react";

/** Pridá triedu „je-vidno" keď prvok vojde do viewportu. */
export function useOdhalenie<T extends HTMLElement = HTMLDivElement>(prah = 0.18) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (zaznamy) => {
        zaznamy.forEach((z) => {
          if (z.isIntersecting) {
            z.target.classList.add("je-vidno");
            io.unobserve(z.target);
          }
        });
      },
      { threshold: prah, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [prah]);

  return ref;
}

/** Pozícia scrollu 0–1 pre daný prvok (na vykresľovanie linky časovej osi). */
export function usePostup<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);
  const [postup, setPostup] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const prepocitaj = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = (vh * 0.85 - r.top) / Math.max(r.height * 0.8, 1);
      setPostup(Math.min(1, Math.max(0, p)));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(prepocitaj);
    };
    prepocitaj();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return { ref, postup };
}

/** Odpočítava číslo nahor, keď prvok vojde do viewportu. */
export function usePocitadlo(ciel: number, trvanie = 1400) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [hodnota, setHodnota] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setHodnota(ciel);
      return;
    }
    let raf = 0;
    const io = new IntersectionObserver(
      (z) => {
        if (!z[0]?.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const krok = (t: number) => {
          const p = Math.min(1, (t - start) / trvanie);
          const e = 1 - Math.pow(1 - p, 3);
          setHodnota(Math.round(ciel * e));
          if (p < 1) raf = requestAnimationFrame(krok);
        };
        raf = requestAnimationFrame(krok);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [ciel, trvanie]);

  return { ref, hodnota };
}
