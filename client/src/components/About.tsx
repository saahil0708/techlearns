import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-24 sm:pt-52 px-4 sm:px-6 lg:px-8 bg-[#e4e6ea] flex justify-center items-center relative overflow-hidden border-t border-black/5">
      <div className="max-w-[75rem] mx-auto text-center uppercase text-[32px] md:text-[44px] leading-[0.9] md:leading-[1.25] tracking-tight text-gray-900 z-10 font-bold">

        <span 
          className="inline-flex items-center justify-center align-middle bg-purple-600 text-transparent px-4 sm:px-6 py-0 sm:py-1 rounded-full border border-purple-500 shadow-[0_0_20px_rgba(147,51,234,0.4)] transform rotate-3 mx-2 my-1"
          style={{ WebkitTextStroke: '0.15px #FFFAFA' }}
        >
          " TECHLEARNS
        </span>{' '}
        IS{' '}
        <span 
          className="inline-flex items-center justify-center align-middle bg-blue-600 text-transparent px-4 sm:px-6 py-0 sm:py-1 rounded-full border border-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.4)] transform -rotate-2 mx-2 my-1"
          style={{ WebkitTextStroke: '0.5px #FFFAFA' }}
        >
          INDIA'S
        </span>{' '}
        <span className="text-transparent drop-shadow-md" style={{ WebkitTextStroke: '0.5px #111' }}>
          CORPORATE EXPERIENCE LEARNING
        </span>{' '}
        ECOSYSTEM WHERE STUDENTS{' '}
        <br />
        <span className="text-purple-700 font-black">
          LEARN, BUILD REAL PRODUCTS,
        </span>{' '}
        WORK IN{' '}
        <span className="text-black">
          AGILE TEAMS,
        </span>{' '}
        COMPETE IN{' '}
        <span className="text-transparent drop-shadow-md" style={{ WebkitTextStroke: '0.5px #111' }}>
          NATIONAL CHALLENGES,
        </span>{' '}
        AND GRADUATE WITH A VERIFIED{' '}
        <span 
          className="inline-flex items-center justify-center align-middle bg-purple-600 text-transparent px-4 sm:px-6 py-0 sm:py-1 rounded-full border border-purple-500 shadow-[0_0_20px_rgba(147,51,234,0.4)] transform -rotate-1 mx-2 my-1"
          style={{ WebkitTextStroke: '0.5px #FFFAFA' }}
        >
          SKILL PASSPORT
        </span>{' '}
        <br className="hidden xl:block" />
        <span className="text-gray-600 font-sans font-black text-lg sm:text-xl md:text-2xl align-middle tracking-normal ml-2 mt-4 inline-block">
          — NOT JUST A CERTIFICATE.
        </span>

      </div>
    </section>
  );
}
