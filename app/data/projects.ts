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
    image: "/anvi/720138219_17867481315686964_7648030679057249441_n.webp",
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
          image: "/anvi/A colour that doesn’t whisper.It owns the room.Pink, but make it powerful...luxury fashion aesth.mp4",
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
          image: "/anvi/Not every act of surveillance is stalking. But the line matters.Professional surveillance may be.mp4",
          title: "Surveillance vs Stalking Breakdown",
          caption: "Nuanced legal analysis on surveillance laws and personal rights",
          aspectClass: "aspect-[9/16]",
          tag: "Legal Insights",
        },
      ],
      column2: [
        {
          id: "lih-4",
          image: "/anvi/linkedin shots.png",
          title: "LinkedIn Thought Leadership",
          caption: "Viral LinkedIn carousel templates and authority engagement formats",
          aspectClass: "aspect-[9/16]",
          tag: "LinkedIn",
        },
        {
          id: "lih-5",
          image: "/anvi/Artificial Intelligence may understand patterns, but the law has always been about people. ⚖️Alg.jpg",
          title: "AI & Human Law Analysis",
          caption: "Thought leadership post on algorithms, intellectual property & human justice",
          aspectClass: "aspect-[4/5]",
          tag: "Tech Law",
        },
        {
          id: "lih-6",
          image: "/anvi/We often hear about detectives, investigations, and the mysteries they solve.But what is it like.mp4",
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
          image: "/anvi/The law isn’t black and white. Most of it lives in the grey.And honestly That’s the part nobody .jpg",
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
          "/anvi/carousel/c1.1.jpg",
          "/anvi/carousel/c1.2.jpg",
          "/anvi/carousel/c1.3.jpg",
          "/anvi/carousel/c1.4.jpg",
          "/anvi/carousel/c1.5.jpg",
          "/anvi/carousel/c1.6.jpg",
          "/anvi/carousel/c1.7.jpg",
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
    heroImage: "/claw/From elegant French tips to playful polka dots and handcrafted floral details, this set is made .jpg",
    description:
      "Nails, but make it a whole aesthetic. We ran Claw's Instagram with playful, trend aware content backed by weekly in-studio shoots, so every set got its main character moment and the feed stayed as sharp as the tips.",
    image: "/claw/From elegant French tips to playful polka dots and handcrafted floral details, this set is made .jpg",
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
          image: "/claw/Polka dots, glossy French tips & the cutest little bows, serving main character energy, one nail.mp4",
          title: "Main Character Bows & Tips",
          caption: "High-gloss French tips and polka dots serving main character energy",
          aspectClass: "aspect-[9/16]",
          tag: "Nail Art",
        },
        {
          id: "claw-2",
          image: "/claw/From elegant French tips to playful polka dots and handcrafted floral details, this set is made .jpg",
          title: "Floral & French Set",
          caption: "Handcrafted floral accents with delicate polka dot French tips",
          aspectClass: "aspect-[4/5]",
          tag: "Handcrafted",
        },
        {
          id: "claw-3",
          image: "/claw/Who says French tips have to be basicA playful mix of yellow, chocolate brown, black, and white .mp4",
          title: "Playful Colorway Tips",
          caption: "Subverting classic French tips with bold seasonal colors",
          aspectClass: "aspect-[9/16]",
          tag: "Color Play",
        },
        {
          id: "claw-4",
          image: "/claw/Who says long nails slow you down 💅🥤From opening your favourite drink to owning every moment, .mp4",
          title: "Long Nails Lifestyle Test",
          caption: "Debunking long nail myths with everyday lifestyle testing",
          aspectClass: "aspect-[9/16]",
          tag: "Lifestyle",
        },
      ],
      column2: [
        {
          id: "claw-5",
          image: "/claw/Serving sharp energy with every move, these claw nails aren’t just a look, they’re a statement. .mp4",
          title: "Sharp Claw Energy",
          caption: "Statement stiletto sets built for unmatched confidence",
          aspectClass: "aspect-[9/16]",
          tag: "Statement",
        },
        {
          id: "claw-6",
          image: "/claw/Two types of Claw Nails girls 💅📌 The Pinterest Girl🔥 The “Aaj Kuch Toofani Karte Hai” GirlWhi.jpg",
          title: "Two Types of Claw Girls",
          caption: "Pinterest girl vs Toofani girl relatable personality format",
          aspectClass: "aspect-[4/5]",
          tag: "Personality",
        },
        {
          id: "claw-7",
          image: "/claw/The best marketing isn’t always the loudest, it’s the experience people can’t stop talking about.mp4",
          title: "Salon Experience Storytelling",
          caption: "Documenting the pampering in-studio appointment experience",
          aspectClass: "aspect-[9/16]",
          tag: "Experience",
        },
        {
          id: "claw-8",
          image: "/claw/“what are you doing today”me- probably getting a fresh set because priorities 💅✨From soft girl .jpg",
          title: "Fresh Set Priorities",
          caption: "Engaging chat-format meme celebrating fresh salon sets",
          aspectClass: "aspect-[4/5]",
          tag: "Community",
        },
      ],
      column3: [
        {
          id: "claw-9",
          image: "/claw/𝘞𝘦 𝘱𝘶𝘵 𝑹𝒆𝒆𝒏𝒂 𝑩𝒂𝒕𝒓𝒂 𝘪𝘯 𝘵𝘩𝘦 𝘩𝘰𝘵 𝘴𝘦𝘢𝘵 𝘧𝘰𝘳 𝘢 𝘳𝘢𝘱𝘪𝘥-𝘧𝘪𝘳𝘦 𝘳𝘰.mp4",
          title: "Founder Hot Seat with Reena Batra",
          caption: "Rapid-fire founder interview and nail care secrets",
          aspectClass: "aspect-[9/16]",
          tag: "Founder Led",
        },
        {
          id: "claw-10",
          image: "/claw/Lashes that do the talking before you even say a word ✨👀 Soft, wispy & made to elevate every look••.jpg",
          title: "Wispy Lashes & Eye Glam",
          caption: "Soft wispy lash extensions elevating the full studio look",
          aspectClass: "aspect-[4/5]",
          tag: "Lash Studio",
        },
        {
          id: "claw-11",
          image: "/claw/𝙎𝙝𝙚’𝙨 𝙖 𝙬𝙝𝙤𝙡𝙚 𝙜𝙖𝙡𝙖𝙭𝙮 𝙤𝙣 𝙝𝙚𝙧 𝙛𝙞𝙣𝙜𝙚𝙧𝙩𝙞𝙥𝙨 𝙖𝙣𝙙 𝙬𝙚 𝙖𝙧𝙚 𝙉𝙊𝙏 .mp4",
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
          "/claw/carousel/1.jpg",
          "/claw/carousel/2.jpg",
          "/claw/carousel/3.jpg",
          "/claw/carousel/4.jpg",
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
    heroImage: "/baked love/baked love .png",
    description:
      "Flavour first, always. We rebuilt Baked Love's Instagram around what makes it special, founder led stories, Cake of the Month, the Deliciousness Quotient and zero plastic shimmer packaging, with in house shoots that finally made the cakes look as good as they taste.",
    image: "/baked love/baked love .png",
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
          image: "/baked love/13 years of baking, creating, learning - and there’s still plenty we haven’t told you.From what .mp4",
          title: "13 Years of Craft & Passion",
          caption: "Behind-the-scenes journey of 13 years of artisanal baking",
          aspectClass: "aspect-[9/16]",
          tag: "Founder Journey",
        },
        {
          id: "bl-2",
          image: "/baked love/baked love .png",
          title: "A Chef Vatsala Original",
          caption: "Signature handcrafted confection with rich filling and coconut zest",
          aspectClass: "aspect-[4/5]",
          tag: "Chef's Special",
        },
        {
          id: "bl-3",
          image: "/baked love/Watch it come together, one layer at a time.Generously soaked ladyfingers with a signature Baked.mp4",
          title: "One Layer At A Time: Tiramisu",
          caption: "Generously soaked artisanal ladyfingers layered with signature cream",
          aspectClass: "aspect-[9/16]",
          tag: "Process",
        },
      ],
      column2: [
        {
          id: "bl-4",
          image: "/baked love/About once a month, someone tries to sell us a shortcut.Thirteen years of saying no. Because som.mp4",
          title: "Zero Shortcuts Philosophy",
          caption: "Saying no to industrial shortcuts in favor of pure, slow-crafted flavor",
          aspectClass: "aspect-[9/16]",
          tag: "Philosophy",
        },
        {
          id: "bl-5",
          image: "/baked love/baked love  (5).png",
          title: "Plot Twist: It's Vegan",
          caption: "Indulgent dairy-free chocolate tart with cocoa dusting",
          aspectClass: "aspect-[4/5]",
          tag: "Vegan Lineup",
        },
        {
          id: "bl-6",
          image: "/baked love/A glimpse of the vegan lineup, one tap away. Now delivering across Delhi, Gurgaon and Noida. Ord.mp4",
          title: "Vegan Lineup & NCR Delivery",
          caption: "Showcasing conscious indulgence delivering across Delhi, Gurgaon & Noida",
          aspectClass: "aspect-[9/16]",
          tag: "Delivery",
        },
      ],
      column3: [
        {
          id: "bl-7",
          image: "/baked love/Festive season is upon us- connect with us for bespoke gifts that don’t get forwarded ✨.mp4",
          title: "Bespoke Festive Gifting",
          caption: "Memorable holiday hampers and artisanal bespoke dessert boxes",
          aspectClass: "aspect-[9/16]",
          tag: "Gifting",
        },
        {
          id: "bl-8",
          image: "/baked love/Somebody in your family still remembers exactly which cake you fought over.Every Rakhi looks the.jpg",
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
          "/baked love/carousel/baked love  (1).png",
          "/baked love/carousel/baked love  (2).png",
          "/baked love/carousel/baked love  (3).png",
          "/baked love/carousel/baked love  (4).png",
        ],
      },
      {
        id: "bl-carousel-2",
        title: "The Deliciousness Quotient & Pure Ingredients",
        subtitle: "Sensory storytelling celebrating unadulterated cocoa, pure Nutella swirls, and zero-shortcut ingredient purity.",
        images: [
          "/baked love/carousel 2/baked love  (6).png",
          "/baked love/carousel 2/baked love  (7).png",
          "/baked love/carousel 2/baked love  (8).png",
          "/baked love/carousel 2/baked love  (9).png",
          "/baked love/carousel 2/baked love  (10).png",
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
    heroImage: "/costify/Your next washing machine is just one scan away. 📲✨Looking to upgrade without overspending Scan.jpg",
    description:
      "Refurbished tech, zero boring. We built Costify's page around \"Naye jaisa, aadha daam\" with founder reels, Bollywood themed warranty carousels, educational content and trend formats that turned a trust heavy category into something people wanted to watch.",
    image: "/costify/Your next washing machine is just one scan away. 📲✨Looking to upgrade without overspending Scan.jpg",
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
          image: "/costify/Ab toh Jethalal bhi bhaga bhaga aagya aap kab aenge •Visit our Costify store and get an EXTRA ₹1.mp4",
          title: "Jethalal Store Visit Reel",
          caption: "High-virality Bollywood comedy reel driving store footfall",
          aspectClass: "aspect-[9/16]",
          tag: "Viral Reel",
        },
        {
          id: "cost-2",
          image: "/costify/Summer demand is rising, are you stock ready ❄️📈Upgrade your business with professionally refur.jpg",
          title: "Summer Stock Ready Deep Freezers",
          caption: "High-impact B2B refurbished cooling appliance creative",
          aspectClass: "aspect-[4/5]",
          tag: "B2B Deals",
        },
        {
          id: "cost-3",
          image: "/costify/Why pay full price when you can bring home the same comfort for up to 60_ lessFrom air condition.mp4",
          title: "60% Off Comfort Campaign",
          caption: "Value proposition breakdown comparing new vs refurbished ACs",
          aspectClass: "aspect-[9/16]",
          tag: "Comfort Value",
        },
      ],
      column2: [
        {
          id: "cost-4",
          image: "/costify/POV- Jab premium washing machine ka price dekh ke sapna hi spin cycle mein chala jaaye Par tensi.mp4",
          title: "Premium Washing Machine POV",
          caption: "Relatable humor addressing high retail appliance price tags",
          aspectClass: "aspect-[9/16]",
          tag: "POV Format",
        },
        {
          id: "cost-5",
          image: "/costify/Your next washing machine is just one scan away. 📲✨Looking to upgrade without overspending Scan.jpg",
          title: "Laundry Day Sorted Campaign",
          caption: "Direct-response scan-to-buy refurbished washing machine visual",
          aspectClass: "aspect-[4/5]",
          tag: "D2C Campaign",
        },
        {
          id: "cost-6",
          image: "/costify/When our customers say it, it means more than any advertisement ever couldFrom quality-checked r.mp4",
          title: "Customer Trust & Testimonials",
          caption: "Authentic buyer unboxing and quality verification",
          aspectClass: "aspect-[9/16]",
          tag: "Customer UGC",
        },
      ],
      column3: [
        {
          id: "cost-7",
          image: "/costify/What looks like an old deep freezer is transformed through Costify’s professional refurbishment .mp4",
          title: "Deep Freezer Transformation",
          caption: "Step-by-step restoration and 32-point technical overhaul",
          aspectClass: "aspect-[9/16]",
          tag: "Restoration",
        },
        {
          id: "cost-8",
          image: "/costify/When Costify adds new products EVERY. SINGLE. DAY, store Drama is also a must EVERY. SINGLE. DAY.mp4",
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
          "/costify/carousel 1/1.jpg",
          "/costify/carousel 1/2.jpg",
          "/costify/carousel 1/3.jpg",
          "/costify/carousel 1/4.jpg",
        ],
      },
      {
        id: "costify-carousel-2",
        title: "Bollywood Themed Warranty & Product Guides",
        subtitle: "Educational multi-slide breakdown debunking refurbished appliance myths and highlighting 6-month full warranty assurance.",
        images: [
          "/costify/carousel 2/1.jpg",
          "/costify/carousel 2/2.jpg",
          "/costify/carousel 2/2(1).jpg",
          "/costify/carousel 2/3.jpg",
          "/costify/carousel 2/4.jpg",
          "/costify/carousel 2/5.jpg",
          "/costify/carousel 2/6.jpg",
          "/costify/carousel 2/7.jpg",
          "/costify/carousel 2/8.jpg",
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
