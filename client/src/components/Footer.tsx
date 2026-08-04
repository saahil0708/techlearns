"use client";

import React from "react";
import Link from "next/link";
import { Terminal, Shield, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#05080f] border-t border-white/10 pt-16 pb-12 text-sm text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">
          {/* Col 1: Brand */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 p-0.5 shadow-lg">
                <div className="w-full h-full bg-[#090d16] rounded-[10px] flex items-center justify-center">
                  <Terminal className="w-4 h-4 text-indigo-400" />
                </div>
              </div>
              <span className="font-bold text-xl text-white">Techlearns</span>
            </Link>
            <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
              India&apos;s Corporate Experience Learning (CEL) ecosystem. Students learn, build real products, work in agile sprint pods, and graduate with a verified Skill Passport.
            </p>
          </div>

          {/* Col 2: Programs */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider font-semibold text-white">Programs</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="#programs" className="hover:text-white transition-colors">Generative AI & LLMOps</Link></li>
              <li><Link href="#programs" className="hover:text-white transition-colors">Full Stack Engineering</Link></li>
              <li><Link href="#programs" className="hover:text-white transition-colors">Cybersecurity & DevSecOps</Link></li>
              <li><Link href="#programs" className="hover:text-white transition-colors">Cloud Native & DevOps</Link></li>
              <li><Link href="#programs" className="hover:text-white transition-colors">Data Engineering</Link></li>
            </ul>
          </div>

          {/* Col 3: Platform */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider font-semibold text-white">Platform</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="#cel" className="hover:text-white transition-colors">CEL Framework</Link></li>
              <li><Link href="#passport" className="hover:text-white transition-colors">Skill Passport</Link></li>
              <li><Link href="#competitions" className="hover:text-white transition-colors">Future Skills League</Link></li>
              <li><Link href="#competitions" className="hover:text-white transition-colors">Recruiter Showcase</Link></li>
            </ul>
          </div>

          {/* Col 4: Legal & Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider font-semibold text-white">Contact & Legal</h4>
            <ul className="space-y-2 text-xs">
              <li><span className="text-gray-400">Email: support@techlearns.in</span></li>
              <li><span className="text-gray-400">Location: Bengaluru, India</span></li>
              <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} Techlearns Operating System. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-emerald-400" />
            <span>Encrypted Skill Passport Infrastructure</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
