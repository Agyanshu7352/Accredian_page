"use client";

import React, { useState } from "react";
import { Button, Badge, Container } from "@/components/ui";
import { AnimateOnScroll } from "@/components/ui";
import { HERO_CONTENT } from "@/constants";

export function HeroSection() {
  const [email, setEmail] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would trigger a modal or API call
    console.log("Lead captured:", email);
  };

  return (
    <>
     <section
  id="hero"
  className="relative min-h-[90vh] flex items-center overflow-hidden bg-slate-50 border-b border-slate-200"
>
  {/* Background */}
  <div className="absolute inset-0 bg-slate-50" />

  {/* Subtle gradients */}
  <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-400/15 blur-[120px] rounded-full pointer-events-none" />
  <div className="absolute top-[30%] left-[-10%] w-[600px] h-[600px] bg-indigo-300/15 blur-[120px] rounded-full pointer-events-none" />
  <div className="absolute top-[30%] right-[-10%] w-[600px] h-[600px] bg-cyan-300/15 blur-[120px] rounded-full pointer-events-none" />

  {/* Grid pattern */}
  <div
    className="absolute inset-0 opacity-[0.025]"
    style={{
      backgroundImage:
        "linear-gradient(rgba(15, 23, 42, 0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(15, 23, 42, 0.8) 1px, transparent 1px)",
      backgroundSize: "48px 48px",
    }}
  />

  <Container className="relative z-10 pt-32 pb-20">
    <div className="grid lg:grid-cols-2 gap-12 items-center">

      {/* 🔹 LEFT SIDE */}
      <div className="text-center lg:text-left">

        <AnimateOnScroll animation="fade-up">
          <Badge className="mb-6 bg-green-500/10 backdrop-blur text-green-800 border border-green-500">
            {HERO_CONTENT.badge}
          </Badge>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" delay={100}>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6">
            {HERO_CONTENT.title}{" "}
            <span className="bg-blue-600 text-transparent bg-clip-text">
              {HERO_CONTENT.titleHighlight}
            </span>
          </h1>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" delay={200}>
          <p className="text-lg md:text-xl text-slate-600 max-w-xl mb-8">
            {HERO_CONTENT.subtitle}
          </p>
        </AnimateOnScroll>

        {/* 🔥 Lead Form */}
        <AnimateOnScroll animation="fade-up" delay={300}>
          <div className="flex justify-center lg:justify-start">
            <Button
              size="md"
              className="px-6 py-3 font-semibold shadow-lg shadow-blue-600/20 rounded-xl transition-transform duration-300 hover:scale-[1.03]"
              onClick={() => {
                const section = document.querySelector("#contact");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Inquire Now
            </Button>
          </div>
        </AnimateOnScroll>

        <p className="text-sm text-slate-500 mt-4">
          Or{" "}
          <a href="#programs" className="text-blue-600 hover:underline">
            {HERO_CONTENT.secondaryCta}
          </a>
        </p>

        {/* Trust Indicators */}
        <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-600 font-semibold">
          <span>✔ IIT & IIM Faculty</span>
          <span>✔ 92% Completion Rate</span>
          <span>✔ Measurable ROI</span>
        </div>
      </div>

      {/* 🔹 RIGHT SIDE IMAGE */}
      <div className="hidden lg:flex justify-center pt-0   pb-30">
        <img
          src="/image.png"
          alt="Enterprise learning platform"
          className="w-full max-w-lg object-contain drop-shadow-xl transition-transform duration-300 hover:scale-[1.02]"
        />
      </div>

    </div>
  </Container>
</section>

      {/* Sticky CTA / Modal Trigger for Mobile & Scroll */}
      <div 
        className={`fixed bottom-6 right-6 z-50 transition-all duration-300 transform ${isHovered ? 'scale-105' : 'scale-100'}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Button 
          variant="primary" 
          size="md" 
          className="shadow-2xl shadow-blue-900/20 group flex items-center gap-2 rounded-full px-6"
          onClick={() => {
            const form = document.querySelector('form');
            if (form) {
              form.scrollIntoView({ behavior: 'smooth', block: 'center' });
              form.querySelector('input')?.focus();
            }
          }}
        >
          <svg className="w-4 h-4 group-hover:animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          Talk to Sales
        </Button>
      </div>
    </>
  );
}
