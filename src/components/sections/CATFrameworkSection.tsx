"use client";

import React from "react";
import { Section, Container, AnimateOnScroll } from "@/components/ui";

export function CATFrameworkSection() {
  return (
    <Section
      id="cat-framework"
      className="py-20 bg-slate-50"
    >
      <Container>
        {/* header section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            The <span className="text-blue-600">CAT</span> Framework
          </h2>
          <p className="mt-3 text-slate-600 text-sm md:text-base">
            Our Proven Approach to Learning Excellence
          </p>
        </div>

        <AnimateOnScroll animation="fade-up">
          <div className="flex justify-center items-center w-full max-w-5xl mx-auto">
            {/* simple image banner for the cat framework */}
            <img 
              src="/image copy.png" 
              alt="The CAT Framework" 
              className="w-full h-auto object-contain"
            />
          </div>
        </AnimateOnScroll>
      </Container>
    </Section>
  );
}
