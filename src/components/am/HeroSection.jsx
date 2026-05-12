import React from 'react';
import {
  Clock,
  Leaf,
  Shield,
  Truck,
  Star,
  ArrowRight,
  ChevronRight,
} from 'lucide-react';

const HeroSection = ({ hero }) => {
  return (
    <div className="relative mb-8 md:mb-12 overflow-hidden  md:rounded-sm shadow-lg">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${hero.images})` }}
      >
        {/* Gradient Overlay - Darker on mobile for better readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70 md:bg-gradient-to-r md:from-black/70 md:via-black/50 md:to-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 py-6 sm:px-6 md:px-8 lg:px-12 md:py-10 lg:py-14">
        {/* Top Section - Session Time & Badges */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-6 md:mb-8">
          {/* Session Time Badge */}
          <div className="inline-flex items-center gap-1.5 md:gap-2 bg-white/95 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full shadow-md">
            <Clock className="w-3.5 h-3.5 md:w-4 md:h-4 text-orange-500" />
            <span className="text-xs md:text-sm font-semibold text-gray-700">
              {hero.sesionTime}
            </span>
          </div>

          {/* Trust Badges - Hidden on very small screens, visible on tablet+ */}
          <div className="hidden sm:flex gap-2">
            <div className="bg-white/90 backdrop-blur-sm px-2.5 py-1 md:px-3 md:py-1.5 rounded-full flex items-center gap-1">
              <Leaf className="w-3 h-3 md:w-3.5 md:h-3.5 text-green-600" />
              <span className="text-xs font-medium text-gray-700">
                Naturally Grown
              </span>
            </div>
            <div className="bg-white/90 backdrop-blur-sm px-2.5 py-1 md:px-3 md:py-1.5 rounded-full flex items-center gap-1">
              <Shield className="w-3 h-3 md:w-3.5 md:h-3.5 text-blue-600" />
              <span className="text-xs font-medium text-gray-700">
                ১০০% হাইজিন
              </span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-2xl">
          {/* Star Rating */}
          <div className="flex items-center gap-1.5 md:gap-2 mb-3 md:mb-4">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-3.5 h-3.5 md:w-4 md:h-4 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <span className="text-xs md:text-sm text-white/80">
              ২,৫০০+ গ্রাহকের রেটিং
            </span>
          </div>

          {/* Heading - Smaller font on mobile */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 md:mb-3 leading-tight">
            {hero.heading}
          </h1>

          {/* Subheading */}
          <h2 className="text-lg sm:text-xl md:text-2xl text-orange-200 font-semibold mb-3 md:mb-4">
            {hero.subHeading}
          </h2>

          {/* Description - Shorter on mobile */}
          <p className="text-white/90 text-sm md:text-base leading-relaxed mb-4 md:mb-6 line-clamp-3 md:line-clamp-none">
            {hero.description}
          </p>

          {/* Special Offer Box - Compact on mobile */}
          <div className="bg-white/15 backdrop-blur-md rounded-lg md:rounded-xl p-3 md:p-4 mb-4 md:mb-6 border border-white/20">
            <div className="flex items-start gap-2 md:gap-3">
              <div className="w-7 h-7 md:w-8 md:h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Truck className="w-3.5 h-3.5 md:w-4 md:h-4 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-xs md:text-sm font-semibold text-white">
                  স্পেশাল অফার
                </p>
                <p className="text-xs md:text-sm text-white/80">
                  Fresh from garden, naturally grown without chemicals.
                </p>
                <p className="text-orange-200 text-xs mt-1 hidden sm:block">
                  ফ্রি ডেলিভারি ৫০০+ টাকার অর্ডারেই
                </p>
              </div>
            </div>
          </div>

          {/* Free Delivery Notice - Visible only on mobile */}
          <p className="text-orange-200 text-xs mb-4 sm:hidden">
            🚚 ফ্রি ডেলিভারি ৫০০+ টাকার অর্ডারেই
          </p>

          {/* CTA Buttons - Stack on mobile, row on tablet+ */}
          <div className="flex flex-col sm:flex-row gap-3 mb-5 md:mb-6">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 md:px-6 md:py-2.5 rounded-full font-semibold text-sm md:text-base transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
              অর্ডার করুন
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-5 py-2.5 md:px-6 md:py-2.5 rounded-full font-semibold text-sm md:text-base transition-all duration-300 border border-white/30 flex items-center justify-center gap-2">
              বিস্তারিত দেখুন
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Features - Simplified on mobile */}
          <div className="flex flex-wrap gap-3 md:gap-4 pt-3 md:pt-4 border-t border-white/20">
            <div className="flex items-center gap-1.5 md:gap-2">
              <div className="w-5 h-5 md:w-6 md:h-6 bg-green-500/20 rounded-full flex items-center justify-center">
                <Leaf className="w-2.5 h-2.5 md:w-3 md:h-3 text-green-300" />
              </div>
              <span className="text-xs text-white/80">
                প্রিমিয়াম কোয়ালিটি
              </span>
            </div>
            <div className="flex items-center gap-1.5 md:gap-2">
              <div className="w-5 h-5 md:w-6 md:h-6 bg-blue-500/20 rounded-full flex items-center justify-center">
                <Shield className="w-2.5 h-2.5 md:w-3 md:h-3 text-blue-300" />
              </div>
              <span className="text-xs text-white/80">১২০° স্টেরিলাইজড</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-16 md:h-20 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default HeroSection;
