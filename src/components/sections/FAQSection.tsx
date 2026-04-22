"use client";

import React, { useState, useEffect } from "react";
import { Section, Container, Button } from "@/components/ui";
import { ChevronDown, ChevronUp } from "lucide-react";

// define shapes for our faq data
interface FAQItem {
  question: string;
  answer: string;
}

interface FAQData {
  categories: string[];
  items: Record<string, FAQItem[]>;
}

export function FAQSection() {
  const [activeTab, setActiveTab] = useState<string>("");
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  
  const [faqData, setFaqData] = useState<FAQData | null>(null);
  const [loading, setLoading] = useState(true);

  // fetch data from our mock api on component mount
  useEffect(() => {
    async function loadFaqs() {
      try {
        const res = await fetch("/api/mock");
        const data = await res.json();
        
        if (data?.faqs) {
          setFaqData(data.faqs);
          if (data.faqs.categories?.length > 0) {
            setActiveTab(data.faqs.categories[0]);
          }
        }
      } catch (err) {
        console.error("Failed to load FAQs", err);
      } finally {
        setLoading(false);
      }
    }
    
    loadFaqs();
  }, []);

  if (loading) {
    // show a simple skeleton or loading text while fetching
    return (
      <Section id="faq" className="py-20 bg-white">
        <Container>
          <div className="text-center py-20 text-slate-500">Loading FAQs...</div>
        </Container>
      </Section>
    );
  }

  if (!faqData || faqData.categories.length === 0) {
    return null; 
  }

  const currentFaqs = faqData.items[activeTab] || [];

  return (
    <Section id="faq" className="py-20 bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-12 gap-12 max-w-5xl mx-auto">
          {/* render category tabs on the left side */}
          <div className="md:col-span-4 flex flex-col gap-3">
            {faqData.categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveTab(category);
                  setExpandedIndex(null); // reset accordion when switching tabs
                }}
                className={`w-full text-center px-6 py-4 rounded-md border transition-all duration-200 font-semibold text-sm ${
                  activeTab === category
                    ? "border-slate-100 shadow-sm text-blue-600 bg-white"
                    : "border-slate-200 text-slate-500 hover:bg-slate-50 bg-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* render the faq items for the selected category on the right */}
          <div className="md:col-span-8">
            <div className="flex flex-col">
              {currentFaqs.map((faq, idx) => {
                const isExpanded = expandedIndex === idx;
                return (
                  <div key={idx} className="border-b border-slate-100 last:border-0 pb-4 mb-4">
                    <button
                      className="w-full flex justify-between items-center text-left focus:outline-none"
                      onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                    >
                      <span className="font-semibold text-slate-800 pr-8">{faq.question}</span>
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4 text-slate-400 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-400 flex-shrink-0" />
                      )}
                    </button>
                    {isExpanded && (
                      <div className="pt-2 pb-2 text-slate-600 text-sm leading-relaxed">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* cta button at the bottom */}
        <div className="mt-16 flex justify-center">
          <Button 
            size="md" 
            className="w-full sm:w-auto !bg-blue-600 hover:!bg-blue-700 !text-white font-medium px-6 py-2.5 text-sm md:text-base rounded-lg shadow-sm hover:shadow transition-all duration-300 flex items-center justify-center gap-1.5 border-0"
          >
            Enquire Now
          </Button>
        </div>
      </Container>
    </Section>
  );
}
