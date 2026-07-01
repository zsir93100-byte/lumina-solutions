'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FaqItem {
  q: string;
  a: string;
}

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="max-w-3xl mx-auto divide-y divide-slate-200">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={idx} className="py-4">
            <button
              onClick={() => toggle(idx)}
              className="w-full flex items-center justify-between gap-4 text-left group cursor-pointer"
            >
              <span className={`font-semibold transition-colors ${isOpen ? 'text-lumina-600' : 'text-slate-800 group-hover:text-lumina-600'}`}>
                {item.q}
              </span>
              <span className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                isOpen ? 'border-lumina-600 bg-lumina-600 text-white' : 'border-slate-300 text-slate-400 group-hover:border-lumina-400'
              }`}>
                <i className={`fa-solid text-xs transition-transform ${isOpen ? 'fa-minus' : 'fa-plus'}`} />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="overflow-hidden"
                >
                  <p className="pt-3 pb-1 text-slate-500 leading-relaxed text-sm pl-0">
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
