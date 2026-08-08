import React from 'react';
import Link from 'next/link';
import CourseCard3D from './CourseCard3D';
import { FadeIn } from './animations/FadeIn';

const COURSES = [
  {
    id: 'fse',
    title: 'Full Stack Engineering',
    description: 'Master the entire stack from responsive frontends to scalable backends. Build production-ready web applications from scratch.',
    duration: '6 Months',
    level: 'Intermediate to Advanced',
    benefits: ['10+ Industry Projects', 'MAANG Mentorship', 'Placement Guarantee'],
    icon: 'Code2'
  },
  {
    id: 'bca',
    title: 'Backend & Cloud Architecture',
    description: 'Design robust, high-performance distributed systems. Learn microservices, containerization, and AWS cloud infrastructure.',
    duration: '6 Months',
    level: 'Advanced',
    benefits: ['AWS Certification Prep', 'High-Scale System Design', '24/7 Cloud Labs'],
    icon: 'Cloud'
  },
  {
    id: 'dsai',
    title: 'Data Science & AI',
    description: 'Dive deep into machine learning algorithms, data engineering, and generative AI. Build intelligent data-driven applications.',
    duration: '8 Months',
    level: 'Beginner to Intermediate',
    benefits: ['Real-world Datasets', 'Build your own LLM apps', 'Advanced Analytics'],
    icon: 'BrainCircuit'
  }
];

export default function CoursesSection() {
  return (
    <section className="py-24 sm:py-32 bg-[#252525] relative overflow-hidden border-t border-black/20">
      
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 translate-x-1/3" />

      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Header Section (With Button on Right) */}
        <FadeIn delay={0.1} direction="up" className="flex flex-col lg:flex-row gap-8 items-start justify-between mb-16 sm:mb-24 w-full">
          
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start justify-start">
            {/* Left: Star + 18px Heading */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0 lg:pt-3">
              <span className="text-[34px] sm:text-[44px] font-serif text-purple-500 leading-[0] translate-y-[2px] sm:translate-y-[6px] drop-shadow-md">*</span>
              <span className="text-[18px] sm:text-[30px] tracking-[3px] font-bebas uppercase text-gray-400 font-bold">
                OUR PROGRAMS
              </span>
            </div>

            {/* Middle: 64px Subheading */}
            <div className="max-w-3xl">
              <h2 className="text-4xl sm:text-5xl md:text-[64px] leading-[1.1] tracking-tight uppercase text-white drop-shadow-sm font-black">
                EXPLORE OUR <br className="hidden lg:block" />
                MASTER COURSES
              </h2>
            </div>
          </div>

          {/* Right: View All Button */}
          <div className="shrink-0 lg:pt-4 lg:translate-y-15">
            <Link 
              href="#courses" 
              className="group inline-flex items-center gap-3 px-4 font-bebas py-3 text-purple-600 rounded border-2 border-purple-600 uppercase tracking-[5px] text-lg hover:bg-purple-600 hover:text-white transition-colors duration-300 shadow-md font-medium"
            >
              VIEW ALL COURSES
            </Link>
          </div>
          
        </FadeIn>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 [perspective:1500px]">
          {COURSES.map((course, idx) => (
            <FadeIn key={course.id} delay={0.2 + (idx * 0.15)} direction="up" className="h-full">
              <CourseCard3D course={course} index={idx} />
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
