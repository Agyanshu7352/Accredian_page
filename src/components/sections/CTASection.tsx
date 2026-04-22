"use client";

import React from "react";
import { Section, Container, Button, AnimateOnScroll } from "@/components/ui";
import { Headphones, ChevronRight } from "lucide-react";

export function CTASection() {
  return (
    <Section id="contact" className="py-20 md:py-24 bg-[#f4f8ff] relative">
      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          
          {/* engineered logo wrapper */}
          <AnimateOnScroll animation="fade-up">
            <div className="relative mb-8 mx-auto w-24 h-24 group cursor-default">
              {/* soft rotated backdrop */}
              <div className="absolute inset-0 bg-blue-600/10 rounded-2xl -rotate-6 transition-transform duration-500 group-hover:-rotate-12"></div>
              <div className="absolute inset-0 bg-blue-600/5 rounded-2xl rotate-6 transition-transform duration-500 group-hover:rotate-12"></div>
              
              {/* main icon card */}
              <div className="absolute inset-0 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white/50 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-1">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50/50 flex items-center justify-center shadow-inner">
                  <Headphones className="w-7 h-7 text-blue-600" strokeWidth={2} />
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" delay={100}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-5 tracking-tight">
              Want to Learn More About Our Training Solutions?
            </h2>
          </AnimateOnScroll>
          
          <AnimateOnScroll animation="fade-up" delay={200}>
            <p className="text-base md:text-lg text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Get Expert Guidance for Your Team&apos;s Success!
            </p>
          </AnimateOnScroll>

          {/* slightly smaller button */}
          <AnimateOnScroll animation="fade-up" delay={300}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="md" 
                className="w-full sm:w-auto !bg-blue-600 hover:!bg-blue-700 !text-white font-medium px-6 py-2.5 text-sm md:text-base rounded-lg shadow-sm hover:shadow transition-all duration-300 flex items-center justify-center gap-1.5 border-0"
              >
                Contact Us <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </AnimateOnScroll>
        </div>
      </Container>
    </Section>
  );
}
