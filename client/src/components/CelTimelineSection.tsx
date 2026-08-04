"use client";

import React, { useState } from "react";
import {
  Kanban,
  Video,
  GitBranch,
  UserCheck,
  Presentation,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  ChevronRight,
} from "lucide-react";

export default function CelTimelineSection() {
  const [selectedStage, setSelectedStage] = useState(0);

  const stages = [
    { title: "ASSESS", subtitle: "Diagnostic Baseline", icon: "📊", detail: "Comprehensive skill audit evaluating your programming logic, system design fundamentals, and problem-solving velocity." },
    { title: "LEARN", subtitle: "Guided Mastery", icon: "📚", detail: "Targeted, micro-concept learning modules built around industry standards and modern technology stacks." },
    { title: "PRACTICE", subtitle: "Daily Drills", icon: "⚡", detail: "Hands-on coding challenges and algorithmic drills designed to build speed, accuracy, and muscle memory." },
    { title: "BUILD", subtitle: "Full Production Apps", icon: "🛠️", detail: "Developing end-to-end full-stack applications with modern microservices, databases, and cloud deployments." },
    { title: "OPERATE", subtitle: "Company Workflows", icon: "🏢", detail: "Operating like a real software team: Jira sprint boards, daily standups, incident triage, and retrospective meetings." },
    { title: "EXPERIENCE", subtitle: "Corporate Simulation", icon: "💼", detail: "Simulated client requests, code review feedback from MAANG mentors, and production bug fix scenarios." },
    { title: "COMPETE", subtitle: "Future Skills League", icon: "🏆", detail: "National hackathons, AI buildathons, and CTF security challenges to test your skills under real pressure." },
    { title: "VALIDATE", subtitle: "Skill Passport Audit", icon: "🛡️", detail: "Comprehensive review of code commits, review scores, and project outputs into an immutable recruiter proof profile." },
    { title: "HIRED", subtitle: "Recruiter Showcase", icon: "💼", detail: "Direct placement pipeline connecting high-proof learners with top technology hiring managers." },
  ];

  const corporateRituals = [
    { title: "Sprint Planning", icon: Kanban, desc: "Break down product epics into manageable Jira-style user stories and estimate story points every week." },
    { title: "Daily Standup", icon: Video, desc: "Summarize yesterday's progress, today's goals, and flag blockers with your agile team pod." },
    { title: "Git Workflow & PRs", icon: GitBranch, desc: "Branching strategies, conventional commits, rebase workflows, and clean pull request descriptions." },
    { title: "Peer & Mentor Review", icon: UserCheck, desc: "Receive line-by-line code review comments from senior engineering leads before merging to main." },
    { title: "Demo Day", icon: Presentation, desc: "Present your production sprint release to industry experts and receive live feedback." },
    { title: "Industry Review", icon: ShieldCheck, desc: "Verified evaluations stored directly inside your recruiter-facing Skill Passport." },
  ];

  return (
    <section className="py-20 md:py-28 relative bg-[#070b14] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-4 h-4" />
            <span>The Heart of Techlearns</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Corporate Experience Learning <span className="gradient-text-primary">(CEL)</span>
          </h2>
          <p className="mt-4 text-gray-300 text-base sm:text-lg">
            Experience the exact end-to-end operational cycle of a high-performing engineering team.
          </p>
        </div>

        {/* Clickable 9-Stage Flow Bar */}
        <div className="mb-16">
          <div className="grid grid-cols-3 md:grid-cols-9 gap-2">
            {stages.map((stage, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedStage(idx)}
                className={`p-3 rounded-xl border text-center transition-all duration-300 flex flex-col items-center justify-center gap-1 cursor-pointer ${
                  selectedStage === idx
                    ? "bg-gradient-to-b from-indigo-600 to-purple-700 text-white border-indigo-400 shadow-lg shadow-indigo-600/30 scale-105"
                    : "glass-panel border-white/5 text-gray-400 hover:text-white hover:border-white/20"
                }`}
              >
                <span className="text-lg">{stage.icon}</span>
                <span className="font-bold text-xs tracking-wider font-mono">{stage.title}</span>
                <span className="text-[10px] opacity-80 hidden sm:block truncate max-w-full">{stage.subtitle}</span>
              </button>
            ))}
          </div>

          {/* Active Stage Detail Box */}
          <div className="mt-6 p-6 rounded-2xl glass-panel border border-indigo-500/30 bg-[#0e1628]/90 text-center max-w-3xl mx-auto shadow-xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-indigo-400 font-semibold mb-2">
              <span>STAGE {selectedStage + 1} OF 9</span>
              <ChevronRight className="w-3.5 h-3.5" />
              <span>{stages[selectedStage].subtitle}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              {stages[selectedStage].icon} {stages[selectedStage].title}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed max-w-2xl mx-auto">
              {stages[selectedStage].detail}
            </p>
          </div>
        </div>

        {/* Corporate Rituals Grid */}
        <div className="mt-16">
          <div className="text-center mb-10">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Everyday Corporate Rituals You Will Master
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {corporateRituals.map((ritual, idx) => {
              const Icon = ritual.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl glass-panel border border-white/5 hover:border-indigo-500/40 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-4 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{ritual.title}</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">{ritual.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
