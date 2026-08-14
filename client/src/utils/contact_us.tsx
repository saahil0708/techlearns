import { Link } from 'react-router-dom';

export default function ContactUsButton() {
  return (
    <div className="hidden lg:block fixed right-0 top-1/2 -translate-y-1/2 z-[100] perspective-[200px]">
      <Link
        to="#contact"
        className="bg-[#8C52FF] hover:bg-[#7a41ec] text-white font-bold py-6 px-3 rounded-l-xl shadow-2xl border border-r-0 border-white/20 transition-all duration-300 origin-right [transform:perspective(200px)_rotateY(-12deg)] hover:[transform:perspective(200px)_rotateY(0deg)] flex items-center justify-center group"
      >
        <span
          style={{ writingMode: 'vertical-rl' }}
          className="rotate-180 tracking-[0.2em] text-sm uppercase group-hover:scale-105 transition-transform font-bold"
        >
          Contact Us
        </span>
      </Link>
    </div>
  );
}
