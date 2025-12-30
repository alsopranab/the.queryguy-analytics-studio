"use client";

import { motion } from "framer-motion";

const points = [
  {
    title: "Everything is open",
    desc: "Knowledge is not a proprietary asset. It is a collective intelligence that grows when shared.",
  },
  {
    title: "Everything is visible",
    desc: "We expose the raw SQL, the messy Python, and the statistical uncertainty. The 'how' matters.",
  },
  {
    title: "Guidance, not restriction",
    desc: "The pathway is a map, not a hallway. Skip, double back, or branch off. Curiosity is the only prerequisite.",
  },
  {
    title: "Respect the source",
    desc: "Community work is the backbone. We credit, curate, and contribute back to the open-source ecosystem.",
  },
];

export default function ManifestoPage() {
  return (
    <div className="container-wide section-padding">
      <div className="max-w-3xl">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground mb-4 block">
            Our Philosophy
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-none">Manifesto</h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed border-l-2 border-foreground/10 pl-8">
            @the.queryguy is not a course. It is not a bootcamp. It is a commitment to the radical transparency of analytical intelligence.
          </p>
        </motion.div>

        <div className="space-y-12">
          {points.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-2xl font-bold mb-3 tracking-tight">{point.title}</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">{point.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-24 p-12 rounded-[2rem] glass shadow-xl shadow-foreground/[0.02] text-center"
        >
          <p className="text-2xl font-bold mb-3">Join the movement.</p>
          <p className="text-muted-foreground mb-8">
            Contribute on GitHub and help shape the future of open-source analytics.
          </p>
          <a
            href="https://github.com/alsopranab/the.queryguy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-foreground text-background rounded-full font-bold transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-foreground/10"
          >
            Fork the Repo
          </a>
        </motion.div>
      </div>
    </div>
  );
}
