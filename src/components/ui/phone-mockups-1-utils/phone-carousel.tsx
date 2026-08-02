"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface ImageItem {
  src: string;
  alt: string;
}

interface PhoneCarouselProps {
  images: ImageItem[];
}

export function PhoneCarousel({ images }: PhoneCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-6 p-4">
      {/* iPhone Mockup Container */}
      <div className="relative w-[280px] h-[580px] sm:w-[320px] sm:h-[650px] bg-zinc-900 rounded-[50px] p-3 shadow-2xl border-4 border-zinc-800 ring-1 ring-white/10">
        {/* Notch / Dynamic Island */}
        <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-full z-30 flex items-center justify-end px-3">
          <div className="w-2.5 h-2.5 rounded-full bg-zinc-800 border border-zinc-700" />
        </div>

        {/* Screen Frame */}
        <div className="relative w-full h-full bg-black rounded-[40px] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              initial={{ opacity: 0, scale: 0.95, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.95, x: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full object-cover"
            />
          </AnimatePresence>
        </div>

        {/* Glass reflection overlay */}
        <div className="absolute inset-0 rounded-[50px] pointer-events-none bg-gradient-to-tr from-white/5 via-transparent to-transparent z-20" />
      </div>

      {/* Controls & Pagination */}
      <div className="flex items-center space-x-4">
        <Button
          variant="outline"
          size="icon"
          onClick={handlePrev}
          className="rounded-full border-border hover:bg-accent"
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>

        <div className="flex space-x-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? "w-8 bg-primary"
                  : "w-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/60"
              }`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={handleNext}
          className="rounded-full border-border hover:bg-accent"
        >
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}
