import React from 'react';
import { Clock, ArrowRight } from 'lucide-react';

const HeroSection = ({ hero }) => {
  return (
    <div className="relative py-10 md:py-30 mb-8 md:mb-12 overflow-hidden md:rounded-sm shadow-lg">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${hero.images})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70 md:bg-gradient-to-r md:from-black/70 md:via-black/50 md:to-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 py-6 sm:px-6 md:px-8 lg:px-12 md:py-10 lg:py-14 flex flex-col items-center text-center">
        {/* Session Time Badge */}
        <div className="mb-6 md:mb-8">
          <div className="inline-flex items-center gap-1.5 md:gap-2 bg-white/95 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full shadow-md">
            <Clock className="w-3.5 h-3.5 md:w-4 md:h-4 text-orange-500" />
            <span className="text-xs md:text-sm font-semibold text-gray-700">
              {hero.sesionTime}
            </span>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-2xl flex flex-col items-center text-center">
          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 md:mb-3 leading-tight">
            {hero.heading}
          </h1>

          {/* Subheading */}
          <h2 className="text-lg sm:text-xl md:text-2xl text-orange-200 font-semibold mb-3 md:mb-4">
            {hero.subHeading}
          </h2>

          {/* Description */}
          <p className="text-white/90 text-sm md:text-base leading-relaxed mb-4 md:mb-6 line-clamp-3 md:line-clamp-none max-w-xl">
            {hero.description}
          </p>

          {/* CTA Button */}
          <div className="flex justify-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 md:px-6 md:py-2.5 rounded-full font-semibold text-sm md:text-base transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
              অর্ডার করুন
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-16 md:h-20 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default HeroSection;
