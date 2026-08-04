"use client";

import React from "react";
import { AlertTriangle, XCircle, CheckCircle2, ShieldAlert, Award } from "lucide-react";

export default function ProblemSection() {
  const problems = [
    { title: "Watched 300+ Hours", desc: "Passive video consumption creates an illusion of competence without true execution." },
    { title: "Completed Basic Assignments", desc: "Toy tutorials and simple todo apps fail to prepare you for real production codebases." },
    { title: "Got PDF Certificates", desc: "Generic certificates carry zero weight with top engineering recruiters today." },
    { title: "Forgot Everything in Months", desc: "Without continuous company-style practice, learned concepts fade rapidly." },
    { title: "No Real Production Portfolio", desc: "No GitHub commit history, no PR reviews, and no deployed microservices to show." },
    { title: "No Recruiter-Facing Proof", desc: "Unable to prove team collaboration, sprint delivery, or incident response capability." },
  ];

  return (
    <section className="py-20 md:py-28 relative bg-[#070b14] border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <ShieldAlert className="w-4 h-4" />
            <span>The Traditional EdTech Trap</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Why Most Students Still Struggle <br className="hidden sm:block" />
            After Completing Courses
          </h2>
        </div>

        {/* 6 Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {problems.map((prob, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl glass-panel border border-white/5 hover:border-rose-500/30 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 mb-4 group-hover:scale-110 transition-transform">
                <XCircle className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <span>❌</span> {prob.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">{prob.desc}</p>
            </div>
          ))}
        </div>

        {/* Punchline Banner */}
        <div className="relative rounded-3xl overflow-hidden p-8 sm:p-12 text-center bg-gradient-to-r from-indigo-950 via-[#0e162a] to-purple-950 border border-indigo-500/30 shadow-2xl shadow-indigo-950/60">
          <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
          <div className="relative z-10 max-w-3xl mx-auto space-y-4">
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              The Industry Doesn&apos;t Hire Certificates.
            </h3>
            <p className="text-3xl sm:text-5xl font-extrabold gradient-text-primary">
              It Hires Evidence.
            </p>
            <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto pt-2">
              That&apos;s why Techlearns was engineered from the ground up: to produce verifiable proof of work through daily agile sprints and continuous mentor evaluation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
