"use client";

import React, { useState } from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

interface Section {
  id: string;
  number: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
  contactInfo?: {
    email: string;
    phone: string;
    address?: string;
    gstin?: string;
  };
}

const sections: Section[] = [
  {
    id: "who-we-are",
    number: "01",
    title: "WHO WE ARE",
    paragraphs: [
      "This website is operated by Slay The Strategy, a sole proprietorship of Dipani Handa, registered in India under GSTIN 29ANPPH3571F1ZQ, with its registered place of business at No. 7084, Glen Field Prestige Wellington Park, Gangama Circle, Jalahalli West, Bengaluru Urban, Karnataka 560013.",
      'In these terms, "we", "us", "our" and "the agency" mean Slay The Strategy. "You", "your" and "the client" mean the person or business using this website or engaging our services.',
      "You can reach us at hello@slaystrategy.com or on +91 90363 83777.",
    ],
    contactInfo: {
      email: "hello@slaystrategy.com",
      phone: "+91 90363 83777",
      address:
        "No. 7084, Glen Field Prestige Wellington Park, Gangama Circle, Jalahalli West, Bengaluru Urban, Karnataka 560013",
      gstin: "29ANPPH3571F1ZQ",
    },
  },
  {
    id: "acceptance",
    number: "02",
    title: "ACCEPTANCE OF THESE TERMS",
    paragraphs: [
      "By accessing this website, submitting an enquiry, or engaging us for any service, you agree to these terms. If you do not agree with them, please do not use the site or engage our services.",
      "We may update these terms from time to time. The version published on this page at the time of your engagement is the one that applies to you. Material changes will not be applied retrospectively to a signed engagement.",
    ],
  },
  {
    id: "our-services",
    number: "03",
    title: "OUR SERVICES",
    paragraphs: [
      "We provide social media management, performance marketing, UGC and content shoots, founder led marketing, web design and development, brand identity, and related digital marketing services.",
      "The specific scope, deliverables, timelines and fees for your engagement are set out in a separate proposal or service agreement. Where anything in that signed agreement differs from these terms, the signed agreement takes priority.",
      "Nothing on this website is a binding offer. Pricing shown or discussed is indicative until confirmed in writing in a proposal or agreement.",
    ],
  },
  {
    id: "engagement-and-term",
    number: "04",
    title: "ENGAGEMENT AND TERM",
    paragraphs: [
      "Retainer engagements carry a minimum commitment of three months from the start date, unless your agreement states otherwise. Social media results compound over time and a single month is not a fair measure of the work.",
      "After the initial three months the engagement continues on a monthly basis until either party ends it in writing with 30 days notice.",
      "Project based work, such as a website build, a brand identity or a one time shoot, runs to the timeline set out in the proposal for that project.",
    ],
  },
  {
    id: "fees-invoicing-taxes",
    number: "05",
    title: "FEES, INVOICING AND TAXES",
    paragraphs: [
      "Fees are as stated in your proposal or agreement.",
      "Unless agreed otherwise, retainer invoices are raised on the 5th of every month and are payable within seven days of the invoice date.",
      "All fees are exclusive of Goods and Services Tax. GST is charged at the applicable rate, which for most clients outside Karnataka is IGST at 18 percent.",
      "Advertising spend, platform fees, paid tools, licensed music, stock assets, talent and model fees, travel, studio hire and props are billed separately at actuals unless expressly included in your scope. Ad spend is paid by you directly to the platform or reimbursed to us in advance. We do not fund ad spend.",
      "If an invoice remains unpaid beyond 15 days of its due date, we may pause work on your account after written notice. Work resumes once the outstanding amount is cleared. We are not responsible for the impact of any such pause on your results, campaigns or posting schedule.",
    ],
  },
  {
    id: "what-we-need-from-you",
    number: "06",
    title: "WHAT WE NEED FROM YOU",
    paragraphs: [
      "To deliver on time we need you to provide brand assets, product or service access, platform access, and any information reasonably required for the work.",
      "Content calendars, drafts and creatives are shared for your approval. If we do not receive your approval or your consolidated feedback within 48 working hours, the material is treated as approved and we proceed, so that your posting schedule is not disrupted.",
      "Two rounds of revisions per deliverable are included. Additional rounds, or changes requested after final approval, are billable at our then current rates.",
      "Delays caused by late feedback, late access or late supply of raw content may move the delivery timeline by an equivalent period. Deliverables missed because of a delay at our end, or by mutual agreement, are carried forward to the following cycle.",
    ],
  },
  {
    id: "ownership-and-use",
    number: "07",
    title: "OWNERSHIP AND USE OF WORK",
    paragraphs: [
      "On full payment of the fees due for the relevant period, you own the final deliverables created specifically for you, along with the raw content and the editable or project files, unless your agreement states otherwise.",
      "We retain ownership of our own pre existing materials, templates, internal frameworks, processes and know how. Nothing in your engagement transfers ownership of those to you.",
      "Third party assets such as stock imagery, fonts, licensed music and software remain subject to the licence terms of their owners. Where a licence is limited in time or in use, we will tell you.",
      "We may showcase work that has already been published publicly in our portfolio, on our website and on our own social channels. For anything unpublished, or where you have asked us to keep the engagement private, we will seek your written consent first and will respect a refusal.",
    ],
  },
  {
    id: "confidentiality",
    number: "08",
    title: "CONFIDENTIALITY",
    paragraphs: [
      "Each party agrees to keep the other party's confidential information confidential and to use it only for the purpose of the engagement. This includes commercial terms, strategy documents, unpublished creative, customer data and business plans.",
      "We are happy to sign a separate non disclosure agreement on request.",
    ],
  },
  {
    id: "results-and-dependencies",
    number: "09",
    title: "RESULTS AND PLATFORM DEPENDENCIES",
    paragraphs: [
      "We commit to the quality and consistency of our work. We do not and cannot guarantee specific outcomes such as follower counts, reach, engagement rates, leads, conversions, revenue or return on ad spend.",
      "Social and advertising platforms including Meta, Google, LinkedIn and YouTube control their own algorithms, policies, pricing and account decisions. We are not responsible for changes in platform behaviour, ad account restrictions, content takedowns, shadow bans, account suspensions or outages, except where these result directly from our own negligence.",
      "You are responsible for the accuracy and legality of the claims, offers, pricing and product information you ask us to publish. You confirm that you hold the rights to any material you supply to us.",
    ],
  },
  {
    id: "cancellation-and-refunds",
    number: "10",
    title: "CANCELLATION AND REFUNDS",
    paragraphs: [
      "Either party may end a retainer engagement with 30 days written notice, subject to the three month minimum.",
      "Fees for work already performed or in progress at the date of termination are not refundable. Where a shoot, campaign or project has been scheduled and costs have been committed on your behalf, those committed costs remain payable.",
      "On termination we will hand over the deliverables and files produced for you up to that date, provided your account is fully settled.",
      "We may end an engagement immediately if there is non payment beyond 30 days, if we are asked to publish content that is unlawful, misleading or in breach of platform policy, or if the working relationship involves abusive conduct towards our team.",
    ],
  },
  {
    id: "liability",
    number: "11",
    title: "LIABILITY",
    paragraphs: [
      "To the fullest extent permitted by law, our total liability arising out of or in connection with an engagement is limited to the total fees paid by you to us in the three months immediately preceding the event giving rise to the claim.",
      "We are not liable for indirect or consequential loss, including loss of profit, loss of revenue, loss of business opportunity, loss of data or reputational harm.",
      "Nothing in these terms excludes liability that cannot lawfully be excluded.",
    ],
  },
  {
    id: "website-use",
    number: "12",
    title: "USE OF THIS WEBSITE",
    paragraphs: [
      "The content of this website, including copy, design, graphics, case studies and the Slay The Strategy name and marks, belongs to us or to our clients and is protected by applicable intellectual property law. You may not copy, reproduce or republish it for commercial use without our written permission.",
      "This website may link to third party sites. We are not responsible for their content or their practices.",
      "We work to keep the site available and accurate but do not warrant that it will be uninterrupted or free of error.",
    ],
  },
  {
    id: "force-majeure",
    number: "13",
    title: "FORCE MAJEURE",
    paragraphs: [
      "Neither party is liable for a failure or delay in performance caused by events outside its reasonable control, including natural events, fire, flood, epidemic, civil unrest, strikes, government action, and failures of internet, power or platform infrastructure.",
    ],
  },
  {
    id: "governing-law",
    number: "14",
    title: "GOVERNING LAW AND JURISDICTION",
    paragraphs: [
      "These terms are governed by the laws of India. The courts at Bengaluru, Karnataka have exclusive jurisdiction over any dispute arising from them.",
      "Before starting formal proceedings, both parties agree to attempt to resolve the matter in good faith through discussion.",
    ],
  },
  {
    id: "contact",
    number: "15",
    title: "CONTACT",
    paragraphs: [
      "Questions about these terms can be sent to hello@slaystrategy.com or +91 90363 83777.",
    ],
    contactInfo: {
      email: "hello@slaystrategy.com",
      phone: "+91 90363 83777",
    },
  },
];

export default function TermsAndConditionsPage() {
  const [activeSection, setActiveSection] = useState(sections[0].id);

  const handleScrollTo = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -120;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F4F3] text-[#242424] flex flex-col justify-between selection:bg-[#536757]/20 selection:text-[#536757]">
      {/* Floating Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-32 sm:pt-40 md:pt-44 mb-16 sm:mb-24 px-4 sm:px-8 md:px-12">
          <div className="max-w-8xl mx-auto md:px-6 lg:px-15">
            <div className="relative max-w-4xl mx-auto text-center">
              {/* Doodle on Top Left */}
              <div className="absolute -top-7 sm:-top-9 md:-top-11 left-2 sm:left-10 md:left-18 lg:left-24 -rotate-12 pointer-events-none select-none">
                <span className="font-doodle text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#7E8B80]/80">
                  Legal
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase tracking-tight text-[#536757] font-normal leading-[1.08]">
                TERMS & CONDITIONS
              </h1>

              {/* Subheading */}
              <p className="font-subheading text-neutral-500 max-w-2xl mx-auto text-xs sm:text-sm md:text-base leading-relaxed mt-3.5 sm:mt-5">
                These terms govern your use of our website and outline our standard service terms. Please review them carefully before engaging our team.
              </p>

              {/* Badges */}
              <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 mt-6 sm:mt-8">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#EAE8E4] border border-black/[0.06] text-xs sm:text-[13px] font-medium text-[#536757]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#536757]" />
                  GSTIN: 29ANPPH3571F1ZQ
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#EAE8E4] border border-black/[0.06] text-xs sm:text-[13px] font-medium text-[#242424]/80">
                  Bengaluru, Karnataka
                </span>
                <a
                  href="mailto:hello@slaystrategy.com"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#536757] text-white text-xs sm:text-[13px] font-medium hover:bg-[#435346] transition-colors"
                >
                  hello@slaystrategy.com
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section with Sticky Sidebar on Desktop */}
        <section className="mb-40 px-4 sm:px-8 md:px-12">
          <div className="max-w-8xl mx-auto md:px-6 lg:px-15">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              {/* Sticky Sidebar Navigation (Desktop) */}
              <aside className="hidden lg:block lg:col-span-4 lg:sticky lg:top-36 bg-[#ECEAE6]/70 backdrop-blur-md rounded-[28px] p-6 border border-black/[0.05] shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
                <div className="flex items-center justify-between pb-4 border-b border-black/[0.08] mb-4">
                  <h3 className="font-heading font-semibold text-lg text-[#242424]">
                    Table of Contents
                  </h3>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[#536757]/10 text-[#536757]">
                    15 Sections
                  </span>
                </div>

                <nav className="flex flex-col gap-1 max-h-[calc(100vh-240px)] overflow-y-auto pr-1">
                  {sections.map((sec) => {
                    const isActive = activeSection === sec.id;
                    return (
                      <button
                        key={sec.id}
                        type="button"
                        onClick={() => handleScrollTo(sec.id)}
                        className={`text-left px-3.5 py-2 rounded-xl text-xs sm:text-[13px] transition-all flex items-center gap-2.5 cursor-pointer ${
                          isActive
                            ? "bg-[#536757] text-white font-medium shadow-sm"
                            : "text-[#242424]/70 hover:text-[#242424] hover:bg-black/[0.04]"
                        }`}
                      >
                        <span
                          className={`font-mono text-[11px] shrink-0 ${
                            isActive ? "text-white/80" : "text-[#536757]"
                          }`}
                        >
                          {sec.number}
                        </span>
                        <span className="truncate">{sec.title}</span>
                      </button>
                    );
                  })}
                </nav>
              </aside>

              {/* Main Terms Content List */}
              <div className="lg:col-span-8 flex flex-col gap-6 sm:gap-8">
                {sections.map((sec) => (
                  <article
                    key={sec.id}
                    id={sec.id}
                    className="bg-white/80 backdrop-blur-sm rounded-[24px] sm:rounded-[30px] p-6 sm:p-8 md:p-10 border border-black/[0.05] shadow-[0_4px_24px_rgba(0,0,0,0.03)] transition-all hover:shadow-[0_8px_30px_rgba(0,0,0,0.05)]"
                  >
                    {/* Section Number + Title */}
                    <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <span className="w-9 h-9 sm:w-11 sm:h-11 rounded-2xl bg-[#536757]/10 text-[#536757] font-heading font-bold text-sm sm:text-base flex items-center justify-center shrink-0 border border-[#536757]/15">
                        {sec.number}
                      </span>
                      <h2 className="font-heading font-bold text-lg sm:text-xl md:text-2xl text-[#242424] tracking-tight">
                        {sec.title}
                      </h2>
                    </div>

                    {/* Paragraphs */}
                    <div className="space-y-3.5 sm:space-y-4 text-neutral-700 font-body text-sm sm:text-base leading-relaxed">
                      {sec.paragraphs.map((p, pIdx) => (
                        <p key={pIdx}>{p}</p>
                      ))}
                    </div>

                    {/* Contact or Specific Highlights Card if any */}
                    {sec.contactInfo && (
                      <div className="mt-5 sm:mt-6 p-4 sm:p-5 rounded-2xl bg-[#F5F4F3] border border-black/[0.05] flex flex-col sm:flex-row flex-wrap gap-4 items-start sm:items-center justify-between text-xs sm:text-sm">
                        <div className="flex flex-col gap-1 text-[#242424]">
                          {sec.contactInfo.address && (
                            <span className="text-neutral-600">
                              <strong className="text-[#242424]">Address: </strong>
                              {sec.contactInfo.address}
                            </span>
                          )}
                          {sec.contactInfo.gstin && (
                            <span className="text-neutral-600">
                              <strong className="text-[#242424]">GSTIN: </strong>
                              {sec.contactInfo.gstin}
                            </span>
                          )}
                        </div>
                        <div className="flex flex-wrap items-center gap-2">
                          <a
                            href={`mailto:${sec.contactInfo.email}`}
                            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#536757] text-white font-medium text-xs hover:bg-[#435346] transition-colors"
                          >
                            ✉ {sec.contactInfo.email}
                          </a>
                          <a
                            href={`tel:${sec.contactInfo.phone.replace(/\s+/g, "")}`}
                            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-black/[0.08] text-[#242424] font-medium text-xs hover:bg-neutral-50 transition-colors"
                          >
                            📞 {sec.contactInfo.phone}
                          </a>
                        </div>
                      </div>
                    )}
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
