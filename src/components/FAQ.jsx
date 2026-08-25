import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { faqsData } from '../data/faqs';

export default function FAQ({ items = faqsData, limit }) {
  const [openIndex, setOpenIndex] = useState(0); // First one open by default

  const displayItems = limit ? items.slice(0, limit) : items;

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-4">
      {displayItems.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`rounded-2xl transition-all duration-300 overflow-hidden border ${
              isOpen
                ? 'bg-zinc-900/90 border-orange-500/60 shadow-xl shadow-orange-600/10'
                : 'glass-card border-zinc-800/80 hover:border-zinc-700'
            }`}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none select-none cursor-pointer"
              aria-expanded={isOpen}
            >
              <span className="flex items-center gap-3 font-bold text-base sm:text-lg text-white">
                <span className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 text-xs font-black transition-colors ${
                  isOpen ? 'bg-orange-600 text-white' : 'bg-zinc-800 text-zinc-400'
                }`}>
                  Q{index + 1}
                </span>
                <span>{faq.question}</span>
              </span>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                  isOpen ? 'rotate-180 bg-orange-600/20 text-orange-400' : 'bg-zinc-800 text-zinc-400'
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            {isOpen && (
              <div className="px-6 pb-6 pt-1 text-zinc-400 text-sm sm:text-base leading-relaxed border-t border-zinc-800/50 transition-opacity duration-300">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
