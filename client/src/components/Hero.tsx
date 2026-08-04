"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  Play,
  CheckCircle2,
  GitPullRequest,
  Kanban,
  Award,
  Trophy,
  ShieldCheck,
  Code2,
  Users,
  Terminal,
  Activity,
  Flame,
  Star,
} from "lucide-react";

export default function Hero() {
  const [activeTab, setActiveTab] = useState<"sprint" | "code" | "passport" | "leaderboard">("sprint");

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Background Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] ambient-glow-purple pointer-events-none rounded-full blur-3xl opacity-60"></div>
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] ambient-glow-cyan pointer-events-none rounded-full blur-3xl opacity-40"></div>
      <div className="absolute top-1/2 right-1/4 w-[450px] h-[450px] ambient-glow-rose pointer-events-none rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Tagline / Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-panel border border-indigo-500/30 text-indigo-300 text-xs sm:text-sm font-medium mb-8 shadow-xl shadow-indigo-950/40 animate-bounce-slow">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span>Don&apos;t just learn technology. Experience how the industry builds it.</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
            Build Like a <span className="gradient-text-primary">Software Company.</span>
            <br />
            Learn Like <span className="gradient-text-cyan">Never Before.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-gray-300 font-normal leading-relaxed max-w-3xl mx-auto mb-10">
            Techlearns is India&apos;s <strong className="text-white font-semibold">Corporate Experience Learning (CEL)</strong> ecosystem
            where students learn, build real products, work in agile teams, compete in national challenges, and graduate with a verified{" "}
            <strong className="text-emerald-400 font-semibold underline decoration-emerald-500/40 underline-offset-4">
              Skill Passport
            </strong>
            —not just a certificate.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <Link
              href="#programs"
              className="w-full sm:w-auto relative group inline-flex items-center justify-center p-0.5 rounded-2xl font-semibold text-white overflow-hidden shadow-2xl shadow-indigo-500/40"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 group-hover:scale-105 transition-transform duration-300"></span>
              <span className="relative w-full sm:w-auto px-8 py-4 rounded-[14px] bg-[#090d16] group-hover:bg-opacity-0 transition-all duration-300 flex items-center justify-center gap-3 text-base">
                <span>Explore Programs</span>
                <ArrowRight className="w-5 h-5 text-indigo-400 group-hover:text-white group-hover:translate-x-1.5 transition-all duration-300" />
              </span>
            </Link>

            <Link
              href="#cel"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl glass-panel-interactive font-semibold text-gray-200 hover:text-white flex items-center justify-center gap-3 text-base"
            >
              <div className="w-7 h-7 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                <Play className="w-3.5 h-3.5 fill-indigo-400 translate-x-0.5" />
              </div>
              <span>Experience a Demo Sprint</span>
            </Link>
          </div>

          {/* Feature Highlight Pills */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto mb-16">
            <div className="glass-panel p-3.5 rounded-xl border border-white/5 flex items-center justify-center gap-2 text-xs sm:text-sm text-gray-300 font-medium">
              <Kanban className="w-4 h-4 text-indigo-400" />
              <span>100% Sprint-Based</span>
            </div>
            <div className="glass-panel p-3.5 rounded-xl border border-white/5 flex items-center justify-center gap-2 text-xs sm:text-sm text-gray-300 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Verified Skill Passport</span>
            </div>
            <div className="glass-panel p-3.5 rounded-xl border border-white/5 flex items-center justify-center gap-2 text-xs sm:text-sm text-gray-300 font-medium">
              <Trophy className="w-4 h-4 text-amber-400" />
              <span>Future Skills League</span>
            </div>
            <div className="glass-panel p-3.5 rounded-xl border border-white/5 flex items-center justify-center gap-2 text-xs sm:text-sm text-gray-300 font-medium">
              <Users className="w-4 h-4 text-purple-400" />
              <span>MAANG Mentors</span>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* Interactive Corporate Experience Operating System Dashboard (Linear/GitHub style) */}
        {/* ========================================================================= */}
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-2xl glass-panel border border-white/10 p-2 sm:p-4 shadow-2xl shadow-indigo-950/50">
            {/* Top SaaS Window Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-4 py-3 border-b border-white/10 mb-4 bg-[#0d1322]/80 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                </div>
                <div className="h-4 w-px bg-white/10"></div>
                <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
                  <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                  <span>skillos.techlearns.in/workspace/batch-2026</span>
                </div>
              </div>

              {/* Tab Selector */}
              <div className="flex items-center gap-1 bg-[#090d16] p-1 rounded-lg border border-white/5 text-xs font-medium overflow-x-auto">
                <button
                  onClick={() => setActiveTab("sprint")}
                  className={`px-3 py-1.5 rounded-md flex items-center gap-1.5 transition-all whitespace-nowrap ${
                    activeTab === "sprint"
                      ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                      : "text-gray-400 hover:text-gray-200"
                  }`}
                >
                  <Kanban className="w-3.5 h-3.5" />
                  <span>Sprint Board</span>
                </button>
                <button
                  onClick={() => setActiveTab("code")}
                  className={`px-3 py-1.5 rounded-md flex items-center gap-1.5 transition-all whitespace-nowrap ${
                    activeTab === "code"
                      ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                      : "text-gray-400 hover:text-gray-200"
                  }`}
                >
                  <GitPullRequest className="w-3.5 h-3.5" />
                  <span>Code Review</span>
                </button>
                <button
                  onClick={() => setActiveTab("passport")}
                  className={`px-3 py-1.5 rounded-md flex items-center gap-1.5 transition-all whitespace-nowrap ${
                    activeTab === "passport"
                      ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                      : "text-gray-400 hover:text-gray-200"
                  }`}
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Skill Passport</span>
                </button>
                <button
                  onClick={() => setActiveTab("leaderboard")}
                  className={`px-3 py-1.5 rounded-md flex items-center gap-1.5 transition-all whitespace-nowrap ${
                    activeTab === "leaderboard"
                      ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                      : "text-gray-400 hover:text-gray-200"
                  }`}
                >
                  <Trophy className="w-3.5 h-3.5 text-amber-400" />
                  <span>Buildathon</span>
                </button>
              </div>
            </div>

            {/* TAB CONTENT 1: SPRINT BOARD */}
            {activeTab === "sprint" && (
              <div className="p-2 sm:p-4 bg-[#0a0f1d] rounded-xl border border-white/5">
                <div className="flex items-center justify-between mb-4 px-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono px-2.5 py-1 rounded bg-indigo-500/20 text-indigo-300 font-semibold border border-indigo-500/30">
                      SPRINT #14
                    </span>
                    <h3 className="text-sm sm:text-base font-semibold text-white">
                      Generative AI & RAG Microservice Pipeline
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-400 font-mono">
                    <Flame className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                    <span>Days Left: 2</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                  {/* Backlog Column */}
                  <div className="bg-[#0e1628] p-3 rounded-lg border border-white/5 space-y-2.5">
                    <div className="flex items-center justify-between text-gray-400 font-medium text-[11px] uppercase tracking-wider mb-1">
                      <span>Backlog</span>
                      <span className="px-1.5 py-0.5 rounded bg-white/10 text-white">2</span>
                    </div>
                    <div className="p-2.5 rounded-md bg-[#131d33] border border-white/5 hover:border-indigo-500/40 transition-all">
                      <span className="text-[10px] text-indigo-400 font-mono font-semibold">DEV-108</span>
                      <p className="text-gray-200 font-medium mt-1">Implement Redis Caching Layer for Vector Queries</p>
                      <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/5 text-[10px] text-gray-400">
                        <span className="px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300">Backend</span>
                        <span>Assignee: Rahul M.</span>
                      </div>
                    </div>
                    <div className="p-2.5 rounded-md bg-[#131d33] border border-white/5">
                      <span className="text-[10px] text-indigo-400 font-mono font-semibold">DEV-109</span>
                      <p className="text-gray-200 font-medium mt-1">Setup Prometheus Telemetry Metrics</p>
                      <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/5 text-[10px] text-gray-400">
                        <span className="px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300">DevOps</span>
                        <span>Assignee: Anish K.</span>
                      </div>
                    </div>
                  </div>

                  {/* In Progress Column */}
                  <div className="bg-[#0e1628] p-3 rounded-lg border border-white/5 space-y-2.5">
                    <div className="flex items-center justify-between text-amber-400 font-medium text-[11px] uppercase tracking-wider mb-1">
                      <span>In Code Review</span>
                      <span className="px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300">1</span>
                    </div>
                    <div className="p-2.5 rounded-md bg-[#131d33] border border-amber-500/30 shadow-lg shadow-amber-950/20">
                      <span className="text-[10px] text-amber-400 font-mono font-semibold">PR #142 (DEV-105)</span>
                      <p className="text-white font-medium mt-1">Pinecone Vector Index Embedding Generator</p>
                      <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/5 text-[10px]">
                        <span className="text-emerald-400 flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" /> Mentor Reviewed
                        </span>
                        <span className="text-gray-400 font-mono">Saahil Paul</span>
                      </div>
                    </div>
                  </div>

                  {/* Done / Deployed Column */}
                  <div className="bg-[#0e1628] p-3 rounded-lg border border-white/5 space-y-2.5">
                    <div className="flex items-center justify-between text-emerald-400 font-medium text-[11px] uppercase tracking-wider mb-1">
                      <span>Deployed to Staging</span>
                      <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300">2</span>
                    </div>
                    <div className="p-2.5 rounded-md bg-[#131d33] border border-emerald-500/30">
                      <span className="text-[10px] text-emerald-400 font-mono font-semibold">DEV-104</span>
                      <p className="text-gray-200 font-medium mt-1">FastAPI LangChain RAG Orchestration Agent</p>
                      <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/5 text-[10px] text-gray-400">
                        <span className="text-emerald-300">Passed CI/CD</span>
                        <span className="font-mono">100% Tests Passed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB CONTENT 2: CODE REVIEW */}
            {activeTab === "code" && (
              <div className="p-3 sm:p-5 bg-[#0a0f1d] rounded-xl border border-white/5 font-mono text-xs text-gray-300">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <GitPullRequest className="w-4 h-4 text-purple-400" />
                    <span className="font-bold text-white">PR #142: Add RAG Vector Chunking Stream</span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px]">
                    Approved by Senior MAANG Mentor
                  </span>
                </div>

                <div className="bg-[#070b13] p-3 rounded-lg border border-white/5 space-y-1 mb-4 overflow-x-auto">
                  <div className="text-gray-500">// src/services/chunker.ts</div>
                  <div className="text-emerald-400">+ export async function processDocumentStream(fileStream: Readable) &#123;</div>
                  <div className="text-emerald-400">+   const textSplitter = new RecursiveCharacterTextSplitter(&#123; chunkSize: 1000 &#125;);</div>
                  <div className="text-emerald-400">+   return await textSplitter.splitDocuments(fileStream);</div>
                  <div className="text-emerald-400">+ &#125;</div>
                </div>

                {/* Inline Review Feedback */}
                <div className="bg-[#11192e] p-3 rounded-lg border border-indigo-500/30 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 flex items-center justify-center font-sans font-bold text-white text-xs shrink-0">
                    AM
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 font-sans">
                      <span className="font-semibold text-white text-xs">Ananya Mehta</span>
                      <span className="text-[10px] text-indigo-400 font-mono">Lead AI Architect @ MAANG</span>
                    </div>
                    <p className="text-gray-300 text-xs font-sans">
                      &quot;Excellent edge-case handling on stream buffer overflows! Clean code architecture. Approved for staging deployment.&quot;
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* TAB CONTENT 3: SKILL PASSPORT */}
            {activeTab === "passport" && (
              <div className="p-3 sm:p-5 bg-[#0a0f1d] rounded-xl border border-white/5">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Profile Summary */}
                  <div className="bg-[#0e1628] p-4 rounded-xl border border-white/10 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 p-0.5">
                          <div className="w-full h-full bg-[#090d16] rounded-[10px] flex items-center justify-center font-bold text-white text-base">
                            SP
                          </div>
                        </div>
                        <div>
                          <h4 className="font-bold text-white text-sm">Saahil Paul</h4>
                          <span className="text-xs text-indigo-400 font-mono">Full Stack & AI Engineer</span>
                        </div>
                      </div>
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold border border-emerald-500/30">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Placement Ready
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-white/5 space-y-1.5 text-xs">
                      <div className="flex justify-between text-gray-400">
                        <span>Skill Score:</span>
                        <span className="font-mono text-white font-bold">92%</span>
                      </div>
                      <div className="flex justify-between text-gray-400">
                        <span>Projects Completed:</span>
                        <span className="font-mono text-white font-bold">8</span>
                      </div>
                      <div className="flex justify-between text-gray-400">
                        <span>Hackathons Won:</span>
                        <span className="font-mono text-white font-bold">6</span>
                      </div>
                    </div>
                  </div>

                  {/* Capability Radar & Ratings */}
                  <div className="bg-[#0e1628] p-4 rounded-xl border border-white/10 col-span-2 space-y-3">
                    <h4 className="text-xs font-mono text-indigo-400 uppercase tracking-wider font-semibold">
                      Verified Corporate Competencies
                    </h4>
                    <div className="space-y-2 text-xs">
                      <div>
                        <div className="flex justify-between text-gray-300 mb-1">
                          <span>Code Quality & Architecture</span>
                          <span className="font-mono text-indigo-400 font-semibold">9.4/10</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 w-[94%]"></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-gray-300 mb-1">
                          <span>Agile Sprint Delivery & Teamwork</span>
                          <span className="font-mono text-purple-400 font-semibold">9.6/10</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 w-[96%]"></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-gray-300 mb-1">
                          <span>AI & RAG Microservices</span>
                          <span className="font-mono text-cyan-400 font-semibold">9.1/10</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 w-[91%]"></div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-2 text-[11px] text-gray-400 flex items-center justify-between">
                      <span>Recruiter Verified ID: <code className="text-gray-200">#TL-PASSPORT-8821</code></span>
                      <span className="text-emerald-400 font-mono">14 Mentor Sign-offs</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB CONTENT 4: LEADERBOARD */}
            {activeTab === "leaderboard" && (
              <div className="p-3 sm:p-5 bg-[#0a0f1d] rounded-xl border border-white/5">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-amber-400" />
                    <h4 className="text-sm font-bold text-white">National Future Skills League — AI Buildathon</h4>
                  </div>
                  <span className="text-xs text-amber-400 font-mono font-semibold">Prize Pool: ₹5,00,000</span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="p-2.5 rounded-lg bg-gradient-to-r from-amber-500/10 via-purple-500/10 to-indigo-500/10 border border-amber-500/30 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-amber-500 text-black font-bold flex items-center justify-center text-xs">
                        1
                      </span>
                      <span className="font-bold text-white">Team NeuralCraft</span>
                      <span className="text-gray-400 text-[11px]">AI Health Copilot</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-mono font-bold text-amber-400">98.4 Pts</span>
                      <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 text-[10px]">National Winner</span>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-[#0e1628] border border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-slate-700 text-white font-bold flex items-center justify-center text-xs">
                        2
                      </span>
                      <span className="font-semibold text-gray-200">Team QuantumDev</span>
                      <span className="text-gray-400 text-[11px]">Automated PR Review Bot</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-mono font-semibold text-gray-200">96.1 Pts</span>
                      <span className="px-2 py-0.5 rounded bg-gray-500/20 text-gray-300 text-[10px]">Runner Up</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
