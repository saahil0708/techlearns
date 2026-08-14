
import { motion } from 'framer-motion';

import { MessageSquare, Mail } from 'lucide-react';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


const footerLinks = [
  {
    title: "Techlearns",
    links: [
      "About Us",
      "Corporate Experience Learning",
      "SkillOS",
      "Trust & Quality Policy",
      "Careers at Techlearns"
    ]
  },
  {
    title: "Programs",
    links: [
      "Generative AI & Agentic AI Engineering",
      "Full-Stack Software Engineering with AI",
      "Data Analytics + BI + GenAI",
      "Cybersecurity & SOC Analyst",
      "Cloud, DevOps & Platform Engineering",
      "View All Programs"
    ]
  },
  {
    title: "Ecosystem",
    links: [
      "Competitions & Future Skills League",
      "Certifications & Credentials",
      "Skill Passport",
      "Skill Report / Blog"
    ]
  },
  {
    title: "Partnerships",
    links: [
      "For Colleges",
      "For Employers",
      "Industry Skill Council",
      "Challenge Bank"
    ]
  },
  {
    title: "Get in Touch",
    links: [
      "Book a Diagnostic",
      "Contact Us"
    ]
  }
];

export default function Footer() {
  return (
    <footer className="relative bg-[#0A0514] pt-32 overflow-hidden flex flex-col justify-between border-t border-white/5">

      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[80%] h-[500px] bg-[#8C52FF]/10 rounded-[100%] blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[50%] h-[500px] bg-[#5B21B6]/20 rounded-[100%] blur-[150px] pointer-events-none"></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="w-full max-w-7xl mx-auto px-6 relative z-10 flex flex-col flex-grow">

        {/* Enhanced Links Grid (5-Column) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 xl:gap-12 mb-16 mt-12 w-full max-w-7xl mx-auto px-4">
          {footerLinks.map((section, idx) => (
            <div key={idx} className="flex flex-col gap-6 relative group">
              <h4 className="font-bebas tracking-wider text-[22px] text-white font-semibold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#8C52FF]"></span>
                {section.title}
              </h4>
              <ul className="flex flex-col gap-3">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a href="#" className="font-flexa text-[#8a8a8a] hover:text-white text-[15px] font-medium transition-all duration-300 flex items-center gap-2 group/link">
                      <span className="w-0 h-px bg-[#caff00] transition-all duration-300 group-hover/link:w-3"></span>
                      <span className="group-hover/link:translate-x-1 transition-transform duration-300">{link}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Icons & Contact Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 py-8 border-t border-white/10 max-w-7xl mx-auto w-full px-4 mb-4">
          <div className="flex items-center gap-6">
            <h3 className="font-bebas text-3xl text-white tracking-widest flex items-center gap-3">
              <span className="w-8 h-8 bg-gradient-to-br from-[#8C52FF] to-[#5B21B6] rounded-lg flex items-center justify-center text-lg shadow-[0_0_15px_rgba(140,82,255,0.4)]">T</span>
              TECHLEARNS
            </h3>
            <span className="hidden md:block w-px h-6 bg-white/20"></span>
            <a href="mailto:hello@techlearns.com" className="text-gray-400 hover:text-white transition-colors font-flexa text-sm flex items-center gap-2">
              <Mail size={16} className="text-[#8C52FF]" /> hello@techlearns.com
            </a>
          </div>

          <div className="flex items-center gap-3">
            {[TwitterIcon, LinkedInIcon, GitHubIcon, MessageSquare].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-black hover:border-[#caff00] hover:bg-[#caff00] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_5px_15px_rgba(202,255,0,0.3)]">
                <Icon size={18} style={{ fontSize: 18, width: 18, height: 18 }} />
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* Massive Outlined Animated Text */}
      <div className="w-full relative z-10 pt-4 sm:pt-6 overflow-hidden flex opacity-80">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
        >
          {[...Array(4)].map((_, i) => (
            <span
              key={i}
              className="text-[180px] sm:text-[280px] lg:text-[380px] font-bebas uppercase leading-none mx-4 sm:mx-8 text-transparent select-none drop-shadow-[0_0_30px_rgba(202,255,0,0.15)]"
              style={{ WebkitTextStroke: '2px rgba(255, 255, 255, 0.7)' }}
            >
              TECHLEARNS ACADEMY *
            </span>
          ))}
        </motion.div>
      </div>

      {/* Absolute Bottom Copyright Bar */}
      <div className="w-full bg-black/30 py-6 relative z-10 border-t border-white/5 backdrop-blur-md mt-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col justify-center items-center gap-3 text-[13px] font-sans text-[#8a8a8a]">
          <p>© Techlearns. Corporate Experience Learning | Learn. Experience. Build. Lead.</p>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>·</span>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <span>·</span>
            <a href="#" className="hover:text-white transition-colors">Refund Policy</a>
            <span>·</span>
            <a href="#" className="hover:text-white transition-colors">Claims & Outcomes Disclosure</a>
          </div>
        </div>
      </div>

    </footer>
  );
}
