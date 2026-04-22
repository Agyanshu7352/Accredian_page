'use client';

import React from 'react';
import { Section, Container, AnimateOnScroll } from '@/components/ui';

const COURSES = [
  {
    title: 'Program Specific',
    description: 'Certificate, Executive, Post Graduate Certificate',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800'
  },
  {
    title: 'Industry Specific',
    description: 'IT, Healthcare, Retail, Finance, Education, Manufacturing',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800'
  },
  {
    title: 'Topic Specific',
    description: 'Machine Learning, Design, Analytics, Cybersecurity, Cloud',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=800'
  },
  {
    title: 'Level Specific',
    description: 'Senior Leadership, Mid-Career Professionals, Freshers',
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800'
  }
];

export function CourseSegmentationSection() {
  return (
    <Section id="course-segmentation" background="white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Tailored <span className="text-blue-600">Course Segmentation</span>
          </h2>
          <p className="text-slate-600 md:text-lg">
            Explore <span className="text-blue-600 font-medium">Custom-fit Courses</span> Designed to Address Every Professional Focus
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {COURSES.map((course, idx) => (
            <AnimateOnScroll key={idx} animation="fade-up" delay={idx * 100} className="h-full">
              <div className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-shadow h-full flex flex-col">
                <div className="h-40 w-full overflow-hidden">
                  <img src={course.image} alt={course.title} className="w-full h-full object-cover transition-transform hover:scale-105 duration-300" />
                </div>
                <div className="p-6 text-center flex-1 flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-blue-600 mb-3">{course.title}</h3>
                  <p className="text-slate-600 text-sm">{course.description}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </Container>
    </Section>
  );
}
