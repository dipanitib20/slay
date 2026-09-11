export interface FAQItem {
  id?: string | number;
  question: string;
  answer: string;
}

/* ─────────────────────────────────────────────────────────────
 * 1. CONTACT PAGE FAQs
 * ───────────────────────────────────────────────────────────── */
export const contactFAQs: FAQItem[] = [
  {
    id: "contact-1",
    question: "What happens after I send this?",
    answer:
      "We reply within one working day. If it looks like a fit, we set up a 30 minute call. If it does not, we will tell you that honestly rather than putting you through a process that goes nowhere.",
  },
  {
    id: "contact-2",
    question: "Does the first call cost anything?",
    answer:
      "No. The first call runs 30 minutes and costs nothing. It is a conversation about where your brand is and what is not working, not a pitch deck.",
  },
  {
    id: "contact-3",
    question: "What should I have ready for the call?",
    answer:
      "Nothing formal. Your social handles or website, a rough sense of budget, and what you would consider a good outcome six months from now. If you have none of that yet, come anyway and we will work it out on the call.",
  },
  {
    id: "contact-4",
    question: "When will I get a proposal?",
    answer:
      "Within two to three working days of the call. It carries an exact number and an exact scope, not a package sheet.",
  },
  {
    id: "contact-5",
    question: "What if I am not ready to start yet?",
    answer:
      "Reach out anyway. Plenty of brands talk to us a few months before they are ready. We would rather have the context early than start cold later.",
  },
  {
    id: "contact-6",
    question: "Do you work with brands outside India?",
    answer:
      "Yes. We work across time zones, communicate in English, and schedule calls and reporting around your working hours rather than ours.",
  },
  {
    id: "contact-7",
    question: "I already have an agency. Is it worth talking?",
    answer:
      "Yes, and we will be straight with you. If what you have is working and the issue is a fixable one, we will say so. We are not interested in winning an account we cannot improve.",
  },
];

/* ─────────────────────────────────────────────────────────────
 * 2. SERVICES MAIN PAGE FAQs
 * ───────────────────────────────────────────────────────────── */
export const servicesFAQs: FAQItem[] = [
  {
    id: "services-1",
    question: "What core services do you specialize in?",
    answer:
      "We specialize in end-to-end digital solutions: Web Design & Development, Brand Identity & Strategy, Performance Marketing, Social Media Management, and UGC Content Shoots.",
  },
  {
    id: "services-2",
    question: "Can I hire you for a single service or only full packages?",
    answer:
      "You can engage us for a specific standalone service (such as a high-impact website redesign or brand identity sprint) or an integrated full-service growth retainer.",
  },
  {
    id: "services-3",
    question: "What tech stacks and platforms do you build with?",
    answer:
      "We build modern, fast web applications using Next.js, React, TypeScript, Tailwind CSS, Webflow, Shopify, and headless CMS platforms tailored to your business needs.",
  },
  {
    id: "services-4",
    question: "How do you handle revisions and design feedback?",
    answer:
      "We provide structured iterative review cycles via Figma and live staging environments with dedicated feedback checkpoints at every major project milestone.",
  },
  {
    id: "services-5",
    question: "What is your pricing and engagement model?",
    answer:
      "We offer transparent project-based fixed pricing as well as monthly dedicated design & engineering retainers with zero hidden costs.",
  },
];

/* ─────────────────────────────────────────────────────────────
 * 3. ABOUT PAGE FAQs (Optional / Ready for use)
 * ───────────────────────────────────────────────────────────── */
export const aboutFAQs: FAQItem[] = [
  {
    id: "about-1",
    question: "What is the agency's core philosophy?",
    answer:
      "We combine bold creativity with rigorous strategy and modern engineering to craft digital work that drives measurable business growth.",
  },
  {
    id: "about-2",
    question: "Who will I be working with directly?",
    answer:
      "You work directly with senior strategists, designers, and engineers — without bloated layers of junior account management in between.",
  },
  {
    id: "about-3",
    question: "Where are you based and how do you collaborate?",
    answer:
      "We work collaboratively via Slack, Notion, Figma, and Google Meet with clients all over the world.",
  },
];

/* ─────────────────────────────────────────────────────────────
 * 4. WORK / PORTFOLIO PAGE FAQs (Optional / Ready for use)
 * ───────────────────────────────────────────────────────────── */
export const workFAQs: FAQItem[] = [
  {
    id: "work-1",
    question: "Can we see more detailed case studies or client references?",
    answer:
      "Yes! In addition to the portfolio showcases on our work page, we can walk you through in-depth metrics and case studies during our discovery call.",
  },
  {
    id: "work-2",
    question: "Have you worked with brands in our specific industry?",
    answer:
      "We have partnered with brands across SaaS, tech, e-commerce, lifestyle, luxury, and creator industries. Our strategic principles adapt to any market.",
  },
];

/* ─────────────────────────────────────────────────────────────
 * 5. SERVICE DETAIL PAGE FAQs (By Service Slug)
 * ───────────────────────────────────────────────────────────── */
export const serviceDetailFAQs: Record<string, FAQItem[]> = {
  "web-design-development": [
    {
      id: "web-1",
      question: "What is included in the web development process?",
      answer:
        "We handle the complete lifecycle: UI/UX wireframes, visual design in Figma, full-stack Next.js/React development, responsive mobile testing, SEO optimization, and CMS handover.",
    },
    {
      id: "web-2",
      question: "How long does a website project take?",
      answer:
        "Most website projects range between 3 to 6 weeks depending on page count, interactive features, and client feedback turnaround.",
    },
    {
      id: "web-3",
      question: "Will I be able to edit content on my website easily?",
      answer:
        "Yes! We build with intuitive CMS integrations and provide video walkthroughs so your internal team can update text, images, and blog posts with ease.",
    },
    {
      id: "web-4",
      question: "Do you provide ongoing support after website launch?",
      answer:
        "Yes, we provide post-launch warranty support, ongoing hosting guidance, maintenance, and continuous optimization retainers.",
    },
  ],
  "brand-identity-strategy": [
    {
      id: "brand-1",
      question: "What deliverables are included in a brand identity sprint?",
      answer:
        "You receive primary/secondary logo suites, color palettes, typography hierarchy, brand guidelines document, iconography, and social/marketing kit assets.",
    },
    {
      id: "brand-2",
      question: "How many logo concepts do you present?",
      answer:
        "We develop and present 2 to 3 distinct strategic visual directions, each fully mocked up across real-world touchpoints before refining the chosen direction.",
    },
    {
      id: "brand-3",
      question: "How long does brand strategy and identity take?",
      answer:
        "A typical comprehensive brand sprint takes between 2 to 4 weeks from initial discovery workshop to final vector asset delivery.",
    },
  ],
  "performance-marketing": [
    {
      id: "perf-1",
      question: "Which ad platforms and channels do you manage?",
      answer:
        "We manage paid media across Meta (Facebook & Instagram), Google Ads (Search, Shopping & YouTube), TikTok Ads, and LinkedIn Ads.",
    },
    {
      id: "perf-2",
      question: "How do you measure and report campaign ROI?",
      answer:
        "We set up server-side tracking, ROAS/CPA tracking dashboards, and provide bi-weekly reporting calls with live metric access.",
    },
  ],
  "social-media-management": [
    {
      id: "social-1",
      question: "How many posts and assets do you produce per month?",
      answer:
        "We tailor custom monthly content packages typically ranging between 12 to 24 high-craft feed posts, reels, and story sequences.",
    },
    {
      id: "social-2",
      question: "Do you handle community management and copywriting?",
      answer:
        "Yes, our retainers include full copywriting, hashtags, strategic scheduling, and daily engagement / community moderation.",
    },
  ],
  "ugc-content-shoots": [
    {
      id: "ugc-1",
      question: "Do you source the creators and handle production?",
      answer:
        "We handle creator casting, scriptwriting, product shipping logistics, creative direction, professional editing, and native ad formatting.",
    },
    {
      id: "ugc-2",
      question: "What is the turnaround time for edited UGC assets?",
      answer:
        "Standard production and editing turnaround is 7 to 14 business days from creator product receipt.",
    },
  ],
};

/* ─────────────────────────────────────────────────────────────
 * 6. DEFAULT / FALLBACK FAQs
 * ───────────────────────────────────────────────────────────── */
export const defaultFAQs: FAQItem[] = [
  {
    id: "default-1",
    question: "What services do you offer?",
    answer:
      "We specialize in end-to-end digital solutions, including brand strategy, UI/UX design, modern web development, conversion-focused landing pages, and ongoing creative support.",
  },
  {
    id: "default-2",
    question: "How long does a typical project take?",
    answer:
      "Most projects range between 2 to 6 weeks depending on the complexity, scope of work, and feedback turnaround. We always establish clear milestone timelines at kickoff.",
  },
  {
    id: "default-3",
    question: "What is your pricing and engagement model?",
    answer:
      "We offer flexible project-based fixed pricing as well as monthly dedicated design & development retainers. Every proposal is transparent with zero hidden costs.",
  },
  {
    id: "default-4",
    question: "Do you provide ongoing support after launch?",
    answer:
      "Yes, we offer ongoing maintenance, performance optimization, content updates, and continuous design support to ensure your website scales effortlessly.",
  },
  {
    id: "default-5",
    question: "How do we get started?",
    answer:
      "Simply book an introductory call or reach out via our contact form. We'll discuss your goals, requirements, and provide a tailored plan within 24-48 hours.",
  },
];

/* ─────────────────────────────────────────────────────────────
 * 7. PAGE FAQS LOOKUP MAP
 * ───────────────────────────────────────────────────────────── */
export const pageFAQs = {
  contact: contactFAQs,
  services: servicesFAQs,
  about: aboutFAQs,
  work: workFAQs,
  default: defaultFAQs,
};
