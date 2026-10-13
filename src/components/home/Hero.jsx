"use client";

import { useState, useEffect } from "react";
import Button from "@/components/common/Button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Hero() {
  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
      title: "Sapno Ko Direction Do",
      subtitle: "Career Ko 360° Solution Do",
    },
    {
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1920&q=85",
      title: "Shape Your Future",
      subtitle: "Expert Guidance for Your Career",
    },
    {
      image:
        "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1920&q=85",
      title: "Achieve Your Goals",
      subtitle: "Quality Education for Success",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };
  return (
    <section className="bg-gradient-to-br from-[#0B1730] to-[#10294B] py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6">
            <span className="inline-block text-[#E9B746] font-semibold text-sm tracking-wider uppercase">
              YOUR FUTURE STARTS HERE
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              {slides[currentSlide].title},{" "}
              <span className="text-[#E9B746]">
                {slides[currentSlide].subtitle}
              </span>
            </h1>
            <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed">
              Make confident education and career decisions with personalised
              counselling, admission assistance, academic coaching and open &
              distance education guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
              <Button href="/contact" className="!py-3 !px-6 text-base">
                Get Free Guidance ↗
              </Button>
              <Button
                variant="secondary"
                href="/services"
                className="!py-3 !px-6 text-base"
              >
                Explore Our Services
              </Button>
            </div>
          </div>

          <div className="relative order-first lg:order-last mb-8 lg:mb-0">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={slides[currentSlide].image}
                alt="Education"
                className="w-full h-64 sm:h-80 md:h-96 object-cover transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1730]/60 to-transparent"></div>

              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6 text-[#0B1730]" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
              >
                <ChevronRight className="w-6 h-6 text-[#0B1730]" />
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentSlide
                        ? "bg-[#E9B746] w-8"
                        : "bg-white/50 hover:bg-white/80"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
