import { useEffect, useRef } from "react";

/**
 * Zrnitosť mikrocementu cez celú stránku.
 */
export function Hladina() {
  return (
    <>
      <svg
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-40 h-full w-full"
        style={{ opacity: 0.035, mixBlendMode: "multiply" }}
      >
        <filter id="zrno">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#zrno)" />
      </svg>
    </>
  );
}

/**
 * Fotka, ktorej časť pod linkou hladiny dostane vodný filter a jemné zvlnenie.
 * Dve prekryté kópie, spodná orezaná cez clip-path podľa scroll pozície.
 */
export function FotkaSHladinou({
  src,
  alt,
  className = "",
  imgClassName = "",
  eager = false,
  width,
  height,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  eager?: boolean;
  width?: number;
  height?: number;
}) {
  const obal = useRef<HTMLDivElement | null>(null);
  const spodok = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const o = obal.current;
    const s = spodok.current;
    if (!o || !s) return;

    let raf = 0;
    const kresli = () => {
      raf = 0;
      const r = o.getBoundingClientRect();
      if (r.bottom < -200 || r.top > window.innerHeight + 200) return;
      const hladina = window.innerHeight * 0.62;
      const odhora = Math.min(Math.max(hladina - r.top, 0), r.height);
      s.style.clipPath = `inset(${odhora.toFixed(1)}px 0 0 0)`;
      s.style.transform = `translateY(${(Math.sin(window.scrollY / 160) * 1.5).toFixed(2)}px) scaleY(1.004)`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(kresli);
    };
    kresli();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={obal} className={`overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={eager ? "eager" : "lazy"}
        className={`h-full w-full object-cover ${imgClassName}`}
      />
      <div ref={spodok} aria-hidden="true" className="pod-hladinou absolute inset-0">
        <img src={src} alt="" aria-hidden="true" className={`h-full w-full object-cover ${imgClassName}`} />
      </div>
    </div>
  );
}
