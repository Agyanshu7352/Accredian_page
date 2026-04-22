"use client";

import React from "react";
import { Section, Container } from "@/components/ui";

const PARTNERS = [
  "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/rel.png",
  "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/hcl.png",
  "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/ibm.png",
  "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/crif.png",
  "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/adp.svg",
  "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/bayer.svg",
];

export function PartnersSection() {
  return (
    <Section id="partners" className="py-20 bg-slate-50">
      <Container>

        {/* 🔹 Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Our Proven{" "}
            <span className="text-blue-600">Partnerships</span>
          </h2>

          <p className="mt-3 text-slate-600 text-sm md:text-base">
            Successful Collaborations With the{" "}
            <span className="text-blue-600 font-medium">
              Industry’s Best
            </span>
          </p>
        </div>

        {/* 🔹 Logos Row */}
        <ul className="hidden sm:grid grid-cols-3 md:grid-cols-6 xl:grid-cols-6 gap-6 md:gap-8 xl:gap-12">

          {PARTNERS.map((logo, index) => (
            <li key={index} className="flex justify-center items-center sm:p-4">
              <img
                src={logo}
                alt="partner logo"
                className="h-20 md:h-25 object-contain opacity-80 hover:opacity-100 transition duration-300"
              />
            </li>
          ))}

        </ul>

      </Container>
    </Section>
  );
}