import React from "react";

// 🧩 Define props type — inherits all <img> attributes (including className)
interface LogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

export default function Logo({ className = "", ...props }: LogoProps) {
  return (
    <img
      src="/logo.svg"
      alt="Kickflip Skateboards"
      className={`select-none ${className}`}
      draggable={false}
      {...props}
    />
  );
}
