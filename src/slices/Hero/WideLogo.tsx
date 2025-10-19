"use client";

import Image from "next/image";import clsx from "clsx";
import { useIsSafari } from "@/lib/useIsSafari";

interface LogoProps {
  className?: string;
}

export function WideLogo({ className }: LogoProps) {
  const isSafari = useIsSafari(true);

  return (
    <div
      className={clsx(
        className,
        isSafari ? undefined : "animate-squiggle",
        "flex items-center justify-center"
      )}
    >
      <Image
        src="/logoback.svg"
        alt="Kickflip Skateboards Logo"
        width={1000}
        height={400}
        className="opacity-50 w-full h-auto object-contain"
        priority
      />
    </div>
  );
}
