export interface ServiceData {
  id: string;
  slug: string;
  title: string;
  heading: [string, string];
  summary: string;
  description: string;
  heroImage: string;
  midImage: string;
  deliverables: string[];
  overview: string[];
  whyItMattersIntro: string;
  whyItMatters: {
    title: string;
    description: string;
  }[];
  buttonText: string;
}

export const servicesData: ServiceData[] = [
  {
    id: "social-media",
    slug: "social-media-management",
    title: "Social media management",
    heading: ["Social Media", "Management"],
    summary:
      "Instagram is no longer optional. It is your storefront, your first impression and your most visited sales page. We manage it end to end, so it consistently reflects the true value of your brand.",
    description:
      "Instagram is no longer optional. It is your storefront, your first impression and your most visited sales page. We manage it end to end, so it consistently reflects the true value of your brand.",
    heroImage:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1800&auto=format&fit=crop",
    midImage:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop",
    deliverables: [
      "Monthly Content Strategy & Calendar",
      "Custom High-Resolution Graphic Assets",
      "Short-Form Video (Reels & TikTok) Production",
      "Bespoke Copywriting & Caption Frameworks",
      "Proactive Community Management & DM Strategy",
      "Hashtag & Keyword Algorithmic Optimization",
      "Bi-Weekly Analytics & Performance Audits",
    ],
    overview: [
      "In modern commerce, your social channels are your front door. We replace generic posts with culturally relevant, high-aesthetic content that captures attention in fast-moving feeds and nurtures casual viewers into dedicated brand evangelists.",
      "Our team oversees the end-to-end lifecycle: concept generation, visual curation, copywriting, posting cadence, and audience interaction so you can stay focused on scaling operations.",
    ],
    whyItMattersIntro:
      "We engineer content designed to trigger shares, saves, and commercial action.",
    whyItMatters: [
      {
        title: "Cultural Relevance",
        description:
          "Keep your brand top-of-mind with content that feels native, modern, and exciting.",
      },
      {
        title: "Algorithm Advantage",
        description:
          "Format short-form video and carousels for maximum organic reach and discoverability.",
      },
      {
        title: "Audience Trust & Loyalty",
        description:
          "Turn passive followers into an active community that champions your launches.",
      },
      {
        title: "Direct Conversion Path",
        description:
          "Craft strategic calls-to-action that funnel traffic straight to your product pages.",
      },
    ],
    buttonText: "Explore social media",
  },
  {
    id: "performance-marketing",
    slug: "performance-marketing",
    title: "Performance marketing",
    heading: ["Performance", "Marketing"],
    summary:
      "Anyone can boost a post. We build actual campaigns. Audience research, creative strategy, ad copy, testing and optimisation based on what the data says. Every rupee tracked.",
    description:
      "Anyone can boost a post. We build actual campaigns. Audience research, creative strategy, ad copy, testing and optimisation based on what the data says. Every rupee tracked.",
    heroImage:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1800&auto=format&fit=crop",
    midImage:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1200&auto=format&fit=crop",
    deliverables: [
      "Omnichannel Media Planning & Budget Modeling",
      "Ad Creative Concepting & Iteration Engine",
      "Conversion Rate Optimization (CRO) Audits",
      "Pixel Tracking & Server-Side CAPI Implementation",
      "Continuous A/B Testing of Copy, Hooks & Angles",
      "Weekly Transparent ROAS Dashboard",
      "Landing Page Funnel Tuning",
    ],
    overview: [
      "Performance marketing only works when superior creative meets rigorous mathematical discipline. We eliminate ad fatigue and wasted spend by pairing high-converting visual assets with algorithmic bidding strategies that reliably reduce CPA.",
      "We monitor conversion metrics in real time, rapidly scaling winning angles while continuously prototyping fresh variations to sustain profitable growth.",
    ],
    whyItMattersIntro:
      "We turn paid advertising from an expense into a predictable revenue generation machine.",
    whyItMatters: [
      {
        title: "Predictable Customer Acquisition",
        description:
          "Acquire high-LTV customers with measurable unit economics and scale confidence.",
      },
      {
        title: "Rapid Creative Iteration",
        description:
          "Test dozens of hooks and angles weekly to discover outlier winning creatives.",
      },
      {
        title: "Attribution Accuracy",
        description:
          "Server-side tracking ensures every marketing dollar is accountable and optimized.",
      },
      {
        title: "Maximized ROAS",
        description:
          "Continuous bidding calibration protects your margin while pushing volume.",
      },
    ],
    buttonText: "Explore marketing",
  },
  {
    id: "ugc-shoots",
    slug: "ugc-content-shoots",
    title: "UGC and content shoots",
    heading: ["UGC & Content", "Shoots"],
    summary:
      "We plan the shoot, direct the creative and coordinate production from concept to final edit. Every piece of content is built around your brand aesthetic and what your specific audience actually responds to.",
    description:
      "We plan the shoot, direct the creative and coordinate production from concept to final edit. Every piece of content is built around your brand aesthetic and what your specific audience actually responds to.",
    heroImage:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1800&auto=format&fit=crop",
    midImage:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop",
    deliverables: [
      "Moodboards & Visual Creative Direction",
      "Creator & Model Casting",
      "On-Location & Studio Shoot Coordination",
      "High-Fidelity Raw & Edited Footage",
      "Hook Variations & A/B Creative Formats",
      "Sound Design, Color Grading & Captions",
      "Content Asset Bank for Ads & Social",
    ],
    overview: [
      "Authenticity wins attention. We produce creator-led UGC and high-aesthetic studio shoots that don't feel like traditional ads. Every frame is engineered to stop the scroll and build immediate brand desire.",
      "From scripting hooks to post-production color grading, we deliver polished, high-performing video and photo assets ready for your paid channels and organic feeds.",
    ],
    whyItMattersIntro:
      "High-converting visual content crafted for how modern audiences discover and buy.",
    whyItMatters: [
      {
        title: "Scroll-Stopping Authenticity",
        description:
          "Content that blends natively into social feeds while commanding high purchase intent.",
      },
      {
        title: "Turnkey Production",
        description:
          "We handle scouting, talent, props, lighting, and editing so you get final assets with zero headache.",
      },
      {
        title: "Built for Paid Ads",
        description:
          "Engineered with varied hooks and calls to action for high ROAS on TikTok, Meta, and YouTube.",
      },
      {
        title: "Consistent Visual Standards",
        description:
          "Ensure every video and shoot stays true to your premium brand aesthetic.",
      },
    ],
    buttonText: "Explore content shoots",
  },
  {
    id: "founder-marketing",
    slug: "founder-led-marketing",
    title: "Founder led marketing",
    heading: ["Founder-Led", "Marketing"],
    summary:
      "The most underused marketing asset at any founder led company is the founder. Your story, your perspective, your presence on LinkedIn and Instagram builds trust faster than any ad campaign. We write, we post, we position. You grow.",
    description:
      "The most underused marketing asset at any founder led company is the founder. Your story, your perspective, your presence on LinkedIn and Instagram builds trust faster than any ad campaign. We write, we post, we position. You grow.",
    heroImage:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1800&auto=format&fit=crop",
    midImage:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1200&auto=format&fit=crop",
    deliverables: [
      "Founder Personal Brand Positioning",
      "Weekly Thought Leadership Ghostwriting (LinkedIn & X)",
      "Executive Video/Audio Content Repurposing",
      "Media, Podcast & PR Outreach Strategy",
      "Network Engagement & Commenting Cadence",
      "Founder Story & Pitch Narrative Development",
      "Monthly Growth & Inbound Pipeline Reports",
    ],
    overview: [
      "People buy from people. A strong personal brand for the founder creates unmatched inbound leverage, attracting top talent, investors, partners, and high-ticket clients without spending millions on ads.",
      "We interview you, extract your authentic insights, and turn them into compelling essays, videos, and daily posts that position you as an industry authority.",
    ],
    whyItMattersIntro:
      "Turn the founder's voice into the company's highest-converting acquisition channel.",
    whyItMatters: [
      {
        title: "Immediate Trust & Authority",
        description:
          "Founders who speak openly build trust 10x faster than faceless corporate accounts.",
      },
      {
        title: "Zero Ad Spend Inbound",
        description:
          "Generate high-quality enterprise leads, partnership deals, and media opportunities organically.",
      },
      {
        title: "Talent & Investor Magnet",
        description:
          "A vocal, visionary founder attracts top-tier candidates and smart capital effortlessly.",
      },
      {
        title: "Done-For-You Execution",
        description:
          "Spend just 45 minutes a month with us; we handle all drafting, editing, and distribution.",
      },
    ],
    buttonText: "Explore founder marketing",
  },
  {
    id: "web-design",
    slug: "web-design-development",
    title: "Web design and development",
    heading: ["Web Design", "& Development"],
    summary:
      "A site that looks expensive and behaves like a salesperson. We design and build for the way people actually browse in 2026, on a phone, in a hurry, deciding in seconds whether you are worth their time.",
    description:
      "A site that looks expensive and behaves like a salesperson. We design and build for the way people actually browse in 2026, on a phone, in a hurry, deciding in seconds whether you are worth their time.",
    heroImage:
      "https://images.unsplash.com/photo-1556742049-0a67e55722c3?q=80&w=1800&auto=format&fit=crop",
    midImage:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop",
    deliverables: [
      "Interactive High-Fidelity Figma Prototypes",
      "Full-Stack Next.js / React Modern Architecture",
      "Mobile-First Responsive Layouts & Fluid Typography",
      "Micro-Interactions & Scroll-Driven Animations",
      "SEO, Performance & Lighthouse 95+ Speed Tuning",
      "Conversion Rate Optimized (CRO) Page Flows",
      "CMS Setup & Client Handover Training",
    ],
    overview: [
      "We design and build digital platforms that balance breathtaking design with relentless conversion mechanics. In 2026, your site needs to deliver instant clarity on mobile devices while projecting unmistakable authority.",
      "From bespoke animation systems to headless CMS architecture, we engineer websites that elevate your brand and drive measurable revenue.",
    ],
    whyItMattersIntro:
      "We build digital flagship stores that turn curious visitors into paying clients.",
    whyItMatters: [
      {
        title: "Sub-Second Load Times",
        description:
          "Optimized Next.js and modern caching ensure zero drop-off from slow page transitions.",
      },
      {
        title: "Mobile-First Conversion",
        description:
          "Every screen is designed for thumb-friendly navigation and lightning-fast checkout.",
      },
      {
        title: "Luxury Brand Aesthetics",
        description:
          "Custom typography, refined spacing, and subtle physics make your site feel world-class.",
      },
      {
        title: "Scalable Architecture",
        description:
          "Clean modular components allow your team to add new pages and features effortlessly.",
      },
    ],
    buttonText: "Explore web design",
  },
  {
    id: "brand-identity",
    slug: "brand-identity-strategy",
    title: "Brand identity",
    heading: ["Brand Identity", "& Strategy"],
    summary:
      "Logo, colour, type, tone and the rules that hold it all together. Built so your brand still looks like itself on a reel, an invoice and a shopfront.",
    description:
      "Logo, colour, type, tone and the rules that hold it all together. Built so your brand still looks like itself on a reel, an invoice and a shopfront.",
    heroImage:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1800&auto=format&fit=crop",
    midImage:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    deliverables: [
      "Brand Core Strategy & Positioning Document",
      "Full Primary & Secondary Logo Suite",
      "Bespoke Color Palette & Typographic Hierarchy",
      "Brand Voice, Tone & Messaging Matrix",
      "Iconography & Custom Graphic Elements",
      "Print & Digital Collateral Templates",
      "Comprehensive Digital Brand Guidelines Book",
    ],
    overview: [
      "A strong brand identity is more than a logo; it is the emotional and intellectual imprint your company leaves in the minds of your audience. We distill your core mission into a visual and strategic language that commands authority, sparks loyalty, and positions you as a leader in your category.",
      "From deep qualitative discovery to iterative visual exploration, we partner closely with founders and executive teams to uncover the unique attributes that make your business irreplaceable.",
    ],
    whyItMattersIntro:
      "We build brands that make a lasting impression in seconds and stand the test of time.",
    whyItMatters: [
      {
        title: "Instant Market Recognition",
        description:
          "Stand out in saturated markets with an unmistakable aesthetic signature.",
      },
      {
        title: "Emotional Connection",
        description:
          "Align your visual values with the aspirations of your highest-value customers.",
      },
      {
        title: "Premium Pricing Power",
        description:
          "Elevated design cues signal superior quality and justify premium market positioning.",
      },
      {
        title: "Cross-Platform Cohesion",
        description:
          "Seamless transition across packaging, digital products, out-of-home, and advertising.",
      },
    ],
    buttonText: "Explore brand identity",
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return servicesData.find((s) => s.slug === slug);
}

export function getAllServices(): ServiceData[] {
  return servicesData;
}
