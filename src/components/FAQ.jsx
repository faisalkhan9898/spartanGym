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
            className={`rounded-3xl transition-all duration-300 overflow-hidden border ${
              isOpen
                ? 'bg-yellow-50/50 border-yellow-400 shadow-lg shadow-yellow-500/5'
                : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
            }`}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none select-none cursor-pointer"
              aria-expanded={isOpen}
            >
              <span className="flex items-center gap-3 font-bold text-base sm:text-lg text-slate-900">
                <span className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 text-xs font-black transition-colors ${
                  isOpen ? 'bg-yellow-400 text-slate-950' : 'bg-slate-100 text-slate-700'
                }`}>
                  Q{index + 1}
                </span>
                <span>{faq.question}</span>
              </span>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                  isOpen ? 'rotate-180 bg-yellow-400/20 text-yellow-800' : 'bg-slate-100 text-slate-500'
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            {isOpen && (
              <div className="px-6 pb-6 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 transition-opacity duration-300">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
