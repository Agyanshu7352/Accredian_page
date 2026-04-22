'use client';

import React from 'react';
import { Section, Container, AnimateOnScroll } from '@/components/ui';
import { MonitorCheck, MonitorX, GraduationCap, Briefcase } from 'lucide-react';

const AUDIENCES = [
  {
    title: 'Tech Professionals',
    description: 'Enhance expertise, embrace tech, drive innovation.',
    icon: MonitorCheck
  },
  {
    title: 'Non-Tech Professionals',
    description: 'Adapt digitally, collaborate in tech environments.',
    icon: MonitorX
  },
  {
    title: 'Emerging Professionals',
    description: 'Develop powerful skills for rapid career growth.',
    icon: GraduationCap
  },
  {
    title: 'Senior Professionals',
    description: 'Strengthen leadership, enhance strategic decisions.',
    icon: Briefcase
  }
];

export function WhoShouldJoinSection() {
  return (
    <Section
      id="who-should-join"
      className="py-20 bg-gradient-to-b from-white to-slate-50"
    >
      <Container>

        {/* 🔹 Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Who Should <span className="text-blue-600">Join?</span>
          </h2>
          <p className="mt-3 text-slate-600 text-sm md:text-base">
            Designed for professionals across experience levels looking to upskill strategically
          </p>
        </div>

        <AnimateOnScroll animation="fade-up">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* 🔹 LEFT SIDE (Text + Image) */}
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-6 leading-snug">
                Strategic Skill Enhancement for Every Stage of Your Career
              </h3>

              <div className="w-full h-[270px] md:h-[320px] lg:h-[370px] rounded-xl overflow-hidden shadow-md border border-slate-200">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800"
                  alt="Professionals"
                  className="w-full h-full object-cover object-[center_30%]"
                />
              </div>
            </div>

            {/* 🔹 RIGHT SIDE (Audience Grid) */}
            <div className="grid sm:grid-cols-2 gap-8 pt-20">

              {AUDIENCES.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="group">

                    {/* ICON */}
                    <div className="w-12 h-12 bg-blue-50 border border-blue-100 rounded-xl 
                    flex items-center justify-center mb-4 
                    group-hover:bg-blue-100 transition">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>

                    {/* TITLE */}
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                      {item.title}
                    </h3>

                    {/* DESC */}
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {item.description}
                    </p>

                  </div>
                );
              })}

            </div>

          </div>
        </AnimateOnScroll>

      </Container>
    </Section>
  );
}