import React from "react";

export const SidebarIcon = ({
  src,
  size = 24,
  className = ""
}: {
  src: string;
  size?: number;
  className?: string;
}) => {
  return (
    <span
      className={`inline-block bg-current transition-all duration-200 ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        maskImage: `url(${src})`,
        WebkitMaskImage: `url(${src})`,
        maskSize: "contain",
        WebkitMaskSize: "contain",
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat"
      }}
    />
  );
};

export const ChevronDownIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);
