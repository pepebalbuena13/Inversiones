export default function Logo({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="InvierteDesdeCero"
    >
      <rect width="32" height="32" rx="9" fill="#142c48" />
      <rect x="7" y="18" width="4" height="8" rx="1.4" fill="#5ecb99" />
      <rect x="14" y="13" width="4" height="13" rx="1.4" fill="#33ae7c" />
      <rect x="21" y="7" width="4" height="19" rx="1.4" fill="#1f9463" />
      <path
        d="M6 21L12.5 13L17.5 17L25 7"
        stroke="#e9f9f1"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.5 7H25V12.5"
        stroke="#e9f9f1"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
