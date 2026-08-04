"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Terminal,
  ShieldCheck,
  ArrowRight,
  Menu,
  X,
  LogIn,
  ChevronRight,
} from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Background styling
      setScrolled(currentScrollY > 20);
      
      // Hide/Show navbar based on scroll direction
      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        // Scrolling down & past 80px
        setHidden(true);
      } else if (currentScrollY < lastScrollY.current) {
        // Scrolling up
        setHidden(false);
      }
      
      lastScrollY.current = currentScrollY;
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      } ${
        scrolled
          ? " backdrop-blur-md py-3 shadow-xl"
          : "bg-transparent backdrop-blur-sm py-4 text-[#FFFAFA]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 text-[#FFFAFA] flex items-center justify-center shadow-md group-hover:scale-105 group-hover:border-purple-600/50 transition-all duration-300 shrink-0">
              <Terminal className="w-5 h-5 text-purple-500 group-hover:rotate-6 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-bold text-xl tracking-tight text-[#FFFAFA] flex items-center gap-1.5 leading-none">
                TechLearns
                <span className="text-[10px] font-mono uppercase tracking-wider font-semibold px-2 py-0.5 rounded-md bg-purple-600/20 text-purple-500 border border-purple-600/30 inline-flex items-center justify-center">
                  SkillOS
                </span>
              </span>
              <span className="text-[10px] text-neutral-400 tracking-wider mt-1 leading-none">
                Corporate Experience Ecosystem
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links with Modern Hover UX */}
          <nav className="hidden lg:flex items-center gap-1 bg-neutral-900/90 p-1.5 rounded-full border border-neutral-800 backdrop-blur-md text-sm font-bold text-neutral-300">
            <Link
              href="#programs"
              className="relative px-4 py-1.5 rounded-full text-neutral-300 hover:text-white transition-all duration-200 group flex items-center justify-center leading-none"
            >
              <span className="absolute inset-0 bg-neutral-800 rounded-full shadow-sm opacity-0 group-hover:opacity-100 group-hover:scale-100 scale-90 transition-all duration-200 ease-out -z-10" />
              <span className="relative z-10 leading-none">Programs</span>
            </Link>

            <Link
              href="#cel"
              className="relative px-4 py-1.5 rounded-full text-neutral-300 hover:text-white transition-all duration-200 group flex items-center justify-center leading-none"
            >
              <span className="absolute inset-0 bg-neutral-800 rounded-full shadow-sm opacity-0 group-hover:opacity-100 group-hover:scale-100 scale-90 transition-all duration-200 ease-out -z-10" />
              <span className="relative z-10 leading-none">CEL Framework</span>
            </Link>

            <Link
              href="#skillos"
              className="relative px-4 py-1.5 rounded-full text-neutral-300 hover:text-white transition-all duration-200 group flex items-center justify-center leading-none"
            >
              <span className="absolute inset-0 bg-neutral-800 rounded-full shadow-sm opacity-0 group-hover:opacity-100 group-hover:scale-100 scale-90 transition-all duration-200 ease-out -z-10" />
              <span className="relative z-10 leading-none">SkillOS Platform</span>
            </Link>

            <Link
              href="#passport"
              className="relative px-4 py-1.5 rounded-full text-neutral-300 hover:text-white transition-all duration-200 group flex items-center justify-center gap-1.5"
            >
              <span className="absolute inset-0 bg-neutral-800 rounded-full shadow-sm opacity-0 group-hover:opacity-100 group-hover:scale-100 scale-90 transition-all duration-200 ease-out -z-10" />
              <ShieldCheck className="w-4 h-4 text-purple-500 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-200 shrink-0 -translate-y-0.25" />
              <span className="relative z-10">Skill Passport</span>
            </Link>

            <Link
              href="#competitions"
              className="relative px-4 py-1.5 rounded-full text-neutral-300 hover:text-white transition-all duration-200 group flex items-center justify-center"
            >
              <span className="absolute inset-0 bg-neutral-800 rounded-full shadow-sm opacity-0 group-hover:opacity-100 group-hover:scale-100 scale-90 transition-all duration-200 ease-out -z-10" />
              <span className="relative z-10">Competitions</span>
            </Link>
          </nav>

          {/* Right CTA Buttons with Modern UX */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Secondary Sign In Button */}
            <Link
              href="#demo"
              className="relative text-sm font-semibold text-neutral-300 hover:text-white px-4 py-2 rounded-full border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 group overflow-hidden"
            >
              <LogIn className="w-4 h-4 text-neutral-400 group-hover:text-purple-500 group-hover:-translate-x-0.5 group-hover:scale-110 transition-all duration-300 -translate-y-0.25 shrink-0" />
              <span>Sign In</span>
            </Link>

            {/* Primary Start Experience Button (Smooth Left-to-Right Shrink) */}
            <div className="relative inline-flex items-center justify-end w-[185px] h-11 group">
              <Link
                href="#programs"
                className="relative inline-flex items-center justify-end h-11 w-full group-hover:w-11 rounded-full bg-purple-600 text-white text-sm font-bold border border-purple-600 shadow-md group-hover:shadow-lg group-hover:shadow-purple-600/30 active:scale-95 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden shrink-0 pr-1.5"
              >
                <span className="whitespace-nowrap pointer-events-none pr-2.5 select-none flex items-center leading-none">
                  Start Experience
                </span>
                <div className="w-8 h-8 rounded-full bg-[#181818] flex items-center justify-center !relative left-0.25 shrink-0 transition-transform duration-300">
                  <ArrowRight className="w-4 h-4 text-white stroke-[3] -rotate-[45deg] group-hover:rotate-0 transition-transform" />
                </div>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-neutral-300 hover:bg-neutral-800 active:scale-95 transition-all duration-200 flex items-center justify-center"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#181818] border-b border-neutral-800 px-4 pt-4 pb-6 space-y-4 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
          <Link
            href="#programs"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-semibold text-neutral-300 hover:text-purple-500 transition-colors"
          >
            Programs
          </Link>
          <Link
            href="#cel"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-semibold text-neutral-300 hover:text-purple-500 transition-colors"
          >
            CEL Framework
          </Link>
          <Link
            href="#skillos"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-semibold text-neutral-300 hover:text-purple-500 transition-colors"
          >
            SkillOS Platform
          </Link>
          <Link
            href="#passport"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-semibold text-neutral-300 hover:text-purple-500 transition-colors"
          >
            Skill Passport
          </Link>
          <div className="pt-4 border-t border-neutral-800 flex flex-col gap-3">
            <Link
              href="#demo"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 rounded-xl border border-neutral-800 font-semibold text-neutral-300 hover:bg-neutral-900 flex items-center justify-center gap-2 active:scale-95 transition-all leading-none"
            >
              <LogIn className="w-4 h-4 text-purple-500 shrink-0" />
              <span className="leading-none">Sign In</span>
            </Link>
            <Link
              href="#programs"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-xl bg-purple-600 font-bold text-white flex items-center justify-center gap-2 shadow-md hover:bg-purple-600 active:scale-95 transition-all leading-none"
            >
              <span className="leading-none">Start Experience</span>
              <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                <ArrowRight className="w-4 h-4 text-white stroke-[3]" />
              </div>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
