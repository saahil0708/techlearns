

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Search, Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col font-flexa bg-[#050505] border-b border-white/10 shadow-md">
      <div className="mx-auto w-full max-w-[1400px]">
        <div className="relative flex items-center justify-between px-4 lg:px-8 h-[90px]">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3 group">
            {/* The Logo Block */}
            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-gradient-to-br from-[#5B2D91] to-[#8C52FF] flex items-center justify-center shadow-[0_8px_16px_rgba(91,45,145,0.25)] relative overflow-hidden transition-all duration-500 group-hover:shadow-[0_12px_24px_rgba(140,82,255,0.4)] group-hover:-translate-y-0.5">
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
              <span className="text-white text-2xl lg:text-3xl font-extrabold font-heading relative z-10 group-hover:scale-110 transition-transform duration-500">T</span>
            </div>

            <div className="flex flex-col justify-center">
              <span className="font-bold text-xl lg:text-2xl tracking-tight text-white leading-none uppercase">
                TechLearns
              </span>
              <div className="h-[2px] bg-gradient-to-r from-[#8C52FF] to-transparent w-full my-1 rounded-full opacity-60" />
              <span className="text-[9px] lg:text-[10px] text-neutral-400 tracking-[0.05em] leading-none uppercase font-bold">
                Get Hired First, Then Trained.
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-8 text-[14px] lg:text-[15px] font-semibold text-white/90 h-full">
            <Link to="#" className="relative hover:text-[#8C52FF] transition-colors group py-2">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#8C52FF] transition-all duration-300 group-hover:w-full rounded-full"></span>
            </Link>

            <div
              className="relative flex items-center gap-1.5 hover:text-[#8C52FF] transition-colors h-full cursor-pointer group"
              onMouseEnter={() => setActiveDropdown('programs')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              Programs
              <motion.div animate={{ rotate: activeDropdown === 'programs' ? 180 : 0 }} transition={{ duration: 0.2 }}>
                <ChevronDown className="w-4 h-4 text-neutral-400 group-hover:text-[#8C52FF] transition-colors" />
              </motion.div>

              {/* Premium Dark Frosted Dropdown */}
              <AnimatePresence>
                {activeDropdown === 'programs' && (
                  <motion.div
                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-[80%] left-0 mt-2 w-72 bg-[#111] border border-white/10 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.5)] overflow-hidden origin-top-left"
                  >
                    <div className="flex flex-col p-2">
                      <Link to="#" className="px-4 py-3 rounded-xl hover:bg-white/5 hover:text-[#8C52FF] transition-all flex items-center gap-3 group/link">
                        <div className="w-8 h-8 rounded-full bg-[#8C52FF]/10 flex items-center justify-center group-hover/link:bg-[#5B2D91]/30 transition-colors">
                          <span className="text-[#8C52FF] text-xs font-bold">FS</span>
                        </div>
                        <span className="font-medium text-white group-hover/link:text-[#8C52FF]">Full Stack Web Development</span>
                      </Link>
                      <Link to="#" className="px-4 py-3 rounded-xl hover:bg-white/5 hover:text-[#8C52FF] transition-all flex items-center gap-3 group/link">
                        <div className="w-8 h-8 rounded-full bg-[#8C52FF]/10 flex items-center justify-center group-hover/link:bg-[#5B2D91]/30 transition-colors">
                          <span className="text-[#8C52FF] text-xs font-bold">DS</span>
                        </div>
                        <span className="font-medium text-white group-hover/link:text-[#8C52FF]">Data Science & AI</span>
                      </Link>
                      <Link to="#" className="px-4 py-3 rounded-xl hover:bg-white/5 hover:text-[#8C52FF] transition-all flex items-center gap-3 group/link">
                        <div className="w-8 h-8 rounded-full bg-[#8C52FF]/10 flex items-center justify-center group-hover/link:bg-[#5B2D91]/30 transition-colors">
                          <span className="text-[#8C52FF] text-xs font-bold">CS</span>
                        </div>
                        <span className="font-medium text-white group-hover/link:text-[#8C52FF]">Cyber Security</span>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="#" className="relative hover:text-[#8C52FF] transition-colors group py-2">
              NFET Exam
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#8C52FF] transition-all duration-300 group-hover:w-full rounded-full"></span>
            </Link>
            <Link to="#" className="relative hover:text-[#8C52FF] transition-colors group py-2">
              Campus Life
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#8C52FF] transition-all duration-300 group-hover:w-full rounded-full"></span>
            </Link>
            <Link to="#" className="relative hover:text-[#8C52FF] transition-colors group py-2">
              Blogs
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#8C52FF] transition-all duration-300 group-hover:w-full rounded-full"></span>
            </Link>
            <Link to="#" className="relative hover:text-[#8C52FF] transition-colors group py-2">
              About Us
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#8C52FF] transition-all duration-300 group-hover:w-full rounded-full"></span>
            </Link>
          </nav>

          {/* Right Section (CTA + Search) */}
          <div className="hidden lg:flex items-center gap-4 lg:gap-6">
            <Link
              to="#apply"
              className="relative inline-flex items-center justify-center px-6 lg:px-8 py-3 text-[13px] lg:text-[14px] font-bold text-white uppercase tracking-wider rounded-full bg-gradient-to-r from-[#5B2D91] to-[#8C52FF] group overflow-hidden shadow-[0_8px_20px_rgba(140,82,255,0.25)] hover:shadow-[0_12px_25px_rgba(91,45,145,0.35)] hover:-translate-y-0.5 transition-all duration-300"
            >
              {/* Shimmer Effect */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-shimmer" />
              <span className="relative z-10 flex items-center gap-2">
                Apply Now
              </span>
            </Link>

            <button className="w-10 h-10 lg:w-11 lg:h-11 rounded-full bg-white/5 border border-white/10 shadow-sm flex items-center justify-center text-neutral-400 hover:bg-white/10 hover:text-white transition-all backdrop-blur-sm">
              <Search className="w-4 h-4 lg:w-5 lg:h-5" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-white hover:text-[#8C52FF] transition-colors z-50 relative"
          >
            <motion.div animate={{ rotate: mobileMenuOpen ? 90 : 0 }}>
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </motion.div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="xl:hidden bg-[#0A0A0A]/95 backdrop-blur-2xl border-b border-white/10 overflow-hidden shadow-2xl"
          >
            <div className="px-4 py-6 flex flex-col gap-2 max-h-[80vh] overflow-y-auto">
              {['Home', 'Programs', 'NFET Exam', 'Campus Life', 'Blogs', 'About Us'].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link to="#" onClick={() => setMobileMenuOpen(false)} className="block text-white/90 hover:text-[#8C52FF] font-semibold text-xl py-3 border-b border-white/5 transition-colors">
                    {item}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-6"
              >
                <Link
                  to="#apply"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center w-full px-6 py-4 text-[15px] font-bold text-white uppercase tracking-wider rounded-xl bg-gradient-to-r from-[#5B2D91] to-[#8C52FF] text-center shadow-[0_8px_20px_rgba(140,82,255,0.3)] active:scale-95 transition-transform"
                >
                  Apply Now
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
