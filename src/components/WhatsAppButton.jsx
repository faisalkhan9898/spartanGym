import React, { useState } from 'react';
import { Phone, MessageCircle, X } from 'lucide-react';
import { WhatsappIcon } from './SocialIcons';

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);

  const phoneNumber = "+918866338858";
  const displayPhone = "088663 38858";
  const whatsappUrl = `https://wa.me/918866338858?text=${encodeURIComponent(
    "Hi Spartans Gym! I would like to inquire about gym membership, classes, and booking a free trial pass."
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Expanded Quick Action Popover */}
      {isOpen && (
        <div className="mb-3 w-72 rounded-3xl glass-panel border border-yellow-400/40 p-5 shadow-2xl shadow-black/90 animate-fade-in text-white space-y-4">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-ping"></span>
              <span className="text-xs font-black uppercase tracking-wider text-yellow-400">
                Spartans Gym Desk
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-zinc-400 hover:text-white p-1 rounded-lg hover:bg-zinc-800 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-zinc-300 leading-relaxed">
            Have questions about membership, trainers, or timings? Connect with our team instantly!
          </p>

          <div className="space-y-2">
            {/* WhatsApp Link */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-lg shadow-emerald-600/30 hover:scale-[1.02]"
            >
              <WhatsappIcon className="w-4 h-4" />
              <span>Chat On WhatsApp</span>
            </a>

            {/* Direct Call Link */}
            <a
              href={`tel:${phoneNumber}`}
              className="w-full flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl bg-zinc-900 hover:bg-yellow-400 border border-zinc-700 hover:border-yellow-300 text-white hover:text-black font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md hover:scale-[1.02] group"
            >
              <Phone className="w-4 h-4 text-yellow-400 group-hover:text-black" />
              <span>Call: {displayPhone}</span>
            </a>
          </div>

          <p className="text-[10px] text-zinc-400 text-center font-medium">
            Chanod Colony, Vapi, Gujarat
          </p>
        </div>
      )}

      {/* Floating Trigger Button */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Connect on WhatsApp or Call"
          title="Chat on WhatsApp or Call Us"
          className="relative group flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-500 hover:to-green-400 text-white shadow-2xl shadow-emerald-600/50 border-2 border-white/20 transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
        >
          {/* Notification Ping Badge */}
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 text-black text-[9px] font-black rounded-full flex items-center justify-center border border-black animate-pulse">
            1
          </span>
          {isOpen ? (
            <X className="w-7 h-7" />
          ) : (
            <WhatsappIcon className="w-7 h-7" />
          )}
        </button>
      </div>

    </div>
  );
}
