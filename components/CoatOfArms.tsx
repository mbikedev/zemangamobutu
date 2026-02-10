export default function CoatOfArms({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 500"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Blason Mobutu Zemanga - Armoiries avec deux léopards, croix noire sur fond vert"
    >
      {/* Elephant tusks */}
      <path
        d="M80 420 Q60 300 100 180"
        fill="none"
        stroke="#f5f0dc"
        strokeWidth="12"
        strokeLinecap="round"
      />
      <path
        d="M320 420 Q340 300 300 180"
        fill="none"
        stroke="#f5f0dc"
        strokeWidth="12"
        strokeLinecap="round"
      />

      {/* Crossed spears behind shield */}
      <line x1="120" y1="80" x2="280" y2="400" stroke="#8b7355" strokeWidth="5" />
      <line x1="280" y1="80" x2="120" y2="400" stroke="#8b7355" strokeWidth="5" />
      {/* Spear tips */}
      <polygon points="115,75 125,75 120,55" fill="#c0c0c0" />
      <polygon points="275,75 285,75 280,55" fill="#c0c0c0" />

      {/* Shield outline */}
      <path
        d="M130 130 L270 130 L270 300 Q270 370 200 400 Q130 370 130 300 Z"
        fill="#1a5f2a"
        stroke="#d4a017"
        strokeWidth="4"
      />

      {/* Black cross on shield */}
      <rect x="185" y="130" width="30" height="270" fill="#1a1a1a" rx="2" />
      <rect x="130" y="200" width="140" height="30" fill="#1a1a1a" rx="2" />

      {/* Left leopard */}
      <g transform="translate(105, 240) scale(0.6)">
        <ellipse cx="50" cy="30" rx="35" ry="20" fill="#d4a017" />
        <circle cx="20" cy="20" r="15" fill="#d4a017" />
        <circle cx="14" cy="16" r="3" fill="#1a1a1a" />
        <ellipse cx="20" cy="26" rx="5" ry="3" fill="#1a1a1a" />
        {/* spots */}
        <circle cx="40" cy="25" r="3" fill="#8b6914" />
        <circle cx="55" cy="22" r="3" fill="#8b6914" />
        <circle cx="65" cy="30" r="3" fill="#8b6914" />
        <circle cx="45" cy="35" r="3" fill="#8b6914" />
        {/* tail */}
        <path d="M85 30 Q100 10 95 40" fill="none" stroke="#d4a017" strokeWidth="4" strokeLinecap="round" />
        {/* legs */}
        <line x1="30" y1="45" x2="25" y2="65" stroke="#d4a017" strokeWidth="5" strokeLinecap="round" />
        <line x1="65" y1="45" x2="70" y2="65" stroke="#d4a017" strokeWidth="5" strokeLinecap="round" />
      </g>

      {/* Right leopard (mirrored) */}
      <g transform="translate(295, 240) scale(-0.6, 0.6)">
        <ellipse cx="50" cy="30" rx="35" ry="20" fill="#d4a017" />
        <circle cx="20" cy="20" r="15" fill="#d4a017" />
        <circle cx="14" cy="16" r="3" fill="#1a1a1a" />
        <ellipse cx="20" cy="26" rx="5" ry="3" fill="#1a1a1a" />
        <circle cx="40" cy="25" r="3" fill="#8b6914" />
        <circle cx="55" cy="22" r="3" fill="#8b6914" />
        <circle cx="65" cy="30" r="3" fill="#8b6914" />
        <circle cx="45" cy="35" r="3" fill="#8b6914" />
        <path d="M85 30 Q100 10 95 40" fill="none" stroke="#d4a017" strokeWidth="4" strokeLinecap="round" />
        <line x1="30" y1="45" x2="25" y2="65" stroke="#d4a017" strokeWidth="5" strokeLinecap="round" />
        <line x1="65" y1="45" x2="70" y2="65" stroke="#d4a017" strokeWidth="5" strokeLinecap="round" />
      </g>

      {/* Palm leaves */}
      <path
        d="M100 420 Q130 350 140 300"
        fill="none"
        stroke="#2d8a4e"
        strokeWidth="3"
      />
      <path
        d="M95 415 Q120 360 125 320"
        fill="none"
        stroke="#2d8a4e"
        strokeWidth="2"
      />
      <path
        d="M300 420 Q270 350 260 300"
        fill="none"
        stroke="#2d8a4e"
        strokeWidth="3"
      />
      <path
        d="M305 415 Q280 360 275 320"
        fill="none"
        stroke="#2d8a4e"
        strokeWidth="2"
      />

      {/* Ribbon/Banner at bottom */}
      <path
        d="M110 430 Q200 410 290 430 Q200 450 110 430"
        fill="#d4a017"
        stroke="#b8860b"
        strokeWidth="1"
      />
      <text
        x="200"
        y="437"
        textAnchor="middle"
        fill="#1a1a1a"
        fontSize="11"
        fontFamily="serif"
        fontStyle="italic"
      >
        Ad majoribus dei auxilio
      </text>

      {/* Crown/helmet at top */}
      <path
        d="M170 130 Q200 100 230 130"
        fill="#d4a017"
        stroke="#b8860b"
        strokeWidth="2"
      />
      <rect x="180" y="115" width="40" height="15" fill="#d4a017" rx="3" />
      <circle cx="190" cy="112" r="4" fill="#d4a017" />
      <circle cx="200" cy="108" r="5" fill="#d4a017" />
      <circle cx="210" cy="112" r="4" fill="#d4a017" />
    </svg>
  );
}
