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
    question: "Do I have to take all of this?",
    answer:
      "No. Most brands start with one or two services and add more once something is working. We would rather do two things properly than six things thinly, and we will tell you which two on the first call.",
  },
  {
    id: "services-2",
    question: "Which services should I start with?",
    answer:
      "It depends on where the gap actually is. If your content is inconsistent, social media management comes first. If content is fine but nothing is converting, the problem is usually the funnel or the site. On the first call we look at what you have and tell you honestly where the money is best spent.",
  },
  {
    id: "services-3",
    question: "Can I combine services into one retainer?",
    answer:
      "Yes, and this is how most of our accounts run. Social media management, performance marketing and content shoots sit together naturally. Web design, brand identity and shoots are quoted as projects and can run alongside a retainer.",
  },
  {
    id: "services-4",
    question: "Do you take on one off projects, or is it retainer only?",
    answer:
      "Both. Websites, brand identity and content shoots are regularly done as standalone projects. Social media management and performance marketing work best as retainers, because both compound over time.",
  },
  {
    id: "services-5",
    question: "What is the minimum commitment?",
    answer:
      "Retainers run on a three month minimum, then continue monthly. Projects run to the timeline set out in the proposal, with no ongoing commitment attached.",
  },
  {
    id: "services-6",
    question: "Is everything done in house?",
    answer:
      "Yes. Strategy, content, design, editing and performance all run through our own team. Where a shoot needs specialist crew or talent, we bring them in and manage them, and you will know that upfront.",
  },
  {
    id: "services-7",
    question: "Can you work alongside my existing team?",
    answer:
      "Often yes. Some clients have an in house designer or a content person and bring us in for strategy and the parts they cannot cover. We will be clear about where the line sits so nothing gets done twice or missed entirely.",
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
  "social-media-management": [
    {
      id: "social-1",
      question: "What does social media management cost?",
      answer:
        "Retainers start at INR 35,000 per month and scale with the number of deliverables and platforms. You get an exact number after the first call.",
    },
    {
      id: "social-2",
      question: "How many posts do I get a month?",
      answer:
        "It depends on the retainer. A typical starting scope runs 16 pieces a month across reels, carousels and statics, plus daily stories. We size it to what your brand can sustain and what your audience will actually absorb.",
    },
    {
      id: "social-3",
      question: "Do I need to give you content?",
      answer:
        "No, but it helps. We either shoot for you, build the system around footage your team already captures, or work with your existing brand assets. All three work, and we will tell you honestly which one suits your budget.",
    },
    {
      id: "social-4",
      question: "Which platforms do you manage?",
      answer:
        "Instagram, LinkedIn, Facebook and YouTube. Most brands start with one or two done properly rather than five done thinly, and we will push back if you ask for all of them at once.",
    },
    {
      id: "social-5",
      question: "How much of my time does this take?",
      answer:
        "Roughly one hour a month for approvals. Founder led accounts need a little more of you, because the whole point is that it sounds like you.",
    },
    {
      id: "social-6",
      question: "Do you handle comments and DMs?",
      answer:
        "Yes. Community management is part of every retainer, because an unanswered DM is a lost enquiry.",
    },
  ],
  "performance-marketing": [
    {
      id: "perf-1",
      question: "What does performance marketing cost?",
      answer:
        "Management is charged as a monthly fee that scales with the number of campaigns and platforms. Ad spend is separate and paid by you directly to the platform. You get an exact management fee after the first call.",
    },
    {
      id: "perf-2",
      question: "Is there a minimum ad spend?",
      answer:
        "No, we do not enforce one. That said, very small budgets take longer to produce reliable learnings, and we will tell you honestly on the call what your budget can realistically achieve before you commit to anything.",
    },
    {
      id: "perf-3",
      question: "Who controls the ad account and the money?",
      answer:
        "You do. Campaigns run inside your own ad account, and spend goes directly from you to the platform. We work with delegated access, which means you keep ownership of the account and all the data in it even if we stop working together.",
    },
    {
      id: "perf-4",
      question: "Which platforms do you run ads on?",
      answer:
        "Meta, which covers Instagram and Facebook, along with Google and LinkedIn depending on where your buyers actually are. For most consumer brands we start with Meta. For B2B we usually start with LinkedIn and Google.",
    },
    {
      id: "perf-5",
      question: "How quickly will I see results?",
      answer:
        "The first few weeks are learning and testing. Meaningful direction usually shows by week three or four, and stable performance from month two onwards. Anyone promising a return in week one is selling you something.",
    },
    {
      id: "perf-6",
      question: "Can you run ads without managing my social media?",
      answer:
        "Yes, although ads perform better when the profile they send people to is not neglected. If we think you have the order wrong, we will say so before taking the work.",
    },
    {
      id: "perf-7",
      question: "What do you actually report on?",
      answer:
        "Spend, reach, cost per click, cost per lead or purchase, and the return where it can be tracked. Alongside the numbers you get the reasoning: what we tested, what won, and what changes next month.",
    },
  ],
  "ugc-content-shoots": [
    {
      id: "ugc-1",
      question: "What does a content shoot cost?",
      answer:
        "Shoots are quoted per shoot rather than bundled into a retainer, because the cost depends on location, crew, duration, models and the volume of output. You get an itemised quote before anything is booked.",
    },
    {
      id: "ugc-2",
      question: "How much content do I get from one shoot day?",
      answer:
        "It depends entirely on the setup, but a well planned day typically produces enough for four to six weeks of posting across formats. We plan the volume backwards from your calendar, so you will know the expected output before the shoot rather than after it.",
    },
    {
      id: "ugc-3",
      question: "Do I need models, or can I be in it myself?",
      answer:
        "Both work. Founder led content usually performs better because people trust a face over a product shot, and we will direct you properly if you have never done it before. Where models are needed we handle casting, and their fees are billed at actuals.",
    },
    {
      id: "ugc-4",
      question: "Do you shoot outside Delhi NCR?",
      answer:
        "Yes. Travel, accommodation and any local crew costs are added to the quote at actuals.",
    },
    {
      id: "ugc-5",
      question: "Who owns the raw footage?",
      answer:
        "You do. Raw footage, images and editable project files are yours once the shoot is paid for. Licensed third party assets like stock music or fonts remain governed by their own licence terms.",
    },
    {
      id: "ugc-6",
      question: "What if my team already shoots content?",
      answer:
        "Then we build the system around what you capture and direct you on how to shoot it better. Plenty of our accounts run this way, and it is significantly cheaper than a full production. We will tell you honestly which of the two suits your budget.",
    },
    {
      id: "ugc-7",
      question: "How far in advance do I need to book?",
      answer:
        "Two to three weeks is comfortable for a straightforward shoot. Anything involving a location, models or a larger crew needs more. Tell us your posting deadline and we will work backwards from it.",
    },
  ],
  "founder-led-marketing": [
    {
      id: "founder-1",
      question: "Do I have to be on camera?",
      answer:
        "Not necessarily, but it helps a great deal. Text and carousel formats do real work on LinkedIn, so a founder who prefers writing can still build a strong presence. On Instagram video is where the growth is, and we will make the process as painless as possible if you are new to it.",
    },
    {
      id: "founder-2",
      question: "How much of my time does this take?",
      answer:
        "Roughly one hour a month for approvals, plus a short recording or conversation session, usually fortnightly. Founder led work needs more of you than a brand account, because the whole point is that it sounds like you.",
    },
    {
      id: "founder-3",
      question: "Will it actually sound like me?",
      answer:
        "That is the entire job. We start with a voice session where we capture how you speak, what you believe and what you refuse to say. Early drafts get edited closely with you, and by month two most founders are approving posts with barely a change.",
    },
    {
      id: "founder-4",
      question: "Is this different from managing my company page?",
      answer:
        "Yes. A company page speaks in brand voice about the business. A founder account speaks in your voice about the industry, the work and the decisions behind it. They serve different purposes, and the founder account almost always outperforms.",
    },
    {
      id: "founder-5",
      question: "What if my industry is boring?",
      answer:
        "There is no such thing. Manufacturing, legal, logistics and professional services founders often do better than consumer brands on LinkedIn, precisely because so few of their competitors show up with anything worth reading.",
    },
    {
      id: "founder-6",
      question: "What if I do not want to share personal things?",
      answer:
        "Then we do not. Founder led does not mean confessional. We work from your professional perspective, your decisions and your industry views. The line on what is private is yours to draw, and we will not cross it.",
    },
    {
      id: "founder-7",
      question: "Can you do this alongside our brand social?",
      answer:
        "Yes, and that is usually the strongest combination. The brand account holds the credibility and the founder account creates the conversations that lead to enquiries.",
    },
  ],
  "web-design-development": [
    {
      id: "web-1",
      question: "What does a website cost?",
      answer:
        "Websites are quoted per project rather than as a retainer, because scope varies enormously between a five page brand site and an ecommerce build. You get an itemised quote after the first call, covering design, development and any third party costs.",
    },
    {
      id: "web-2",
      question: "How long does a website take?",
      answer:
        "A straightforward brand site typically runs four to six weeks from kickoff to launch. Larger builds and ecommerce take longer. The single biggest factor in the timeline is how quickly content and feedback come back from your side.",
    },
    {
      id: "web-3",
      question: "What platform do you build on?",
      answer:
        "We choose the platform to suit the project rather than forcing everything onto one. The decision is made on your budget, how often you will update the site, and whether you are selling directly from it. We will explain the trade offs before we start.",
    },
    {
      id: "web-4",
      question: "Do you write the copy?",
      answer:
        "We handle the structure and direction, and full copywriting can be included in the scope. If you have a writer already, we will work with them.",
    },
    {
      id: "web-5",
      question: "Do I own the site?",
      answer:
        "Yes. On final payment the site, the files and the accounts are yours. Domain and hosting stay in your name from the start, never ours.",
    },
    {
      id: "web-6",
      question: "Do you handle maintenance after launch?",
      answer:
        "We offer ongoing support as an add on. Otherwise we hand over a site your team can manage, along with a walkthrough of how to update it.",
    },
    {
      id: "web-7",
      question: "Can you redesign my existing site instead of starting over?",
      answer:
        "Often yes. On the first call we will look at what you have and tell you honestly whether a redesign is the better value option or whether the underlying build is holding you back.",
    },
  ],
  "brand-identity-strategy": [
    {
      id: "brand-1",
      question: "What does brand identity cost?",
      answer:
        "Identity work is quoted per project, based on how much is being built. A refresh of an existing brand costs less than a full identity from scratch. You get an itemised quote after the first call.",
    },
    {
      id: "brand-2",
      question: "How long does it take?",
      answer:
        "A full identity typically runs three to five weeks. A refresh is quicker. Timelines depend on how promptly feedback comes back, since this is the most collaborative work we do.",
    },
    {
      id: "brand-3",
      question: "I only need a logo. Can you just do that?",
      answer:
        "We can, but we will usually push back. A logo without a defined palette, typography and voice tends to fall apart the moment it meets real content, and brands that buy a logo alone are often back within a year paying for the rest anyway.",
    },
    {
      id: "brand-4",
      question: "How many logo options do I get?",
      answer:
        "We present a considered direction rather than a wall of choices, usually two to three routes with reasoning, then refine the chosen one. Presenting twenty options is a sign nobody knows which one is right.",
    },
    {
      id: "brand-5",
      question: "Do I own the final files?",
      answer:
        "Yes. On final payment the logo files, source files and guidelines are yours outright. Licensed fonts remain subject to their own licensing terms, which we will explain before we recommend anything.",
    },
    {
      id: "brand-6",
      question: "Can you rebrand without losing my existing audience?",
      answer:
        "Yes, and there is a right way to do it. Where a brand already has recognition we evolve rather than erase, and we plan how the change is introduced so your audience follows you through it.",
    },
    {
      id: "brand-7",
      question: "What do I actually receive at the end?",
      answer:
        "A brand guidelines document, the full logo suite in all required formats, colour and typography specifications, and your voice and messaging framework, organised for handover.",
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
