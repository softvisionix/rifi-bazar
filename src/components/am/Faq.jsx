import { useState } from 'react';
import {
  ChevronDown,
  HelpCircle,
  MessageCircle,
  Mail,
  Phone,
} from 'lucide-react';

export default function Faq({ faq }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = index => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 md:py-20 px-4 bg-gradient-to-br from-white via-gray-50/30 to-white">
      <div className="">
        {/* Header Section */}
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-100 rounded-full mb-4">
            <HelpCircle className="w-4 h-4 text-orange-600" />
            <span className="text-xs font-semibold text-orange-700 tracking-wide">
              জিজ্ঞাসা & উত্তর
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-3">
            সাধারণ জিজ্ঞাসা
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto">
            আপনার মনেহ যেকোনো প্রশ্নের উত্তর এখানে খুঁজে নিন। আরও কোনো কিছু
            জানতে চাইলে আমাদের সাথে যোগাযোগ করুন।
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-orange-400 to-amber-400 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* FAQ List */}
        <div className="space-y-3 md:space-y-4">
          {faq.map((item, index) => (
            <div
              key={index}
              className={`group bg-white rounded-xl md:rounded-2xl border transition-all duration-300 overflow-hidden ${
                openIndex === index
                  ? 'border-orange-200 shadow-lg shadow-orange-100/50'
                  : 'border-gray-100 hover:border-orange-100 hover:shadow-md'
              }`}
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between px-5 md:px-6 py-4 md:py-5 text-left cursor-pointer"
              >
                <div className="flex items-center gap-3 md:gap-4">
                  <div
                    className={`flex-shrink-0 w-6 h-6 md:w-7 md:h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                      openIndex === index
                        ? 'bg-orange-500 text-white'
                        : 'bg-orange-100 text-orange-500 group-hover:bg-orange-200'
                    }`}
                  >
                    <span className="text-xs md:text-sm font-bold">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <span
                    className={`font-semibold text-sm md:text-base transition-colors duration-300 ${
                      openIndex === index
                        ? 'text-orange-600'
                        : 'text-gray-800 group-hover:text-orange-600'
                    }`}
                  >
                    {item.question}
                  </span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 md:w-5 md:h-5 text-orange-500 transition-all duration-300 flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Answer Panel */}
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-5 md:px-6 pb-5 md:pb-6 pt-0">
                  <div className="flex gap-3 md:gap-4">
                    <div className="w-0.5 bg-gradient-to-b from-orange-400 to-amber-400 rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                        {item.answer}
                      </p>

                      {/* Optional: Additional info for certain FAQs */}
                      {item.additionalInfo && (
                        <div className="mt-3 p-3 bg-orange-50 rounded-lg">
                          <p className="text-xs md:text-sm text-orange-700">
                            💡 {item.additionalInfo}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Support Section */}
        <div className="mt-10 md:mt-12 p-5 md:p-8 bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl md:rounded-2xl border border-orange-100">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
            <div className="text-center md:text-left">
              <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
                <MessageCircle className="w-5 h-5 text-orange-600" />
                <h3 className="font-semibold text-gray-800">
                  এখনও প্রশ্ন আছে?
                </h3>
              </div>
              <p className="text-gray-600 text-sm">
                আমাদের সাপোর্ট টিম আপনাকে সাহায্য করতে প্রস্তুত ২৪/৭
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="flex items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-lg font-medium text-sm hover:from-orange-600 hover:to-amber-600 transition-all duration-300 shadow-md">
                <Phone className="w-4 h-4" />
                কল করুন
              </button>
            </div>
          </div>
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-6">
          <p className="text-xs text-gray-400">
            সাধারণ প্রশ্নোত্তর সাহায্য পাতাটি সহায়ক হয়েছে? যদি থাকে তাহলে
            অন্যদের সাথে শেয়ার করুন
          </p>
        </div>
      </div>
    </section>
  );
}
