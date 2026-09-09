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
    id: "service-1",
    slug: "web-design-development",
    title: "Web Design & Development",
    heading: ["Web Design", "& Development"],
    summary:
      "We design and build high-performing websites that blend striking visuals, seamless experience, and smart development to turn visitors into customers.",
    description:
      "From high-converting landing pages to complete brand websites, we design and develop digital experiences that feel effortless, load fast, and turn visitors into customers.",
    heroImage:
      "https://images.unsplash.com/photo-1556742049-0a67e55722c3?q=80&w=1800&auto=format&fit=crop",
    midImage:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop",
    deliverables: [
      "Brand Positioning Document",
      "Logo Suite & Visual Assets",
      "Color & Typography Guidelines",
      "Interactive High-Fidelity Prototypes",
      "Custom Full-Stack Next.js / React Development",
      "SEO, Performance & Speed Optimization",
      "CMS Setup & Client Handover Training",
    ],
    overview: [
      "We specialize in building brands and web experiences that are as meaningful as they are irrevocable. Our team combines market research, audience insights, positioning strategy, and visual direction to shape digital products that connect naturally with the right people. From messaging frameworks and brand voice to identity systems and activation strategy, every element is designed to reflect your values and differentiate your business.",
      "We manage the full web design and strategy process — from discovery and competitor analysis to positioning, messaging, UI design, and rollout planning. Our goal is to build digital platforms that are clear, scalable, and trusted across every customer touchpoint.",
    ],
    whyItMattersIntro:
      "We shape the strategy, story, and visuals that make your brand impossible to ignore.",
    whyItMatters: [
      {
        title: "Defined positioning",
        description:
          "We clarify what your brand stands for, who it’s for, and why it matters — so every message you send lands with the right people.",
      },
      {
        title: "Distinctive visual identity",
        description:
          "We design a visual system that’s immediately recognizable — one that works across every platform and leaves a lasting impression.",
      },
      {
        title: "Consistent brand voice",
        description:
          "We develop a tone and messaging framework that keeps your brand sounding like itself, no matter who’s writing or what channel you’re on.",
      },
      {
        title: "Scalable design system",
        description:
          "We build a living design system with components, colors, and guidelines your team can use to stay consistent as you grow.",
      },
      {
        title: "Audience-centered storytelling",
        description:
          "We shape your brand narrative around what your audience actually cares about — making it easy for them to see themselves in your brand.",
      },
      {
        title: "Foundation for every channel",
        description:
          "We ensure your digital experience is built to work everywhere — web, mobile, tablet — with the flexibility to adapt without losing its identity.",
      },
    ],
    buttonText: "Build your website",
  },
  {
    id: "service-2",
    slug: "brand-identity-strategy",
    title: "Brand Identity & Strategy",
    heading: ["Brand Identity", "& Strategy"],
    summary:
      "We shape memorable brand identities, timeless design systems, and positioning strategies that build trust and command authority in your market.",
    description:
      "We build brands that connect and endure — from visual systems, typography, and logos to comprehensive positioning and voice guidelines.",
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
        title: "Internal Team Clarity",
        description:
          "Empower marketing, sales, and product teams to speak with one unified, resonant voice.",
      },
      {
        title: "Cross-Platform Cohesion",
        description:
          "Seamless transition across packaging, digital products, out-of-home, and advertising.",
      },
    ],
    buttonText: "Shape your brand",
  },
  {
    id: "service-3",
    slug: "social-media-management",
    title: "Social Media Management",
    heading: ["Social Media", "& Content Growth"],
    summary:
      "We turn your social channels into high-converting organic engines with scroll-stopping creative, strategic storytelling, and community engagement.",
    description:
      "We turn your social presence into a brand people remember — with strategic content, consistent posting, and a voice that feels truly yours.",
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
    buttonText: "Grow your social",
  },
  {
    id: "service-4",
    slug: "performance-marketing",
    title: "Performance Marketing",
    heading: ["Performance", "& Paid Acquisition"],
    summary:
      "Data-driven paid ad campaigns engineered to convert, scale customer acquisition, and maximize return on ad spend across Meta, Google, and TikTok.",
    description:
      "Data-driven ad campaigns designed to convert, scale your revenue, and maximize ROI across paid social and search channels.",
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
    buttonText: "Scale your revenue",
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return servicesData.find((s) => s.slug === slug);
}

export function getAllServices(): ServiceData[] {
  return servicesData;
}
