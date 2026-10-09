export const SOURCES = {
  datareportal: {
    n: 1,
    cite: "DataReportal (2025). Digital 2025: Global Overview Report.",
    href: "https://datareportal.com/reports/digital-2025-global-overview-report",
  },
  castelo: {
    n: 2,
    cite: "Castelo, Kushlev, Ward, Esterman & Reiner (2025). Blocking mobile internet on smartphones improves sustained attention, mental health, and subjective well-being. PNAS Nexus.",
    href: "https://doi.org/10.1093/pnasnexus/pgaf017",
  },
  ward: {
    n: 3,
    cite: "Ward, Duke, Gneezy & Bos (2017). Brain Drain: The Mere Presence of One's Own Smartphone Reduces Available Cognitive Capacity. Journal of the Association for Consumer Research.",
    href: "https://doi.org/10.1086/691462",
  },
  gruning: {
    n: 4,
    cite: "Grüning, Riedel & Lorenz-Spreen (2023). Directing smartphone use through the self-nudge app one sec. PNAS.",
    href: "https://doi.org/10.1073/pnas.2213114120",
  },
  hunt: {
    n: 5,
    cite: "Hunt, Marx, Lipson & Young (2018). No More FOMO: Limiting Social Media Decreases Loneliness and Depression. Journal of Social and Clinical Psychology.",
    href: "https://doi.org/10.1521/jscp.2018.37.10.751",
  },
} as const;

export type SourceKey = keyof typeof SOURCES;

export function Ref({ s }: { s: SourceKey }) {
  return (
    <a
      href="#sources"
      aria-label={`Source ${SOURCES[s].n}`}
      className="ml-0.5 align-super font-mono text-[0.6em] text-faint no-underline transition-colors hover:text-sage"
    >
      [{SOURCES[s].n}]
    </a>
  );
}
