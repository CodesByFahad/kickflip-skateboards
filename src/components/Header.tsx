import Link from "next/link";
import React from "react";
import { ButtonLink } from "./ButtonLink";
import Logo from "./Logo";
import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";

export async function Header() {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return (
    <header className="header absolute left-0 right-0 top-0 z-50 bg-transparent px-6 py-0">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between">
        {/* ✅ Left: Logo */}
        <Link href="/" className="flex items-center">
          <Logo className="text-brand-purple h-20 md:h-24 lg:h-40 w-auto transition-transform duration-300 hover:scale-105" />
        </Link>

        {/* ✅ Center: Navigation */}
        <nav aria-label="Main" className="hidden md:flex flex-1 justify-center">
          <ul className="flex flex-wrap items-center gap-8">
            {settings.data.navigation.map((item) => (
              <li key={item.link.text}>
                <PrismicNextLink
                  field={item.link}
                  className="text-lg text-brand-purple font-medium"
                />
              </li>
            ))}
          </ul>
        </nav>

        {/* ✅ Right: Cart / Buttons */}
        <div className="flex items-center justify-end">
          <ButtonLink href="" icon="cart" color="purple" aria-label="Cart (1)">
            <span className="md:hidden">1</span>
            <span className="hidden md:inline">Cart (1)</span>
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
