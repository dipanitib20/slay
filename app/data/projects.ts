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
    heroImage: "/anvi/720138219_17867481315686964_7648030679057249441_n.webp",
    description:
      "Aka Anvi Jain, lawyer turned legal creator, needed a platform. We built her consistent, aesthetic content system, shoot planning, scripting, calendars, and purposeful strategy.",
    image: "/coverimg/law in heels_.png",
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
          image: "/anvi/A colour that doesn’t whisper.It owns the room.Pink, but make it powerful...luxury fashion aesth.webm",
          title: "Power in Pink: Legal Fashion Reel",
          caption: "High-production luxury aesthetic styling and confident legal branding",
          aspectClass: "aspect-[9/16]",
          tag: "Personal Brand",
        },
        {
          id: "lih-2",
          image: "/anvi/720138219_17867481315686964_7648030679057249441_n.webp",
          title: "Check 3 Before You Sign",
          caption: "High-impact editorial contract advisory creative",
          aspectClass: "aspect-[4/5]",
          tag: "Contract Law",
        },
        {
          id: "lih-3",
          image: "/anvi/Not every act of surveillance is stalking. But the line matters.Professional surveillance may be.webm",
          title: "Surveillance vs Stalking Breakdown",
          caption: "Nuanced legal analysis on surveillance laws and personal rights",
          aspectClass: "aspect-[9/16]",
          tag: "Legal Insights",
        },
      ],
      column2: [
        {
          id: "lih-4",
          image: "/anvi/linkedin shots.webp",
          title: "LinkedIn Thought Leadership",
          caption: "Viral LinkedIn carousel templates and authority engagement formats",
          aspectClass: "aspect-[9/16]",
          tag: "LinkedIn",
        },
        {
          id: "lih-5",
          image: "/anvi/Artificial Intelligence may understand patterns, but the law has always been about people. ⚖️Alg.webp",
          title: "AI & Human Law Analysis",
          caption: "Thought leadership post on algorithms, intellectual property & human justice",
          aspectClass: "aspect-[4/5]",
          tag: "Tech Law",
        },
        {
          id: "lih-6",
          image: "/anvi/We often hear about detectives, investigations, and the mysteries they solve.But what is it like.webm",
          title: "Private Investigation & Evidence Law",
          caption: "Engaging case-study storytelling on investigative evidence rules",
          aspectClass: "aspect-[9/16]",
          tag: "Evidence Law",
        },
      ],
      column3: [
        {
          id: "lih-7",
          image: "/anvi/Justice was never meant to sound complicated.Maybe we just stopped explaining it simply.Learnin.webp",
          title: "Demystifying Legal Jargon",
          caption: "Making complex legal doctrines clear, accessible, and relatable",
          aspectClass: "aspect-[4/5]",
          tag: "Plain Language",
        },
        {
          id: "lih-8",
          image: "/anvi/The law isn’t black and white. Most of it lives in the grey.And honestly That’s the part nobody.webp",
          title: "The Grey Areas of Law",
          caption: "Provocative commentary driving hundreds of insightful discussions",
          aspectClass: "aspect-[4/5]",
          tag: "Discussions",
        },
      ],
    },
    carousels: [
      {
        id: "lih-carousel-1",
        title: "Everyday Legal Scenarios & Consumer Rights",
        subtitle: "High-retention multi-slide breakdown translating everyday legal dilemmas into simple, actionable guidance.",
        images: [
          "/anvi/carousel/c1.1.webp",
          "/anvi/carousel/c1.2.webp",
          "/anvi/carousel/c1.3.webp",
          "/anvi/carousel/c1.4.webp",
          "/anvi/carousel/c1.5.webp",
          "/anvi/carousel/c1.6.webp",
          "/anvi/carousel/c1.7.webp",
        ],
      },
      {
        id: "lih-carousel-2",
        title: "Workplace Rights & Corporate Advisory",
        subtitle: "Authoritative editorial guide clarifying POSH guidelines, employee protections, and reporting frameworks.",
        images: [
          "/anvi/carousel 2/c2.1.webp",
          "/anvi/carousel 2/c2.2.webp",
          "/anvi/carousel 2/c2.3.webp",
          "/anvi/carousel 2/c2.4.webp",
          "/anvi/carousel 2/c2.5.webp",
          "/anvi/carousel 2/c2.6.webp",
          "/anvi/carousel 2/c2.7.webp",
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
    heroImage: "/indian summer/indian summer  (2).webp",
    description:
      "A Gurugram fashion label with the product already right and the presence lagging behind it. We built the content system around what they shoot in house, then took it further with performance marketing and founder led content. Same brand, finally landing the way it deserves to.",
    image: "/coverimg/indian summer.png",
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
            "/indian summer/Ajrakh carries an air of distinction that fast fashion can never recreate. ⚜️Rooted in centuries.webm",
          title: "Ajrakh Heritage Reel",
          caption: "Centuries-old craft and distinguished silhouette storytelling",
          aspectClass: "aspect-[9/16]",
          tag: "Heritage",
        },
        {
          id: "isa-2",
          image: "/indian summer/ad (33).webp",
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
            "/indian summer/Ajrakh- the stunner has made its comeback. DM us to know the details. ajrakhcollection ajrakhp.webm",
          title: "Ajrakh Comeback Drop",
          caption: "High energy collection restock and announcement reel",
          aspectClass: "aspect-[9/16]",
          tag: "Drops",
        },
        {
          id: "isa-4",
          image: "/indian summer/ad (34).webp",
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
            "/indian summer/••Mehar Hand-Embroidered Stripped Tissue Panelled Long Dress•••Long dress in pure silk and strip.webm",
          title: "Mehar Hand-Embroidered Dress",
          caption: "Pure silk and tissue panelled movement video",
          aspectClass: "aspect-[9/16]",
          tag: "Craft",
        },
        {
          id: "isa-6",
          image: "/indian summer/indian summer  (2).webp",
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
          "/indian summer/carousel 1/1.webp",
          "/indian summer/carousel 1/2.webp",
          "/indian summer/carousel 1/3.webp",
          "/indian summer/carousel 1/4.webp",
          "/indian summer/carousel 1/5.webp",
          "/indian summer/carousel 1/6.webp",
        ],
      },
      {
        id: "isa-carousel-2",
        title: "Seasonal Styling & Details",
        subtitle: "Macro fabric details and founder-led styling formats.",
        images: [
          "/indian summer/carousel 2/1.webp",
          "/indian summer/carousel 2/2.webp",
          "/indian summer/carousel 2/3.webp",
          "/indian summer/carousel 2/4.webp",
          "/indian summer/carousel 2/5.webp",
          "/indian summer/carousel 2/6.webp",
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
    title: "Maple",
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
    heroImage: "/maple/carousel 1/1.webp",
    description:
      "We turned a neighbourhood preschool into the brand every Bengaluru parent scrolls past twice. Warm, trust led content that shows real classrooms, real milestones and the Canadian learning approach in action, built to spark admissions conversations in 2026.",
    image: "/coverimg/maple.png",
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
            "/maple/At Maple Bear RMV Stage 2, learning comes alive through play! 🌟 Our little learners are explori.webm",
          title: "Learning Through Play",
          caption: "Classroom immersion and playful learning",
          aspectClass: "aspect-[9/16]",
          tag: "Classrooms",
        },
        {
          id: "maple-v2",
          image:
            "/maple/Every little step matters when it comes to your child’s future ✨At Maple Bear RMV Stage 2, it’s.webm",
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
            "/maple/From heartfelt words to proud smiles our Maple RMV2 parents took the stage to share their journe.webm",
          title: "Parent Voices",
          caption: "Heartfelt testimonials from Bengaluru families",
          aspectClass: "aspect-[9/16]",
          tag: "Community",
        },
        {
          id: "maple-v4",
          image:
            "/maple/Tiny chefs, big learning moments 👩_🍳✨From mixing healthy ingredients to creating delicious mul.webm",
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
            "/maple/Tiny explorers, big discoveries! Our little paleontologists at Maple Bear RMV 2 had an exciting.webm",
          title: "Tiny Explorers",
          caption: "Hands-on discovery and curiosity",
          aspectClass: "aspect-[9/16]",
          tag: "Discovery",
        },
        {
          id: "maple-v6",
          image:
            "/maple/Tiny steps, big milestones ✨ From movement to coordination, every dance, jump & giggle at Maple  (1).webm",
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
          "/maple/carousel 1/1.webp",
          "/maple/carousel 1/2.webp",
          "/maple/carousel 1/3.webp",
        ],
      },
      {
        id: "maple-carousel-2",
        title: "Classroom Life & Milestones",
        subtitle: "A glimpse inside the Canadian learning framework in action.",
        images: [
          "/maple/carousel 2/1.webp",
          "/maple/carousel 2/2.webp",
          "/maple/carousel 2/3.webp",
          "/maple/carousel 2/4.webp",
          "/maple/carousel 2/5.webp",
          "/maple/carousel 2/6.webp",
        ],
      },
      {
        id: "maple-carousel-3",
        title: "Hands-on Discovery & Wonder",
        subtitle: "Messy hands, curious minds, and joyful milestone moments.",
        images: [
          "/maple/carousel 3/1.webp",
          "/maple/carousel 3/2.webp",
          "/maple/carousel 3/3.webp",
          "/maple/carousel 3/The best learning happens when little hands get messy, curious minds start asking questions, and (4).webp",
          "/maple/carousel 3/5.webp",
          "/maple/carousel 3/6.webp",
        ],
      },
      {
        id: "maple-carousel-4",
        title: "Admissions & Campus Joy",
        subtitle: "Warm, trust-led storytelling connecting with parents across Bengaluru.",
        images: [
          "/maple/carousel 4/1.webp",
          "/maple/carousel 4/2.webp",
          "/maple/carousel 4/3.webp",
          "/maple/carousel 4/4.webp",
          "/maple/carousel 4/5.webp",
          "/maple/carousel 4/6.webp",
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
    title: "Claw Nails",
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
    heroImage: "/claw/From elegant French tips to playful polka dots and handcrafted floral details, this set is made.webp",
    description:
      "Nails, but make it a whole aesthetic. We ran Claw's Instagram with playful, trend aware content backed by weekly in-studio shoots, so every set got its main character moment and the feed stayed as sharp as the tips.",
    image: "/coverimg/claw.png",
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
          image: "/claw/Polka dots, glossy French tips & the cutest little bows, serving main character energy, one nail.webm",
          title: "Main Character Bows & Tips",
          caption: "High-gloss French tips and polka dots serving main character energy",
          aspectClass: "aspect-[9/16]",
          tag: "Nail Art",
        },
        {
          id: "claw-2",
          image: "/claw/From elegant French tips to playful polka dots and handcrafted floral details, this set is made.webp",
          title: "Floral & French Set",
          caption: "Handcrafted floral accents with delicate polka dot French tips",
          aspectClass: "aspect-[4/5]",
          tag: "Handcrafted",
        },
        {
          id: "claw-3",
          image: "/claw/Who says French tips have to be basicA playful mix of yellow, chocolate brown, black, and white.webm",
          title: "Playful Colorway Tips",
          caption: "Subverting classic French tips with bold seasonal colors",
          aspectClass: "aspect-[9/16]",
          tag: "Color Play",
        },
        {
          id: "claw-4",
          image: "/claw/Who says long nails slow you down 💅🥤From opening your favourite drink to owning every moment,.webm",
          title: "Long Nails Lifestyle Test",
          caption: "Debunking long nail myths with everyday lifestyle testing",
          aspectClass: "aspect-[9/16]",
          tag: "Lifestyle",
        },
      ],
      column2: [
        {
          id: "claw-5",
          image: "/claw/Serving sharp energy with every move, these claw nails aren’t just a look, they’re a statement..webm",
          title: "Sharp Claw Energy",
          caption: "Statement stiletto sets built for unmatched confidence",
          aspectClass: "aspect-[9/16]",
          tag: "Statement",
        },
        {
          id: "claw-6",
          image: "/claw/Two types of Claw Nails girls 💅📌 The Pinterest Girl🔥 The “Aaj Kuch Toofani Karte Hai” GirlWhi.webp",
          title: "Two Types of Claw Girls",
          caption: "Pinterest girl vs Toofani girl relatable personality format",
          aspectClass: "aspect-[4/5]",
          tag: "Personality",
        },
        {
          id: "claw-7",
          image: "/claw/The best marketing isn’t always the loudest, it’s the experience people can’t stop talking about.webm",
          title: "Salon Experience Storytelling",
          caption: "Documenting the pampering in-studio appointment experience",
          aspectClass: "aspect-[9/16]",
          tag: "Experience",
        },
        {
          id: "claw-8",
          image: "/claw/“what are you doing today”me- probably getting a fresh set because priorities 💅✨From soft girl.webp",
          title: "Fresh Set Priorities",
          caption: "Engaging chat-format meme celebrating fresh salon sets",
          aspectClass: "aspect-[4/5]",
          tag: "Community",
        },
      ],
      column3: [
        {
          id: "claw-9",
          image: "/claw/𝘞𝘦 𝘱𝘶𝘵 𝑹𝒆𝒆𝒏𝒂 𝑩𝒂𝒕𝒓𝒂 𝘪𝘯 𝘵𝘩𝘦 𝘩𝘰𝘵 𝘴𝘦𝘢𝘵 𝘧𝘰𝘳 𝘢 𝘳𝘢𝘱𝘪𝘥-𝘧𝘪𝘳𝘦 𝘳𝘰.webm",
          title: "Founder Hot Seat with Reena Batra",
          caption: "Rapid-fire founder interview and nail care secrets",
          aspectClass: "aspect-[9/16]",
          tag: "Founder Led",
        },
        {
          id: "claw-10",
          image: "/claw/Lashes that do the talking before you even say a word ✨👀 Soft, wispy & made to elevate every look••.webp",
          title: "Wispy Lashes & Eye Glam",
          caption: "Soft wispy lash extensions elevating the full studio look",
          aspectClass: "aspect-[4/5]",
          tag: "Lash Studio",
        },
        {
          id: "claw-11",
          image: "/claw/𝙎𝙝𝙚’𝙨 𝙖 𝙬𝙝𝙤𝙡𝙚 𝙜𝙖𝙡𝙖𝙭𝙮 𝙤𝙣 𝙝𝙚𝙧 𝙛𝙞𝙣𝙜𝙚𝙧𝙩𝙞𝙥𝙨 𝙖𝙣𝙙 𝙬𝙚 𝙖𝙧𝙚 𝙉𝙊𝙏.webm",
          title: "Galaxy On Her Fingertips",
          caption: "Celestial chrome and metallic shimmer nail art showcase",
          aspectClass: "aspect-[9/16]",
          tag: "Chrome Glam",
        },
      ],
    },
    carousels: [
      {
        id: "claw-carousel-1",
        title: "Summer Nails Trends & Editorial Moodboards",
        subtitle: "Handcrafted illustrated guides and seasonal nail moodboards highlighting studio trends and signature styles.",
        images: [
          "/claw/carousel/1.webp",
          "/claw/carousel/2.webp",
          "/claw/carousel/3.webp",
          "/claw/carousel/4.webp",
        ],
      },
    ],
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
    title: "Baked Love",
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
    heroImage: "/baked love/baked love.webp",
    description:
      "Flavour first, always. We rebuilt Baked Love's Instagram around what makes it special, founder led stories, Cake of the Month, the Deliciousness Quotient and zero plastic shimmer packaging, with in house shoots that finally made the cakes look as good as they taste.",
    image: "/coverimg/bakedlove.png",
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
          image: "/baked love/13 years of baking, creating, learning - and there’s still plenty we haven’t told you.From what.webm",
          title: "13 Years of Craft & Passion",
          caption: "Behind-the-scenes journey of 13 years of artisanal baking",
          aspectClass: "aspect-[9/16]",
          tag: "Founder Journey",
        },
        {
          id: "bl-2",
          image: "/baked love/baked love.webp",
          title: "A Chef Vatsala Original",
          caption: "Signature handcrafted confection with rich filling and coconut zest",
          aspectClass: "aspect-[4/5]",
          tag: "Chef's Special",
        },
        {
          id: "bl-3",
          image: "/baked love/Watch it come together, one layer at a time.Generously soaked ladyfingers with a signature Baked.webm",
          title: "One Layer At A Time: Tiramisu",
          caption: "Generously soaked artisanal ladyfingers layered with signature cream",
          aspectClass: "aspect-[9/16]",
          tag: "Process",
        },
      ],
      column2: [
        {
          id: "bl-4",
          image: "/baked love/About once a month, someone tries to sell us a shortcut.Thirteen years of saying no. Because som.webm",
          title: "Zero Shortcuts Philosophy",
          caption: "Saying no to industrial shortcuts in favor of pure, slow-crafted flavor",
          aspectClass: "aspect-[9/16]",
          tag: "Philosophy",
        },
        {
          id: "bl-5",
          image: "/baked love/baked love  (5).webp",
          title: "Plot Twist: It's Vegan",
          caption: "Indulgent dairy-free chocolate tart with cocoa dusting",
          aspectClass: "aspect-[4/5]",
          tag: "Vegan Lineup",
        },
        {
          id: "bl-6",
          image: "/baked love/A glimpse of the vegan lineup, one tap away. Now delivering across Delhi, Gurgaon and Noida. Ord.webm",
          title: "Vegan Lineup & NCR Delivery",
          caption: "Showcasing conscious indulgence delivering across Delhi, Gurgaon & Noida",
          aspectClass: "aspect-[9/16]",
          tag: "Delivery",
        },
      ],
      column3: [
        {
          id: "bl-7",
          image: "/baked love/Festive season is upon us- connect with us for bespoke gifts that don’t get forwarded ✨.webm",
          title: "Bespoke Festive Gifting",
          caption: "Memorable holiday hampers and artisanal bespoke dessert boxes",
          aspectClass: "aspect-[9/16]",
          tag: "Gifting",
        },
        {
          id: "bl-8",
          image: "/baked love/Somebody in your family still remembers exactly which cake you fought over.Every Rakhi looks the.webp",
          title: "Family Memories & Celebrations",
          caption: "Emotional storytelling around festive family cake traditions",
          aspectClass: "aspect-[4/5]",
          tag: "Traditions",
        },
      ],
    },
    carousels: [
      {
        id: "bl-carousel-1",
        title: "Cake Architecture & Layered Flavor Cross-Sections",
        subtitle: "Macro cross-section breakdowns revealing sponge moisture, bespoke infusions, and artisanal textures.",
        images: [
          "/baked love/carousel/baked love  (1).webp",
          "/baked love/carousel/baked love  (2).webp",
          "/baked love/carousel/baked love  (3).webp",
          "/baked love/carousel/baked love  (4).webp",
        ],
      },
      {
        id: "bl-carousel-2",
        title: "The Deliciousness Quotient & Pure Ingredients",
        subtitle: "Sensory storytelling celebrating unadulterated cocoa, pure Nutella swirls, and zero-shortcut ingredient purity.",
        images: [
          "/baked love/carousel 2/baked love  (6).webp",
          "/baked love/carousel 2/baked love  (7).webp",
          "/baked love/carousel 2/baked love  (8).webp",
          "/baked love/carousel 2/baked love  (9).webp",
          "/baked love/carousel 2/baked love  (10).webp",
        ],
      },
    ],
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
    title: "Underpass",
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
    heroImage: "/underpass/Underpass Tuesday.webm",
    description:
      "Seven nights, seven vibes, zero repeats. We designed the nightly creative engine for Underpass, motion graphic posters Sunday to Thursday and video invites for the weekend, giving every theme night from Techno Tuesday to Saturday Anthem its own identity.",
    image: "/coverimg/underpass.png",
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
          image: "/underpass/Underpass Tuesday.webm",
          title: "Techno Tuesday",
          caption: "Kinetic typography motion poster",
          aspectClass: "aspect-[9/16]",
          tag: "Motion Poster",
        },
        {
          id: "up-2",
          image: "/underpass/kokk saturday reel.webm",
          title: "Saturday Reel",
          caption: "High energy weekend video invite",
          aspectClass: "aspect-[9/16]",
          tag: "Video Invite",
        },
        {
          id: "up-3",
          image: "/underpass/kokkini saturday.webm",
          title: "Saturday Anthem",
          caption: "Nightclub motion teaser",
          aspectClass: "aspect-[9/16]",
          tag: "Anthem",
        },
      ],
      column2: [
        {
          id: "up-4",
          image: "/underpass/kokkinia monday 7.webm",
          title: "Monday 7 Edition",
          caption: "Theme night motion graphics",
          aspectClass: "aspect-[9/16]",
          tag: "Motion",
        },
        {
          id: "up-5",
          image: "/underpass/kokkinia sunday.webm",
          title: "Sunday Session",
          caption: "Weekend mood invite trailer",
          aspectClass: "aspect-[9/16]",
          tag: "Sunday",
        },
        {
          id: "up-6",
          image: "/underpass/konni 15 tues new.webm",
          title: "Tuesday Underground",
          caption: "Nightly creative series flyer",
          aspectClass: "aspect-[9/16]",
          tag: "Tuesday",
        },
      ],
      column3: [
        {
          id: "up-7",
          image: "/underpass/underpass monday.webm",
          title: "Monday Series",
          caption: "Animated motion poster format",
          aspectClass: "aspect-[9/16]",
          tag: "Poster",
        },
        {
          id: "up-8",
          image: "/underpass/underpass tuesday 1.webm",
          title: "Tuesday Techno Club",
          caption: "Dark kinetic motion engine",
          aspectClass: "aspect-[9/16]",
          tag: "Motion",
        },
        {
          id: "up-9",
          image: "/underpass/wed underpass 16.webm",
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
    title: "Costify",
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
    heroImage: "/costify/Your next washing machine is just one scan away. 📲✨Looking to upgrade without overspending Scan.webp",
    description:
      "Refurbished tech, zero boring. We built Costify's page around \"Naye jaisa, aadha daam\" with founder reels, Bollywood themed warranty carousels, educational content and trend formats that turned a trust heavy category into something people wanted to watch.",
    image: "/coverimg/costify.png",
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
          image: "/costify/Ab toh Jethalal bhi bhaga bhaga aagya aap kab aenge •Visit our Costify store and get an EXTRA ₹1.webm",
          title: "Jethalal Store Visit Reel",
          caption: "High-virality Bollywood comedy reel driving store footfall",
          aspectClass: "aspect-[9/16]",
          tag: "Viral Reel",
        },
        {
          id: "cost-2",
          image: "/costify/Summer demand is rising, are you stock ready ❄️📈Upgrade your business with professionally refur.webp",
          title: "Summer Stock Ready Deep Freezers",
          caption: "High-impact B2B refurbished cooling appliance creative",
          aspectClass: "aspect-[4/5]",
          tag: "B2B Deals",
        },
        {
          id: "cost-3",
          image: "/costify/Why pay full price when you can bring home the same comfort for up to 60_ lessFrom air condition.webm",
          title: "60% Off Comfort Campaign",
          caption: "Value proposition breakdown comparing new vs refurbished ACs",
          aspectClass: "aspect-[9/16]",
          tag: "Comfort Value",
        },
      ],
      column2: [
        {
          id: "cost-4",
          image: "/costify/POV- Jab premium washing machine ka price dekh ke sapna hi spin cycle mein chala jaaye Par tensi.webm",
          title: "Premium Washing Machine POV",
          caption: "Relatable humor addressing high retail appliance price tags",
          aspectClass: "aspect-[9/16]",
          tag: "POV Format",
        },
        {
          id: "cost-5",
          image: "/costify/Your next washing machine is just one scan away. 📲✨Looking to upgrade without overspending Scan.webp",
          title: "Laundry Day Sorted Campaign",
          caption: "Direct-response scan-to-buy refurbished washing machine visual",
          aspectClass: "aspect-[4/5]",
          tag: "D2C Campaign",
        },
        {
          id: "cost-6",
          image: "/costify/When our customers say it, it means more than any advertisement ever couldFrom quality-checked r.webm",
          title: "Customer Trust & Testimonials",
          caption: "Authentic buyer unboxing and quality verification",
          aspectClass: "aspect-[9/16]",
          tag: "Customer UGC",
        },
      ],
      column3: [
        {
          id: "cost-7",
          image: "/costify/What looks like an old deep freezer is transformed through Costify’s professional refurbishment.webm",
          title: "Deep Freezer Transformation",
          caption: "Step-by-step restoration and 32-point technical overhaul",
          aspectClass: "aspect-[9/16]",
          tag: "Restoration",
        },
        {
          id: "cost-8",
          image: "/costify/When Costify adds new products EVERY. SINGLE. DAY, store Drama is also a must EVERY. SINGLE. DAY.webm",
          title: "Daily Store Drama & Drops",
          caption: "Behind-the-scenes founder humor and inventory arrival reels",
          aspectClass: "aspect-[9/16]",
          tag: "Daily Drops",
        },
      ],
    },
    carousels: [
      {
        id: "costify-carousel-1",
        title: "Pop Culture & Comic Strips",
        subtitle: "Bollywood character integration and relatable comic frames turning refurbished tech into shareable entertainment.",
        images: [
          "/costify/carousel 1/1.webp",
          "/costify/carousel 1/2.webp",
          "/costify/carousel 1/3.webp",
          "/costify/carousel 1/4.webp",
        ],
      },
      {
        id: "costify-carousel-2",
        title: "Bollywood Themed Warranty & Product Guides",
        subtitle: "Educational multi-slide breakdown debunking refurbished appliance myths and highlighting 6-month full warranty assurance.",
        images: [
          "/costify/carousel 2/1.webp",
          "/costify/carousel 2/2.webp",
          "/costify/carousel 2/2(1).webp",
          "/costify/carousel 2/3.webp",
          "/costify/carousel 2/4.webp",
          "/costify/carousel 2/5.webp",
          "/costify/carousel 2/6.webp",
          "/costify/carousel 2/7.webp",
          "/costify/carousel 2/8.webp",
        ],
      },
    ],
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
    title: "Aavarna",
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
    heroImage: "/aavarna/Before the emails. Before the chaos. Before the to-do list takes over — light the incense It’s n.webp",
    description:
      "Incense, but make it a ritual. We took Aavarna from pre launch intrigue to launch day and beyond, with founder led shoots, scent mood storytelling and deadpan, sarcastic campaigns that made a quiet home category impossible to scroll past.",
    image: "/coverimg/aavarna.png",
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
          image: "/aavarna/Can our incense impress everyone 👀We took Aavarna to the streets for honest reactions… and save.webm",
          title: "Street Taste & Scent Reactions",
          caption: "Taking Aavarna to the streets for honest, unfiltered reactions",
          aspectClass: "aspect-[9/16]",
          tag: "Social Experiment",
        },
        {
          id: "aav-2",
          image: "/aavarna/Before the emails. Before the chaos. Before the to-do list takes over — light the incense It’s n.webp",
          title: "A Sacred Pause: Morning Ritual",
          caption: "Workday reminder turning incense into a sacred focus bell",
          aspectClass: "aspect-[4/5]",
          tag: "Ritual",
        },
        {
          id: "aav-3",
          image: "/aavarna/Some days move too fast.So we made a ritual that slows you down for a second. ✨Light it.Breathe.webm",
          title: "Light It. Breathe: Slowing Down",
          caption: "Atmospheric sensory reel highlighting the slowing ritual",
          aspectClass: "aspect-[9/16]",
          tag: "Sensory",
        },
        {
          id: "aav-4",
          image: "/aavarna/After taking care of everyone else, dont forget the person who needs you too YOU. 🌿✨Pause. Br.webp",
          title: "Pause. Breathe. Scent",
          caption: "Self-care sanctuary narrative built around botanical aromas",
          aspectClass: "aspect-[4/5]",
          tag: "Wellness",
        },
      ],
      column2: [
        {
          id: "aav-5",
          image: "/aavarna/Inspired by Vogue’s iconic 73 Questions, we asked our founder a few rapid fire questions of our.webm",
          title: "73 Questions with the Founder",
          caption: "Vogue-inspired fast-paced founder interview in the studio",
          aspectClass: "aspect-[9/16]",
          tag: "Founder Led",
        },
        {
          id: "aav-6",
          image: "/aavarna/Some fragrances don’t just smell good, they feel like nature itself. 🌿Crafted with the richness.webp",
          title: "Pure Nature Essence",
          caption: "Raw resin, floral infusions, and zero-synthetic charcoal sticks",
          aspectClass: "aspect-[4/5]",
          tag: "Botanicals",
        },
        {
          id: "aav-7",
          image: "/aavarna/Answering what you’ve been asking!Not everything needs a long explanation.Some things you just f.webm",
          title: "Direct Q&A Breakdown",
          caption: "Concise answers debunking traditional synthetic incense myths",
          aspectClass: "aspect-[9/16]",
          tag: "Education",
        },
        {
          id: "aav-8",
          image: "/aavarna/He understood your silence before you found the words. 🤍This Father’s Day, gift him more than a.webp",
          title: "Mindful Gifting Edition",
          caption: "Emotional gifting campaigns elevating artisanal luxury aromatics",
          aspectClass: "aspect-[4/5]",
          tag: "Gifting",
        },
      ],
      column3: [
        {
          id: "aav-9",
          image: "/aavarna/Every corner deserves something beautiful. ✨ Aavarna isn’t just décor. It’s the feeling you walk.webm",
          title: "Living Space Atmosphere",
          caption: "Decor integration showing sculptural burners and lingering notes",
          aspectClass: "aspect-[9/16]",
          tag: "Home Aesthetics",
        },
        {
          id: "aav-10",
          image: "/aavarna/Your vibe has a scent and it smells like amber rose 🌹🪷Some things are just non negotiable.Aa.webp",
          title: "Amber Rose Scent Vibe",
          caption: "Signature amber rose moodboard pairing olfactory notes with aesthetics",
          aspectClass: "aspect-[4/5]",
          tag: "Moodboard",
        },
        {
          id: "aav-11",
          image: "/aavarna/One fragrance We wish. 🤭Which one would you reorder instantlyYeah… us too. All of them. 🌿••Aa.webm",
          title: "Instant Reorder Favorites",
          caption: "Playful customer favorite comparison format driving high retention",
          aspectClass: "aspect-[9/16]",
          tag: "Community",
        },
        {
          id: "aav-12",
          image: "/aavarna/You’re just one step away from bringing peace home. 🤍✨Your cart is almost complete, now let eve (1).webp",
          title: "Bringing Peace Home",
          caption: "Direct conversion aesthetic banner for e-commerce checkout",
          aspectClass: "aspect-[4/5]",
          tag: "Conversions",
        },
      ],
    },
    carousels: [
      {
        id: "aav-carousel-1",
        title: "Your Mood Has a Scent: The Selection Guide",
        subtitle: "A multi-slide guide translating emotional states into bespoke botanical fragrances and mindful pause moments.",
        images: [
          "/aavarna/carousel 1/1.webp",
          "/aavarna/carousel 1/2.webp",
          "/aavarna/carousel 1/3.webp",
          "/aavarna/carousel 1/4.webp",
          "/aavarna/carousel 1/5.webp",
          "/aavarna/carousel 1/6.webp",
        ],
      },
      {
        id: "aav-carousel-2",
        title: "Letters to the Scents That Started It All",
        subtitle: "A poetic multi-slide motion and visual story exploring the origin story and botanical essence of each signature blend.",
        images: [
          "/aavarna/carousel 2/1.webp",
          "/aavarna/carousel 2/2.webm",
          "/aavarna/carousel 2/3.webm",
          "/aavarna/carousel 2/4.webm",
          "/aavarna/carousel 2/5.webm",
          "/aavarna/carousel 2/6.webp",
        ],
      },
    ],
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
    heroImage:
      "/salony/Celebrating Onam in six yards of tradition, with jasmine in my hair and Kerala in my heart. 🤍🌼.webp",
    description:
      "We shaped Salony into a modern Indian storyteller people actually stay for. Three content pillars across travel and heritage, wellness and tea, and collaborations, with signature series like Tea and Tales and The Story Behind that make culture feel personal in 2026.",
    image:
      "/coverimg/salony.png",
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
          image:
            "/salony/EP. 01 - ISTANBUL 🇹🇷One city. One day. So many stories.From iconic heritage and centuries of h.webm",
          title: "Istanbul Stories · Ep. 01",
          caption: "One city, one day, endless heritage narratives and cultural immersion",
          aspectClass: "aspect-[9/16]",
          tag: "Travel Series",
        },
        {
          id: "sl-2",
          image:
            "/salony/Celebrating Onam in six yards of tradition, with jasmine in my hair and Kerala in my heart. 🤍🌼.webp",
          title: "Celebrating Onam Tradition",
          caption: "Six yards of tradition, fragrant jasmine, and soulful cultural celebrations",
          aspectClass: "aspect-[4/5]",
          tag: "Heritage Portrait",
        },
      ],
      column2: [
        {
          id: "sl-3",
          image:
            "/salony/Experience the Flavors of Abundance- Onam Sadhya 2026Taste the true flavors of Kerala this Onam!.webm",
          title: "Flavors of Abundance · Onam Sadhya",
          caption: "Tasting the true authentic culinary heritage of Kerala on a banana leaf",
          aspectClass: "aspect-[9/16]",
          tag: "Culinary Heritage",
        },
        {
          id: "sl-4",
          image:
            "/salony/Krakow was one of those cities that made me want to put my phone down and just walk. 🇵🇱Pretty.webm",
          title: "Krakow Chronicles · Poland",
          caption: "Slow wanderlust and candid moments through the historic cobblestone streets",
          aspectClass: "aspect-[9/16]",
          tag: "Slow Travel",
        },
      ],
      column3: [
        {
          id: "sl-5",
          image:
            "/salony/Red, timeless, and a little desi drama. ❤️🌹Some looks don’t need an occasion- they are the occa.webm",
          title: "Timeless Desi Drama",
          caption: "Bold crimson silhouettes and effortless ethnic elegance that demand attention",
          aspectClass: "aspect-[9/16]",
          tag: "Editorial Fashion",
        },
        {
          id: "sl-6",
          image:
            "/salony/The best shoot days aren’t the ones where everything goes perfectly. They’re the ones filled wit.webm",
          title: "Behind The Scenes · Shoot Day Energy",
          caption: "Candid laughter and authentic moments behind the camera lens",
          aspectClass: "aspect-[9/16]",
          tag: "BTS & Real Life",
        },
      ],
    },
    carousels: [
      {
        id: "salony-carousel-1",
        title: "A Few Days in Istanbul · Travel & Cultural Diary",
        subtitle:
          "A visual journal through the historic mosques, bustling bazaars, and Turkish tea culture.",
        images: [
          "/salony/carousel 1/1.webp",
          "/salony/carousel 1/2.webp",
          "/salony/carousel 1/3.webp",
          "/salony/carousel 1/4.webp",
          "/salony/carousel 1/5.webp",
          "/salony/carousel 1/6.webp",
        ],
      },
      {
        id: "salony-carousel-2",
        title: "Day in My Life · Everyday Moments & Mindful Routines",
        subtitle:
          "Unfiltered glimpses into daily rituals, coffee brewing, slow living, and self-care.",
        images: [
          "/salony/carousel 2/1.webp",
          "/salony/carousel 2/2.webp",
          "/salony/carousel 2/3.webp",
          "/salony/carousel 2/4.webp",
          "/salony/carousel 2/5.webp",
        ],
      },
      {
        id: "salony-carousel-3",
        title: "Day in My Life · Shoot Day Edition & Creative Process",
        subtitle:
          "On-set styling, moodboard prep, creative direction, and capturing authentic frames.",
        images: [
          "/salony/carousel 3/1.webp",
          "/salony/carousel 3/2.webp",
          "/salony/carousel 3/3.webp",
        ],
      },
      {
        id: "salony-carousel-4",
        title: "A Little Day Out · Curated Scrapbook & Motion",
        subtitle:
          "A multimedia scrapbook blending film stills, textured typography, and candid motion reels.",
        images: [
          "/salony/carousel 4/1.webp",
          "/salony/carousel 4/2.webp",
          "/salony/carousel 4/3.webm",
          "/salony/carousel 4/4.webp",
          "/salony/carousel 4/5.webm",
        ],
      },
      {
        id: "salony-carousel-5",
        title: "Fashion & Editorial · Scrapbook Stories",
        subtitle:
          "Styling diaries, modern silhouette compositions, motion snippets, and design details.",
        images: [
          "/salony/carousel 5/1.webp",
          "/salony/carousel 5/2.webm",
          "/salony/carousel 5/3.webp",
          "/salony/carousel 5/4.webp",
        ],
      },
    ],
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
    title: "Orient Polyfilms",
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
    heroImage: "/orient/book mockup.webp",
    description:
      "Proof that B2B does not have to be boring. We handled content direction, posting and performance tracking for a manufacturing brand, swapping stock photos and jargon for clear positioning that actually lands with buyers.",
    image: "/coverimg/orient_.png",
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
          image: "/orient/standee.webp",
          title: "Trade Show Standee",
          caption: "Industrial event exhibition banner branding",
          aspectClass: "aspect-[9/16]",
          tag: "Events",
        },
        {
          id: "op-2",
          image: "/orient/WhatsApp Video 2026-09-16 at 11.55.45 AM.webm",
          title: "Industrial Motion",
          caption: "Dynamic product feature breakdown",
          aspectClass: "aspect-[9/16]",
          tag: "Motion",
        },
      ],
      column2: [
        {
          id: "op-3",
          image: "/orient/book mockup.webp",
          title: "Corporate Catalogue",
          caption: "Comprehensive BOPP product catalogue presentation",
          aspectClass: "aspect-[4/3]",
          tag: "Print & Mockup",
        },
        {
          id: "op-4",
          image: "/orient/WhatsApp Video 2026-09-16 at 11.55.48 AM.webm",
          title: "Manufacturing Reel",
          caption: "Precision manufacturing process reel",
          aspectClass: "aspect-[9/16]",
          tag: "Process",
        },
        {
          id: "op-5",
          image: "/orient/WhatsApp Video 2026-09-16 at 11.56.08 AM.webm",
          title: "Supply Chain Motion",
          caption: "Global export distribution visual format",
          aspectClass: "aspect-[9/16]",
          tag: "Distribution",
        },
      ],
      column3: [
        {
          id: "op-6",
          image: "/orient/flyer.webp",
          title: "Technical Spec Flyer",
          caption: "B2B procurement flyer and barrier property guide",
          aspectClass: "aspect-[3/4]",
          tag: "Flyer",
        },
        {
          id: "op-7",
          image: "/orient/WhatsApp Video 2026-09-16 at 11.56.06 AM.webm",
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
