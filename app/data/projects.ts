export interface BentoItem {
  id: string;
  image: string;
  title: string;
  caption?: string;
  aspectClass: string; // e.g. "aspect-[3/4]", "aspect-[16/10]", "aspect-[1/1]"
  tag?: string;
}

export interface ProjectCarousel {
  id?: string;
  title?: string;
  subtitle?: string;
  images: string[];
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
  carousels?: ProjectCarousel[];
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
    id: "law-in-heels",
    slug: "law-in-heels",
    title: "Law in Heels",
    client: "Anvi Jain",
    year: "2026",
    role: "Personal Branding & Content Strategy",
    category: "Personal Brand",
    tags: ["Social Media", "LinkedIn", "YouTube", "Personal Brand", "Content Shoot"],
    tagline: "Building a consistent, aesthetic platform for legal creator Anvi Jain.",
    eyebrow: "SELECTED CASE STUDY · PERSONAL BRANDING & CREATOR SYSTEM",
    heroHeadline: ["FROM LEGAL EXPERTISE", "TO DIGITAL INFLUENCE"],
    heroDescription:
      "Aka Anvi Jain, lawyer turned legal creator, needed a platform. We built her consistent, aesthetic content system, shoot planning, scripting, calendars, and purposeful strategy.",
    heroImage: "/homework/law-in-heels.png",
    description:
      "Aka Anvi Jain, lawyer turned legal creator, needed a platform. We built her consistent, aesthetic content system, shoot planning, scripting, calendars, and purposeful strategy.",
    image: "/homework/law-in-heels.png",
    meta: {
      client: "Anvi Jain (Law in Heels)",
      year: "2026",
      services: "Personal Branding, Content Strategy, Shoot Planning",
      deliverables: "Content System, Scripting Framework, Calendars",
      impact: "+340% Cross-Platform Growth, 6M+ Reach",
    },
    bentoGrid: {
      column1: [
        {
          id: "lih-1",
          image: "/homework/law-in-heels.png",
          title: "Executive Portraiture",
          caption: "Editorial studio shoot establishing founder presence",
          aspectClass: "aspect-[3/4]",
          tag: "Branding",
        },
        {
          id: "lih-2",
          image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000&auto=format&fit=crop",
          title: "Legal Insights Format",
          caption: "High retention carousel designs for LinkedIn",
          aspectClass: "aspect-[4/5]",
          tag: "LinkedIn",
        },
        {
          id: "lih-3",
          image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=1000&auto=format&fit=crop",
          title: "Studio Production",
          caption: "Behind the scenes scripting and video sets",
          aspectClass: "aspect-[16/10]",
          tag: "Production",
        },
      ],
      column2: [
        {
          id: "lih-4",
          image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop",
          title: "YouTube Studio Series",
          caption: "Long-form legal breakdown thumbnails and art direction",
          aspectClass: "aspect-[4/5]",
          tag: "YouTube",
        },
        {
          id: "lih-5",
          image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1200&auto=format&fit=crop",
          title: "Workspace Aesthetic",
          caption: "Minimalist corporate aesthetic aligning with luxury appeal",
          aspectClass: "aspect-[16/9]",
          tag: "Atmosphere",
        },
        {
          id: "lih-6",
          image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1000&auto=format&fit=crop",
          title: "Typography & Guidelines",
          caption: "Clear typographic hierarchy and motion graphics",
          aspectClass: "aspect-[3/4]",
          tag: "Design",
        },
      ],
      column3: [
        {
          id: "lih-7",
          image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
          title: "Creator Collaboration",
          caption: "Sprint strategy sessions and quarterly review planning",
          aspectClass: "aspect-[16/10]",
          tag: "Strategy",
        },
        {
          id: "lih-8",
          image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop",
          title: "Audience Engagement",
          caption: "Interactive community stories and Q&A formats",
          aspectClass: "aspect-[3/4]",
          tag: "Community",
        },
        {
          id: "lih-9",
          image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop",
          title: "Reel Direction",
          caption: "Bite-sized legal commentary that commands attention",
          aspectClass: "aspect-[1/1]",
          tag: "Short Form",
        },
      ],
    },
    carousels: [
      {
        id: "lih-carousel-1",
        title: "Social & LinkedIn Creatives",
        subtitle: "A selection of curated carousels, video thumbnails, and content frameworks built for legal authority.",
        images: [
          "/homework/law-in-heels.png",
          "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1000&auto=format&fit=crop",
        ],
      },
    ],
    quote: {
      statement: "SLAY GAVE MY LEGAL EXPERTISE THE DIGITAL PLATFORM AND POLISH IT DESERVED.",
      narrative:
        "Every script, shoot, and post is intentional, aesthetic, and impactful. We built an audience that trusts and engages daily.",
      author: "Anvi Jain",
      authorRole: "Founder & Creator, Law in Heels",
    },
    story: {
      challenge:
        "Transitioning from practicing corporate law to full-time content creation required establishing digital authority, structured shoot planning, and brand alignment.",
      approach:
        "We designed a cohesive content system, monthly calendar architecture, in-studio shoot direction, and tailored messaging for LinkedIn and YouTube.",
      impact:
        "Grew reach to over 6M impressions across channels and established Law in Heels as a benchmark legal creator brand.",
    },
    nextProjectSlug: "indian-summer-atelier",
  },
  {
    id: "indian-summer-atelier",
    slug: "indian-summer-atelier",
    title: "Indian Summer Atelier",
    client: "Indian Summer Atelier",
    year: "2026",
    role: "Content Engine & Performance Marketing",
    category: "Performance Marketing",
    tags: ["Social Media", "Performance Marketing", "Founder Led", "UGC and Content Shoot"],
    tagline: "Fashion label content system and high-ROAS performance marketing.",
    eyebrow: "SELECTED CASE STUDY · FASHION & D2C GROWTH",
    heroHeadline: ["FASHION CRAFT", "LANDING AS IT DESERVES"],
    heroDescription:
      "A Gurugram fashion label with the product already right and the presence lagging behind it. We built the content system around what they shoot in house, then took it further with performance marketing and founder led content. Same brand, finally landing the way it deserves to.",
    heroImage: "/indian summer/indian summer  (2).png",
    description:
      "A Gurugram fashion label with the product already right and the presence lagging behind it. We built the content system around what they shoot in house, then took it further with performance marketing and founder led content. Same brand, finally landing the way it deserves to.",
    image: "/indian summer/indian summer  (2).png",
    meta: {
      client: "Indian Summer Atelier",
      year: "2026",
      services: "In-House Shoots, Performance Ads, Founder Strategy",
      deliverables: "Weekly Lookbooks, Paid Media Campaigns, Feed Styling",
      impact: "4.8x ROAS, 280% D2C Revenue Growth",
    },
    bentoGrid: {
      column1: [
        {
          id: "isa-1",
          image:
            "/indian summer/Ajrakh carries an air of distinction that fast fashion can never recreate. ⚜️Rooted in centuries.mp4",
          title: "Ajrakh Heritage Reel",
          caption: "Centuries-old craft and distinguished silhouette storytelling",
          aspectClass: "aspect-[9/16]",
          tag: "Heritage",
        },
        {
          id: "isa-2",
          image: "/indian summer/ad (33).png",
          title: "Performance Ad Lookbook",
          caption: "Targeted Meta ad testing and conversion asset",
          aspectClass: "aspect-[3/4]",
          tag: "Performance",
        },
      ],
      column2: [
        {
          id: "isa-3",
          image:
            "/indian summer/Ajrakh- the stunner has made its comeback. DM us to know the details. #ajrakhcollection #ajrakhp.mp4",
          title: "Ajrakh Comeback Drop",
          caption: "High energy collection restock and announcement reel",
          aspectClass: "aspect-[9/16]",
          tag: "Drops",
        },
        {
          id: "isa-4",
          image: "/indian summer/ad (34).png",
          title: "Campaign Creative",
          caption: "Editorial styling and product focus",
          aspectClass: "aspect-[3/4]",
          tag: "Campaign",
        },
      ],
      column3: [
        {
          id: "isa-5",
          image:
            "/indian summer/••Mehar Hand-Embroidered Stripped Tissue Panelled Long Dress•••Long dress in pure silk and strip.mp4",
          title: "Mehar Hand-Embroidered Dress",
          caption: "Pure silk and tissue panelled movement video",
          aspectClass: "aspect-[9/16]",
          tag: "Craft",
        },
        {
          id: "isa-6",
          image: "/indian summer/indian summer  (2).png",
          title: "Atelier Studio Shoot",
          caption: "In-house editorial portrait establishing brand presence",
          aspectClass: "aspect-[3/4]",
          tag: "Editorial",
        },
      ],
    },
    carousels: [
      {
        id: "isa-carousel-1",
        title: "Collection Lookbook & Silhouettes",
        subtitle: "In-house editorial photography highlighting hand-embroidered textiles and draping.",
        images: [
          "/indian summer/carousel 1/1.png",
          "/indian summer/carousel 1/2.png",
          "/indian summer/carousel 1/3.png",
          "/indian summer/carousel 1/4.png",
          "/indian summer/carousel 1/5.png",
          "/indian summer/carousel 1/6.png",
        ],
      },
      {
        id: "isa-carousel-2",
        title: "Seasonal Styling & Details",
        subtitle: "Macro fabric details and founder-led styling formats.",
        images: [
          "/indian summer/carousel 2/1.jpg",
          "/indian summer/carousel 2/2.jpg",
          "/indian summer/carousel 2/3.jpg",
          "/indian summer/carousel 2/4.jpg",
          "/indian summer/carousel 2/5.jpg",
          "/indian summer/carousel 2/6.jpg",
        ],
      },
    ],
    quote: {
      statement: "OUR COLLECTIONS FINALLY SELL OUT AS FAST AS WE CAN CREATE THEM.",
      narrative:
        "Slay took our authentic in-house shoots and paired them with ruthless performance marketing. Our brand presence now completely matches our product quality.",
      author: "Founder",
      authorRole: "Creative Director, Indian Summer Atelier",
    },
    story: {
      challenge:
        "The label crafted exquisite garments in Gurugram, but their social media didn't convey the quality, resulting in high ad spend with low returns.",
      approach:
        "We streamlined in-house shoots, created high-converting founder-led styling reels, and ran data-driven Meta ads with rigorous creative testing.",
      impact:
        "Delivered a sustained 4.8x ROAS and scaled pan-India orders by 280% across consecutive collection drops.",
    },
    nextProjectSlug: "maple",
  },
  {
    id: "maple",
    slug: "maple",
    title: "MAPLE",
    client: "Maple Canadian Preschool",
    year: "2026",
    role: "Admissions Marketing & Local Growth",
    category: "Performance Marketing",
    tags: ["Social Media", "Performance Marketing", "Local Audience Growth", "Admissions Marketing"],
    tagline: "Turning a neighbourhood preschool into the brand Bengaluru parents scroll past twice.",
    eyebrow: "SELECTED CASE STUDY · EDUCATION & ADMISSIONS MARKETING",
    heroHeadline: ["WARM, TRUST-LED", "CANADIAN PRESCHOOL STORYTELLING"],
    heroDescription:
      "We turned a neighbourhood preschool into the brand every Bengaluru parent scrolls past twice. Warm, trust led content that shows real classrooms, real milestones and the Canadian learning approach in action, built to spark admissions conversations in 2026.",
    heroImage: "/maple/carousel 1/1.jpg",
    description:
      "We turned a neighbourhood preschool into the brand every Bengaluru parent scrolls past twice. Warm, trust led content that shows real classrooms, real milestones and the Canadian learning approach in action, built to spark admissions conversations in 2026.",
    image: "/maple/carousel 1/1.jpg",
    meta: {
      client: "MAPLE Preschool Bengaluru",
      year: "2026",
      services: "Local Growth, Performance Marketing, Content Strategy",
      deliverables: "Classroom Stories, Parent Testimonials, Lead Generation",
      impact: "+180% Inbound Admissions, 100% Enrollment Cap",
    },
    bentoGrid: {
      column1: [
        {
          id: "maple-v1",
          image:
            "/maple/At Maple Bear RMV Stage 2, learning comes alive through play! 🌟 Our little learners are explori.mp4",
          title: "Learning Through Play",
          caption: "Classroom immersion and playful learning",
          aspectClass: "aspect-[9/16]",
          tag: "Classrooms",
        },
        {
          id: "maple-v2",
          image:
            "/maple/Every little step matters when it comes to your child’s future ✨At Maple Bear RMV Stage 2, it’s .mp4",
          title: "Every Little Step",
          caption: "Nurturing milestones for future growth",
          aspectClass: "aspect-[9/16]",
          tag: "Milestones",
        },
      ],
      column2: [
        {
          id: "maple-v3",
          image:
            "/maple/From heartfelt words to proud smiles our Maple RMV2 parents took the stage to share their journe.mp4",
          title: "Parent Voices",
          caption: "Heartfelt testimonials from Bengaluru families",
          aspectClass: "aspect-[9/16]",
          tag: "Community",
        },
        {
          id: "maple-v4",
          image:
            "/maple/Tiny chefs, big learning moments 👩_🍳✨From mixing healthy ingredients to creating delicious mul.mp4",
          title: "Tiny Chefs",
          caption: "Sensory cooking & activity moments",
          aspectClass: "aspect-[9/16]",
          tag: "Activities",
        },
      ],
      column3: [
        {
          id: "maple-v5",
          image:
            "/maple/Tiny explorers, big discoveries! Our little paleontologists at Maple Bear RMV 2 had an exciting .mp4",
          title: "Tiny Explorers",
          caption: "Hands-on discovery and curiosity",
          aspectClass: "aspect-[9/16]",
          tag: "Discovery",
        },
        {
          id: "maple-v6",
          image:
            "/maple/Tiny steps, big milestones ✨ From movement to coordination, every dance, jump & giggle at Maple  (1).mp4",
          title: "Movement & Coordination",
          caption: "Active play, dance & motor skills",
          aspectClass: "aspect-[9/16]",
          tag: "Movement",
        },
      ],
    },
    carousels: [
      {
        id: "maple-carousel-1",
        title: "Play & Learning Highlights",
        subtitle: "Curated moments of early childhood discovery and interactive learning.",
        images: [
          "/maple/carousel 1/1.jpg",
          "/maple/carousel 1/2.jpg",
          "/maple/carousel 1/3.jpg",
        ],
      },
      {
        id: "maple-carousel-2",
        title: "Classroom Life & Milestones",
        subtitle: "A glimpse inside the Canadian learning framework in action.",
        images: [
          "/maple/carousel 2/1.jpg",
          "/maple/carousel 2/2.jpg",
          "/maple/carousel 2/3.jpg",
          "/maple/carousel 2/4.jpg",
          "/maple/carousel 2/5.jpg",
          "/maple/carousel 2/6.jpg",
        ],
      },
      {
        id: "maple-carousel-3",
        title: "Hands-on Discovery & Wonder",
        subtitle: "Messy hands, curious minds, and joyful milestone moments.",
        images: [
          "/maple/carousel 3/1.jpg",
          "/maple/carousel 3/2.jpg",
          "/maple/carousel 3/3.jpg",
          "/maple/carousel 3/The best learning happens when little hands get messy, curious minds start asking questions, and (4).jpg",
          "/maple/carousel 3/5.jpg",
          "/maple/carousel 3/6.jpg",
        ],
      },
      {
        id: "maple-carousel-4",
        title: "Admissions & Campus Joy",
        subtitle: "Warm, trust-led storytelling connecting with parents across Bengaluru.",
        images: [
          "/maple/carousel 4/1.jpg",
          "/maple/carousel 4/2.jpg",
          "/maple/carousel 4/3.jpg",
          "/maple/carousel 4/4.jpg",
          "/maple/carousel 4/5.jpg",
          "/maple/carousel 4/6.jpg",
        ],
      },
    ],
    quote: {
      statement: "WE BECAME THE TALK OF EVERY PARENT GROUP CHAT IN OUR NEIGHBOURHOOD.",
      narrative:
        "Slay didn't just market our preschool; they showed parents the heart and care that happens in our classrooms every day.",
      author: "School Leadership",
      authorRole: "Centre Director, Maple Bengaluru",
    },
    story: {
      challenge: "Standing out among competitive Bengaluru preschools required moving beyond generic stock photos to show real classroom magic.",
      approach: "We documented everyday milestones, Canadian pedagogy in action, and ran hyper-local paid ads tailored to young parents in the vicinity.",
      impact: "Increased admissions inquiries by 180% and reached 100% capacity within 60 days.",
    },
    nextProjectSlug: "claw-nails",
  },
  {
    id: "claw-nails",
    slug: "claw-nails",
    title: "CLAW NAILS",
    client: "Claw Nails Studio",
    year: "2026",
    role: "Social Direction & In-Studio Shoots",
    category: "Social Media",
    tags: ["Social Media", "UGC & Content Shoot", "Founder Led"],
    tagline: "Nails, but make it a whole aesthetic with weekly in-studio shoots.",
    eyebrow: "SELECTED CASE STUDY · BEAUTY & AESTHETIC REVOLUTION",
    heroHeadline: ["EVERY SET GETS ITS", "MAIN CHARACTER MOMENT"],
    heroDescription:
      "Nails, but make it a whole aesthetic. We ran Claw's Instagram with playful, trend aware content backed by weekly in-studio shoots, so every set got its main character moment and the feed stayed as sharp as the tips.",
    heroImage: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=1200&auto=format&fit=crop",
    description:
      "Nails, but make it a whole aesthetic. We ran Claw's Instagram with playful, trend aware content backed by weekly in-studio shoots, so every set got its main character moment and the feed stayed as sharp as the tips.",
    image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=1200&auto=format&fit=crop",
    meta: {
      client: "Claw Nails Studio",
      year: "2026",
      services: "Weekly Studio Shoots, Trend Direction, Community Management",
      deliverables: "High-Gloss Reels, Story Engine, Influencer Content",
      impact: "+400% Bookings Growth, 2.5M Viral Views",
    },
    bentoGrid: {
      column1: [
        {
          id: "claw-1",
          image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=1000&auto=format&fit=crop",
          title: "Chrome & Metallic Tips",
          caption: "Close-up macro photography capturing light reflections",
          aspectClass: "aspect-[3/4]",
          tag: "Nail Art",
        },
        {
          id: "claw-2",
          image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1000&auto=format&fit=crop",
          title: "Studio Experience",
          caption: "Aesthetic salon interior and customer pampering reels",
          aspectClass: "aspect-[4/5]",
          tag: "Experience",
        },
        {
          id: "claw-3",
          image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1000&auto=format&fit=crop",
          title: "Trend Forecasting",
          caption: "Translating global runways into weekly Instagram formats",
          aspectClass: "aspect-[16/10]",
          tag: "Trends",
        },
      ],
      column2: [
        {
          id: "claw-4",
          image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=1000&auto=format&fit=crop",
          title: "Founder Masterclass",
          caption: "Founder insights on nail care, technique, and longevity",
          aspectClass: "aspect-[4/5]",
          tag: "Founder Led",
        },
        {
          id: "claw-5",
          image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1200&auto=format&fit=crop",
          title: "Aesthetic Palette",
          caption: "Minimal pastel and nude palettes for working professionals",
          aspectClass: "aspect-[16/9]",
          tag: "Minimalist",
        },
        {
          id: "claw-6",
          image: "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?q=80&w=1000&auto=format&fit=crop",
          title: "Viral Sound Tracks",
          caption: "Synchronized audio cuts that peaked on Explore pages",
          aspectClass: "aspect-[3/4]",
          tag: "Viral",
        },
      ],
      column3: [
        {
          id: "claw-7",
          image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=1200&auto=format&fit=crop",
          title: "Client Selfies",
          caption: "User-generated content that turned appointments into loyalty",
          aspectClass: "aspect-[16/10]",
          tag: "UGC",
        },
        {
          id: "claw-8",
          image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1000&auto=format&fit=crop",
          title: "Seasonal Looks",
          caption: "Festive and party ready sets designed for holiday peaks",
          aspectClass: "aspect-[3/4]",
          tag: "Seasonal",
        },
        {
          id: "claw-9",
          image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1000&auto=format&fit=crop",
          title: "Appointment Booking",
          caption: "Direct booking link taps and calendar integrations",
          aspectClass: "aspect-[1/1]",
          tag: "Conversions",
        },
      ],
    },
    quote: {
      statement: "EVERY APPOINTMENT SLOT IS FULL WEEKS IN ADVANCE THANKS TO THIS FEED.",
      narrative:
        "Slay made our studio the go-to nail destination. The weekly shoots keep our feed consistently fresh, trend-forward, and magnetic.",
      author: "Founder",
      authorRole: "Lead Artist & Founder, Claw Nails",
    },
    story: {
      challenge: "Nail art is highly visual, but keeping up with weekly trends and producing studio-grade reels was overwhelming for the internal team.",
      approach: "We instituted weekly in-studio shoots, trend-jacking video frameworks, and founder tips that turned casual viewers into regular clients.",
      impact: "Grew studio bookings by 400% and generated multiple viral reels with 2.5M+ organic views.",
    },
    nextProjectSlug: "baked-love",
  },
  {
    id: "baked-love",
    slug: "baked-love",
    title: "BAKED LOVE",
    client: "Baked Love Patisserie",
    year: "2026",
    role: "Food Direction & Founder Storytelling",
    category: "Founder Led Marketing",
    tags: ["Social Media", "UGC & Content Shoot", "Founder Led", "Food Photography"],
    tagline: "Flavour first, always. Rebuilding an artisanal bakery feed around craft.",
    eyebrow: "SELECTED CASE STUDY · F&B & ARTISANAL PATISSERIE",
    heroHeadline: ["CAKES THAT LOOK", "AS DELICIOUS AS THEY TASTE"],
    heroDescription:
      "Flavour first, always. We rebuilt Baked Love's Instagram around what makes it special, founder led stories, Cake of the Month, the Deliciousness Quotient and zero plastic shimmer packaging, with in house shoots that finally made the cakes look as good as they taste.",
    heroImage: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1200&auto=format&fit=crop",
    description:
      "Flavour first, always. We rebuilt Baked Love's Instagram around what makes it special, founder led stories, Cake of the Month, the Deliciousness Quotient and zero plastic shimmer packaging, with in house shoots that finally made the cakes look as good as they taste.",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1200&auto=format&fit=crop",
    meta: {
      client: "Baked Love",
      year: "2026",
      services: "Food Photography, Founder Storytelling, Content Strategy",
      deliverables: "Cake of the Month, Packaging Story, Monthly Shoots",
      impact: "+220% Custom Cake Orders, 4.9 Star Sentiment",
    },
    bentoGrid: {
      column1: [
        {
          id: "bl-1",
          image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1000&auto=format&fit=crop",
          title: "Artisanal Textures",
          caption: "Macro food photography highlighting rich ganache and sponge",
          aspectClass: "aspect-[3/4]",
          tag: "Bakes",
        },
        {
          id: "bl-2",
          image: "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?q=80&w=1000&auto=format&fit=crop",
          title: "Founder in the Kitchen",
          caption: "Raw baking processes and passion-led kitchen insights",
          aspectClass: "aspect-[4/5]",
          tag: "Founder",
        },
        {
          id: "bl-3",
          image: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?q=80&w=1000&auto=format&fit=crop",
          title: "Cake of the Month",
          caption: "Exclusive monthly flavor reveals with pre-order campaigns",
          aspectClass: "aspect-[16/10]",
          tag: "Specials",
        },
      ],
      column2: [
        {
          id: "bl-4",
          image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=1000&auto=format&fit=crop",
          title: "Zero Plastic Packaging",
          caption: "Eco-conscious packaging aesthetics that feel luxurious",
          aspectClass: "aspect-[4/5]",
          tag: "Sustainable",
        },
        {
          id: "bl-5",
          image: "https://images.unsplash.com/photo-1535141192574-5d4897c13136?q=80&w=1200&auto=format&fit=crop",
          title: "Celebration Cakes",
          caption: "Custom tiered wedding and milestone anniversary bakes",
          aspectClass: "aspect-[16/9]",
          tag: "Celebrations",
        },
        {
          id: "bl-6",
          image: "https://images.unsplash.com/photo-1579372786545-d24232daf58c?q=80&w=1000&auto=format&fit=crop",
          title: "The Deliciousness Quotient",
          caption: "Signature scoring format breaking down ingredient purity",
          aspectClass: "aspect-[3/4]",
          tag: "Storytelling",
        },
      ],
      column3: [
        {
          id: "bl-7",
          image: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?q=80&w=1200&auto=format&fit=crop",
          title: "Flavour Chemistry",
          caption: "Bespoke chocolate infusions and seasonal berry reductions",
          aspectClass: "aspect-[16/10]",
          tag: "Ingredients",
        },
        {
          id: "bl-8",
          image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1000&auto=format&fit=crop",
          title: "Morning Fresh Bakes",
          caption: "Warm morning stories showing items straight out of the oven",
          aspectClass: "aspect-[3/4]",
          tag: "Daily",
        },
        {
          id: "bl-9",
          image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=1000&auto=format&fit=crop",
          title: "Customer Unboxing",
          caption: "Delightful customer unboxing videos driving repeat orders",
          aspectClass: "aspect-[1/1]",
          tag: "Unboxing",
        },
      ],
    },
    quote: {
      statement: "OUR CAKES FINALLY HAVE THE VISUAL PRESTIGE THEY DESERVED ALL ALONG.",
      narrative:
        "Slay highlighted our core values: natural ingredients, founder passion, and zero plastic packaging. The response has been overwhelming.",
      author: "Founder",
      authorRole: "Head Baker & Founder, Baked Love",
    },
    story: {
      challenge: "Artisanal bakes were universally loved by existing customers, but digital reach was low due to inconsistent lighting and phone photography.",
      approach: "We implemented monthly in-house studio food photography, launched the 'Cake of the Month' campaign, and documented founder-led baking stories.",
      impact: "Custom celebration orders surged by 220% and established Baked Love as an elite artisanal patisserie.",
    },
    nextProjectSlug: "underpass",
  },
  {
    id: "underpass",
    slug: "underpass",
    title: "UNDERPASS",
    client: "Underpass Lounge & Club",
    year: "2026",
    role: "Nightly Creative Engine & Motion Graphics",
    category: "Design",
    tags: ["Social Media", "Motion Graphics", "AI Shoots and Video Invites"],
    tagline: "Seven nights, seven vibes, zero repeats for high-energy nightlife.",
    eyebrow: "SELECTED CASE STUDY · NIGHTLIFE & MOTION GRAPHICS",
    heroHeadline: ["SEVEN NIGHTS, SEVEN VIBES,", "ZERO REPEATS"],
    heroDescription:
      "Seven nights, seven vibes, zero repeats. We designed the nightly creative engine for Underpass, motion graphic posters Sunday to Thursday and video invites for the weekend, giving every theme night from Techno Tuesday to Saturday Anthem its own identity.",
    heroImage: "/underpass/Underpass Tuesday.mp4",
    description:
      "Seven nights, seven vibes, zero repeats. We designed the nightly creative engine for Underpass, motion graphic posters Sunday to Thursday and video invites for the weekend, giving every theme night from Techno Tuesday to Saturday Anthem its own identity.",
    image: "/underpass/Underpass Tuesday.mp4",
    meta: {
      client: "Underpass",
      year: "2026",
      services: "Nightly Motion Design, Video Invites, Theme Branding",
      deliverables: "Daily Animated Posters, DJ Lineups, Weekend Invites",
      impact: "100% Sold Out Weekend Tables, 4.2M Motion Views",
    },
    bentoGrid: {
      column1: [
        {
          id: "up-1",
          image: "/underpass/Underpass Tuesday.mp4",
          title: "Techno Tuesday",
          caption: "Kinetic typography motion poster",
          aspectClass: "aspect-[9/16]",
          tag: "Motion Poster",
        },
        {
          id: "up-2",
          image: "/underpass/kokk saturday reel .mp4",
          title: "Saturday Reel",
          caption: "High energy weekend video invite",
          aspectClass: "aspect-[9/16]",
          tag: "Video Invite",
        },
        {
          id: "up-3",
          image: "/underpass/kokkini saturday.mp4",
          title: "Saturday Anthem",
          caption: "Nightclub motion teaser",
          aspectClass: "aspect-[9/16]",
          tag: "Anthem",
        },
      ],
      column2: [
        {
          id: "up-4",
          image: "/underpass/kokkinia monday 7.mp4",
          title: "Monday 7 Edition",
          caption: "Theme night motion graphics",
          aspectClass: "aspect-[9/16]",
          tag: "Motion",
        },
        {
          id: "up-5",
          image: "/underpass/kokkinia sunday.mp4",
          title: "Sunday Session",
          caption: "Weekend mood invite trailer",
          aspectClass: "aspect-[9/16]",
          tag: "Sunday",
        },
        {
          id: "up-6",
          image: "/underpass/konni 15 tues new .mp4",
          title: "Tuesday Underground",
          caption: "Nightly creative series flyer",
          aspectClass: "aspect-[9/16]",
          tag: "Tuesday",
        },
      ],
      column3: [
        {
          id: "up-7",
          image: "/underpass/underpass monday .mp4",
          title: "Monday Series",
          caption: "Animated motion poster format",
          aspectClass: "aspect-[9/16]",
          tag: "Poster",
        },
        {
          id: "up-8",
          image: "/underpass/underpass tuesday 1.mp4",
          title: "Tuesday Techno Club",
          caption: "Dark kinetic motion engine",
          aspectClass: "aspect-[9/16]",
          tag: "Motion",
        },
        {
          id: "up-9",
          image: "/underpass/wed underpass 16 .mp4",
          title: "Wednesday Frequency",
          caption: "Midweek groove video invite",
          aspectClass: "aspect-[9/16]",
          tag: "Invite",
        },
      ],
    },
    quote: {
      statement: "WE PACK THE VENUE EVERY SINGLE NIGHT BECAUSE THE CREATIVE STAYS ELECTRIC.",
      narrative:
        "Slay created a design system that turns every single night into an unmissable event. Our weekend guest lists fill up faster than ever.",
      author: "Management Team",
      authorRole: "Promoter, Underpass",
    },
    story: {
      challenge: "Nightlife requires daily creative agility without sacrificing high aesthetic standards across 7 distinct nightly music genres.",
      approach: "We built an always-on motion graphics engine, delivering animated posters and cinematic AI video invites tailored for each day.",
      impact: "Sustained sold-out VIP tables every weekend and increased midweek guest footfall by over 60%.",
    },
    nextProjectSlug: "costify",
  },
  {
    id: "costify",
    slug: "costify",
    title: "COSTIFY",
    client: "Costify Refurbished Tech",
    year: "2026",
    role: "Founder Strategy & Meme Formats",
    category: "Founder Led Marketing",
    tags: ["Social Media", "UGC & Content Shoot", "Founder Led", "Meme Marketing"],
    tagline: "Naye jaisa, aadha daam: turning refurbished tech into bingeable reels.",
    eyebrow: "SELECTED CASE STUDY · CONSUMER TECH & VIRAL CONTENT",
    heroHeadline: ["REFURBISHED TECH,", "ZERO BORING"],
    heroDescription:
      "Refurbished tech, zero boring. We built Costify's page around \"Naye jaisa, aadha daam\" with founder reels, Bollywood themed warranty carousels, educational content and trend formats that turned a trust heavy category into something people wanted to watch.",
    heroImage: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=1200&auto=format&fit=crop",
    description:
      "Refurbished tech, zero boring. We built Costify's page around \"Naye jaisa, aadha daam\" with founder reels, Bollywood themed warranty carousels, educational content and trend formats that turned a trust heavy category into something people wanted to watch.",
    image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=1200&auto=format&fit=crop",
    meta: {
      client: "Costify",
      year: "2026",
      services: "Founder Reels, Meme Marketing, Warranty Storytelling",
      deliverables: "Daily Humorous Reels, Comparison Carousels, Drop Announcements",
      impact: "+310% D2C Orders, 8M+ Viral Organic Impressions",
    },
    bentoGrid: {
      column1: [
        {
          id: "cost-1",
          image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=1000&auto=format&fit=crop",
          title: "Naye Jaisa, Aadha Daam",
          caption: "Side-by-side unboxing comparing retail vs refurbished",
          aspectClass: "aspect-[3/4]",
          tag: "Value",
        },
        {
          id: "cost-2",
          image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?q=80&w=1000&auto=format&fit=crop",
          title: "Bollywood Meme Reels",
          caption: "Iconic movie audio recreations debunking refurbished myths",
          aspectClass: "aspect-[4/5]",
          tag: "Memes",
        },
        {
          id: "cost-3",
          image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1000&auto=format&fit=crop",
          title: "Quality Check Benchmark",
          caption: "32-point technical testing visual documentation",
          aspectClass: "aspect-[16/10]",
          tag: "Trust",
        },
      ],
      column2: [
        {
          id: "cost-4",
          image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1000&auto=format&fit=crop",
          title: "Founder On-Camera",
          caption: "Founder addressing customer warranty doubts directly",
          aspectClass: "aspect-[4/5]",
          tag: "Founder Led",
        },
        {
          id: "cost-5",
          image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop",
          title: "Flash Drop Alerts",
          caption: "High-urgency limited inventory graphic drops",
          aspectClass: "aspect-[16/9]",
          tag: "Flash Drops",
        },
        {
          id: "cost-6",
          image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop",
          title: "Audio & Accessories",
          caption: "Refurbished headphones and smart device showcase",
          aspectClass: "aspect-[3/4]",
          tag: "Gadgets",
        },
      ],
      column3: [
        {
          id: "cost-7",
          image: "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?q=80&w=1200&auto=format&fit=crop",
          title: "Customer Unboxing UGC",
          caption: "Real buyers showing off pristine condition devices",
          aspectClass: "aspect-[16/10]",
          tag: "UGC",
        },
        {
          id: "cost-8",
          image: "https://images.unsplash.com/photo-1563770660941-20978e870e26?q=80&w=1000&auto=format&fit=crop",
          title: "Warranty Assurance",
          caption: "Clear 1-year warranty badge visuals and simple return steps",
          aspectClass: "aspect-[3/4]",
          tag: "Assurance",
        },
        {
          id: "cost-9",
          image: "https://images.unsplash.com/photo-1616469829941-c7200edec809?q=80&w=1000&auto=format&fit=crop",
          title: "Community Growth",
          caption: "Meme formats that drove thousands of organic shares",
          aspectClass: "aspect-[1/1]",
          tag: "Viral",
        },
      ],
    },
    quote: {
      statement: "PEOPLE STOPPED SKEPTICALLY QUESTIONING REFURBISHED AND STARTED WATCHING OUR REELS LIKE A SHOW.",
      narrative:
        "Slay took a dry, trust-heavy category and made it hilarious, transparent, and completely bingeable. Our conversion rate skyrocketed.",
      author: "Founder",
      authorRole: "CEO & Co-Founder, Costify",
    },
    story: {
      challenge: "Selling refurbished electronics in India suffers from high customer skepticism regarding quality and warranty support.",
      approach: "We positioned the brand around total transparency, relatable Bollywood meme formats, and founder-led durability stress-tests.",
      impact: "Tripled monthly D2C orders and amassed over 8M organic video impressions without ad spend.",
    },
    nextProjectSlug: "aavarna",
  },
  {
    id: "aavarna",
    slug: "aavarna",
    title: "AAVARNA",
    client: "Aavarna Incense & Fragrance",
    year: "2026",
    role: "Creative Direction & Launch Campaign",
    category: "Brand Identity",
    tags: ["Social Media", "UGC & Content Shoot", "Founder Led", "Creative Direction", "Performance Marketing", "Web Design"],
    tagline: "Incense, but make it a ritual. Full brand launch from pre-launch intrigue to scale.",
    eyebrow: "SELECTED CASE STUDY · LUXURY AROMATICS & D2C LAUNCH",
    heroHeadline: ["INCENSE, BUT MAKE IT", "AN EVERYDAY RITUAL"],
    heroDescription:
      "Incense, but make it a ritual. We took Aavarna from pre launch intrigue to launch day and beyond, with founder led shoots, scent mood storytelling and deadpan, sarcastic campaigns that made a quiet home category impossible to scroll past.",
    heroImage: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=1200&auto=format&fit=crop",
    description:
      "Incense, but make it a ritual. We took Aavarna from pre launch intrigue to launch day and beyond, with founder led shoots, scent mood storytelling and deadpan, sarcastic campaigns that made a quiet home category impossible to scroll past.",
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=1200&auto=format&fit=crop",
    meta: {
      client: "Aavarna",
      year: "2026",
      services: "Creative Direction, E-Commerce Design, Performance Ads",
      deliverables: "Brand Identity, Launch Campaign, Packaging Art Direction",
      impact: "Sold Out Launch Stock in 72 Hours, 5.1x Ad ROAS",
    },
    bentoGrid: {
      column1: [
        {
          id: "aav-1",
          image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=1000&auto=format&fit=crop",
          title: "Minimalist Smoke Rituals",
          caption: "High speed capture of natural aromatic smoke patterns",
          aspectClass: "aspect-[3/4]",
          tag: "Rituals",
        },
        {
          id: "aav-2",
          image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000&auto=format&fit=crop",
          title: "Meditative Living",
          caption: "Curated lifestyle imagery for modern living spaces",
          aspectClass: "aspect-[4/5]",
          tag: "Lifestyle",
        },
        {
          id: "aav-3",
          image: "https://images.unsplash.com/photo-1602928321679-560bb453f190?q=80&w=1000&auto=format&fit=crop",
          title: "Scent Mood Framework",
          caption: "Translating olfactory notes into rich visual narratives",
          aspectClass: "aspect-[16/10]",
          tag: "Fragrance",
        },
      ],
      column2: [
        {
          id: "aav-4",
          image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1000&auto=format&fit=crop",
          title: "Founder Sarcasm Campaigns",
          caption: "Deadpan humor calling out cheap synthetic incense",
          aspectClass: "aspect-[4/5]",
          tag: "Campaigns",
        },
        {
          id: "aav-5",
          image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop",
          title: "Sculptural Burners",
          caption: "Ceramic and brass burner product photography",
          aspectClass: "aspect-[16/9]",
          tag: "Hardware",
        },
        {
          id: "aav-6",
          image: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=1000&auto=format&fit=crop",
          title: "Packaging Tactility",
          caption: "Debossed gold foil on handmade cotton paper packaging",
          aspectClass: "aspect-[3/4]",
          tag: "Packaging",
        },
      ],
      column3: [
        {
          id: "aav-7",
          image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=1200&auto=format&fit=crop",
          title: "Botanical Ingredients",
          caption: "Showcasing raw temple flowers and resin purity",
          aspectClass: "aspect-[16/10]",
          tag: "Purity",
        },
        {
          id: "aav-8",
          image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
          title: "E-Commerce Flagship",
          caption: "Minimal web storefront built for effortless cart conversion",
          aspectClass: "aspect-[3/4]",
          tag: "Web Design",
        },
        {
          id: "aav-9",
          image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=1000&auto=format&fit=crop",
          title: "Pre-Launch Teasers",
          caption: "Cryptic teaser campaign that gathered 5,000 waitlist signups",
          aspectClass: "aspect-[1/1]",
          tag: "Launch",
        },
      ],
    },
    quote: {
      statement: "WE CREATED A CULT AROUND A QUIET HOME CATEGORY IN JUST 90 DAYS.",
      narrative:
        "Slay took incense and made it an indispensable lifestyle ritual for Gen Z and millennials. Our initial launch stock disappeared in three days.",
      author: "Founder",
      authorRole: "Creative Director, Aavarna",
    },
    story: {
      challenge: "Incense is traditionally perceived as old-fashioned and religious; the brand wanted to establish it as a contemporary design ritual.",
      approach: "We built a modern visual identity, paired deadpan satirical video campaigns with luxury scent storytelling, and ran targeted performance ads.",
      impact: "Sold out the entire launch batch in 72 hours with an average ROAS of 5.1x on ad campaigns.",
    },
    nextProjectSlug: "salony-luthra",
  },
  {
    id: "salony-luthra",
    slug: "salony-luthra",
    title: "Salony Luthra",
    client: "Salony Luthra",
    year: "2026",
    role: "Cultural Storytelling & Personal Branding",
    category: "Personal Brand",
    tags: ["Social Media", "Personal Branding", "Travel Content", "Brand Collabs"],
    tagline: "Shaping a modern Indian storyteller people actually stay for.",
    eyebrow: "SELECTED CASE STUDY · TRAVEL, HERITAGE & CULTURE",
    heroHeadline: ["WHERE HERITAGE & TRAVEL", "BECOME PERSONAL"],
    heroDescription:
      "We shaped Salony into a modern Indian storyteller people actually stay for. Three content pillars across travel and heritage, wellness and tea, and collaborations, with signature series like Tea and Tales and The Story Behind that make culture feel personal in 2026.",
    heroImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop",
    description:
      "We shaped Salony into a modern Indian storyteller people actually stay for. Three content pillars across travel and heritage, wellness and tea, and collaborations, with signature series like Tea and Tales and The Story Behind that make culture feel personal in 2026.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop",
    meta: {
      client: "Salony Luthra",
      year: "2026",
      services: "Personal Branding, Signature Series Architecture, Partnerships",
      deliverables: "Tea and Tales Series, Heritage Travel Guides, Collab Kit",
      impact: "+260% High-Intent Followers, 8+ Tier-1 Luxury Collabs",
    },
    bentoGrid: {
      column1: [
        {
          id: "sl-1",
          image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop",
          title: "Tea & Tales Series",
          caption: "Intimate cultural storytelling and afternoon brew reflections",
          aspectClass: "aspect-[3/4]",
          tag: "Series",
        },
        {
          id: "sl-2",
          image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1000&auto=format&fit=crop",
          title: "Heritage Exploration",
          caption: "Cinematic documentation of ancient Indian architecture",
          aspectClass: "aspect-[4/5]",
          tag: "Heritage",
        },
        {
          id: "sl-3",
          image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop",
          title: "Slow Travel Chronicles",
          caption: "Immersive photo essays capturing untouched horizons",
          aspectClass: "aspect-[16/10]",
          tag: "Travel",
        },
      ],
      column2: [
        {
          id: "sl-4",
          image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1000&auto=format&fit=crop",
          title: "Luxury Brand Collabs",
          caption: "Organic integrations with sustainable boutique labels",
          aspectClass: "aspect-[4/5]",
          tag: "Collabs",
        },
        {
          id: "sl-5",
          image: "https://images.unsplash.com/photo-1544717302-de2939b7ef71?q=80&w=1200&auto=format&fit=crop",
          title: "Mindful Rituals",
          caption: "Morning routines and conscious mindfulness reels",
          aspectClass: "aspect-[16/9]",
          tag: "Wellness",
        },
        {
          id: "sl-6",
          image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1000&auto=format&fit=crop",
          title: "The Story Behind",
          caption: "Deep dive stories behind local artisans and looms",
          aspectClass: "aspect-[3/4]",
          tag: "Artisans",
        },
      ],
      column3: [
        {
          id: "sl-7",
          image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
          title: "Mountain Retreats",
          caption: "Himalayan travel episodes with poetic voiceovers",
          aspectClass: "aspect-[16/10]",
          tag: "Journeys",
        },
        {
          id: "sl-8",
          image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1000&auto=format&fit=crop",
          title: "Community Dialogue",
          caption: "Thoughtful carousel comments fostering deep conversations",
          aspectClass: "aspect-[3/4]",
          tag: "Connection",
        },
        {
          id: "sl-9",
          image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1000&auto=format&fit=crop",
          title: "Visual Harmony",
          caption: "Consistent warm earthy aesthetic across every post",
          aspectClass: "aspect-[1/1]",
          tag: "Harmony",
        },
      ],
    },
    quote: {
      statement: "SLAY HELPED ME BUILD A SPACE ON THE INTERNET THAT TRULY FEELS LIKE HOME.",
      narrative:
        "The structure, signature series, and editorial discipline gave my stories a canvas that resonated with a mindful, dedicated global community.",
      author: "Salony Luthra",
      authorRole: "Storyteller & Creator",
    },
    story: {
      challenge: "Building a distinguished creator presence without succumbing to shallow algorithm trends or generic travel vlogging tropes.",
      approach: "We architected three distinct pillars—Heritage & Travel, Wellness & Tea, and Brand Collaborations—with signature episodic series.",
      impact: "Cultivated a high-engagement audience of 150k+ thoughtful followers and locked eight marquee luxury brand partnerships.",
    },
    nextProjectSlug: "orient-polyfilms",
  },
  {
    id: "orient-polyfilms",
    slug: "orient-polyfilms",
    title: "ORIENT POLYFILMS",
    client: "Orient Polyfilms Ltd.",
    year: "2026",
    role: "B2B Strategy & Positioning",
    category: "B2B Marketing",
    tags: ["Social Media", "B2B Marketing", "Event Management", "Branding"],
    tagline: "Proof that B2B manufacturing marketing does not have to be boring.",
    eyebrow: "SELECTED CASE STUDY · INDUSTRIAL B2B & MANUFACTURING",
    heroHeadline: ["B2B MARKETING THAT", "ACTUALLY CLOSES BUYERS"],
    heroDescription:
      "Proof that B2B does not have to be boring. We handled content direction, posting and performance tracking for a manufacturing brand, swapping stock photos and jargon for clear positioning that actually lands with buyers.",
    heroImage: "/orient/book mockup.png",
    description:
      "Proof that B2B does not have to be boring. We handled content direction, posting and performance tracking for a manufacturing brand, swapping stock photos and jargon for clear positioning that actually lands with buyers.",
    image: "/orient/book mockup.png",
    meta: {
      client: "Orient Polyfilms",
      year: "2026",
      services: "B2B Content Direction, Trade Show Marketing, LinkedIn Positioning",
      deliverables: "Plant Photography, Buyer Whitepapers, Technical Carousels",
      impact: "+140% Qualified Inbound Inquiries, 3.8M B2B Impressions",
    },
    bentoGrid: {
      column1: [
        {
          id: "op-1",
          image: "/orient/standee.png",
          title: "Trade Show Standee",
          caption: "Industrial event exhibition banner branding",
          aspectClass: "aspect-[9/16]",
          tag: "Events",
        },
        {
          id: "op-2",
          image: "/orient/WhatsApp Video 2026-09-16 at 11.55.45 AM.mp4",
          title: "Industrial Motion",
          caption: "Dynamic product feature breakdown",
          aspectClass: "aspect-[9/16]",
          tag: "Motion",
        },
      ],
      column2: [
        {
          id: "op-3",
          image: "/orient/book mockup.png",
          title: "Corporate Catalogue",
          caption: "Comprehensive BOPP product catalogue presentation",
          aspectClass: "aspect-[4/3]",
          tag: "Print & Mockup",
        },
        {
          id: "op-4",
          image: "/orient/WhatsApp Video 2026-09-16 at 11.55.48 AM.mp4",
          title: "Manufacturing Reel",
          caption: "Precision manufacturing process reel",
          aspectClass: "aspect-[9/16]",
          tag: "Process",
        },
        {
          id: "op-5",
          image: "/orient/WhatsApp Video 2026-09-16 at 11.56.08 AM.mp4",
          title: "Supply Chain Motion",
          caption: "Global export distribution visual format",
          aspectClass: "aspect-[9/16]",
          tag: "Distribution",
        },
      ],
      column3: [
        {
          id: "op-6",
          image: "/orient/flyer.png",
          title: "Technical Spec Flyer",
          caption: "B2B procurement flyer and barrier property guide",
          aspectClass: "aspect-[3/4]",
          tag: "Flyer",
        },
        {
          id: "op-7",
          image: "/orient/WhatsApp Video 2026-09-16 at 11.56.06 AM.mp4",
          title: "Technical Animation",
          caption: "Polymer innovation animation",
          aspectClass: "aspect-[9/16]",
          tag: "Innovation",
        },
      ],
    },
    quote: {
      statement: "WE MOVED FROM CHASING LEADS TO RECEIVING DIRECT INQUIRIES FROM GLOBAL BUYERS.",
      narrative:
        "Slay took our manufacturing processes and turned them into compelling, clear positioning. Our digital presence now opens boardroom doors across international markets.",
      author: "Executive Leadership",
      authorRole: "Managing Director, Orient Polyfilms Ltd.",
    },
    story: {
      challenge: "B2B industrial marketing is often trapped in stale brochures, generic stock photos, and incomprehensible technical jargon.",
      approach: "We swapped out stock assets for high-resolution plant photography, technical problem-solving carousels, and LinkedIn executive positioning.",
      impact: "Boosted qualified inbound procurement RFQs by 140% and established Orient Polyfilms as a modern industry innovator.",
    },
    nextProjectSlug: "law-in-heels",
  },
];

export function getProjectBySlug(slug?: string): ProjectData | undefined {
  if (!slug) return undefined;
  const clean = decodeURIComponent(slug).toLowerCase().trim().replace(/^\/+|\/+$/g, "");
  return (
    projectsData.find((p) => p.slug.toLowerCase() === clean) ||
    projectsData.find((p) => p.id.toLowerCase() === clean) ||
    projectsData.find(
      (p) =>
        p.title.toLowerCase().replace(/[^a-z0-9]+/g, "-") === clean ||
        p.title.toLowerCase() === clean
    )
  );
}

export function getAllProjects(): ProjectData[] {
  return projectsData;
}
