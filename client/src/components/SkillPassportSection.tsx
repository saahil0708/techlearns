import React from "react";
import {
  ShieldCheck,
  CheckCircle2,
  GitBranch,
  Trophy,
  Award,
  Star,
  Users,
  Code2,
  ExternalLink,
  Lock,
} from "lucide-react";

export default function SkillPassportSection() {
  return (
    <section id="passport" className="py-20 md:py-28 relative bg-[#252525] bg-grid-pattern overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] ambient-glow-cyan pointer-events-none rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs uppercase tracking-wider font-bold">
              <ShieldCheck className="w-4 h-4" />
              <span>Your Verified Hiring Identity</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              The <span className="gradient-text-gold">Skill Passport</span>
            </h2>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              Ditch static PDF certificates that recruiters ignore. The Techlearns <strong className="text-white">Skill Passport</strong> is an immutable, proof-backed profile showcasing your actual code review scores, sprint delivery velocity, and hackathon rankings.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm text-gray-200">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs">
                  ✓
                </div>
                <span>LinkedIn meets GitHub meets LeetCode proof profile</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-200">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs">
                  ✓
                </div>
                <span>Backed by 14+ line-by-line mentor review sign-offs</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-200">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs">
                  ✓
                </div>
                <span>Shareable link directly for corporate hiring managers</span>
              </div>
            </div>
          </div>

          {/* Right Column: Passport Profile Mockup Card */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl glass-panel border border-emerald-500/30 p-6 sm:p-8 shadow-2xl shadow-emerald-950/30 relative">
              {/* Top Bar */}
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-emerald-500 p-0.5 shadow-xl">
                    <div className="w-full h-full bg-[#252525] rounded-[14px] flex items-center justify-center text-white font-extrabold text-xl">
                      SP
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      Saahil Paul
                      <span className="w-4 h-4 rounded-full bg-emerald-500 text-black flex items-center justify-center text-[10px] font-bold">
                        ✓
                      </span>
                    </h3>
                    <span className="text-sm text-indigo-400 font-mono font-medium">Full Stack & AI Engineer</span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/40">
                    <CheckCircle2 className="w-4 h-4" /> PLACEMENT READY: YES
                  </span>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                <div className="bg-[#0e1628] p-3 rounded-xl border border-white/5 text-center">
                  <span className="text-[11px] text-gray-400 font-mono uppercase font-bold">Skill Score</span>
                  <div className="text-xl font-extrabold text-emerald-400 font-mono mt-0.5">92%</div>
                </div>
                <div className="bg-[#0e1628] p-3 rounded-xl border border-white/5 text-center">
                  <span className="text-[11px] text-gray-400 font-mono uppercase font-bold">Projects</span>
                  <div className="text-xl font-extrabold text-white font-mono mt-0.5">8</div>
                </div>
                <div className="bg-[#0e1628] p-3 rounded-xl border border-white/5 text-center">
                  <span className="text-[11px] text-gray-400 font-mono uppercase font-bold">Hackathons</span>
                  <div className="text-xl font-extrabold text-amber-400 font-mono mt-0.5">6</div>
                </div>
                <div className="bg-[#0e1628] p-3 rounded-xl border border-white/5 text-center">
                  <span className="text-[11px] text-gray-400 font-mono uppercase font-bold">Mentor Reviews</span>
                  <div className="text-xl font-extrabold text-purple-400 font-mono mt-0.5">14</div>
                </div>
              </div>

              {/* Competencies Progress Bars */}
              <div className="bg-[#0e1628] p-5 rounded-2xl border border-white/5 space-y-4 mb-6">
                <div className="flex items-center justify-between text-xs text-gray-300 font-medium">
                  <span>Communication Rating:</span>
                  <span className="font-mono text-emerald-400 font-bold">9.2 / 10</span>
                </div>
                <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 w-[92%]"></div>
                </div>

                <div className="flex items-center justify-between text-xs text-gray-300 font-medium">
                  <span>Teamwork & Agile Delivery:</span>
                  <span className="font-mono text-purple-400 font-bold">9.5 / 10</span>
                </div>
                <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 w-[95%]"></div>
                </div>
              </div>

              {/* Footer Proof Verifications */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs font-mono text-gray-400">
                <div className="flex items-center gap-2">
                  <GitBranch className="w-4 h-4 text-emerald-400" />
                  <span>GitHub: Connected (420+ Commits)</span>
                </div>
                <span className="text-emerald-400 flex items-center gap-1 font-sans">
                  Verified Hash #8821 <ExternalLink className="w-3 h-3" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
