export const SITE_CONFIG = {
  name: "Accredian Enterprise",
  tagline: "Next-Gen Expertise for Enterprise Growth",
  description:
    "Accredian empowers enterprises with world-class upskilling programs, cutting-edge curriculum, and measurable learning outcomes to future-proof your workforce.",
  url: "https://enterprise.accredian.com",
  ogImage: "/og-image.png",

  /** Contact details */
  contact: {
    email: "enterprise@accredian.com",
    phone: "+91 9876 543 210",
    address: "Accredian HQ, Bangalore, India",
  },

  /** Social media links */
  social: {
    linkedin: "https://linkedin.com/company/accredian",
    twitter: "https://twitter.com/accaboredian",
    facebook: "https://facebook.com/accredian",
    instagram: "https://instagram.com/accredian",
    youtube: "https://youtube.com/@accredian",
  },

  /** Footer copyright */
  copyright: `© ${new Date().getFullYear()} Accredian. All rights reserved.`,
} as const;
