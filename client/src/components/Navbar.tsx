"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, Menu, X, Shield, Terminal } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#090d16]/80 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl shadow-indigo-950/20"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-0.5 shadow-lg shadow-indigo-500/30 group-hover:shadow-indigo-500/50 transition-all duration-300">
              <div className="w-full h-full bg-[#090d16] rounded-[10px] flex items-center justify-center">
                <Terminal className="w-5 h-5 text-indigo-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl tracking-tight text-white flex items-center gap-1.5">
                Techlearns
                <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                  SkillOS
                </span>
              </span>
              <span className="text-[10px] text-gray-400 font-mono tracking-wider">
                Corporate Experience Ecosystem
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-300">
            <Link
              href="#programs"
              className="hover:text-white transition-colors hover:scale-105 transform duration-200"
            >
              Programs
            </Link>
            <Link
              href="#cel"
              className="hover:text-white transition-colors flex items-center gap-1 hover:scale-105 transform duration-200"
            >
              CEL Framework
            </Link>
            <Link
              href="#skillos"
              className="hover:text-white transition-colors hover:scale-105 transform duration-200"
            >
              SkillOS Platform
            </Link>
            <Link
              href="#passport"
              className="hover:text-white transition-colors flex items-center gap-1.5 hover:scale-105 transform duration-200"
            >
              <Shield className="w-4 h-4 text-emerald-400" />
              Skill Passport
            </Link>
            <Link
              href="#competitions"
              className="hover:text-white transition-colors hover:scale-105 transform duration-200"
            >
              Competitions
            </Link>
          </nav>

          {/* Desktop Right CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="#demo"
              className="text-sm font-medium text-gray-300 hover:text-white px-4 py-2 rounded-lg hover:bg-white/5 transition-all"
            >
              Sign In
            </Link>
            <Link
              href="#programs"
              className="relative group inline-flex items-center justify-center p-0.5 rounded-xl text-sm font-semibold text-white overflow-hidden shadow-lg shadow-indigo-500/25"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 group-hover:opacity-90 transition-opacity"></span>
              <span className="relative px-5 py-2.5 rounded-[10px] bg-[#090d16] group-hover:bg-opacity-0 transition-all duration-300 flex items-center gap-2">
                <span>Start Experience</span>
                <ArrowRight className="w-4 h-4 text-indigo-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </span>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#090d16]/95 border-b border-white/10 backdrop-blur-xl px-4 pt-4 pb-6 space-y-4">
          <Link
            href="#programs"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-gray-300 hover:text-white py-2"
          >
            Programs
          </Link>
          <Link
            href="#cel"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-gray-300 hover:text-white py-2"
          >
            CEL Framework
          </Link>
          <Link
            href="#skillos"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-gray-300 hover:text-white py-2"
          >
            SkillOS Platform
          </Link>
          <Link
            href="#passport"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-gray-300 hover:text-white py-2"
          >
            Skill Passport
          </Link>
          <Link
            href="#competitions"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-gray-300 hover:text-white py-2"
          >
            Competitions
          </Link>
          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <Link
              href="#programs"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 font-semibold text-white shadow-lg"
            >
              Start Experience
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
