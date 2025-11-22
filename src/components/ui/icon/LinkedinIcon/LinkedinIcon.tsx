interface LinkedinIconProps {
  className?: string;
}

export default function LinkedinIcon({ className }: LinkedinIconProps) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.28 8.08h4.44V24H.28V8.08zM8.68 8.08h4.26v2.17h.06c.59-1.12 2.02-2.3 4.16-2.3 4.45 0 5.27 2.93 5.27 6.74V24h-4.43v-7.65c0-1.82-.03-4.16-2.54-4.16-2.54 0-2.93 1.98-2.93 4.03V24H8.68V8.08z" />
    </svg>
  );
}
