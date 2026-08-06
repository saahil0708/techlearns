import React from 'react';
import { FadeIn } from './animations/FadeIn';

export default function About() {
  return (
    <section id="about" className="py-24 sm:pt-52 px-4 sm:px-6 lg:px-8 bg-[#e4e6ea] flex justify-center items-center relative overflow-hidden border-t border-black/5">
      <FadeIn delay={0.2} duration={0.8} direction="up" className="max-w-[75rem] mx-auto text-center uppercase text-[32px] md:text-[44px] leading-[0.9] md:leading-[1.25] tracking-tight text-gray-900 z-10 font-bold">

        <span
          className="inline-flex items-center font-bebas tracking-[4px] scale-110 justify-center align-middle bg-purple-600 text-transparent px-4 sm:px-6 py-0 sm:py-1 rounded-full border border-purple-500 shadow-[0_0_20px_rgba(147,51,234,0.4)] transform rotate-3 mx-2 my-1"
          style={{ WebkitTextStroke: '0.15px #FFFAFA' }}
        >
          " TECHLEARNS
        </span>{' '}
        <span className="font-bebas tracking-[2px] m-2 text-[1.2em] align-middle">IS</span>{' '}
        <span
          className="inline-flex items-center font-bebas tracking-[4px] scale-110 justify-center align-middle bg-blue-600 text-transparent px-4 sm:px-6 py-0 sm:py-1 rounded-full border border-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.4)] transform -rotate-2 mx-2 my-1"
          style={{ WebkitTextStroke: '0.5px #FFFAFA' }}
        >
          INDIA'S
        </span>{' '}
        <span className="text-transparent font-bebas tracking-[4px] text-[1.3em] md:text-[1.4em] align-middle drop-shadow-md" style={{ WebkitTextStroke: '1px #111' }}>
          CORPORATE EXPERIENCE LEARNING
        </span>{' '}
        <span className="font-bebas tracking-[2px] font-medium text-[1.2em] align-middle">ECOSYSTEM WHERE STUDENTS</span>{' '}
        <br />
        <span className="text-purple-700 font-medium text-[1.4em] font-bebas tracking-[2px] align-middle">
          LEARN, BUILD REAL PRODUCTS,
        </span>{' '}
        <span className="font-bebas tracking-[2px] font-medium text-[1.2em] align-middle">WORK IN</span>{' '}
        <span className="text-black font-medium text-[1.2em] font-bebas tracking-[2px] align-middle">
          AGILE TEAMS,
        </span>{' '}
        <span className="font-bebas tracking-[2px] font-medium text-[1.2em] align-middle">COMPETE IN</span>{' '}
        <span className="text-transparent drop-shadow-md font-bebas tracking-[2px] text-[1.3em] align-middle" style={{ WebkitTextStroke: '0.5px #111' }}>
          NATIONAL CHALLENGES,
        </span>{' '}
        <span className="font-bebas tracking-[2px] font-medium text-[1.2em] align-middle">AND GRADUATE WITH A VERIFIED</span>{' '}
        <span
          className="inline-flex items-center justify-center font-bebas tracking-[4px] scale-110 align-middle bg-purple-600 text-transparent px-4 sm:px-6 py-0 sm:py-1 rounded-full border border-purple-500 shadow-[0_0_20px_rgba(147,51,234,0.4)] transform -rotate-1 mx-2 my-1"
          style={{ WebkitTextStroke: '0.5px #FFFAFA' }}
        >
          SKILL PASSPORT
        </span>{' '}
        <br className="hidden xl:block" />
        <span className="text-gray-600 font-sans font-medium font-bebas tracking-[4px] text-[1.3em] md:text-[1.4em] align-middle tracking-normal ml-2 mt-6 inline-block">
          — NOT JUST A CERTIFICATE.
        </span>

      </FadeIn>
    </section>
  );
}
