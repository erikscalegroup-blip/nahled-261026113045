/**
 * Päť hviezdičiek z čistého SVG — bez ikonových knižníc, v palete.
 */
export function Hviezdy({
  pocet = 5,
  farba = "var(--voda)",
  velkost = 18,
}: {
  pocet?: number;
  farba?: string;
  velkost?: number;
}) {
  return (
    <span className="inline-flex items-center gap-1" role="img" aria-label={`Hodnotenie ${pocet} z 5`}>
      {[0, 1, 2, 3, 4].map((i) => (
        <svg
          key={i}
          width={velkost}
          height={velkost}
          viewBox="0 0 24 24"
          aria-hidden="true"
          style={{ display: "block" }}
        >
          <path
            d="M12 2.5l2.9 6.2 6.6.9-4.8 4.7 1.2 6.7L12 17.8 6.1 21l1.2-6.7-4.8-4.7 6.6-.9z"
            fill={i < pocet ? farba : "transparent"}
            stroke={farba}
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
        </svg>
      ))}
    </span>
  );
}
