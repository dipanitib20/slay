export interface ServiceData {
  id: string;
  slug: string;
  title: string;
  heading: [string, string];
  summary: string;
  description: string;
  heroImage: string;
  cardImage?: string;
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
    title: "Social Media Management",
    heading: ["Social Media", "Management"],
    summary:
      "We run your social presence end to end, from strategy and content to posting and community, so your profile finally works as hard as your product does.",
    description:
      "Instagram is no longer optional. It is your storefront, your first impression and your most visited sales page. We manage it end to end, so it consistently reflects the true value of your brand.",
    heroImage: "/serviceslugsmain heroimage/social-media-hero.png",
    cardImage: "/Servicecards/social-media.png",
    midImage: "/serviceslug middleimage/social-media-mid.png",
    deliverables: [
      "Monthly content strategy and calendar",
      "Reels, carousels and statics, designed in house",
      "Scripting, captions and hashtag direction",
      "Daily stories and community management",
      "Scheduling, posting and monthly reporting",
    ],
    overview: [
      "Your Instagram is not a mood board. It is the page a customer lands on after they hear about you, and it decides in about four seconds whether you are worth taking seriously. We treat it that way. Every account starts with a strategy built from your positioning, your competitors and what your audience actually engages with, not what performed for someone else's brand.",
      "From there we handle the work. Calendar before the month begins, content produced in house by a dedicated strategist, editor and designer, and posting that stays consistent whether or not you have had time to think about it. You approve once a month. We do the rest, and we tell you every month what worked and what we are changing because of it.",
    ],
    whyItMattersIntro:
      "We turn your social media into a reliable growth channel that builds genuine brand equity.",
    whyItMatters: [
      {
        title: "Strategy before content",
        description:
          "We do not start designing until we know what the account is meant to achieve and how we will know if it did.",
      },
      {
        title: "Consistency you do not have to chase",
        description:
          "The calendar reaches you before the month starts, never mid month, and posting does not stop because someone is travelling.",
      },
      {
        title: "Built in house",
        description:
          "Your strategist, editor and designer sit on the same team, so the content matches the strategy instead of drifting from it.",
      },
      {
        title: "A profile that converts",
        description:
          "Bio, highlights, pinned content and DMs all treated as part of the sales journey, not decoration.",
      },
      {
        title: "Reporting that leads to a change",
        description:
          "Every month we show what performed, what did not, and the specific adjustment we are making next month.",
      },
    ],
    buttonText: "Explore social growth",
  },
  {
    id: "performance-marketing",
    slug: "performance-marketing",
    title: "Performance Marketing",
    heading: ["Performance", "Marketing"],
    summary:
      "We build campaigns that are meant to sell, not campaigns that are meant to look busy. Audience research, creative, testing and optimisation, with every rupee accounted for.",
    description:
      "Anyone can boost a post. We build actual campaigns. Audience research, creative strategy, ad copy, testing and optimisation based on what the data says. Every rupee tracked.",
    heroImage: "/serviceslugsmain heroimage/performance-hero.png",
    cardImage: "/Servicecards/performance-marketing.png",
    midImage: "/serviceslug middleimage/performance-mid.png",
    deliverables: [
      "Audience research and campaign strategy",
      "Ad creative and copy, built for the platform",
      "Campaign setup, structure and targeting",
      "Ongoing testing and optimisation",
      "Monthly performance reporting with clear numbers",
    ],
    overview: [
      "Boosting a post is not performance marketing. It is spending money to reach people who were going to see you anyway. Real performance marketing starts before anything goes live, with a clear view of who you are selling to, what will actually move them, and what a customer is worth to your business.",
      "We build the campaign around that. Audiences researched rather than guessed, creative made specifically for paid rather than recycled from your grid, and a testing structure that tells us what is working within the first few weeks instead of at the end of the quarter.",
      "Then we manage it properly. Budgets watched, underperformers cut, winners scaled, and a monthly report that tells you what you spent, what it returned, and what we are changing because of it. Ad spend is yours and goes straight to the platform. We never sit between you and your money.",
    ],
    whyItMattersIntro:
      "We turn paid advertising into a measurable, profit-driving acquisition engine.",
    whyItMatters: [
      {
        title: "Research before spend",
        description:
          "We do not launch until we know who we are targeting and what we are testing. Guessing with a live budget is the most expensive way to learn.",
      },
      {
        title: "Creative built for paid",
        description:
          "Ads that stop the scroll are made differently from organic posts. We write and design for the placement, the audience and the intent.",
      },
      {
        title: "Structured testing",
        description:
          "Multiple angles, hooks and audiences tested deliberately, so we learn quickly which one your market responds to rather than betting everything on one idea.",
      },
      {
        title: "Every rupee tracked",
        description:
          "You see spend, results and cost per outcome in plain numbers every month. No vanity metrics dressed up as performance.",
      },
      {
        title: "Honest about the funnel",
        description:
          "If your offer, price point or landing experience is the problem rather than the ads, we will tell you. Spending more on a broken funnel does not fix it.",
      },
    ],
    buttonText: "Explore marketing",
  },
  {
    id: "ugc-shoots",
    slug: "ugc-content-shoots",
    title: "UGC and Content Shoots",
    heading: ["UGC & Content", "Shoots"],
    summary:
      "We plan the shoot, direct the creative and run production from concept to final edit, so you finish with a content bank that lasts months rather than a folder of photos nobody uses.",
    description:
      "We plan the shoot, direct the creative and coordinate production from concept to final edit. Every piece of content is built around your brand aesthetic and what your specific audience actually responds to.",
    heroImage: "/serviceslugsmain heroimage/ugc-hero.png",
    cardImage: "/Servicecards/ugc-shoots.png",
    midImage: "/serviceslug middleimage/ugc-mid.png",
    deliverables: [
      "Shoot concept, moodboard and creative direction",
      "Shot list, scripts and production planning",
      "Production coordination, crew, location and props",
      "Direction on the day, photo and video",
      "Editing, colour, sound and final delivery in every format you need",
    ],
    overview: [
      "Most brands do not have a content problem. They have a raw material problem. One shoot a year, shot without a plan, and then eleven months of stretching the same six images across every platform until everyone is tired of them.",
      "We approach a shoot as a supply chain rather than an event. Before anything is booked we know what the content is for, which posts it feeds, and how many weeks it needs to cover. That decides the shot list, the setups, the wardrobe changes and the pace of the day, which is why our shoots produce far more usable output than the number of hours would suggest.",
      "On the day we direct, so you are not standing in front of a camera guessing what to do. Afterwards we edit, cut and format for each placement, and hand you the raw files and the edits. Everything we shoot for you is yours, including the project files.",
    ],
    whyItMattersIntro:
      "We turn shoots from chaotic one-off events into consistent, high-yield creative assets.",
    whyItMatters: [
      {
        title: "Planned around the calendar",
        description:
          "We shoot for the months ahead, not for one campaign, so your content bank is still working long after the shoot day.",
      },
      {
        title: "Direction included",
        description:
          "Founders, models and staff all get told what to do, how to stand and what to say. Nobody is left performing into silence.",
      },
      {
        title: "Built for the placement",
        description:
          "Vertical, square, carousel, thumbnail, story. Cut and formatted for where it will actually live, not one master file you have to crop yourself.",
      },
      {
        title: "UGC without the casting headache",
        description:
          "Where the brief calls for creator style content rather than polished production, we source, brief and manage the creators and handle the usage rights.",
      },
      {
        title: "Everything belongs to you",
        description:
          "Raw footage, images and editable project files are handed over once the shoot is settled. No hostage situation with your own content.",
      },
    ],
    buttonText: "Explore content shoots",
  },
  {
    id: "founder-marketing",
    slug: "founder-led-marketing",
    title: "Founder Led Marketing",
    heading: ["Founder-Led", "Marketing"],
    summary:
      "The most underused asset at a founder led company is the founder. We turn your perspective into a presence on LinkedIn and Instagram that builds trust faster than any ad ever will.",
    description:
      "The most underused marketing asset at any founder led company is the founder. Your story, your perspective, your presence on LinkedIn and Instagram builds trust faster than any ad campaign. We write, we post, we position. You grow.",
    heroImage: "/serviceslugsmain heroimage/founder-hero.png",
    cardImage: "/Servicecards/founder-led.png",
    midImage: "/serviceslug middleimage/founder-mid.png",
    deliverables: [
      "Positioning and narrative for you, not just your company",
      "Content pillars and a monthly calendar",
      "Ghostwritten posts, scripts and hooks in your voice",
      "Video direction and editing for talking head and behind the scenes content",
      "Profile optimisation, engagement strategy and inbound handling",
    ],
    overview: [
      "People buy from people. A prospect will read three of your posts before they read a single line on your website, and that is where they decide whether you know what you are talking about.",
      "The problem is almost never that founders have nothing to say. It is that saying it consistently takes a system, and running the business already takes all the time there is. So the account goes quiet for six weeks, then produces a burst of posts, then goes quiet again.",
      "We build the system. We pull the thinking out of you in short structured conversations, turn it into content that sounds like you rather than like a marketing department, and keep it running whether or not you had time to think about it this week. You approve, you show up on camera where the format needs it, and the rest is handled.",
    ],
    whyItMattersIntro:
      "We turn the founder's authentic voice into your highest-leverage marketing asset.",
    whyItMatters: [
      {
        title: "It sounds like you",
        description:
          "We write from your actual opinions and your actual language. If your team reads a post and cannot tell it was ghostwritten, we have done the job.",
      },
      {
        title: "Trust compounds faster than reach",
        description:
          "A founder account with a few thousand engaged followers routinely outperforms a brand page with far more, because people reply to a person.",
      },
      {
        title: "It works while you sleep",
        description:
          "Investors, hires, journalists and buyers check your profile before they take the meeting. That profile is either doing work for you or against you.",
      },
      {
        title: "Low time cost",
        description:
          "Around an hour a month for approvals, plus short recording sessions. We do the writing, the editing and the scheduling.",
      },
      {
        title: "LinkedIn and Instagram, treated differently",
        description:
          "Same story, different rooms. We do not copy paste between them and hope.",
      },
    ],
    buttonText: "Explore founder marketing",
  },
  {
    id: "web-design",
    slug: "web-design-development",
    title: "Web Design and Development",
    heading: ["Web Design", "& Development"],
    summary:
      "We design and build sites that look expensive and behave like a salesperson. Fast, clear, and built for how people actually browse in 2026, on a phone, in a hurry.",
    description:
      "A site that looks expensive and behaves like a salesperson. We design and build for the way people actually browse in 2026, on a phone, in a hurry, deciding in seconds whether you are worth their time.",
    heroImage: "/serviceslugsmain heroimage/web-design-hero.png",
    cardImage: "/Servicecards/web-design.png",
    midImage: "/serviceslug middleimage/web-design-mid.png",
    deliverables: [
      "Site structure, user journey and wireframes",
      "Design in your brand world, page by page",
      "Development, build and integrations",
      "Copy direction and content structure",
      "Mobile optimisation, speed, basic SEO setup and launch",
    ],
    overview: [
      "Your site is the only piece of the internet you actually own. Everything else is rented from a platform that can change its algorithm on a Tuesday. It is also where every ad, every DM and every referral eventually sends people, which makes it the most expensive page on the internet to get wrong.",
      "Most brand sites fail for the same two reasons. They are built to impress the founder rather than convince the visitor, and they are designed on a desktop for an audience that will almost entirely arrive on a phone.",
      "We build the other way around. Structure first, so the journey from landing to enquiry is obvious. Mobile first, because that is where your traffic is. Then design that carries your brand properly, development that loads quickly, and a build you or your team can actually update without calling a developer every time a price changes.",
    ],
    whyItMattersIntro:
      "We craft modern web experiences that build trust in seconds and turn traffic into clients.",
    whyItMatters: [
      {
        title: "Structure before decoration",
        description:
          "We map what a visitor needs to see, in what order, before anyone opens a design tool. A beautiful site with a confusing journey is an expensive brochure.",
      },
      {
        title: "Mobile first, genuinely",
        description:
          "Designed and tested for the phone your customer is holding, not squeezed down from a desktop layout at the end.",
      },
      {
        title: "Built to convert",
        description:
          "Clear calls to action, contact paths that work, and a page structure that moves someone from curious to enquiring.",
      },
      {
        title: "Speed and searchability",
        description:
          "Optimised load times, clean structure and the SEO foundations in place at launch rather than bolted on later.",
      },
      {
        title: "You can run it yourself",
        description:
          "We hand over a site your team can update, along with a walkthrough so nobody is stuck waiting on us for a text change.",
      },
    ],
    buttonText: "Explore web design",
  },
  {
    id: "brand-identity",
    slug: "brand-identity-strategy",
    title: "Brand Identity",
    heading: ["Brand Identity", "& Strategy"],
    summary:
      "Positioning, visual system and voice, built so your brand still looks and sounds like itself on a reel, an invoice and a shopfront.",
    description:
      "Logo, colour, type, tone and the rules that hold it all together. Built so your brand still looks like itself on a reel, an invoice and a shopfront.",
    heroImage: "/serviceslugsmain heroimage/brand-identity-hero.png",
    cardImage: "/Servicecards/brand-identity.png",
    midImage: "/serviceslug middleimage/brand-identity-mid.png",
    deliverables: [
      "Brand positioning and messaging framework",
      "Logo suite and marks",
      "Colour palette and typography system",
      "Brand voice and tone guidelines",
      "Brand guidelines document and asset handover",
    ],
    overview: [
      "A brand is not a logo. A logo is one asset inside a system, and a system is what stops your brand falling apart the moment three different people start making content for it.",
      "We start with positioning, because visual decisions made before you know what you stand for are just decoration. What you do, who it is for, why it matters and what you are deliberately not. Once that is settled, the visual and verbal decisions get considerably easier and considerably better.",
      "From there we build the identity itself. Marks, colour, type, layout rules and voice, documented properly so your designer, your editor, your printer and your future hires all make the same call without asking you. The output is not a folder of files. It is a system your brand can grow inside for years.",
    ],
    whyItMattersIntro:
      "We create cohesive visual and strategic systems that endure as your business scales.",
    whyItMatters: [
      {
        title: "Positioning first",
        description:
          "We clarify what your brand stands for, who it is for and why it matters, so every message afterwards lands with the right people.",
      },
      {
        title: "A recognisable visual system",
        description:
          "Designed to be identifiable at any size, from a story sticker to a hoarding, and to still look like you across every platform.",
      },
      {
        title: "A voice that holds",
        description:
          "A defined tone and messaging framework, so your brand sounds like itself no matter who is writing or which channel it is on.",
      },
      {
        title: "Built to scale",
        description:
          "Real guidelines with real rules, so a new designer or a new hire produces on brand work in week one instead of month three.",
      },
      {
        title: "Made to be used",
        description:
          "Files delivered in every format you will actually need, organised so nobody is hunting for a logo at eleven at night.",
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
