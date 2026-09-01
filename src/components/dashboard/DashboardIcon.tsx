import React from "react";

interface DashboardIconProps {
  src: string;
  size?: number;
  className?: string;
}

export default function DashboardIcon({ src, size = 16, className = "" }: DashboardIconProps) {
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
}
