"use client";

import { motion } from "framer-motion";
import { Layers, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "E-Commerce Intelligence",
    desc: "Analytics suite for e-commerce: customer lifetime value, churn prediction, inventory optimization.",
    tags: ["SQL", "Python", "Power BI"],
    complexity: "Advanced",
  },
  {
    title: "Supply Chain Digital Twin",
    desc: "Simulating disruptions and optimizing logistics using statistical modeling and real-time data.",
    tags: ["Python", "Statistics", "Simulations"],
    complexity: "Expert",
  },
  {
    title: "Financial Market Sentiment",
    desc: "Analyzing social and news sentiment to predict stock market movements using NLP.",
    tags: ["Python", "NLP", "APIs"],
    complexity: "Intermediate",
  },
  {
    title: "Healthcare Patient Outcomes",
    desc: "Clinical data analysis to identify risk factors and improve recovery rates.",
    tags: ["R", "Statistics", "Healthcare"],
    complexity: "Advanced",
  },
];

export default function BuildRoom() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="mb-12"
      >
        <h1 className="text-4xl font-bold tracking-tight mb-3">Build Room</h1>
        <p className="text-lg text-muted-foreground">
          Capstone projects demonstrating studio-grade analytics.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="group glass-card p-6 rounded-xl flex flex-col"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-md bg-secondary text-[10px] font-medium tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="text-xs text-muted-foreground">
                {project.complexity}
              </span>
            </div>
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="text-muted-foreground text-sm leading-relaxed flex-grow mb-5">
              {project.desc}
            </p>

            <div className="flex items-center justify-between pt-4 border-t border-border/40">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center">
                  <Layers className="w-4 h-4" />
                </div>
                <span className="text-xs text-muted-foreground">Documentation</span>
              </div>
              <Link
                href="/lab"
                className="w-9 h-9 rounded-lg bg-foreground text-background flex items-center justify-center transition-all duration-200 hover:opacity-90 active:scale-95"
              >
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
