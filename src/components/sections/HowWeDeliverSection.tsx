"use client";

import React, { useState, useEffect } from "react";
import { Section, Container, AnimateOnScroll } from "@/components/ui";
import { BarChart, Monitor, MonitorPlay, LucideIcon } from "lucide-react";

// simple map to convert icon strings from api to actual components
const ICON_MAP: Record<string, LucideIcon> = {
  BarChart,
  Monitor,
  MonitorPlay
};

interface Step {
  number: string;
  title: string;
  description: string;
  icon: string;
}

export function HowWeDeliverSection() {
  const [steps, setSteps] = useState<Step[]>([]);
  const [loading, setLoading] = useState(true);

  // fetch data from our mock api on mount
  useEffect(() => {
    async function loadSteps() {
      try {
        const res = await fetch("/api/mock");
        const data = await res.json();
        if (data?.deliverySteps) {
          setSteps(data.deliverySteps);
        }
      } catch (err) {
        console.error("Failed to load delivery steps", err);
      } finally {
        setLoading(false);
      }
    }
    loadSteps();
  }, []);

  if (loading) {
    return (
      <Section id="how-we-deliver" className="py-20 bg-white">
        <Container>
          <div className="text-center py-20 text-slate-500">Loading delivery steps...</div>
        </Container>
      </Section>
    );
  }

  if (steps.length === 0) return null;

  return (
    <Section id="how-we-deliver" className="py-20 bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            How We <span className="text-blue-600">Deliver Results</span> That Matter?
          </h2>
          <p className="mt-3 text-slate-600 text-sm md:text-base">
            A Structured Three-Step Approach to <span className="text-blue-600">Skill Development</span>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, idx) => {
            const Icon = ICON_MAP[step.icon] || BarChart; // fallback to barchart if unknown icon
            return (
              <AnimateOnScroll key={idx} animation="fade-up" delay={idx * 100}>
                <div className="relative bg-[#f4f8ff] rounded-xl p-8 pt-12 pb-10 border border-blue-100 shadow-sm flex flex-col items-center text-center h-full">
                  {/* left accent bar */}
                  <div className="absolute left-0 top-[20%] bottom-[20%] w-1.5 bg-blue-600 rounded-r-md"></div>
                  
                  {/* step number badge */}
                  <div className="absolute top-4 left-4 w-6 h-6 rounded-full bg-white text-blue-600 text-xs font-bold flex items-center justify-center shadow-sm">
                    {step.number}
                  </div>

                  {/* icon container */}
                  <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white mb-6 shadow-md">
                    <Icon className="w-8 h-8" />
                  </div>

                  {/* text content */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
