"use client";

import Link from "next/link";
import { Github, Linkedin, Code2, Terminal, Instagram, Twitter, Mail } from "lucide-react";

const footerLinks = [
  {
    title: "Platform",
    links: [
      { name: "The Line", href: "/line" },
      { name: "The Lab", href: "/lab" },
      { name: "Commons", href: "/commons" },
      { name: "Build Room", href: "/build-room" },
    ],
  },
  {
    title: "Studio",
    links: [
      { name: "Manifesto", href: "/manifesto" },
      { name: "Stack", href: "/stack" },
      { name: "Connect", href: "/connect" },
    ],
  },
  {
    title: "Social",
    links: [
      { name: "Instagram", href: "https://instagram.com/the.queryguy" },
      { name: "LinkedIn", href: "https://www.linkedin.com/in/alsopranab" },
      { name: "GitHub", href: "https://github.com/alsopranab" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-[#f4f1ee] border-t border-[#e8e4df] pt-24 pb-12">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-24">
          <div className="lg:col-span-2">
            <Link href="/" className="text-2xl font-bold tracking-tight mb-6 block">
              @the.queryguy
            </Link>
            <p className="text-muted-foreground max-w-sm mb-8 leading-relaxed">
              A high-precision analytics ecosystem powered by GitHub. 
              Open-source, studio-grade knowledge for the modern analyst.
            </p>
            <div className="flex gap-4">
              {[Instagram, Github, Linkedin, Mail].map((Icon, i) => (
                <Link
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full border border-border/60 flex items-center justify-center text-muted-foreground hover:text-black hover:border-black transition-all"
                >
                  <Icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>
          
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h4 className="font-bold text-sm uppercase tracking-widest mb-6">{column.title}</h4>
              <ul className="space-y-4">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-black transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} The Query Guy Studio. Built for the open source community.
          </p>
          <div className="flex gap-8 text-xs text-muted-foreground">
            <Link href="#" className="hover:text-black transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-black transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
