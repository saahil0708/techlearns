
import { FadeIn } from "../animations/FadeIn";

import { FluidArrowRight } from "@/utils/fluid_arrow";

export default function CTA() {
  return (
    <section className="relative py-16 px-4 sm:px-6 bg-none flex justify-center font-sans">
      <div className="w-full max-w-[1200px] relative flex flex-col md:flex-row items-center pt-10 px-8 md:pt-0 md:px-16 min-h-[300px]">

        {/* Background Layer with normal overflow-hidden */}
        <div className="absolute inset-0 bg-[#170C26] rounded-[32px] overflow-hidden z-0 shadow-2xl">
          {/* Curvy Purple Shades */}
          <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-[#8C52FF] rounded-[100%] blur-[120px] opacity-30"></div>
          <div className="absolute bottom-[10%] -right-[10%] w-[50%] h-[50%] bg-[#C6A0FF] rounded-[100%] blur-[100px] opacity-20"></div>
          <div className="absolute top-[30%] left-[30%] w-[40%] h-[40%] bg-[#5B21B6] rounded-[100%] blur-[100px] opacity-30"></div>

          {/* Polka Dots (Curvy/Radial Mask) */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(circle,#8C52FF_2.5px,transparent_2.5px)] bg-[size:32px_32px] opacity-20 [mask-image:radial-gradient(ellipse_60%_80%_at_50%_50%,#000_10%,transparent_100%)]"></div>
          </div>
        </div>

        {/* Left Column (Content) */}
        <div className="relative z-10 w-full md:w-1/2 flex flex-col items-start text-left py-12 md:py-16 mb-8 md:mb-0">
          <FadeIn delay={0.1} direction="up" className="flex flex-col items-start">
            <h2 className="text-[36px] md:text-[44px] lg:text-[52px] text-white font-semibold font-flexa leading-[1.1] mb-5 max-w-[480px] tracking-tight">
              Ready to Transform Your Career?
            </h2>
            <p className="text-[#D4B3FF] text-[15px] md:text-[17px] mb-8 max-w-[520px] font-flexa leading-relaxed">
              Experience the future of learning with our cutting-edge tech education platform. Start optimizing your career journey today!
            </p>
            <a href="#apply" className="inline-flex font-bebas items-center justify-center bg-white text-[#170C26] px-8 py-4 rounded-full font-bold text-[20px] tracking-[0.1em] hover:bg-gray-100 transition-colors shadow-[0_0_30px_rgba(140,82,255,0.4)]">
              Request Callback <FluidArrowRight className="ml-2" size={20} />
            </a>
          </FadeIn>
        </div>

        {/* Right Column (Enlarged Image with High Z-Index) */}
        <div className="relative z-[100] w-full md:w-1/2 flex justify-center md:justify-end items-end self-stretch md:absolute md:right-0 md:bottom-0 md:top-0 pointer-events-none">
          <FadeIn delay={0.3} direction="left" className="relative w-full flex items-end justify-center md:justify-end">
            <img
              src="/images/Phone_bg.png"
              alt="TechLearns Platform Mobile View"
              className="w-[260px] sm:w-[320px] md:w-[400px] object-contain object-bottom md:-translate-x-10 pointer-events-auto drop-shadow-2xl"
              style={{ maxHeight: 'none' }}
            />
          </FadeIn>
        </div>

      </div>
    </section>
  );
}
