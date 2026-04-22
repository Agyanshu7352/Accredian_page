"use client";

import React from "react";
import { Section, Container } from "@/components/ui";
import { AnimateOnScroll } from "@/components/ui";
import { STATS } from "@/constants";

export function StatsSection() {
  return (
    <Section id="stats" background="white" className="pt-10 md:py-10 lg:py-10">
      <Container>
        {/* 🔹 Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Our{" "}
            <span className="text-blue-600">Track Record</span>
          </h2>

          <p className="mt-4 text-slate-500 text-sm md:text-base">
            The Numbers Behind{" "}
            <span className="text-blue-600 font-medium">
              Our Success
            </span>
          </p>
        </div>

        {/* 🔹 Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 text-center relative">

          {STATS.map((stat, index) => (
            <AnimateOnScroll key={stat.label} animation="fade-up" delay={index * 100}>
              <div className="px-6 py-6 relative">

                {/* Vertical Divider (only for middle items on desktop) */}
                {index !== 0 && (
                  <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 h-16 w-[1px] bg-slate-200" />
                )}

                {/* 🔹 Number Pill */}
                <div className="inline-block bg-blue-100 text-blue-600 font-semibold px-6 py-2 rounded-full text-lg mb-6">
                  {stat.value}
                </div>

                {/* 🔹 Label */}
                <p className="text-slate-800 font-medium max-w-xs mx-auto leading-relaxed">
                  {stat.label}
                </p>
              </div>
            </AnimateOnScroll>
          ))}

        </div>
      </Container>
    </Section>
  );
}