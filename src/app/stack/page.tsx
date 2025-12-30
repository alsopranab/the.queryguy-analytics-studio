"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Bot, 
  Brain, 
  MessageSquare, 
  Sparkles, 
  ArrowRight, 
  ArrowUpRight,
  Terminal, 
  Code, 
  Zap, 
  Database,
  Cpu,
  ChevronRight,
  Quote,
  FileSpreadsheet,
  BarChart3,
  Layers,
  Search,
  CheckCircle2,
  BookOpen,
  Target,
  Command,
  Rocket,
  Eye
} from "lucide-react";

const tools = [
  {
    name: "SQL Mastery",
    desc: "Senior Data Analyst perspective on query thinking and optimization.",
    icon: Database,
    category: "SQL",
    color: "from-blue-500/10 to-blue-500/5",
    accent: "text-blue-500",
    prompt: "You are a senior Data Analyst and SQL interviewer. Teach SQL from beginner to advanced level using real-world business problems. Focus on query thinking, optimization, and interview readiness. Avoid theory-heavy explanations. Use examples, edge cases, and performance tips.",
      learn: [
        "01_Basics: SELECT, WHERE, ORDER BY, LIMIT",
        "02_Joins: INNER, LEFT, RIGHT, FULL (Business Cases)",
        "03_Subqueries & CTEs for complex logic",
        "04_Window Functions (RANK, LEAD, LAG)",
        "05_CASE WHEN & Data Categorization",
        "06_Performance Tuning & Indexing",
        "07_Real World Business Queries",
        "08_SQL Interview Case Studies"
      ],
      practice: [
        "Scenario → Data Model → Query → Insight",
        "Optimizing slow business reports",
        "Solving real-world data bottlenecks"
      ],
      simulation: [
        "WITH monthly_sales AS (",
        "    SELECT customer_id, SUM(amount) as total",
        "    FROM sales",
        "    GROUP BY 1",
        ")",
        "SELECT c.name, s.total",
        "FROM customers c",
        "JOIN monthly_sales s ON c.id = s.customer_id",
        "WHERE s.total > 1000",
        "ORDER BY 2 DESC;"
      ]
  },
  {
    name: "Excel Analytics",
    desc: "Job-ready skills focused on dashboards, cleaning, and automation.",
    icon: FileSpreadsheet,
    category: "Spreadsheets",
    color: "from-emerald-500/10 to-emerald-500/5",
    accent: "text-emerald-500",
    prompt: "You are a business analyst teaching Excel for real-world analytics and reporting. Teach Excel assuming learners want job-ready skills, not just formulas. Focus on dashboards, data cleaning, and automation using Excel tools.",
      learn: [
        "01_Basics: Formulas, References, Data Types",
        "02_Formulas: Math & Statistical Logic",
        "03_Lookups: XLOOKUP, INDEX-MATCH Mastery",
        "04_Logical Functions: IF, IFS, COUNTIFS",
        "05_Date & Time: Handling Temporal Data",
        "06_Pivot Tables: Rapid Data Summarization",
        "07_Dashboards: Interactive Business Reporting",
        "08_Excel Interview Case Studies"
      ],
      practice: [
        "Raw data → Cleaned data → Interactive Dashboard",
        "Business scenarios (Sales, Finance, Operations)",
        "Building automated reporting pipelines"
      ],
    simulation: [
      "let",
      "  Source = Csv.Document(File.Contents(\"sales_data.csv\")),",
      "  Cleaned = Table.TransformColumnTypes(Source,{{\"Revenue\", type number}}),",
      "  Grouped = Table.Group(Cleaned, {\"Region\"}, {{\"Total\", each List.Sum([Revenue])}})",
      "in",
      "  Grouped"
    ]
  },
  {
    name: "Python for Data",
    desc: "Analytical problem solving using Pandas and NumPy automation.",
    icon: Code,
    category: "Automation",
    color: "from-amber-500/10 to-amber-500/5",
    accent: "text-amber-500",
    prompt: "You are a data analyst using Python for automation and analysis. Teach Python only from a data perspective, not general programming. Focus on solving analytical problems efficiently.",
      learn: [
        "01_Python Basics for Analysts",
        "02_Pandas Basics & DataFrames",
        "03_Data Cleaning & Preprocessing",
        "04_Exploratory Data Analysis (EDA)",
        "05_Data Analysis Case Studies",
        "06_Python Interview Questions",
        "Automating repetitive analysis tasks"
      ],
      practice: [
        "Business datasets (E-commerce, Finance)",
        "Step-by-step problem solving",
        "SQL → Python mindset transition"
      ],
      simulation: [
        "import pandas as pd",
        "df = pd.read_csv('business_data.csv')",
        "# Filter for high-value transactions",
        "high_val = df[df['amount'] > 500]",
        "# Group by category and sum revenue",
        "report = high_val.groupby('category')['revenue'].sum()",
        "print(report.sort_values(ascending=False))"
      ]
  },
  {
    name: "Power BI Pro",
    desc: "Insight-driven storytelling and complex DAX modeling.",
    icon: BarChart3,
    category: "Visualization",
    color: "from-purple-500/10 to-purple-500/5",
    accent: "text-purple-500",
    prompt: "You are a Power BI consultant building dashboards for executives. Teach Power BI with a focus on storytelling, modeling, and performance. Avoid decorative visuals—focus on insight-driven dashboards.",
    learn: [
      "Data modeling concepts",
      "Relationships & star schema",
      "DAX basics to advanced",
      "Measures vs calculated columns",
      "KPI & executive dashboards",
      "Performance optimization",
      "Real-world Power BI interview questions"
    ],
    practice: [
      "Business KPIs → Visual decisions",
      "Poor dashboard → Optimized dashboard",
      "Decision-focused reporting"
    ],
    simulation: [
      "Total Revenue = SUM(Sales[Amount])",
      "Previous Year Sales = CALCULATE([Total Revenue], SAMEPERIODLASTYEAR('Date'[Date]))",
      "YoY % = DIVIDE([Total Revenue] - [Previous Year Sales], [Previous Year Sales])",
      "Color KPI = IF([YoY %] > 0, \"#10b981\", \"#ef4444\")"
    ]
  },
  {
    name: "Capstone Projects",
    desc: "End-to-end business cases: Sales, Retention, and Marketing Funnels.",
    icon: Rocket,
    category: "Real-world",
    color: "from-indigo-500/10 to-indigo-500/5",
    accent: "text-indigo-500",
    prompt: "You are a Lead Data Analyst guiding a capstone project. Teach how to move from raw data to business recommendations. Focus on Sales Analytics, Customer Retention, and Marketing Funnel analysis.",
      learn: [
        "01_Sales Analytics: Revenue & Growth",
        "02_Customer Retention: Churn & LTV",
        "03_Marketing Funnel: Attribution & ROI",
        "Building Executive Summaries",
        "End-to-end Data Pipelines",
        "Stakeholder Presentation skills",
        "Actionable Insight generation"
      ],
      practice: [
        "Raw Data → Insights → Action",
        "Identifying Business Bottlenecks",
        "KPI Definition & Tracking"
      ],
      simulation: [
        "-- Monthly Sales Growth Simulation",
        "SELECT ",
        "  month,",
        "  revenue,",
        "  (revenue - LAG(revenue) OVER (ORDER BY month)) / ",
        "  LAG(revenue) OVER (ORDER BY month) * 100 as growth_pct",
        "FROM monthly_sales;"
      ]
  },
  {
    name: "Viz Fundamentals",
    desc: "The science of visual communication and dashboard psychology.",
    icon: Eye,
    category: "Visualization",
    color: "from-teal-500/10 to-teal-500/5",
    accent: "text-teal-500",
    prompt: "You are a Data Visualization Specialist. Teach the psychology of charts, aggregation logic, and storytelling. Focus on choosing the right chart for the right business question.",
      learn: [
        "01_Basics: Visual Encoding & Perception",
        "02_Charts: Choosing the Right Business Visuals",
        "03_Storytelling: Narrating Data Insights",
        "04_Dashboards: Information Hierarchy & UX",
        "05_Viz Interview Case Studies",
        "Aggregation Logic & Granularity",
        "Common Visual Pitfalls & Dark Patterns"
      ],
      practice: [
        "Bad Chart → Good Chart Critique",
        "Business Question → Chart Choice Matrix",
        "Simplifying Complex Multi-dimensional Data"
      ],
    simulation: [
      "# Visualization Logic Sandbox",
      "if business_question == 'trend_over_time':",
      "    render_line_chart(metric, dimension='Date')",
      "elif business_question == 'part_to_whole':",
      "    render_treemap(metric, dimension='Category')",
      "else:",
      "    render_bar_chart(metric, dimension='Region')"
    ]
  },
  {
    name: "Tableau Mastery",
    desc: "Visual analytics and storytelling with advanced LOD calculations.",
    icon: Sparkles,
    category: "Visualization",
    color: "from-cyan-500/10 to-cyan-500/5",
    accent: "text-cyan-500",
    prompt: "You are a Tableau Zen Master. Teach visual best practices, Level of Detail (LOD) expressions, and dashboard interactivity. Focus on performance optimization and user-centric design.",
    learn: [
      "Tableau Fundamentals & Data Types",
      "Discrete vs Continuous (Blue vs Green)",
      "Fixed, Include, and Exclude LODs",
      "Table Calculations & Rank/Window functions",
      "Parameters & Set Actions",
      "Dashboard Layout & Container best practices",
      "Performance Recording & Tuning"
    ],
    practice: [
      "Design Critique → Optimized Visual",
      "Complex Business Logic → LOD Solution",
      "Exploratory Data Analysis → Storyboard"
    ],
    simulation: [
      "// Calculate Regional Contribution",
      "{ FIXED [Region] : SUM([Sales]) } / ",
      "{ FIXED : SUM([Sales]) }",
      "// Rank within Category",
      "RANK_UNIQUE(SUM([Profit]), 'desc')"
    ]
  },
  {
    name: "Statistics & Math",
    desc: "The mathematical backbone of reliable data interpretation.",
    icon: Brain,
    category: "Science",
    color: "from-rose-500/10 to-rose-500/5",
    accent: "text-rose-500",
    prompt: "You are a lead data scientist teaching the statistics every analyst needs. Focus on hypothesis testing, probability distributions, and correlation vs causation in business contexts. No fluff, just practical application.",
      learn: [
        "Descriptive Stats (Mean, Median, Mode, Variance)",
        "Probability Basics & Distributions",
        "Hypothesis Testing & P-value Mastery",
        "Confidence Intervals & Sampling Bias",
        "A/B Testing: Setup to Significance",
        "Correlation vs Causation in Business",
        "Statistics & Math Interview Questions"
      ],
      practice: [
        "Metric Change → Statistical Significance",
        "Sample Size Calculation for Experiments",
        "Identifying Bias in Business Datasets"
      ],
      simulation: [
        "from scipy import stats",
        "group_a = [20, 22, 19, 24, 25]",
        "group_b = [28, 30, 27, 29, 31]",
        "t_stat, p_val = stats.ttest_ind(group_a, group_b)",
        "if p_val < 0.05:",
        "    print('Significant difference (p < 0.05)')",
        "else:",
        "    print('No significant difference')"
      ]
  },
  {
    name: "Cloud Data Stack",
    desc: "Modern data warehousing with Snowflake and BigQuery.",
    icon: Cpu,
    category: "Infrastructure",
    color: "from-indigo-500/10 to-indigo-500/5",
    accent: "text-indigo-500",
    prompt: "You are a Cloud Architect teaching the modern data stack. Focus on Snowflake/BigQuery architecture, cost management, and cloud-native SQL features like semi-structured data handling.",
    learn: [
      "Cloud DW Architecture basics",
      "Loading Data (COPY INTO, External Stages)",
      "Handling JSON & Semi-structured data",
      "Zero-copy Cloning & Time Travel",
      "Resource Monitoring & Cost Optimization",
      "Data Sharing & Security basics",
      "Materialized Views & Search Optimization"
    ],
    practice: [
      "Slow Query → Cluster Tuning",
      "JSON Blob → Flattened SQL View",
      "Governance Setup → Role-based Access Control"
    ],
    simulation: [
      "CREATE OR REPLACE TABLE sales_raw AS",
      "SELECT",
      "  src:id::string as id,",
      "  src:amount::float as amount",
      "FROM @raw_stage/sales.json (FILE_FORMAT => 'JSON_FORMAT');"
    ]
  },
  {
    name: "Data Engineering",
    desc: "Building robust pipelines with dbt and Airflow automation.",
    icon: Zap,
    category: "Engineering",
    color: "from-orange-500/10 to-orange-500/5",
    accent: "text-orange-500",
    prompt: "You are a Data Engineer teaching the dbt/Airflow workflow. Focus on modularity, testing, and version control for data transformations. Teach how to build pipelines that don't break.",
    learn: [
      "The ELT Philosophy (Extract, Load, Transform)",
      "dbt Models & Materializations",
      "Testing & Data Quality checks",
      "JinJa Templating in SQL",
      "Workflow Orchestration with Airflow",
      "CI/CD for Data Pipelines",
      "Documentation & Lineage"
    ],
    practice: [
      "Spaghetti SQL → Modular dbt Models",
      "No Tests → Comprehensive Data Validation",
      "Manual Script → Automated Airflow DAG"
    ],
    simulation: [
      "{{ config(materialized='table') }}",
      "with raw_orders as (",
      "  select * from {{ source('jaffle_shop', 'orders') }}",
      ")",
      "select status, count(*) from raw_orders group by 1"
    ]
  },
];


export default function StackPage() {
  const [selectedTool, setSelectedTool] = useState(tools[0]);
  const [selectedModules, setSelectedModules] = useState<string[]>([tools[0].name]);
  const [masteredTopics, setMasteredTopics] = useState<string[]>([]);
  const [isSimulating, setIsSimulating] = useState(false);
  const [simStep, setSimStep] = useState(0);
  const [viewMode, setViewMode] = useState<"single" | "consolidated">("single");

  const toggleModule = (name: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setSelectedModules(prev => 
      prev.includes(name) ? prev.filter(n => n !== name) : [...prev, name]
    );
  };

  const toggleTopic = (topic: string) => {
    setMasteredTopics(prev => 
      prev.includes(topic) ? prev.filter(t => t !== topic) : [...prev, topic]
    );
  };

  const simulateAction = () => {
    setIsSimulating(true);
    setSimStep(0);
    
    const interval = setInterval(() => {
      setSimStep(prev => {
        if (prev >= selectedTool.simulation.length - 1) {
          clearInterval(interval);
          setTimeout(() => setIsSimulating(false), 1000);
          return prev;
        }
        return prev + 1;
      });
    }, 400);
  };

  const selectedToolsList = tools.filter(t => selectedModules.includes(t.name));

  const copyConsolidatedPrompt = () => {
    const combined = selectedToolsList.map(t => `### ${t.name}\n${t.prompt}`).join("\n\n");
    navigator.clipboard.writeText(combined);
    // Optional: add toast notification
  };

  return (
    <div className="min-h-screen bg-[#fcfaf8] pt-24 pb-20 selection:bg-black selection:text-white">
      <div className="container-wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-black/5 rounded-full mb-6">
            <Layers className="w-3 h-3" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em]">The Learning Stack</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-8">
            Master the <br /> <span className="text-black/40 italic">Analytics Workflow</span>.
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed mx-auto lg:mx-0">
            A curated suite of modules designed to take you from data curious to data expert. 
            Built for the modern analyst who values <span className="text-black font-semibold">speed and clarity</span>.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Tool List */}
          <div className="lg:col-span-4 space-y-4 max-h-[1000px] overflow-y-auto pr-4 scrollbar-hide">
            <div className="flex items-center justify-between mb-4 px-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-black/40">Available Modules ({tools.length})</span>
              <button 
                onClick={() => setViewMode(prev => prev === "single" ? "consolidated" : "single")}
                className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border transition-all ${
                  viewMode === "consolidated" 
                    ? "bg-black text-white border-black" 
                    : "bg-transparent text-black border-black/10 hover:border-black"
                }`}
              >
                {viewMode === "consolidated" ? "Close Output" : "View Output"}
              </button>
            </div>
            {tools.map((tool, i) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                onClick={() => {
                  setSelectedTool(tool);
                  setSimStep(0);
                  setViewMode("single");
                }}
                className={`group p-6 rounded-[2rem] border transition-all duration-500 cursor-pointer relative ${
                  selectedTool.name === tool.name && viewMode === "single"
                    ? "bg-white border-black/10 shadow-2xl shadow-black/5" 
                    : "bg-transparent border-transparent hover:bg-white/50"
                }`}
              >
                {/* Selection Toggle */}
                <button
                  onClick={(e) => toggleModule(tool.name, e)}
                  className={`absolute top-6 right-6 w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-300 z-20 ${
                    selectedModules.includes(tool.name)
                      ? "bg-black border-black text-white"
                      : "bg-white border-black/10 text-transparent"
                  }`}
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-5">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tool.color} flex items-center justify-center ${tool.accent} shrink-0 shadow-inner`}>
                    <tool.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-grow pr-8">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-bold text-lg">{tool.name}</h3>
                    </div>
                    <p className="text-xs text-muted-foreground leading-snug">
                      {tool.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Interactive Playground */}
          <motion.div 
            layout
            className="lg:col-span-8"
          >
            <div className="sticky top-32">
              <div className="bg-[#0a0a09] text-white rounded-[3rem] p-8 md:p-12 shadow-2xl overflow-hidden min-h-[750px] flex flex-col relative border border-white/5">
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-[120px] -mr-64 -mt-64 pointer-events-none" />
                
                <AnimatePresence mode="wait">
                  {viewMode === "single" ? (
                    <motion.div
                      key="single-view"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                      className="flex flex-col h-full"
                    >
                      <div className="flex items-center justify-between mb-10 relative z-10">
                        <div className="flex items-center gap-5">
                          <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center ${selectedTool.accent} border border-white/10`}>
                            <selectedTool.icon className="w-6 h-6" />
                          </div>
                          <div>
                            <h2 className="text-xl font-bold">{selectedTool.name}</h2>
                            <div className="flex items-center gap-2">
                              <p className="text-[9px] uppercase tracking-[0.2em] text-white/30">Interactive Learning Module</p>
                              {selectedModules.includes(selectedTool.name) && (
                                <span className="text-[9px] font-bold text-emerald-400 uppercase tracking-widest px-1.5 py-0.5 bg-emerald-500/10 rounded-md border border-emerald-500/20">Selected</span>
                              )}
                            </div>
                          </div>
                        </div>
                        
                        {/* Selected Stack Summary */}
                        <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-white/5 rounded-2xl border border-white/10">
                          <span className="text-[9px] font-bold uppercase tracking-widest text-white/30 mr-2">My Stack:</span>
                          <div className="flex -space-x-2">
                            {tools.filter(t => selectedModules.includes(t.name)).map((t, idx) => (
                              <div key={idx} className={`w-8 h-8 rounded-lg bg-black border border-white/10 flex items-center justify-center ${t.accent} shadow-xl`}>
                                <t.icon className="w-4 h-4" />
                              </div>
                            ))}
                            {selectedModules.length === 0 && (
                              <span className="text-[9px] text-white/20 italic">Empty</span>
                            )}
                          </div>
                        </div>

                        <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10">
                          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                          <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-500/80">Active</span>
                        </div>
                      </div>

                      <div className="flex-grow relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                        <div className="space-y-8">
                          {/* AI Prompt Section */}
                          <div className="space-y-3">
                            <div className="flex items-center gap-2 text-white/40">
                              <Command className="w-3 h-3" />
                              <span className="text-[10px] font-bold uppercase tracking-widest">System Prompt</span>
                            </div>
                            <div className="bg-white/5 rounded-2xl p-5 border border-white/10 relative overflow-hidden group">
                              <div className="absolute top-0 left-0 w-1 h-full bg-white/20" />
                              <p className="text-sm text-white/70 leading-relaxed font-mono italic">
                                "{selectedTool.prompt}"
                              </p>
                            </div>
                          </div>

                          {/* Practice Style Section */}
                          <div className="space-y-3">
                            <div className="flex items-center gap-2 text-white/40">
                              <Target className="w-3 h-3" />
                              <span className="text-[10px] font-bold uppercase tracking-widest">Practice Style</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {selectedTool.practice.map((item, idx) => (
                                <span key={idx} className="px-3 py-1.5 bg-white/5 rounded-lg border border-white/10 text-[11px] text-white/60">
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="space-y-8">
                          {/* What you'll learn */}
                          <div className="space-y-4">
                            <div className="flex items-center gap-2 text-white/40">
                              <BookOpen className="w-3 h-3" />
                              <span className="text-[10px] font-bold uppercase tracking-widest">Curriculum</span>
                            </div>
                            <div className="grid grid-cols-1 gap-2">
                              {selectedTool.learn.map((feature, idx) => (
                                <motion.div 
                                  key={idx}
                                  initial={{ opacity: 0, y: 5 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: idx * 0.05 }}
                                  onClick={() => toggleTopic(`${selectedTool.name}-${feature}`)}
                                  className={`flex items-start gap-3 px-4 py-3 rounded-xl border transition-all cursor-pointer group ${
                                    masteredTopics.includes(`${selectedTool.name}-${feature}`)
                                      ? "bg-emerald-500/10 border-emerald-500/30"
                                      : "bg-white/5 border-white/5 hover:bg-white/10"
                                  }`}
                                >
                                  <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 transition-colors ${
                                    masteredTopics.includes(`${selectedTool.name}-${feature}`)
                                      ? "text-emerald-400"
                                      : "text-white/20 group-hover:text-white/40"
                                  }`} />
                                  <span className={`text-[11px] font-medium transition-colors ${
                                    masteredTopics.includes(`${selectedTool.name}-${feature}`)
                                      ? "text-emerald-400"
                                      : "text-white/80 group-hover:text-white"
                                  }`}>{feature}</span>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Simulation Terminal */}
                      <div className="relative z-10 bg-black/40 rounded-3xl p-6 border border-white/5 font-mono text-[11px] overflow-hidden shadow-inner group mb-10">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2 text-white/20">
                            <Terminal className="w-3 h-3" />
                            <span className="text-[9px] font-bold uppercase tracking-[0.2em]">Practice Sandbox</span>
                          </div>
                          <div className="flex gap-1.5">
                            <div className="w-2 h-2 rounded-full bg-white/10" />
                            <div className="w-2 h-2 rounded-full bg-white/10" />
                            <div className="w-2 h-2 rounded-full bg-white/10" />
                          </div>
                        </div>
                        <div className="space-y-2 min-h-[140px]">
                          {selectedTool.simulation.map((line, i) => (
                            <motion.p 
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: i <= simStep ? 1 : 0.2, x: 0 }}
                              className={`${i <= simStep ? "text-emerald-400" : "text-white/20"}`}
                            >
                              <span className="text-white/20 mr-4 select-none">{i + 1}</span>
                              {line}
                            </motion.p>
                          ))}
                          {isSimulating && simStep === selectedTool.simulation.length - 1 && (
                            <motion.p 
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              className="text-white pt-2 flex items-center gap-2"
                            >
                              <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                              Simulation complete. Execution successful.
                            </motion.p>
                          )}
                          {!isSimulating && (
                            <p className="text-white/20 italic pt-2"># press button to execute code preview</p>
                          )}
                        </div>
                      </div>

                      <div className="relative z-10 mt-auto">
                        <button
                          onClick={simulateAction}
                          disabled={isSimulating}
                          className="w-full flex items-center justify-center gap-3 px-8 py-5 bg-white text-black rounded-2xl font-bold text-xs transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-50 shadow-2xl shadow-black/40 group"
                        >
                          {isSimulating ? "Simulating Module..." : `Run ${selectedTool.name} Code Simulation`}
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </button>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="consolidated-view"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.4 }}
                      className="flex flex-col h-full"
                    >
                      <div className="flex items-center justify-between mb-10 relative z-10">
                        <div className="flex items-center gap-5">
                          <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 border border-emerald-500/20">
                            <Layers className="w-6 h-6" />
                          </div>
                          <div>
                            <h2 className="text-xl font-bold">My Custom Stack Output</h2>
                            <p className="text-[9px] uppercase tracking-[0.2em] text-white/30">Aggregated Learning Path</p>
                          </div>
                        </div>
                        
                        <button 
                          onClick={copyConsolidatedPrompt}
                          className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors text-[10px] font-bold uppercase tracking-widest"
                        >
                          <Command className="w-3 h-3" />
                          Copy System Prompts
                        </button>
                      </div>

                      <div className="flex-grow space-y-8 overflow-y-auto pr-4 scrollbar-hide max-h-[500px] mb-8 relative z-10">
                        {selectedToolsList.length === 0 ? (
                          <div className="flex flex-col items-center justify-center h-full py-20 text-center">
                            <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-6 border border-white/10">
                              <Target className="w-10 h-10 text-white/20" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">No modules selected</h3>
                            <p className="text-sm text-white/40 max-w-xs">Select modules from the left to generate your custom analytics stack.</p>
                          </div>
                        ) : (
                          selectedToolsList.map((tool, idx) => (
                            <div key={tool.name} className="bg-white/5 rounded-[2rem] p-8 border border-white/10">
                              <div className="flex items-center gap-4 mb-6">
                                <div className={`w-10 h-10 rounded-lg bg-black flex items-center justify-center ${tool.accent} border border-white/10`}>
                                  <tool.icon className="w-5 h-5" />
                                </div>
                                <h3 className="text-lg font-bold">{tool.name}</h3>
                              </div>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                  <span className="text-[9px] font-bold uppercase tracking-widest text-white/30">Module Curriculum</span>
                                  <div className="space-y-2">
                                    {tool.learn.map((l, i) => (
                                      <div key={i} className="flex items-center gap-3 text-xs text-white/60">
                                        <div className="w-1 h-1 rounded-full bg-white/20" />
                                        {l}
                                      </div>
                                    ))}
                                  </div>
                                </div>
                                <div className="space-y-4">
                                  <span className="text-[9px] font-bold uppercase tracking-widest text-white/30">AI Learning Strategy</span>
                                  <p className="text-xs text-white/50 leading-relaxed font-mono italic">
                                    "{tool.prompt}"
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))
                        )}
                      </div>

                      <div className="relative z-10 mt-auto pt-6 border-t border-white/10">
                        <div className="flex items-center justify-between">
                          <div className="text-left">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-1">Total Modules</p>
                            <p className="text-2xl font-bold">{selectedModules.length} <span className="text-sm font-normal text-white/40">Units</span></p>
                          </div>
                          <div className="text-right">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-1">Estimated Mastery</p>
                            <p className="text-2xl font-bold text-emerald-400">{Math.round((masteredTopics.length / (selectedModules.length * 7 || 1)) * 100)}%</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-40 p-20 rounded-[4rem] bg-gradient-to-br from-[#1e3a2a] to-[#0a1f14] text-white text-center relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-bold mb-10 tracking-tight">Level up your stack.</h2>
            <p className="text-white/60 mb-14 text-xl leading-relaxed">
              Join a community of 10k+ data enthusiasts who are mastering the tools of the trade. 
              Built with precision for the modern workspace.
            </p>
            <Link
              href="/connect"
              className="inline-flex items-center gap-4 px-12 py-6 bg-white text-black rounded-3xl font-bold text-sm hover:scale-[1.05] transition-all active:scale-95 shadow-2xl shadow-black/40 group"
            >
              {selectedModules.length > 0 
                ? `Enroll in ${selectedModules.length} Module${selectedModules.length > 1 ? "s" : ""}` 
                : "Build Your Stack"}
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>

        {/* Philosophy & Creator */}
        <section className="mt-40 pt-40 border-t border-black/5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start text-left">
            <div className="sticky top-32">
              <div className="w-20 h-20 rounded-3xl bg-black/5 flex items-center justify-center mb-10 text-black/20">
                <Quote className="w-10 h-10 fill-current" />
              </div>
              <h2 className="text-5xl md:text-6xl font-serif italic leading-tight mb-10 text-black">
                "Education is the <br /> <span className="text-black/30">ultimate stack.</span>"
              </h2>
              <p className="text-muted-foreground mb-12 max-w-md text-xl leading-relaxed">
                The Stack is more than just tools. It's a philosophy of learning in public, simplifying complexity, and mastering the fundamentals.
              </p>
              <div className="flex items-center gap-6">
                <a 
                  href="https://alsopranab.vercel.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center gap-6 hover:opacity-80 transition-all"
                >
                  <div className="relative w-20 h-20 shrink-0">
                    <Image
                      src="https://github.com/alsopranab.png"
                      alt="alsopranab"
                      fill
                      className="rounded-[2rem] object-cover border-4 border-white shadow-xl transition-transform group-hover:scale-105"
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#1e3a2a] rounded-xl flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform shadow-lg">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                    <div>
                      <p className="font-bold text-2xl group-hover:text-[#1e3a2a] transition-colors text-black">Pranab Debnath</p>
                      <p className="text-base text-muted-foreground">Founder, @the.queryguy</p>
                    </div>
                </a>
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-8">
              <div className="bg-white rounded-[3.5rem] p-12 md:p-16 border border-black/5 shadow-sm">
                <h3 className="text-3xl font-bold mb-8 text-black">The Philosophy</h3>
                <div className="space-y-8 text-muted-foreground text-lg leading-relaxed">
                  <p>
                    Most analytics training is stuck in the 2010s. We're building for the 2025 analyst who uses LLMs as a co-pilot, not a replacement.
                  </p>
                  <div className="grid grid-cols-1 gap-6 pt-4">
                    {[
                      { title: "Public Learning", desc: "Share your progress, build your brand." },
                      { title: "Clean Aesthetics", desc: "Design matters in data storytelling." },
                      { title: "Core Fundamentals", desc: "AI is a tool; SQL is the foundation." }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-6 items-start">
                        <div className="w-10 h-10 rounded-2xl bg-black flex items-center justify-center shrink-0">
                          <CheckCircle2 className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-black mb-1">{item.title}</h4>
                          <p className="text-sm">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
