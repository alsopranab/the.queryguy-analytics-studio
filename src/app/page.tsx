"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, 
  ArrowUpRight, 
  Database, 
  FileSpreadsheet, 
  Code, 
  BarChart3, 
  Bot, 
  Star, 
  Quote, 
  Send, 
  CheckCircle2, 
  Users, 
  Sparkles, 
  Layers,
  ChevronLeft,
  ChevronRight,
  Brain,
  MessageSquare,
  Wrench,
  Cpu,
  Rocket,
  Eye
} from "lucide-react";

const platformFeatures = [
  {
    title: "The Line",
    subtitle: "v1.2 (Beta)",
    desc: "A node-based journey through data analytics.",
    icon: Database,
    color: "bg-blue-50/50",
    textColor: "text-blue-600",
    link: "/line"
  },
  {
    title: "The Lab",
    subtitle: "v2.0 (Stable)",
    desc: "GitHub-powered documentation explorer.",
    icon: Code,
    color: "bg-purple-50/50",
    textColor: "text-purple-600",
    link: "/lab"
  },
  {
    title: "The Stack",
    subtitle: "v1.0 (Alpha)",
    desc: "LLM-powered tools for SQL and cleaning.",
    icon: Bot,
    color: "bg-amber-50/50",
    textColor: "text-amber-600",
    link: "/stack"
  },
];

const aiTools = [
  {
    name: "Query Assistant",
    desc: "LLM-powered SQL generation and optimization for complex analytical queries.",
    icon: Bot,
    color: "from-blue-500/10 to-blue-500/5",
    accent: "text-blue-500",
  },
  {
    name: "Insight Engine",
    desc: "Automated anomaly detection and trend forecasting using statistical transformers.",
    icon: Brain,
    color: "from-purple-500/10 to-purple-500/5",
    accent: "text-purple-500",
  },
  {
    name: "AutoDocs",
    desc: "Programmatic generation of documentation for data schemas and transformations.",
    icon: MessageSquare,
    color: "from-emerald-500/10 to-emerald-500/5",
    accent: "text-emerald-500",
  },
  {
    name: "Data Cleaner",
    desc: "AI-driven data imputation and normalization for messy real-world datasets.",
    icon: Sparkles,
    color: "from-amber-500/10 to-amber-500/5",
    accent: "text-amber-500",
  },
];

const showcaseProjects = [
  {
    title: "SQL Mastery",
    desc: "Senior Data Analyst perspective on query thinking, optimization, and interview readiness.",
    icon: Database,
    color: "bg-gradient-to-br from-[#e8e4df] to-[#d1c7bc]",
  },
  {
    title: "Excel Analytics",
    desc: "Job-ready skills focused on interactive dashboards, data cleaning, and automation.",
    icon: FileSpreadsheet,
    color: "bg-gradient-to-br from-[#f4f1ee] to-[#e8e4df]",
  },
  {
    title: "Python for Data",
    desc: "Analytical problem solving using Pandas and NumPy for automation and EDA.",
    icon: Code,
    color: "bg-gradient-to-br from-[#d1c7bc] to-[#c4b8ab]",
  },
  {
    title: "Power BI Pro",
    desc: "Insight-driven storytelling, complex DAX modeling, and professional design patterns.",
    icon: BarChart3,
    color: "bg-gradient-to-br from-[#e8e4df] to-[#f4f1ee]",
  },
  {
    title: "Capstone Projects",
    desc: "End-to-end business cases: Sales Analytics, Customer Retention, and Marketing Funnels.",
    icon: Rocket,
    color: "bg-gradient-to-br from-[#d1c7bc] to-[#e8e4df]",
  },
  {
    title: "Viz Fundamentals",
    desc: "The science of visual communication, aggregation logic, and dashboard psychology.",
    icon: Eye,
    color: "bg-gradient-to-br from-[#f4f1ee] to-[#d1c7bc]",
  },
];

export default function Home() {
  const [feedback, setFeedback] = React.useState({ name: "", message: "", submitted: false });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [activeToolIndex, setActiveToolIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveToolIndex((prev) => (prev + 1) % aiTools.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleFeedbackSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setFeedback(prev => ({ ...prev, submitted: true }));
    setIsSubmitting(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#fcfaf8] selection:bg-black selection:text-white">
      {/* Redesigned Hero Section */}
      <section className="relative min-h-[95vh] flex items-center pt-20 overflow-hidden bg-gradient-to-b from-[#e2e8e4] via-[#fcfaf8] to-[#fcfaf8]">
        {/* Large Background Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="text-[20vw] font-black text-black/[0.03] leading-none select-none whitespace-nowrap"
          >
            QUERY GUY
          </motion.h1>
        </div>

        <div className="container-wide relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              {/* Left Content */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-md border border-black/5 rounded-2xl mb-8 shadow-sm">
                  <div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center text-white">
                    <Users className="w-4 h-4" />
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider">
                    <span className="opacity-50">+10k students learning</span>
                  </div>
                </div>

                <h2 className="text-5xl md:text-8xl font-bold tracking-tighter leading-[1] mb-8">
                  Unleash the <br />
                  <span className="text-black/40 italic">analyst</span> in you.
                </h2>
                
                <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-lg">
                  The ultimate workspace for modern data analysts. Build, learn, and optimize your data stack in one aesthetic place.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href="/line"
                    className="group flex items-center gap-3 px-10 py-5 bg-[#1e3a2a] text-white rounded-2xl font-bold text-sm transition-all hover:scale-[1.05] active:scale-95 shadow-xl shadow-[#1e3a2a]/20"
                  >
                    Start Learning
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/stack"
                    className="flex items-center gap-3 px-10 py-5 bg-white border border-black/5 rounded-2xl font-bold text-sm transition-all hover:scale-[1.05] active:scale-95 shadow-sm"
                  >
                    Explore Tools
                    <Cpu className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>

              {/* Right Feature Cards */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col gap-6"
              >
              {platformFeatures.map((feature, i) => (
                <Link key={i} href={feature.link}>
                  <motion.div 
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="group bg-white/80 backdrop-blur-md border border-black/5 p-6 rounded-[2rem] shadow-sm flex items-start gap-5 transition-all hover:bg-white"
                  >
                    <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center ${feature.textColor} shrink-0`}>
                      <feature.icon className="w-7 h-7" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-bold text-lg">{feature.title}</h4>
                        <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 bg-black/5 rounded-full opacity-40">
                          {feature.subtitle}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-snug">
                        {feature.desc}
                      </p>
                      <div className="mt-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#1e3a2a] opacity-0 group-hover:opacity-100 transition-opacity">
                        Try now <ArrowRight className="w-3 h-3" />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}

              <div className="flex items-center justify-between mt-4 px-2">
                <p className="text-xs font-medium text-muted-foreground">
                  See the latest <br /> <span className="text-black font-bold">knowledge modules</span>
                </p>
                <div className="flex gap-2">
                  <div className="w-10 h-10 rounded-full border border-black/5 bg-white flex items-center justify-center text-black/20 cursor-pointer">
                    <ChevronLeft className="w-5 h-5" />
                  </div>
                  <div className="w-10 h-10 rounded-full border border-black/5 bg-white flex items-center justify-center text-black/20 cursor-pointer">
                    <ChevronRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Toolkit Section (Replaced Instagram) */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-black/5 to-transparent" />
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-50 rounded-full mb-6">
                <Cpu className="w-3 h-3 text-purple-600" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-purple-600">AI Powered Stack</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
                Intelligent tools for the<br />modern <span className="text-purple-600">Analyst</span>.
              </h2>
              <p className="text-lg text-muted-foreground mb-12 max-w-lg leading-relaxed">
                Automate the mundane, focus on the insights. Our AI-driven stack helps you clean data, generate queries, and document everything in seconds.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {aiTools.map((tool, i) => (
                  <motion.div
                    key={i}
                    onMouseEnter={() => setActiveToolIndex(i)}
                    className={`p-6 rounded-[2rem] border transition-all duration-300 cursor-pointer ${
                      activeToolIndex === i 
                        ? "bg-white border-purple-200 shadow-xl shadow-purple-500/5 scale-[1.02]" 
                        : "bg-transparent border-transparent grayscale opacity-40 hover:grayscale-0 hover:opacity-100"
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tool.color} flex items-center justify-center ${tool.accent} mb-4`}>
                      <tool.icon className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-lg mb-1">{tool.name}</h4>
                    <p className="text-xs text-muted-foreground leading-snug">
                      {tool.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-12">
                <Link
                  href="/stack"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-black text-white rounded-[2rem] font-bold text-sm hover:scale-[1.02] transition-all active:scale-95"
                >
                  View Full Stack
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent rounded-[3rem] blur-3xl -z-10" />
              <div className="bg-white border border-black/5 rounded-[3rem] p-8 shadow-2xl overflow-hidden aspect-square flex flex-col">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                    <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-widest opacity-30">Stack Preview v1.0.4</div>
                </div>

                <div className="flex-grow flex flex-col justify-center items-center text-center p-12">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeToolIndex}
                      initial={{ opacity: 0, y: 20, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -20, scale: 1.1 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="flex flex-col items-center"
                    >
                      <div className={`w-24 h-24 rounded-[2rem] bg-gradient-to-br ${aiTools[activeToolIndex].color} flex items-center justify-center ${aiTools[activeToolIndex].accent} mb-8 shadow-inner`}>
                        <motion.div
                          animate={{ rotate: [0, 10, -10, 0] }}
                          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        >
                          {React.createElement(aiTools[activeToolIndex].icon, { className: "w-12 h-12" })}
                        </motion.div>
                      </div>
                      <h3 className="text-3xl font-bold mb-4">{aiTools[activeToolIndex].name}</h3>
                      <p className="text-muted-foreground text-lg max-w-xs mb-8">
                        {aiTools[activeToolIndex].desc}
                      </p>
                      <div className="flex items-center gap-2 px-6 py-3 bg-black/5 rounded-2xl text-xs font-bold uppercase tracking-[0.2em] text-black/40">
                        <Sparkles className="w-4 h-4" />
                        Analyzing...
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
                
                <div className="mt-auto h-32 relative opacity-20">
                  <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-purple-500/20 to-transparent" />
                  <div className="flex justify-around items-end h-full px-4 gap-1">
                    {[...Array(20)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{ height: [20, Math.random() * 80 + 20, 20] }}
                        transition={{ duration: 2 + Math.random(), repeat: Infinity }}
                        className="flex-1 bg-purple-500 rounded-t-sm"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Inside Section - Actual Platform Content */}
      <section className="section-padding bg-[#fcfaf8] relative overflow-hidden">
        <div className="container-wide">
          <div className="text-center mb-20 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1e3a2a]/5 rounded-full mb-4">
              <Sparkles className="w-3 h-3 text-[#1e3a2a]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1e3a2a]">Platform Content</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Everything You Need to<br />Master Analytics
            </h2>
            <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
              From SQL fundamentals to Power BI dashboards — a complete learning ecosystem built for aspiring analysts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {showcaseProjects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`group relative min-h-[300px] rounded-[2.5rem] overflow-hidden p-10 flex flex-col justify-end ${project.color} hover:shadow-2xl hover:shadow-black/5 transition-all duration-500`}
              >
                <div className="absolute top-10 right-10">
                  <div className="w-14 h-14 rounded-2xl bg-white/50 backdrop-blur-sm flex items-center justify-center group-hover:bg-white transition-colors duration-500">
                    <project.icon className="w-7 h-7 text-black/60" />
                  </div>
                </div>
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                  <p className="text-muted-foreground leading-relaxed max-w-[340px]">{project.desc}</p>
                  <div className="mt-8 flex items-center gap-3 font-bold text-sm group-hover:translate-x-2 transition-transform duration-300">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/line"
              className="inline-flex items-center gap-4 px-10 py-5 bg-black text-white rounded-[2rem] font-bold text-sm hover:scale-[1.02] transition-all active:scale-95"
            >
              Start Your Journey
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials / Feedback Section */}
      <section className="section-padding bg-[#f4f1ee]">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: Featured Quote / CTA */}
            <div className="sticky top-32">
              <div className="w-16 h-16 rounded-3xl bg-black/5 flex items-center justify-center mb-8 text-black/20">
                <Quote className="w-8 h-8 fill-current" />
              </div>
              <h2 className="text-4xl md:text-5xl font-serif italic leading-tight mb-8">
                "Built by an analyst, for analysts who want to learn in public."
              </h2>
              <p className="text-muted-foreground mb-10 max-w-md text-lg leading-relaxed">
                This platform is open-source and community-driven. Your feedback shapes the future of @the.queryguy.
              </p>
              <div className="flex items-center gap-5">
                <a 
                  href="https://alsopranab.vercel.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center gap-5 hover:opacity-80 transition-all"
                >
                  <div className="relative w-16 h-16 shrink-0">
                    <Image
                      src="https://github.com/alsopranab.png"
                      alt="alsopranab"
                      fill
                      className="rounded-2xl object-cover border-4 border-white shadow-sm transition-transform group-hover:scale-105"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#1e3a2a] rounded-lg flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform shadow-lg">
                      <ArrowUpRight className="w-3 h-3" />
                    </div>
                  </div>
                  <div>
                    <p className="font-bold text-lg group-hover:text-[#1e3a2a] transition-colors">Pranab Debnath</p>
                    <p className="text-sm text-muted-foreground">Creator, @the.queryguy</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Right: Feedback Form */}
            <div className="bg-white rounded-[3rem] p-10 md:p-14 shadow-2xl shadow-black/[0.03]">
              <div className="mb-10">
                <h3 className="text-3xl font-bold mb-3">Share Your Feedback</h3>
                <p className="text-muted-foreground">Help us improve the platform. Your testimonials may be featured!</p>
              </div>

              {feedback.submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <div className="w-20 h-20 bg-green-50 text-green-500 rounded-3xl flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-bold mb-3">Thank You!</h4>
                  <p className="text-muted-foreground">Your feedback has been submitted successfully.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleFeedbackSubmit} className="space-y-8">
                  <div>
                    <label className="block text-sm font-bold uppercase tracking-widest text-black/40 mb-3">Your Name</label>
                    <input
                      type="text"
                      required
                      value={feedback.name}
                      onChange={(e) => setFeedback(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full px-6 py-4 rounded-2xl border border-black/5 bg-[#fcfaf8] focus:outline-none focus:ring-4 focus:ring-black/5 transition-all text-lg"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold uppercase tracking-widest text-black/40 mb-3">Your Message</label>
                    <textarea
                      required
                      rows={5}
                      value={feedback.message}
                      onChange={(e) => setFeedback(prev => ({ ...prev, message: e.target.value }))}
                      className="w-full px-6 py-4 rounded-2xl border border-black/5 bg-[#fcfaf8] focus:outline-none focus:ring-4 focus:ring-black/5 transition-all resize-none text-lg"
                      placeholder="What do you think about the platform?"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-3 px-8 py-5 bg-black text-white rounded-2xl font-bold text-sm transition-all hover:scale-[1.01] active:scale-98 disabled:opacity-50 disabled:cursor-not-allowed shadow-xl shadow-black/10"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Feedback"}
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 md:py-48 bg-[#0a0a09] text-white relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.03] rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container-wide relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 rounded-[2.5rem] bg-white/5 flex items-center justify-center mx-auto mb-12 border border-white/10">
              <Layers className="w-10 h-10 text-white/40" />
            </div>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif italic mb-12 leading-[1.1] tracking-tight">
              "Complexity is the baseline. <br />
              <span className="text-white/30">Clarity is the achievement.</span>"
            </h2>
            <Link 
              href="/manifesto" 
              className="inline-flex items-center gap-3 px-10 py-4 border border-white/20 rounded-full text-xs font-bold tracking-[0.3em] uppercase hover:bg-white hover:text-black transition-all"
            >
              View Manifesto
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
