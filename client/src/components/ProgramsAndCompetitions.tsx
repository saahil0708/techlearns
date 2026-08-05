import React from "react";
import Link from "next/link";
import {
  Brain,
  Code,
  Shield,
  Cloud,
  Database,
  Cpu,
  Trophy,
  Flame,
  ArrowRight,
  Sparkles,
  Layers,
} from "lucide-react";

export default function ProgramsAndCompetitions() {
  const programs = [
    { title: "Generative AI & LLMOps", duration: "6 Months", salary: "18-32 LPA", icon: Brain, projects: "6 AI Agents", capstone: "RAG Microservice" },
    { title: "Full Stack Engineering", duration: "6 Months", salary: "12-24 LPA", icon: Code, projects: "8 SaaS Apps", capstone: "Cloud ERP Engine" },
    { title: "Cybersecurity & DevSecOps", duration: "6 Months", salary: "14-26 LPA", icon: Shield, projects: "10 CTF Labs", capstone: "SOC Automation" },
    { title: "Cloud Native & DevOps", duration: "6 Months", salary: "15-28 LPA", icon: Cloud, projects: "12 Pipelines", capstone: "K8s Multi-Region" },
    { title: "Data Analytics & Engineering", duration: "6 Months", salary: "12-22 LPA", icon: Database, projects: "5 Warehouses", capstone: "Realtime ETL Pipeline" },
    { title: "MLOps & AI Systems", duration: "6 Months", salary: "16-30 LPA", icon: Cpu, projects: "7 ML Pipelines", capstone: "Model Drift Watcher" },
  ];

  return (
    <section id="programs" className="py-20 md:py-28 relative bg-[#252525] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs uppercase tracking-wider mb-4 font-bold">
            <Trophy className="w-4 h-4" />
            <span>Corporate Journeys</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Specialized <span className="gradient-text-gold">Engineering Programs</span>
          </h2>
          <p className="mt-4 text-gray-300 text-base sm:text-lg">
            Don&apos;t buy a video course. Join a 6-month corporate journey backed by MAANG mentors and real sprint deliverables.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {programs.map((prog, idx) => {
            const Icon = prog.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl glass-panel-interactive border border-white/10 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      {prog.salary}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{prog.title}</h3>
                  <div className="flex items-center gap-3 text-xs text-gray-400 mb-4">
                    <span>Duration: {prog.duration}</span>
                    <span>•</span>
                    <span>{prog.projects}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5 space-y-3">
                  <div className="flex justify-between text-xs text-gray-300">
                    <span className="text-gray-400">Capstone:</span>
                    <span className="font-mono text-indigo-400 font-semibold">{prog.capstone}</span>
                  </div>
                  <Link
                    href="#cel"
                    className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-indigo-600 font-semibold text-xs text-white flex items-center justify-center gap-2 transition-all"
                  >
                    <span>View Journey & Sprints</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="relative rounded-3xl overflow-hidden p-10 sm:p-16 text-center bg-gradient-to-br from-indigo-950 via-[#0d1424] to-purple-950 border border-indigo-500/40 shadow-2xl shadow-indigo-950/80">
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Ready to Stop Watching Videos and <br />
              <span className="gradient-text-primary">Start Building Like a Company?</span>
            </h2>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              Join India&apos;s premier Corporate Experience Learning ecosystem and graduate with a verified Skill Passport.
            </p>
            <div className="pt-4">
              <Link
                href="#programs"
                className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-extrabold text-white text-base sm:text-lg shadow-2xl shadow-indigo-500/50 hover:scale-105 transition-all gap-3"
              >
                <span>Start Your Corporate Experience</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
