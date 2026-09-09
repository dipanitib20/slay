export interface BentoItem {
  id: string;
  image: string;
  title: string;
  caption?: string;
  aspectClass: string; // e.g. "aspect-[3/4]", "aspect-[16/10]", "aspect-[1/1]"
  tag?: string;
}

export interface ProjectData {
  id: string;
  slug: string;
  title: string;
  client: string;
  year: string;
  role: string;
  category: string;
  tags: string[];
  tagline: string;
  eyebrow: string;
  heroHeadline: [string, string]; // Stacked 2 lines
  heroDescription: string;
  heroImage: string;
  description: string;
  image: string; // thumbnail for cards
  meta: {
    client: string;
    year: string;
    services: string;
    deliverables: string;
    impact: string;
  };
  bentoGrid: {
    column1: BentoItem[];
    column2: BentoItem[];
    column3: BentoItem[];
  };
  quote: {
    statement: string;
    narrative: string;
    author: string;
    authorRole: string;
  };
  story: {
    challenge: string;
    approach: string;
    impact: string;
  };
  nextProjectSlug: string;
}

export const projectsData: ProjectData[] = [
  {
    id: "project-1",
    slug: "the-social-refresh",
    title: "The Social Refresh",
    client: "Aura Studio",
    year: "2026",
    role: "Brand Identity & Creative Direction",
    category: "Design",
    tags: ["Design", "Strategy", "Social"],
    tagline: "Reimagining brand identity with bold digital storytelling.",
    eyebrow: "SELECTED CASE STUDY · BRAND IDENTITY & SOCIAL SYSTEM",
    heroHeadline: ["EVERY DETAIL CRAFTED", "FOR MAXIMUM ENGAGEMENT"],
    heroDescription:
      "No generic templates and no recycled aesthetics. Real creative strategy, tactile typography, and visual systems built to command attention across modern digital channels.",
    heroImage:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1800&auto=format&fit=crop",
    description:
      "Reimagining a growing brand’s social presence with bold visuals, sharper storytelling, and a strategy built for engagement.",
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1200&auto=format&fit=crop",
    meta: {
      client: "Aura Creative Studio",
      year: "2026",
      services: "Visual Identity, Content Strategy, Motion System",
      deliverables: "Design System, 40+ Social Assets, Brand Guidelines",
      impact: "+240% Social Engagement, 3.2M Reach in 90 Days",
    },
    bentoGrid: {
      column1: [
        {
          id: "c1-1",
          image:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop",
          title: "Editorial Portraiture",
          caption: "Campaign art direction with high contrast palette",
          aspectClass: "aspect-[3/4]",
          tag: "Editorial",
        },
        {
          id: "c1-2",
          image:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
          title: "Human Narrative",
          caption: "Capturing authentic expressions for social reels",
          aspectClass: "aspect-[4/5]",
          tag: "Story",
        },
        {
          id: "c1-3",
          image:
            "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
          title: "Fluid Design System",
          caption: "3D brand marks & chromatic assets",
          aspectClass: "aspect-[16/10]",
          tag: "3D & Motion",
        },
      ],
      column2: [
        {
          id: "c2-1",
          image:
            "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop",
          title: "Interface & Experience",
          caption: "Interactive micro-moments designed for mobile screens",
          aspectClass: "aspect-[4/5]",
          tag: "UI / UX",
        },
        {
          id: "c2-2",
          image:
            "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1200&auto=format&fit=crop",
          title: "Atmospheric Landscape",
          caption: "Setting the moody, organic brand tone",
          aspectClass: "aspect-[16/9]",
          tag: "Photography",
        },
        {
          id: "c2-3",
          image:
            "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop",
          title: "Visual Hierarchy",
          caption: "Clean typographic layering and layout precision",
          aspectClass: "aspect-[3/4]",
          tag: "Typography",
        },
      ],
      column3: [
        {
          id: "c3-1",
          image:
            "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop",
          title: "Collaborative Workshop",
          caption: "Sprint sessions and concept alignment",
          aspectClass: "aspect-[16/10]",
          tag: "Process",
        },
        {
          id: "c3-2",
          image:
            "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1000&auto=format&fit=crop",
          title: "Workspace & Culture",
          caption: "Where strategy meets rapid prototype execution",
          aspectClass: "aspect-[3/4]",
          tag: "Studio",
        },
        {
          id: "c3-3",
          image:
            "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=1000&auto=format&fit=crop",
          title: "Packaging & Detail",
          caption: "Tangible brand touchpoints and tactile textures",
          aspectClass: "aspect-[1/1]",
          tag: "Physical",
        },
      ],
    },
    quote: {
      statement:
        "WE TRANSFORMED OUR ENTIRE DIGITAL PRESENCE AND SAW OUR AUDIENCE CONVERT INTO LOYAL BRAND ADVOCATES.",
      narrative:
        "The creative team unlocked possibilities we had never considered. Every piece was delivered with uncompromising precision, giving us the confidence to launch our biggest campaign to date.",
      author: "Elena Rostova",
      authorRole: "Head of Marketing, Aura Studio",
    },
    story: {
      challenge:
        "Aura Studio had established strong product quality, but their visual storytelling lacked cohesive identity across fragmented touchpoints, resulting in low social click-throughs and inconsistent brand recognition.",
      approach:
        "We developed a refreshed typography hierarchy, bespoke motion templates, and an editorial photography framework that positioned them as thought leaders in the contemporary creative space.",
      impact:
        "Within 90 days of rollout, Aura achieved a 240% boost in organic social interactions, 3.2M impressions, and a 42% increase in direct inbound sales inquiries.",
    },
    nextProjectSlug: "lumen-brand-evolution",
  },
  {
    id: "project-2",
    slug: "lumen-brand-evolution",
    title: "Lumen Brand Evolution",
    client: "Lumen Tech",
    year: "2026",
    role: "Brand Identity & Web Experience",
    category: "Branding",
    tags: ["Branding", "Design", "Strategy"],
    tagline: "Evolving an enterprise tech platform into an iconic modern brand.",
    eyebrow: "SELECTED CASE STUDY · ENTERPRISE BRANDING & REPOSITIONING",
    heroHeadline: ["STRATEGY MEETS", "UNAPOLOGETIC ELEGANCE"],
    heroDescription:
      "Translating complex technology infrastructure into an effortless, warm, human-centric design language that stands out in a crowded market.",
    heroImage:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1800&auto=format&fit=crop",
    description:
      "Reimagining a growing brand’s social presence with bold visuals, sharper storytelling, and a strategy built for engagement.",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop",
    meta: {
      client: "Lumen Technologies",
      year: "2026",
      services: "Brand Strategy, Visual System, Web Design",
      deliverables: "Design Guidelines, UI Component Library, 3D Assets",
      impact: "3.5x Valuation Increase, Featured in Top Design Publications",
    },
    bentoGrid: {
      column1: [
        {
          id: "c1-1",
          image:
            "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
          title: "Abstract Geometric Identity",
          caption: "Dimensional brand icons with iridescent textures",
          aspectClass: "aspect-[3/4]",
          tag: "Identity",
        },
        {
          id: "c1-2",
          image:
            "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1000&auto=format&fit=crop",
          title: "Architectural Clarity",
          caption: "Minimal spatial arrangements with warm earthy undertones",
          aspectClass: "aspect-[4/5]",
          tag: "Environment",
        },
        {
          id: "c1-3",
          image:
            "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop",
          title: "Web Platform Architecture",
          caption: "Responsive web layouts built for speed and clarity",
          aspectClass: "aspect-[16/10]",
          tag: "Digital",
        },
      ],
      column2: [
        {
          id: "c2-1",
          image:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop",
          title: "Executive Portraiture",
          caption: "Authentic leadership profiles",
          aspectClass: "aspect-[4/5]",
          tag: "Editorial",
        },
        {
          id: "c2-2",
          image:
            "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop",
          title: "Team Innovation Lab",
          caption: "Cross-functional ideation in action",
          aspectClass: "aspect-[16/9]",
          tag: "Strategy",
        },
        {
          id: "c2-3",
          image:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop",
          title: "User Experience Focus",
          caption: "Customer-first interactions crafted with care",
          aspectClass: "aspect-[3/4]",
          tag: "Product",
        },
      ],
      column3: [
        {
          id: "c3-1",
          image:
            "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1200&auto=format&fit=crop",
          title: "Nature & Technology Blend",
          caption: "Harmonizing digital products with organic principles",
          aspectClass: "aspect-[16/10]",
          tag: "Concept",
        },
        {
          id: "c3-2",
          image:
            "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop",
          title: "Design System Tokens",
          caption: "Structured color scales and typographic precision",
          aspectClass: "aspect-[3/4]",
          tag: "System",
        },
        {
          id: "c3-3",
          image:
            "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=1000&auto=format&fit=crop",
          title: "Tactile Swatches",
          caption: "Tangible finishes and curated print materials",
          aspectClass: "aspect-[1/1]",
          tag: "Print",
        },
      ],
    },
    quote: {
      statement:
        "THIS REBRAND HAS ELEVATED OUR REPUTATION AMONG FORTUNE 500 PARTNERS GLOBALLY.",
      narrative:
        "We went from explaining what we do to having clients instantly understand and desire our solutions before the first slide is even shown.",
      author: "Marcus Vance",
      authorRole: "Chief Executive Officer, Lumen Tech",
    },
    story: {
      challenge:
        "Lumen was preparing for their Series B round and needed a brand identity that communicated enterprise stability while preserving their reputation for cutting-edge agility.",
      approach:
        "We redefined the visual brand architecture with high-contrast typography, interactive web experiences, and an editorial art direction system that established instant trust.",
      impact:
        "The new brand identity contributed directly to closing their largest tier enterprise deals and accelerated their international expansion.",
    },
    nextProjectSlug: "kinetic-motion-lab",
  },
  {
    id: "project-3",
    slug: "kinetic-motion-lab",
    title: "Kinetic Motion Lab",
    client: "Kinetic Collective",
    year: "2025",
    role: "Motion Design & Campaign Strategy",
    category: "Strategy",
    tags: ["Design", "Branding", "Strategy"],
    tagline: "Dynamic motion identity and digital campaign for creative pioneers.",
    eyebrow: "SELECTED CASE STUDY · MOTION DESIGN & GLOBAL CAMPAIGN",
    heroHeadline: ["ENERGY IN MOTION", "SHAPED BY STRATEGY"],
    heroDescription:
      "Creating high-voltage digital campaigns and motion language that captures the relentless pace of modern creative culture.",
    heroImage:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1800&auto=format&fit=crop",
    description:
      "Reimagining a growing brand’s social presence with bold visuals, sharper storytelling, and a strategy built for engagement.",
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1200&auto=format&fit=crop",
    meta: {
      client: "Kinetic Collective",
      year: "2025",
      services: "Motion Identity, Campaign Strategy, Video Production",
      deliverables: "30+ Motion Assets, 3D Renders, Event Graphics",
      impact: "5.8M Video Views, 64% Growth in Active Community",
    },
    bentoGrid: {
      column1: [
        {
          id: "c1-1",
          image:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
          title: "Live Action Direction",
          caption: "Cinematic filming with dynamic camera choreography",
          aspectClass: "aspect-[3/4]",
          tag: "Cinematography",
        },
        {
          id: "c1-2",
          image:
            "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
          title: "Kinetic Typography",
          caption: "Type that moves and reacts with auditory pulses",
          aspectClass: "aspect-[4/5]",
          tag: "Motion",
        },
        {
          id: "c1-3",
          image:
            "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1000&auto=format&fit=crop",
          title: "Studio Ideation",
          caption: "Rapid storyboard development and timing tests",
          aspectClass: "aspect-[16/10]",
          tag: "Process",
        },
      ],
      column2: [
        {
          id: "c2-1",
          image:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop",
          title: "Creative Direction",
          caption: "Curating talent and distinctive fashion styling",
          aspectClass: "aspect-[4/5]",
          tag: "Direction",
        },
        {
          id: "c2-2",
          image:
            "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1200&auto=format&fit=crop",
          title: "Location Atmosphere",
          caption: "Dramatic environmental lighting and natural haze",
          aspectClass: "aspect-[16/9]",
          tag: "Production",
        },
        {
          id: "c2-3",
          image:
            "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1000&auto=format&fit=crop",
          title: "Post-Production Lab",
          caption: "Color grading and high-frame-rate rendering",
          aspectClass: "aspect-[3/4]",
          tag: "Post",
        },
      ],
      column3: [
        {
          id: "c3-1",
          image:
            "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop",
          title: "Interactive Web Teaser",
          caption: "WebGL animations and cursor-reactive states",
          aspectClass: "aspect-[16/10]",
          tag: "WebGL",
        },
        {
          id: "c3-2",
          image:
            "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop",
          title: "Editorial Campaign",
          caption: "Outdoor billboards and high-density digital ads",
          aspectClass: "aspect-[3/4]",
          tag: "OOH",
        },
        {
          id: "c3-3",
          image:
            "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=1000&auto=format&fit=crop",
          title: "Merch & Collateral",
          caption: "Silkscreen prints and tactile event passes",
          aspectClass: "aspect-[1/1]",
          tag: "Physical",
        },
      ],
    },
    quote: {
      statement:
        "THE CAMPAIGN SET A NEW BENCHMARK FOR OUR INDUSTRY'S DIGITAL ENGAGEMENT.",
      narrative:
        "From the first frame to the final sound cue, the execution felt effortlessly cool, commanding attention across every single platform.",
      author: "Julian Frost",
      authorRole: "Creative Director, Kinetic Collective",
    },
    story: {
      challenge:
        "Kinetic needed a show-stopping launch for their annual global festival that broke away from conventional tech conferences.",
      approach:
        "We built a hyper-kinetic visual language driven by fluid typography, high-octane 3D graphics, and responsive WebGL teasers.",
      impact:
        "Sold out tickets in under 48 hours, generated 5.8M organic video impressions, and won multiple industry awards.",
    },
    nextProjectSlug: "nordic-living-space",
  },
  {
    id: "project-4",
    slug: "nordic-living-space",
    title: "Nordic Living Space",
    client: "Nordic Goods",
    year: "2025",
    role: "E-Commerce & Digital Flagship",
    category: "Development",
    tags: ["Design", "Strategy", "Development"],
    tagline: "Minimalist architecture meets bespoke digital commerce.",
    eyebrow: "SELECTED CASE STUDY · E-COMMERCE & SPATIAL DESIGN",
    heroHeadline: ["QUIET SOPHISTICATION", "ENGINEERED FOR CONVERSION"],
    heroDescription:
      "A serene digital sanctuary for Scandinavian interior design, blending tactile craftsmanship with frictionless purchasing flows.",
    heroImage:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1800&auto=format&fit=crop",
    description:
      "Reimagining a growing brand’s social presence with bold visuals, sharper storytelling, and a strategy built for engagement.",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop",
    meta: {
      client: "Nordic Goods Co.",
      year: "2025",
      services: "E-Commerce Architecture, Art Direction, Performance Optimization",
      deliverables: "Headless Shopify Store, 3D Product Configurator, Lookbook",
      impact: "+185% Online Revenue, 99 Lighthouse Performance Score",
    },
    bentoGrid: {
      column1: [
        {
          id: "c1-1",
          image:
            "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1000&auto=format&fit=crop",
          title: "Organic Materials",
          caption: "Natural oak, linen, and warm earthen ceramics",
          aspectClass: "aspect-[3/4]",
          tag: "Materiality",
        },
        {
          id: "c1-2",
          image:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop",
          title: "Living Spaces",
          caption: "Natural sunlight illuminating serene interiors",
          aspectClass: "aspect-[4/5]",
          tag: "Interior",
        },
        {
          id: "c1-3",
          image:
            "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop",
          title: "Checkout Flow",
          caption: "One-click frictionless purchasing experience",
          aspectClass: "aspect-[16/10]",
          tag: "Conversion",
        },
      ],
      column2: [
        {
          id: "c2-1",
          image:
            "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
          title: "Product Configurator",
          caption: "3D customization in real-time lighting",
          aspectClass: "aspect-[4/5]",
          tag: "3D Web",
        },
        {
          id: "c2-2",
          image:
            "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1200&auto=format&fit=crop",
          title: "Nordic Landscapes",
          caption: "The Scandinavian wilderness that inspired each silhouette",
          aspectClass: "aspect-[16/9]",
          tag: "Heritage",
        },
        {
          id: "c2-3",
          image:
            "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1000&auto=format&fit=crop",
          title: "Craftsmanship Detail",
          caption: "Macro photography celebrating hand-stitched joints",
          aspectClass: "aspect-[3/4]",
          tag: "Craft",
        },
      ],
      column3: [
        {
          id: "c3-1",
          image:
            "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop",
          title: "Flagship Showroom",
          caption: "Architectural synergy between physical & digital spaces",
          aspectClass: "aspect-[16/10]",
          tag: "Spatial",
        },
        {
          id: "c3-2",
          image:
            "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop",
          title: "Mobile Optimization",
          caption: "Sub-second load times on 5G and LTE devices",
          aspectClass: "aspect-[3/4]",
          tag: "Speed",
        },
        {
          id: "c3-3",
          image:
            "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=1000&auto=format&fit=crop",
          title: "Eco Packaging",
          caption: "100% recyclable, debossed unboxing experience",
          aspectClass: "aspect-[1/1]",
          tag: "Sustainable",
        },
      ],
    },
    quote: {
      statement:
        "OUR NEW DIGITAL STORE HAS BECOME OUR HIGHEST-GROSSING CHANNEL IN COMPANY HISTORY.",
      narrative:
        "The attention to spatial rhythm and typography elevated our furniture pieces into true works of collectible art.",
      author: "Freja Lindholm",
      authorRole: "Founder & Creative Director, Nordic Goods",
    },
    story: {
      challenge:
        "Nordic Goods was experiencing cart abandonment due to outdated mobile templates and lacked the visual elegance of their Copenhagen showroom.",
      approach:
        "We built a bespoke headless Shopify flagship featuring bespoke micro-animations, rich product storytelling, and seamless 3D product previews.",
      impact:
        "Average order value rose by 38%, conversion rates doubled, and international orders expanded across 24 countries.",
    },
    nextProjectSlug: "the-social-refresh",
  },
];

export function getProjectBySlug(slug: string): ProjectData | undefined {
  return projectsData.find((p) => p.slug === slug);
}

export function getAllProjects(): ProjectData[] {
  return projectsData;
}
