'use client';

import React from 'react';
import {
  Section,
  Container,
  Card,
  SectionHeader,
  AnimateOnScroll,
} from '@/components/ui';
import { DOMAINS } from '@/constants';


import { Lightbulb, Brain, User, BarChart, Settings, Globe, Banknote } from 'lucide-react';

function DomainIcon({ icon }: { icon: string }) {
  const cls = 'w-7 h-7';
  switch (icon) {
    case 'bulb': return <Lightbulb className={cls} />;
    case 'brain': return <Brain className={cls} />;
    case 'user': return <User className={cls} />;
    case 'bar-chart': return <BarChart className={cls} />;
    case 'settings': return <Settings className={cls} />;
    case 'globe': return <Globe className={cls} />;
    case 'currency': return <Banknote className={cls} />;
    default: return null;
  }
}

const GRADIENT_COLORS = [
  'from-blue-500 to-indigo-600',
  'from-indigo-500 to-purple-600',
  'from-violet-500 to-purple-600',
  'from-cyan-500 to-blue-600',
  'from-emerald-500 to-teal-600',
  'from-orange-500 to-red-500',
];

export function DomainsSection() {
  return (
    <Section id="domains" background="light">
      <Container>
        <SectionHeader
          label="Our Expertise"
          title="Our Domain"
          titleHighlight="Expertise"
          subtitle="Specialized programs designed to fuel innovation"
        />
       <div className="flex flex-wrap justify-center gap-6 w-full">
          {DOMAINS.map((item, index) => (
            <AnimateOnScroll key={item.id} animation="fade-up" delay={index * 80}>
              
              <div
                className="w-[260px] h-[120px] 
                flex flex-col items-center justify-center text-center 
                bg-white border border-slate-200 rounded-2xl 
                shadow-sm"
              >

                {/* ICON */}
                <div className="mb-3 text-blue-600">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <DomainIcon icon={item.icon} />
                  </div>
                </div>

                {/* TITLE */}
                <h3 className="text-sm md:text-base font-semibold text-slate-800">
                  {item.name}
                </h3>

              </div>

            </AnimateOnScroll>
          ))}
        </div>
      </Container>
    </Section>
  );
}
