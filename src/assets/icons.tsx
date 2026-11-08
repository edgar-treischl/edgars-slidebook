type IconProps = {
  className?: string;
};



export function SlideIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Presentation screen */}
      <rect x="3" y="3" width="18" height="13" rx="1.8" />

      {/* Slide content */}
      <path d="M7 7h6" />
      <path d="M7 10h3" />
      <path d="m14 13 2-2 2 2" />

      {/* Projector stand */}
      <path d="M12 16v4" />
      <path d="M8 21h8" />
    </svg>
  );
}
