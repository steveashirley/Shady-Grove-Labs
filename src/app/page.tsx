export default function Home() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: "2rem",
        textAlign: "center",
        gap: "2.5rem",
      }}
    >
      {/* Logo */}
      <svg
        width="280"
        height="120"
        viewBox="0 0 280 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Shady Grove Labs logo"
      >
        {/* Tree icon */}
        {/* Trunk */}
        <rect x="56" y="68" width="8" height="20" rx="2" fill="#2d6a4f" />
        {/* Canopy layers */}
        <ellipse cx="60" cy="52" rx="22" ry="18" fill="#40916c" />
        <ellipse cx="50" cy="58" rx="16" ry="14" fill="#52b788" />
        <ellipse cx="70" cy="58" rx="16" ry="14" fill="#52b788" />
        <ellipse cx="60" cy="46" rx="16" ry="14" fill="#74c69d" />
        {/* Small accent leaves */}
        <circle cx="48" cy="44" r="4" fill="#95d5b2" />
        <circle cx="72" cy="42" r="3.5" fill="#95d5b2" />
        <circle cx="60" cy="36" r="3" fill="#b7e4c7" />

        {/* Company name */}
        <text
          x="150"
          y="52"
          fontFamily="'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
          fontWeight="600"
          fontSize="20"
          fill="#1a1a2e"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          SHADY GROVE
        </text>
        <text
          x="150"
          y="76"
          fontFamily="'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
          fontWeight="300"
          fontSize="14"
          fill="#2d6a4f"
          textAnchor="middle"
          dominantBaseline="middle"
          letterSpacing="4"
        >
          LABS
        </text>
      </svg>

      {/* Coming soon */}
      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        <h1
          style={{
            fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
            fontWeight: 300,
            letterSpacing: "0.08em",
            color: "var(--color-text)",
          }}
        >
          Coming Soon
        </h1>
        <div
          style={{
            width: "40px",
            height: "2px",
            backgroundColor: "var(--color-accent)",
            margin: "0 auto",
            borderRadius: "1px",
          }}
        />
      </div>
    </main>
  );
}
