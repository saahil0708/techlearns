"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import GitHubIcon from '@mui/icons-material/GitHub';
import { X } from '@mui/icons-material';
import { YouTube } from '@mui/icons-material';

export default function Footer() {
  return (
    <footer className="relative w-full max-w-[100vw] pt-24 border-t border-purple-500/20 font-sans overflow-hidden bg-transparent">

      {/* Deep purple hazy glow matching the coal texture behavior */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[600px] bg-purple-600/10 blur-[120px] pointer-events-none rounded-full" />

      {/* Main Grid Content - Matches the image layout */}
      <div className="w-full max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-20">

        {/* Column 1: Brand & Contact Info */}
        <div className="lg:col-span-4 flex flex-col gap-10">

          <div className="flex items-center gap-4">
            {/* Custom Sharp 4-Point Star SVG (Matching Image) */}
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
              <path d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z" fill="#a855f7" />
            </svg>
            <div className="flex flex-col">
              <h2 className="text-3xl sm:text-4xl text-white uppercase leading-none flex items-start font-black">
                TECHLEARNS<sup className="text-sm font-light mt-1 ml-0.5">®</sup>
              </h2>
              <span className="text-[9px] tracking-[0.45em] text-white uppercase mt-1.5 ml-1 font-bold">P R E S E N T</span>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="text-white uppercase tracking-wider text-sm mb-1 font-bold">Find Us</h4>
            <p className="text-sm leading-relaxed text-gray-400">
              123 Innovation Boulevard,<br />
              Bengaluru, KA 560001
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="text-white uppercase tracking-wider text-sm mb-1 font-bold">Call Us</h4>
            <p className="text-sm leading-relaxed text-gray-400">
              +91 (800) 123-4567
            </p>
          </div>
        </div>

        {/* Column 2: Pages */}
        <div className="lg:col-span-2 flex flex-col gap-4 pt-2">
          <h4 className="text-purple-400 uppercase tracking-[5px] text-2xl mb-3 font-bold font-bebas">Pages</h4>
          <Link href="#" className="hover:text-white transition-colors text-sm text-gray-400">Home</Link>
          <Link href="#" className="hover:text-white transition-colors text-sm text-gray-400">About Us</Link>
          <Link href="#" className="hover:text-white transition-colors text-sm text-gray-400">Our Services</Link>
          <Link href="#" className="hover:text-white transition-colors text-sm text-gray-400">Portfolio</Link>
          <Link href="#" className="hover:text-white transition-colors text-sm text-gray-400">FAQs</Link>
          <Link href="#" className="hover:text-white transition-colors text-sm text-gray-400">Contact Us</Link>
        </div>

        {/* Column 3: Connect With Us */}
        <div className="lg:col-span-3 flex flex-col gap-4 pt-2">
          <h4 className="text-purple-400 uppercase tracking-[5px] font-bebas text-2xl mb-3 font-bold">Connect With Us</h4>

          <Link href="#" className="flex items-center gap-3 hover:text-white transition-colors text-sm text-gray-400 group">
            <PinterestIcon className="text-purple-500 group-hover:text-white transition-colors" sx={{ fontSize: 18 }} /> Pinterest
          </Link>
          <Link href="#" className="flex items-center gap-3 hover:text-white transition-colors text-sm text-gray-400 group">
            <GitHubIcon className="text-purple-500 group-hover:text-white transition-colors" sx={{ fontSize: 18 }} /> Github
          </Link>
          <Link href="#" className="flex items-center gap-3 hover:text-white transition-colors text-sm text-gray-400 group">
            <LinkedInIcon className="text-purple-500 group-hover:text-white transition-colors" sx={{ fontSize: 18 }} /> LinkedIn
          </Link>
          <Link href="#" className="flex items-center gap-3 hover:text-white transition-colors text-sm text-gray-400 group">
            <YouTube className="text-purple-500 group-hover:text-white transition-colors" sx={{ fontSize: 18 }} /> YouTube
          </Link>
          <Link href="#" className="flex items-center gap-3 hover:text-white transition-colors text-sm text-gray-400 group">
            <InstagramIcon className="text-purple-500 group-hover:text-white transition-colors" sx={{ fontSize: 18 }} /> Instagram
          </Link>
          <Link href="#" className="flex items-center gap-3 hover:text-white transition-colors text-sm text-gray-400 group">
            <X className="text-purple-500 group-hover:text-white transition-colors" sx={{ fontSize: 18 }} /> X Twitter
          </Link>
        </div>

        {/* Column 4: Phone, Email, Text */}
        <div className="lg:col-span-3 flex flex-col gap-8 pt-2">

          <div className="flex items-center gap-4">
            <h3 className="text-white text-2xl sm:text-3xl font-black tracking-tighter">(+91) 4356 2345</h3>
            <div className="flex flex-col text-[10px] leading-tight text-gray-500 uppercase tracking-widest font-bold">
              <span>Phone</span>
              <span>Number</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <h3 className="text-white text-2xl sm:text-3xl font-black tracking-tighter">hello@tech.com</h3>
            <div className="flex flex-col text-[10px] leading-tight text-gray-500 uppercase tracking-widest font-bold">
              <span>Email</span>
              <span>Address</span>
            </div>
          </div>

          <p className="text-sm leading-relaxed text-gray-400 mt-2">
            With a team of passionate educators, technologists, and innovators, we specialize in delivering unique solutions that elevate your skills and captivate your mind.
          </p>
        </div>

      </div>

      {/* Massive Outlined Animated Text */}
      <div className="w-full relative z-10 pt-4 sm:pt-6 overflow-hidden flex">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
        >
          {[...Array(4)].map((_, i) => (
            <span
              key={i}
              // Bebas Neue is a condensed font, so we can make the height massively tall
              className="text-[180px] sm:text-[280px] lg:text-[420px] uppercase leading-none mx-4 sm:mx-8 text-transparent select-none drop-shadow-[0_0_15px_rgba(147,51,234,0.3)]"
              // The trick to a perfectly sharp, thin outline is a 1px SOLID color stroke.
              style={{ WebkitTextStroke: '1.5px #a855f7', fontFamily: 'var(--font-bebas)' }}
            >
              TECHLEARNS ACADEMY *
            </span>
          ))}
        </motion.div>
      </div>

    </footer>
  );
}
