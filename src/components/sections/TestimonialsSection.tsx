"use client";

import React, { useState, useEffect } from "react";
import { Section, Container, AnimateOnScroll } from "@/components/ui";

// define shape for our testimonial data
interface Testimonial {
  logo: string;
  quote: string;
}

export function TestimonialsSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  // fetch testimonials from our mock api on mount
  useEffect(() => {
    async function loadTestimonials() {
      try {
        const res = await fetch("/api/mock");
        const data = await res.json();
        
        if (data?.testimonials) {
          setTestimonials(data.testimonials);
        }
      } catch (err) {
        console.error("Failed to load testimonials", err);
      } finally {
        setLoading(false);
      }
    }
    
    loadTestimonials();
  }, []);

  if (loading) {
    // simple loading fallback
    return (
      <Section id="testimonials" className="py-20 bg-white">
        <Container>
          <div className="text-center py-20 text-slate-500">Loading testimonials...</div>
        </Container>
      </Section>
    );
  }

  if (testimonials.length === 0) {
    return null;
  }

  const itemsPerPage = 2;
  const currentItems = testimonials.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  return (
    <Section id="testimonials" className="py-20 bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Testimonials from <span className="text-blue-600">Our Partners</span>
          </h2>
          <p className="mt-3 text-slate-600 text-sm md:text-base">
            What <span className="text-blue-600 font-medium">Our Clients</span> Are Saying
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <AnimateOnScroll animation="fade-up">
            <div className="grid md:grid-cols-2 gap-4 mb-8 min-h-[250px]">
              {/* render the cards for the current page */}
              {currentItems.map((item, index) => (
                <div key={index} className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm flex flex-col">
                  <div className="mb-6 h-12 flex items-center justify-start">
                    <img src={item.logo} alt="Partner Logo" className="max-h-full max-w-[120px] object-contain" />
                  </div>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {item.quote}
                  </p>
                </div>
              ))}
            </div>
            
            {/* simple carousel pagination dots */}
            <div className="flex justify-center items-center gap-2 mt-8">
              {Array.from({ length: totalPages }).map((_, pageIndex) => (
                <button
                  key={pageIndex}
                  onClick={() => setCurrentPage(pageIndex)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    currentPage === pageIndex ? "bg-blue-600 w-2.5 h-2.5" : "bg-slate-300"
                  }`}
                  aria-label={`Go to page ${pageIndex + 1}`}
                />
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </Container>
    </Section>
  );
}
