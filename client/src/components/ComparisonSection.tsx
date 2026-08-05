import React from "react";
import { Check, X, Sparkles, Layers } from "lucide-react";

export default function ComparisonSection() {
  const comparisonData = [
    { category: "Learning Model", traditional: "Passive video watching & slides", techlearns: "Learn + Build in Daily Sprints" },
    { category: "Practical Work", traditional: "Generic todo-list assignments", techlearns: "Real Business Tickets & Incidents" },
    { category: "Collaboration", traditional: "Solo isolated coding", techlearns: "Cross-Functional Agile Teams" },
    { category: "Credential", traditional: "Static PDF Certificate", techlearns: "Dynamic Skill Passport" },
    { category: "Progress Tracking", traditional: "Videos watched count", techlearns: "Verified Evidence & PR Reviews" },
    { category: "Career Readiness", traditional: "Generic mock interviews", techlearns: "Real Corporate Experience" },
  ];

  return (
    <section id="cel" className="py-20 md:py-28 relative bg-[#252525] bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs uppercase tracking-wider mb-4 font-bold">
            <Layers className="w-4 h-4" />
            <span>The Paradigm Shift</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            What Makes Techlearns <span className="gradient-text-primary">Fundamentally Different</span>
          </h2>
          <p className="mt-4 text-gray-300 text-base sm:text-lg">
            We replaced old course-publishing models with a complete Corporate Operating System.
          </p>
        </div>

        {/* Comparison Matrix Table / Cards */}
        <div className="max-w-5xl mx-auto rounded-3xl glass-panel border border-white/10 overflow-hidden shadow-2xl">
          {/* Table Header */}
          <div className="grid grid-cols-1 md:grid-cols-12 bg-[#0e1628] border-b border-white/10 p-4 sm:p-6 text-sm font-bold tracking-wider">
            <div className="md:col-span-4 text-gray-400 uppercase text-xs font-bold">Pillar</div>
            <div className="md:col-span-4 text-rose-400 uppercase text-xs mt-2 md:mt-0 font-bold">Traditional Platforms</div>
            <div className="md:col-span-4 text-indigo-400 uppercase text-xs flex items-center gap-1.5 mt-2 md:mt-0 font-bold">
              <Sparkles className="w-4 h-4" /> Techlearns SkillOS
            </div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-white/5 text-sm">
            {comparisonData.map((row, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-12 p-4 sm:p-6 items-center gap-4 hover:bg-white/[0.02] transition-colors">
                <div className="md:col-span-4 font-semibold text-white text-base">
                  {row.category}
                </div>
                <div className="md:col-span-4 text-gray-400 flex items-start gap-2">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>{row.traditional}</span>
                </div>
                <div className="md:col-span-4 font-medium text-emerald-300 flex items-start gap-2 bg-indigo-500/10 p-3 rounded-xl border border-indigo-500/20">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{row.techlearns}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
