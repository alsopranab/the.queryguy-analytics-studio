"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Code2, Terminal, ArrowUpRight } from "lucide-react";

const connections = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/alsopranab", icon: Linkedin },
  { name: "GitHub", href: "https://github.com/alsopranab", icon: Github },
  { name: "LeetCode", href: "https://leetcode.com/u/alsopranab/", icon: Code2 },
  { name: "HackerRank", href: "https://www.hackerrank.com/profile/alsopranab", icon: Terminal },
];

export default function ConnectPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="mb-12"
      >
        <h1 className="text-4xl font-bold tracking-tight mb-3">Connect</h1>
        <p className="text-lg text-muted-foreground">
          Collaborate, contribute, or just say hello.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-3"
        >
          {connections.map((conn, i) => (
            <motion.a
              key={conn.name}
              href={conn.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.05 }}
              className="flex items-center justify-between p-4 rounded-xl glass-card group"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center transition-colors duration-200 group-hover:bg-foreground group-hover:text-background">
                  <conn.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium">{conn.name}</h3>
                  <p className="text-xs text-muted-foreground">Follow the journey</p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="glass-card p-6 rounded-xl"
        >
          <h2 className="text-xl font-semibold mb-6">Direct Query</h2>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-muted-foreground">Name</label>
              <input 
                type="text" 
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:outline-none focus:ring-2 focus:ring-foreground/10 transition-all text-sm"
                placeholder="Your name"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-muted-foreground">Email</label>
              <input 
                type="email" 
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:outline-none focus:ring-2 focus:ring-foreground/10 transition-all text-sm"
                placeholder="your@email.com"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-muted-foreground">Message</label>
              <textarea 
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:outline-none focus:ring-2 focus:ring-foreground/10 transition-all resize-none text-sm"
                placeholder="What's your query?"
              />
            </div>
            <button className="w-full py-3 bg-foreground text-background rounded-lg text-sm font-medium transition-all duration-200 hover:opacity-90 active:scale-[0.98]">
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
