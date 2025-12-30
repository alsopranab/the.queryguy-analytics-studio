"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Database, FileSpreadsheet, Code, BarChart3, Calculator, Layers, Lightbulb, ArrowRight } from "lucide-react";
import Link from "next/link";

const pathway = [
  {
    name: "Foundations",
    desc: "Understanding the data landscape and analytical mindset.",
    icon: Lightbulb,
    topics: ["What is Data Analytics?", "Types of Data", "The Analytics Workflow", "Critical Thinking for Analysts"],
    labPath: "foundations",
  },
  {
    name: "SQL",
    desc: "The language of data. Querying, joining, and aggregating.",
    icon: Database,
    topics: ["SELECT Statements", "JOINs & Relationships", "Aggregations & GROUP BY", "Window Functions", "CTEs & Subqueries"],
    labPath: "sql",
  },
  {
    name: "Excel",
    desc: "The essential tool for rapid analysis and modeling.",
    icon: FileSpreadsheet,
    topics: ["Formulas & Functions", "Pivot Tables", "Data Cleaning", "Charts & Visualization", "Power Query"],
    labPath: "excel",
  },
  {
    name: "Python",
    desc: "Automating workflows and advanced data manipulation.",
    icon: Code,
    topics: ["Pandas Fundamentals", "Data Wrangling", "NumPy Operations", "Matplotlib & Seaborn", "Automation Scripts"],
    labPath: "python",
  },
  {
    name: "Statistics",
    desc: "The science of inference and probability in data.",
    icon: Calculator,
    topics: ["Descriptive Statistics", "Probability Distributions", "Hypothesis Testing", "Correlation & Regression", "Statistical Significance"],
    labPath: "statistics",
  },
  {
    name: "Power BI",
    desc: "Visual storytelling and dashboard architecture.",
    icon: BarChart3,
    topics: ["Data Modeling", "DAX Fundamentals", "Visualizations", "Dashboard Design", "Publishing & Sharing"],
    labPath: "power-bi",
  },
  {
    name: "Capstones",
    desc: "End-to-end projects demonstrating studio-grade work.",
    icon: Layers,
    topics: ["E-Commerce Analysis", "Financial Dashboard", "Customer Segmentation", "Predictive Modeling"],
    labPath: "capstones",
  },
];

export default function TheLine() {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <div className="container-wide section-padding">
      <div className="max-w-3xl mb-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground mb-4 block">
            Learning Pathway
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-none">
            The Line
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            A recommended analytics flow from zero to studio-ready. 
            No locks. No barriers. Full freedom to explore.
          </p>
        </motion.div>
      </div>

      <div className="relative max-w-4xl">
        <div className="absolute left-[27px] top-0 bottom-0 w-px bg-gradient-to-b from-border via-border to-transparent" />

        <div className="space-y-6">
          {pathway.map((step, i) => {
            const isExpanded = expanded === i;
            const Icon = step.icon;

            return (
              <div key={step.name} className="relative pl-16 md:pl-20">
                {/* Node */}
                <motion.div 
                  initial={false}
                  animate={{ 
                    scale: isExpanded ? 1.2 : 1,
                    backgroundColor: isExpanded ? "var(--foreground)" : "var(--background)",
                    borderColor: isExpanded ? "var(--foreground)" : "var(--border)"
                  }}
                  className="absolute left-[20px] top-7 w-4 h-4 rounded-full border-2 z-10 shadow-sm"
                />

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card rounded-[2rem] overflow-hidden"
                >
                  <button
                    onClick={() => setExpanded(isExpanded ? null : i)}
                    className="w-full p-6 md:p-8 flex items-center gap-6 text-left transition-colors hover:bg-secondary/30"
                  >
                    <div className={`shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                      isExpanded ? "bg-foreground text-background scale-110 rotate-3" : "bg-secondary text-foreground"
                    }`}>
                      <Icon className="w-6 h-6 md:w-8 md:h-8" />
                    </div>
                    <div className="flex-grow min-w-0">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-[10px] font-bold text-muted-foreground/60 tracking-widest uppercase">
                          Step {String(i + 1).padStart(2, "0")}
                        </span>
                        <h2 className="text-xl md:text-2xl font-bold tracking-tight">{step.name}</h2>
                      </div>
                      <p className="text-sm md:text-base text-muted-foreground line-clamp-1">{step.desc}</p>
                    </div>
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="shrink-0 w-10 h-10 rounded-full border border-border/50 flex items-center justify-center bg-background/50"
                    >
                      <ChevronDown className="w-5 h-5 text-muted-foreground" />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-8 pb-8 pt-4 border-t border-border/50 bg-secondary/10">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                            <div>
                              <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground mb-4">
                                Core Topics
                              </h4>
                              <ul className="space-y-3">
                                {step.topics.map((topic, j) => (
                                  <motion.li
                                    key={topic}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 + j * 0.05 }}
                                    className="flex items-center gap-3 text-sm md:text-base font-medium"
                                  >
                                    <span className="w-1.5 h-1.5 rounded-full bg-foreground/20" />
                                    {topic}
                                  </motion.li>
                                ))}
                              </ul>
                            </div>
                            <div className="flex flex-col gap-6">
                              <div className="p-6 rounded-2xl bg-background/50 border border-border/50">
                                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                                  Access raw documentation, SQL scripts, and Python notebooks for this module in the Studio Lab.
                                </p>
                                <Link
                                  href={`/lab/${step.labPath}`}
                                  className="group inline-flex items-center gap-3 px-6 py-3 bg-foreground text-background text-sm font-bold rounded-full transition-all hover:opacity-90 active:scale-[0.98]"
                                >
                                  Enter {step.name} Lab
                                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
