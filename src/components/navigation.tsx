"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const leftItems = [
  { name: "The Line", href: "/line" },
  { name: "The Lab", href: "/lab" },
  { name: "Commons", href: "/commons" },
];

const rightItems = [
  { name: "Manifesto", href: "/manifesto" },
  { name: "Stack", href: "/stack" },
  { name: "Connect", href: "/connect" },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#fdfcfb]/80 backdrop-blur-md border-b border-[#e8e4df]">
      <div className="container-wide h-20 flex items-center justify-between">
        {/* Left Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {leftItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-black/60",
                pathname === item.href ? "text-black" : "text-muted-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Logo */}
        <Link href="/" className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight">@the.queryguy</span>
        </Link>

        {/* Right Nav */}
        <div className="flex items-center gap-8">
          <nav className="hidden lg:flex items-center gap-8">
            {rightItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-black/60",
                  pathname === item.href ? "text-black" : "text-muted-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          
          <Link
            href="/line"
            className="group flex items-center gap-2 px-5 py-2.5 bg-black text-white rounded-full font-semibold text-xs transition-all hover:opacity-90 active:scale-95"
          >
            Get started
            <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </header>
  );
}
