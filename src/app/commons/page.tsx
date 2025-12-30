"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, AppWindow, BookOpen, Database, FileSpreadsheet, BarChart3, Code, Brain, Sparkles, Globe, Youtube, GraduationCap, Newspaper } from "lucide-react";
import Link from "next/link";

const usefulApps = [
  {
    name: "DB Fiddle",
    desc: "Online SQL playground to test queries across PostgreSQL, MySQL, and SQLite.",
    url: "https://www.db-fiddle.com/",
    icon: Database,
    category: "SQL",
  },
  {
    name: "Mode Analytics",
    desc: "Collaborative SQL editor with built-in visualization and reporting.",
    url: "https://mode.com/",
    icon: BarChart3,
    category: "Analytics",
  },
  {
    name: "Google Colab",
    desc: "Free Jupyter notebooks in the cloud with GPU support for Python.",
    url: "https://colab.research.google.com/",
    icon: Code,
    category: "Python",
  },
  {
    name: "Airtable",
    desc: "Spreadsheet-database hybrid for organizing and tracking data projects.",
    url: "https://airtable.com/",
    icon: FileSpreadsheet,
    category: "Productivity",
  },
  {
    name: "Notion",
    desc: "All-in-one workspace for notes, docs, and project management.",
    url: "https://notion.so/",
    icon: AppWindow,
    category: "Productivity",
  },
  {
    name: "Tableau Public",
    desc: "Free data visualization platform to create and share interactive dashboards.",
    url: "https://public.tableau.com/",
    icon: BarChart3,
    category: "Visualization",
  },
  {
    name: "Kaggle",
    desc: "Datasets, notebooks, and competitions for data science practice.",
    url: "https://kaggle.com/",
    icon: Brain,
    category: "Data Science",
  },
  {
    name: "ChatGPT",
    desc: "AI assistant for debugging code, explaining concepts, and generating queries.",
    url: "https://chat.openai.com/",
    icon: Sparkles,
    category: "AI",
  },
];

const usefulResources = [
  {
    name: "W3Schools SQL",
    desc: "Beginner-friendly SQL tutorials with interactive examples.",
    url: "https://www.w3schools.com/sql/",
    icon: GraduationCap,
    category: "Tutorial",
  },
  {
    name: "SQLZoo",
    desc: "Interactive SQL exercises to practice queries step by step.",
    url: "https://sqlzoo.net/",
    icon: Database,
    category: "Practice",
  },
  {
    name: "Real Python",
    desc: "In-depth Python tutorials focused on practical applications.",
    url: "https://realpython.com/",
    icon: Code,
    category: "Tutorial",
  },
  {
    name: "Towards Data Science",
    desc: "Medium publication with articles on analytics, ML, and data engineering.",
    url: "https://towardsdatascience.com/",
    icon: Newspaper,
    category: "Blog",
  },
  {
    name: "StatQuest (YouTube)",
    desc: "Josh Starmer's channel explaining statistics with clarity and humor.",
    url: "https://www.youtube.com/@statquest",
    icon: Youtube,
    category: "Video",
  },
  {
    name: "Alex The Analyst",
    desc: "YouTube channel with practical SQL, Excel, and Power BI tutorials.",
    url: "https://www.youtube.com/@AlexTheAnalyst",
    icon: Youtube,
    category: "Video",
  },
  {
    name: "Microsoft Learn",
    desc: "Official Power BI and Excel learning paths from Microsoft.",
    url: "https://learn.microsoft.com/",
    icon: Globe,
    category: "Official Docs",
  },
  {
    name: "DAX Guide",
    desc: "Comprehensive reference for all DAX functions in Power BI.",
    url: "https://dax.guide/",
    icon: BookOpen,
    category: "Reference",
  },
];

export default function CommonsPage() {
  return (
    <div className="container-wide section-padding">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="mb-12"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground mb-4 block">
          Community Resources
        </span>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-none">Commons</h1>
        <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
          A curated collection of the best tools and learning resources for data analysts. 
          Everything you need to level up your skills.
        </p>
      </motion.div>

      {/* Sections Layout */}
      <div className="space-y-24">
        {/* Apps Section */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center">
              <AppWindow className="w-5 h-5" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight">Useful Apps</h2>
          </div>

          <div className="mb-8 p-4 rounded-xl bg-[#e8e4df]/50 border border-border/50">
            <p className="text-sm text-muted-foreground">
              <strong>Free & Freemium Tools</strong> — These apps have free tiers perfect for learning and personal projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {usefulApps.map((app, i) => (
              <motion.div
                key={app.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  href={app.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block h-full glass-card p-6 rounded-2xl"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center transition-colors group-hover:bg-black group-hover:text-white">
                      <app.icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold text-muted-foreground px-2 py-1 rounded-md bg-secondary">
                      {app.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:underline flex items-center gap-2">
                    {app.name}
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {app.desc}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Resources Section */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center">
              <BookOpen className="w-5 h-5" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight">Learning Resources</h2>
          </div>

          <div className="mb-8 p-4 rounded-xl bg-[#d1c7bc]/30 border border-border/50">
            <p className="text-sm text-muted-foreground">
              <strong>Handpicked Learning Materials</strong> — From tutorials to YouTube channels, these resources will accelerate your learning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {usefulResources.map((resource, i) => (
              <motion.div
                key={resource.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block h-full glass-card p-6 rounded-2xl"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#f4f1ee] flex items-center justify-center transition-colors group-hover:bg-black group-hover:text-white">
                      <resource.icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold text-muted-foreground px-2 py-1 rounded-md bg-[#f4f1ee]">
                      {resource.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:underline flex items-center gap-2">
                    {resource.name}
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {resource.desc}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* Suggestion CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-20 p-8 md:p-12 rounded-[2rem] bg-[#1c1c1a] text-white text-center"
      >
        <h3 className="text-2xl md:text-3xl font-bold mb-4">Know a great resource?</h3>
        <p className="text-white/60 mb-6 max-w-md mx-auto">
          Help the community by suggesting tools and learning materials that have helped you.
        </p>
        <Link
          href="/connect"
          className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-bold text-sm hover:bg-white/90 transition-colors"
        >
          Suggest a Resource
        </Link>
      </motion.div>
    </div>
  );
}
