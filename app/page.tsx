import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  Check,
  FileVideo,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import { ContactForm } from "@/components/landing/contact-form";
import { FAQAccordion } from "@/components/landing/faq-accordion";
import { Header } from "@/components/landing/header";
import { HeroSection } from "@/components/landing/hero-section";
import { Reveal } from "@/components/landing/reveal";

const whyCards = [
  {
    title: "Win more instructions",
    body: "Show vendors that your agency can market their property with more polish and imagination than a standard listing pack alone.",
  },
  {
    title: "Strengthen listing presentation",
    body: "Turn static property imagery into a more engaging asset for portals, websites, and social channels.",
  },
  {
    title: "Move faster with less coordination",
    body: "Create a stronger marketing asset without arranging access, filming, crew schedules, or production logistics.",
  },
  {
    title: "Tell a better story for awkward stock",
    body: "For dated, vacant, or refurbishment-led properties, concept-led visuals can help buyers understand the opportunity more quickly when presented clearly as illustrative.",
  },
];

const bestFitBullets = [
  "Residential sales listings that need stronger presentation",
  "Vendor pitches where differentiation matters",
  "Dated or empty homes where potential is part of the sale",
  "Branches that want more consistent premium content",
  "Agency groups testing a more scalable video format",
];

const serviceModes = [
  {
    title: "Listing Video",
    intro:
      "A polished branded video built from real property photos to market the property as currently presented.",
    bestFor: [
      "residential sales listings",
      "selected rental and commercial use",
      "website and portal promotion",
      "social distribution",
      "vendor-facing presentation",
    ],
    whatItDoes: [
      "improves pacing and presentation",
      "turns existing imagery into a stronger marketing asset",
      "adds branding, movement, sequencing, and end CTA",
      "gives agencies a more modern content format",
    ],
    note: "This is about better presentation, not materially changing the property's condition.",
    cta: "Request Pricing",
    href: "#contact",
    image: "/media/demo-listing-poster.svg",
    imageAlt: "Listing video preview",
    label: "Built from listing photos",
  },
  {
    title: "Potential Video",
    intro:
      "A clearly labelled concept video for suitable properties where showing future potential is commercially useful.",
    bestFor: [
      "dated homes",
      "vacant homes",
      "refurbishment opportunities",
      "investment stock",
      "selected transformation-led briefs",
    ],
    whatItDoes: [
      "helps tell a stronger what this could become story",
      "supports properties where potential is part of the pitch",
      "creates a more compelling visual narrative for selected stock",
    ],
    note: "This format is illustrative and should be presented as concept material, not as the property's current condition.",
    cta: "Talk Through a Project",
    href: "#book-call",
    image: "/media/demo-potential-poster.svg",
    imageAlt: "Potential video preview",
    label: "Illustrative concept only",
  },
];

const comparisons = [
  {
    title: "Compared with static listings",
    body: "More motion, more structure, more attention, and a stronger visual story.",
  },
  {
    title: "Compared with arranging a shoot",
    body: "Less time, less coordination, less operational drag.",
  },
  {
    title: "Compared with generic editing",
    body: "Higher-trust, more premium, and more commercially presentable.",
  },
];

const whatYouGet = [
  "A branded property video built from supplied listing photos",
  "A polished end frame with agency call to action",
  "Delivery suited to modern listing and social workflows",
  "A format that can support listing marketing, vendor presentations, and selected concept-led briefs",
  "A service designed to be simple to brief and practical to trial",
];

const worksBest = [
  "Strong listing photography already available",
  "Residential sales stock that needs better presentation",
  "Selected dated or vacant homes where potential matters",
  "Agencies wanting a stronger vendor-facing marketing story",
  "Teams testing a more scalable premium content format",
];

const lessSuitable = [
  "Poor-quality source photography",
  "Highly cluttered interiors",
  "Properties where concept visuals would create confusion",
  "Briefs requiring strict as-shot representation only",
  "Cases where a full traditional shoot is clearly the better option",
];

const trustPoints = [
  "Listing presentation and concept-led transformation are clearly separated",
  "Illustrative outputs are intended to be disclosed as such",
  "We focus on use cases agencies can adopt confidently and responsibly",
  "If a property is not suited to this format, we would rather say so",
];

const pricingCards = [
  {
    title: "Trial Property Video",
    price: "From \u20AC295",
    description: "A first test on a single property",
    bullets: ["initial trials", "branch-level testing", "lower-risk first use", "internal buy-in"],
    href: "#contact",
    cta: "Request Pricing",
  },
  {
    title: "Signature Listing Video",
    price: "From \u20AC595",
    description:
      "Agencies that want a polished repeatable product for listings, socials, and vendor-facing marketing",
    bullets: [
      "residential sales",
      "stronger listing presentation",
      "repeat use across selected stock",
      "agencies investing in better visual marketing",
    ],
    href: "#book-call",
    cta: "Book a Call",
    badge: "Most Popular",
  },
  {
    title: "Transformation Showcase",
    price: "From \u20AC1,250",
    description:
      "Higher-value or concept-led briefs where showing potential is central to the commercial story",
    bullets: [
      "dated premium homes",
      "refurbishment opportunities",
      "selected development-style storytelling",
      "high-touch projects",
    ],
    href: "#book-call",
    cta: "Talk Through a Project",
  },
];

const faqs = [
  {
    question: "What do you need from us to get started?",
    answer:
      "Usually the listing link or property photos, your agency branding, and a clear idea of what the asset is meant to do.",
  },
  {
    question: "Is this a replacement for traditional videography?",
    answer:
      "No. It is a complementary format that makes sense when the goal is stronger presentation without the time, cost, and logistics of a full production.",
  },
  {
    question: "Can this be used on live listings?",
    answer:
      "Yes, especially in the standard listing-video format. Where concept-led visuals are involved, they should be presented clearly as illustrative.",
  },
  {
    question: "Which properties work best?",
    answer:
      "Standard listing videos can work across a broad range of properties. Potential videos are best reserved for selected properties where renovation upside, future value, or design direction is part of the commercial appeal.",
  },
  {
    question: "Can you brand the asset to our agency?",
    answer:
      "Yes. Agency branding, contact details, and end call-to-action framing can be built into the final output.",
  },
  {
    question: "Can this help with vendor presentations?",
    answer:
      "Yes. One of the strongest commercial use cases is showing prospective vendors that your agency can market their property in a more modern and distinctive way.",
  },
  {
    question: "Do you work on one-off properties or ongoing requirements?",
    answer:
      "Both. Many agencies will start with one listing, then expand use once they see where the format fits best.",
  },
  {
    question: "How do you handle illustrative or concept-led outputs?",
    answer:
      "We treat those as a separate service mode and recommend clear disclosure so they are understood as concept material rather than as the property's present condition.",
  },
];

export default function Home() {
  return (
    <main id="top" className="overflow-x-clip">
      <Header />

      <HeroSection />

      <SectionShell id="what-this-is">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <Reveal>
            <span className="eyebrow">What this is</span>
            <h2 className="section-title max-w-[8ch]">
              A practical new format for agencies that want more from the assets they already have
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="grid gap-8 lg:grid-cols-[1fr_24rem]">
              <div className="space-y-6 text-[1.9rem] leading-[1.72] text-[rgba(82,39,23,0.78)]">
                <p>
                  Not every property needs a conventional video shoot. But many listings still
                  need more than static photos if the goal is to stand out online, strengthen
                  your vendor pitch, or give an underwhelming property a better commercial story.
                </p>
                <p>
                  This service sits in that gap: premium motion-led property content built from
                  existing imagery, designed for real agency use.
                </p>
              </div>
              <div className="muted-panel p-6">
                <p className="text-[1.2rem] font-semibold uppercase tracking-[0.2em] text-[#8a4b30]">
                  Positioning
                </p>
                <p className="mt-4 text-[1.7rem] leading-[1.65] text-[#522717]">
                  Modern property marketing for agencies, not AI for AI&apos;s sake.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </SectionShell>

      <SectionShell id="demo">
        <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-end">
          <Reveal>
            <span className="eyebrow">Demo</span>
            <h2 className="section-title max-w-[7ch]">See the format in action</h2>
            <div className="section-body space-y-5">
              <p>
                The quickest way to judge whether this is useful for your agency is to watch the
                demo. It shows how existing property imagery can become a polished video asset that
                feels more considered, more modern, and more commercially useful than a static
                listing alone.
              </p>
              <p>
                For the right property, that difference can be enough to improve first impressions,
                strengthen a vendor conversation, or make a listing easier to market.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="#book-call" className="primary-button">
                Book a Call
              </Link>
              <Link href="#how-it-works" className="secondary-button">
                See How It Works
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="editorial-panel overflow-hidden p-4 sm:p-5">
              <div className="offset-media overflow-hidden rounded-[2.6rem] bg-[#e8ddd0]">
                <Image
                  src="/media/demo-potential-poster.svg"
                  alt="Placeholder poster for the property motion demo"
                  width={1280}
                  height={960}
                  className="h-auto w-full"
                />
              </div>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <span className="mustard-chip">Illustrative concept option available</span>
                <span className="ghost-chip">Pilot pricing available</span>
              </div>
            </div>
          </Reveal>
        </div>
      </SectionShell>

      <SectionShell id="use-cases">
        <div className="grid gap-12 xl:grid-cols-[0.8fr_1.2fr] xl:items-start">
          <Reveal>
            <span className="eyebrow">Why agencies are using this</span>
            <h2 className="section-title max-w-[7ch]">
              Better presentation used selectively makes a real difference.
            </h2>
            <p className="section-body max-w-[40rem]">
              The strongest use cases are not every property, every time. They are the moments
              where better presentation can move a conversation, a vendor decision, or a listing.
            </p>
          </Reveal>

          <div className="grid gap-5">
            <Reveal delay={0.06}>
              <div className="grid gap-4 md:grid-cols-[1.05fr_0.95fr]">
                <div className="editorial-panel overflow-hidden p-4">
                  <Image
                    src="/media/demo-listing-poster.svg"
                    alt="Listing preview collage"
                    width={1280}
                    height={900}
                    className="h-full w-full rounded-[2.2rem] object-cover"
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-1">
                  <div className="muted-panel overflow-hidden p-3">
                    <Image
                      src="/media/demo-potential-poster.svg"
                      alt="Potential preview collage"
                      width={1280}
                      height={960}
                      className="h-full w-full rounded-[2rem] object-cover"
                    />
                  </div>
                  <div className="muted-panel p-6">
                    <p className="text-[1.2rem] font-semibold uppercase tracking-[0.18em] text-[#8a4b30]">
                      Supporting line
                    </p>
                    <p className="mt-4 text-[1.8rem] leading-[1.65] text-[#522717]">
                      Stronger listing presentation, vendor-winning differentiation, and more
                      social-ready content without a full production workflow.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
            <div className="stat-grid">
              {whyCards.map((card, index) => (
                <Reveal key={card.title} delay={0.08 + index * 0.05}>
                  <div className="editorial-card h-full">
                    <span className="mustard-chip">Use case</span>
                    <h3 className="mt-6 max-w-[11ch] text-[3rem] leading-[0.96] text-[#522717]">
                      {card.title}
                    </h3>
                    <p className="mt-5 text-[1.7rem] leading-[1.65] text-[rgba(82,39,23,0.74)]">
                      {card.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </SectionShell>
      <SectionShell id="best-for">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <Reveal>
            <span className="eyebrow">Who this is best for</span>
            <h2 className="section-title max-w-[8ch]">Best suited to agencies that care about presentation</h2>
            <p className="section-body max-w-[48rem]">
              This is most useful for residential sales agencies, branch teams, agency owners,
              and marketing leads who want a more modern way to market selected properties,
              support vendor presentations, and create stronger visual content without defaulting
              to a full production workflow every time.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="muted-panel p-6 sm:p-8">
                <p className="text-[1.2rem] font-semibold uppercase tracking-[0.18em] text-[#8a4b30]">
                  Best fit
                </p>
                <ul className="mt-5 grid gap-4">
                  {bestFitBullets.map((item) => (
                    <li key={item} className="flex gap-3 text-[1.65rem] leading-[1.55] text-[#522717]">
                      <Check className="mt-1 h-5 w-5 shrink-0 text-[#994729]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="editorial-panel overflow-hidden p-4">
                <Image
                  src="/media/demo-listing-poster.svg"
                  alt="Editorial property collage"
                  width={1280}
                  height={900}
                  className="h-full w-full rounded-[2.3rem] object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </SectionShell>

      <SectionShell id="service-modes">
        <Reveal>
          <span className="eyebrow">Two clear service modes</span>
          <h2 className="section-title max-w-[8ch]">Two service modes. Kept deliberately separate.</h2>
          <p className="section-body max-w-[64rem]">
            To protect trust and keep the output commercially usable, we separate standard listing
            presentation from concept-led transformation work.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-6 xl:grid-cols-2">
          {serviceModes.map((mode, index) => (
            <Reveal key={mode.title} delay={index * 0.06}>
              <article className="editorial-panel overflow-hidden">
                <div className="grid gap-0 lg:grid-cols-[1fr_28rem]">
                  <div className="p-6 sm:p-8 lg:p-10">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="mustard-chip">{mode.title}</span>
                      <span className="ghost-chip">{mode.label}</span>
                    </div>
                    <p className="mt-6 max-w-[48rem] text-[1.8rem] leading-[1.68] text-[rgba(82,39,23,0.76)]">
                      {mode.intro}
                    </p>
                    <div className="mt-8 grid gap-8 sm:grid-cols-2">
                      <div>
                        <p className="text-[1.2rem] font-semibold uppercase tracking-[0.18em] text-[#8a4b30]">
                          Best for
                        </p>
                        <ul className="mt-4 grid gap-3">
                          {mode.bestFor.map((item) => (
                            <li key={item} className="flex gap-3 text-[1.55rem] leading-[1.5] text-[#522717]">
                              <Check className="mt-1 h-4 w-4 shrink-0 text-[#994729]" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-[1.2rem] font-semibold uppercase tracking-[0.18em] text-[#8a4b30]">
                          What it does
                        </p>
                        <ul className="mt-4 grid gap-3">
                          {mode.whatItDoes.map((item) => (
                            <li key={item} className="flex gap-3 text-[1.55rem] leading-[1.5] text-[#522717]">
                              <Sparkles className="mt-1 h-4 w-4 shrink-0 text-[#994729]" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="mt-8 muted-panel p-5">
                      <p className="text-[1.55rem] leading-[1.6] text-[#522717]">{mode.note}</p>
                    </div>
                    <Link href={mode.href} className="text-link mt-7">
                      {mode.cta}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                  <div className="bg-[#efe5dc] p-4">
                    <Image
                      src={mode.image}
                      alt={mode.imageAlt}
                      width={720}
                      height={900}
                      className="h-full w-full rounded-[2.3rem] object-cover"
                    />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </SectionShell>

      <SectionShell id="why-pay">
        <div className="grid gap-10 xl:grid-cols-[0.84fr_1.16fr]">
          <Reveal>
            <span className="eyebrow">Why this is worth paying for</span>
            <h2 className="section-title max-w-[8ch]">
              Why agencies pay for this instead of settling for static photos
            </h2>
            <div className="section-body space-y-5 max-w-[50rem]">
              <p>
                Because there is a real gap between doing nothing and organising a full traditional
                video production. Static photos are often not enough. A full shoot is not always
                justified. Generic outsourced edits rarely feel premium.
              </p>
              <p>
                This gives agencies a middle-ground asset that is faster to commission, easier to
                brief, and stronger in presentation than the standard fallback.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-4">
            {comparisons.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <div className="editorial-card grid gap-4 lg:grid-cols-[22rem_1fr] lg:items-start">
                  <p className="text-[1.2rem] font-semibold uppercase tracking-[0.18em] text-[#8a4b30]">
                    {item.title}
                  </p>
                  <p className="text-[2.1rem] leading-[1.35] text-[#522717]">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell id="what-you-get">
        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <Reveal>
            <span className="eyebrow">What you get</span>
            <h2 className="section-title max-w-[6ch]">What you get</h2>
            <p className="section-body">Exact deliverables can vary by brief and service mode.</p>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="editorial-panel p-6 sm:p-8 lg:p-10">
              <ul className="grid gap-4">
                {whatYouGet.map((item) => (
                  <li key={item} className="flex gap-4 text-[1.7rem] leading-[1.6] text-[#522717]">
                    <FileVideo className="mt-1 h-5 w-5 shrink-0 text-[#994729]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </SectionShell>

      <SectionShell id="fit-check">
        <Reveal>
          <span className="eyebrow">Best fit / less suitable</span>
          <h2 className="section-title max-w-[7ch]">Where this works best</h2>
        </Reveal>
        <div className="mt-10 grid gap-6 xl:grid-cols-2">
          <Reveal>
            <div className="editorial-card h-full">
              <div className="flex items-center gap-3">
                <span className="mustard-chip">Best fit</span>
              </div>
              <ul className="mt-6 grid gap-4">
                {worksBest.map((item) => (
                  <li key={item} className="flex gap-3 text-[1.65rem] leading-[1.58] text-[#522717]">
                    <Check className="mt-1 h-5 w-5 shrink-0 text-[#994729]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="editorial-card h-full bg-[#f4eae6]">
              <div className="flex items-center gap-3">
                <span className="ghost-chip bg-[#f8f2ed]">Less suitable</span>
              </div>
              <ul className="mt-6 grid gap-4">
                {lessSuitable.map((item) => (
                  <li key={item} className="flex gap-3 text-[1.65rem] leading-[1.58] text-[#522717]">
                    <X className="mt-1 h-5 w-5 shrink-0 text-[#994729]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.12}>
          <p className="mt-6 text-[1.3rem] font-semibold uppercase tracking-[0.18em] text-[#8a4b30]">
            If a property is not well suited to this format, we would rather say so.
          </p>
        </Reveal>
      </SectionShell>

      <SectionShell id="how-it-works">
        <div className="grid gap-10 xl:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <span className="eyebrow">How it works</span>
            <h2 className="section-title max-w-[6ch]">How it works</h2>
            <p className="section-body max-w-[44rem]">
              Simple to brief. Selective in use. Built for practical agency workflows.
            </p>
          </Reveal>
          <div className="grid gap-4 lg:grid-cols-3">
            {[
              {
                step: "Step 1",
                title: "Send the property details",
                body: "Share the listing link, the photos, and the intended use case. We assess whether the best fit is a standard listing video or a concept-led potential video.",
              },
              {
                step: "Step 2",
                title: "We create the asset",
                body: "We build the video using the supplied imagery, your branding, and the right presentation format for the property.",
              },
              {
                step: "Step 3",
                title: "Use it where it matters",
                body: "Publish it across your listing workflow, social channels, website, or vendor-facing materials.",
              },
            ].map((item, index) => (
              <Reveal key={item.step} delay={index * 0.05}>
                <div className="muted-panel h-full p-6 sm:p-7">
                  <p className="text-[1.2rem] font-semibold uppercase tracking-[0.18em] text-[#8a4b30]">
                    {item.step}
                  </p>
                  <h3 className="mt-5 text-[3rem] leading-[0.96] text-[#522717]">{item.title}</h3>
                  <p className="mt-5 text-[1.65rem] leading-[1.65] text-[rgba(82,39,23,0.74)]">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell id="trust">
        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr]">
          <Reveal>
            <span className="eyebrow">Trust and transparency</span>
            <h2 className="section-title max-w-[6ch]">Built to be used professionally</h2>
            <div className="section-body max-w-[50rem] space-y-5">
              <p>
                Where a brief includes concept-led or AI-generated transformation visuals, we
                recommend presenting that work clearly as illustrative. Standard listing videos and
                concept-led potential videos are handled differently for that reason.
              </p>
              <p className="text-[#522717]">
                Prefer a more conservative brief? We can keep the work entirely within standard
                listing presentation.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="editorial-panel p-6 sm:p-8 lg:p-10">
              <div className="muted-panel p-6">
                <p className="text-[1.2rem] font-semibold uppercase tracking-[0.18em] text-[#8a4b30]">
                  Compliance wording
                </p>
                <p className="mt-4 text-[1.65rem] leading-[1.65] text-[#522717]">
                  Some projects may include illustrative concept visuals created from supplied
                  property imagery. Where relevant, those visuals should be presented clearly as
                  illustrative.
                </p>
                <p className="mt-4 text-[1.65rem] leading-[1.65] text-[#522717]">
                  Concept-led videos are intended to show possible design or renovation potential.
                  They do not represent the property&apos;s current condition unless expressly stated.
                </p>
              </div>
              <ul className="mt-8 grid gap-4">
                {trustPoints.map((item) => (
                  <li key={item} className="flex gap-3 text-[1.65rem] leading-[1.58] text-[#522717]">
                    <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-[#994729]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </SectionShell>
      <SectionShell id="pricing">
        <Reveal>
          <span className="eyebrow">Pricing</span>
          <h2 className="section-title max-w-[7ch]">Pilot pricing for agencies testing the format</h2>
          <p className="section-body max-w-[62rem]">
            We currently offer simple starting-point pricing for one-off projects and early agency
            trials. Final pricing depends on the type of property, the complexity of the brief, and
            whether the output is standard listing presentation or concept-led work.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-5 xl:grid-cols-3">
          {pricingCards.map((card, index) => (
            <Reveal key={card.title} delay={index * 0.05}>
              <article className={["editorial-card flex h-full flex-col", card.badge ? "bg-[#fff2d2]" : ""].join(" ")}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="max-w-[11ch] text-[3rem] leading-[0.96] text-[#522717]">{card.title}</h3>
                    <p className="mt-5 text-[3.8rem] leading-none text-[#522717]">{card.price}</p>
                  </div>
                  {card.badge ? <span className="mustard-chip">{card.badge}</span> : null}
                </div>
                <p className="mt-6 text-[1.7rem] leading-[1.62] text-[rgba(82,39,23,0.74)]">
                  {card.description}
                </p>
                <p className="mt-6 text-[1.2rem] font-semibold uppercase tracking-[0.18em] text-[#8a4b30]">
                  Good for
                </p>
                <ul className="mt-4 grid gap-3">
                  {card.bullets.map((item) => (
                    <li key={item} className="flex gap-3 text-[1.55rem] leading-[1.5] text-[#522717]">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-[#994729]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-2">
                  <Link href={card.href} className={card.badge ? "primary-button" : "secondary-button"}>
                    {card.cta}
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.12}>
          <p className="mt-6 text-[1.4rem] uppercase tracking-[0.16em] text-[rgba(82,39,23,0.62)]">
            Need something for multiple branches, recurring monthly use, or a more bespoke brief?
            We can scope that directly.
          </p>
        </Reveal>
      </SectionShell>

      <SectionShell id="faq">
        <div className="grid gap-10 xl:grid-cols-[0.84fr_1.16fr]">
          <Reveal>
            <span className="eyebrow">Frequently asked questions</span>
            <h2 className="section-title max-w-[6ch]">Frequently asked questions</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <FAQAccordion items={faqs} />
          </Reveal>
        </div>
      </SectionShell>

      <SectionShell id="contact">
        <div className="grid gap-8 xl:grid-cols-[1.04fr_0.96fr]">
          <Reveal>
            <div className="editorial-panel p-6 sm:p-8 lg:p-10">
              <span className="eyebrow">Contact form</span>
              <h2 className="mt-6 text-[4.2rem] leading-[0.94] text-[#522717] sm:text-[5.4rem] lg:text-[6.6rem]">
                Tell us what you want to test
              </h2>
              <p className="mt-6 max-w-[52rem] text-[1.8rem] leading-[1.68] text-[rgba(82,39,23,0.74)]">
                A single listing is enough to evaluate whether this fits your branch, team, or
                agency group.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <aside id="book-call" className="muted-panel h-full p-6 sm:p-8 lg:p-10">
              <span className="eyebrow">Booking widget</span>
              <h2 className="mt-6 text-[4rem] leading-[0.94] text-[#522717] sm:text-[5rem] lg:text-[5.8rem]">
                Book a short discovery call
              </h2>
              <p className="mt-6 max-w-[44rem] text-[1.8rem] leading-[1.68] text-[rgba(82,39,23,0.74)]">
                We&apos;ll discuss the type of property, the intended use case, and whether a
                standard listing video or concept-led potential video is the better fit.
              </p>
              <div className="mt-8 rounded-[2.4rem] border border-dashed border-[#ccb8ab] bg-[#fbf7f2] p-5">
                <div className="grid min-h-[34rem] place-items-center rounded-[2rem] border border-[#e4d5ca] bg-[#fffdfa] px-6 text-center">
                  <div>
                    <p className="text-[2.1rem] leading-[1.15] text-[#522717]">Calendar embed placeholder</p>
                    <p className="mt-4 max-w-[34rem] text-[1.6rem] leading-[1.65] text-[rgba(82,39,23,0.72)]">
                      Add your Calendly, HubSpot, or preferred booking widget here so this panel
                      can capture discovery calls directly.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-7 flex flex-wrap gap-4">
                <Link href="#contact" className="secondary-button">
                  Request Pricing
                </Link>
                <Link href="#top" className="text-link">
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </aside>
          </Reveal>
        </div>
      </SectionShell>

      <section className="site-container pb-24 pt-6 sm:pb-28 lg:pb-32">
        <Reveal>
          <div className="hero-shell rounded-[3.4rem] pb-10 pt-10 sm:px-8 lg:px-12 lg:pb-12 lg:pt-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <span className="eyebrow text-[#522717]">Final CTA</span>
                <h2 className="mt-6 max-w-[10ch] font-serif text-[4.6rem] leading-[0.92] text-[#fff4dd] sm:text-[6rem] lg:text-[7.2rem]">
                  Want to see if this fits your agency?
                </h2>
                <p className="mt-6 max-w-[58rem] text-[1.8rem] leading-[1.68] text-[rgba(82,39,23,0.82)]">
                  Book a short call or request pricing and we&apos;ll help you decide whether this
                  format is right for the types of properties you market, the vendors you pitch to,
                  and the content workflow you already use.
                </p>
                <p className="mt-5 text-[1.3rem] font-semibold uppercase tracking-[0.18em] text-[rgba(82,39,23,0.7)]">
                  Suitable for one-off trials, selected listings, and early agency partnerships.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
                <Link href="#book-call" className="primary-button">
                  Book a Call
                </Link>
                <Link href="#contact" className="secondary-button border-[#7d4327] text-[#522717] hover:bg-[#ffe7bb]">
                  Request Pricing
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <footer className="site-container pb-10">
        <div className="muted-panel overflow-hidden px-6 py-8 sm:px-8 lg:px-12 lg:py-12">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="font-serif text-[6rem] leading-none text-[#f5a71d] sm:text-[8rem] lg:text-[9.5rem]">
                motion
              </p>
              <p className="mt-4 max-w-[54rem] text-[1.7rem] leading-[1.68] text-[rgba(82,39,23,0.76)]">
                Property Motion Studio creates premium property video assets for Irish estate
                agencies using supplied property imagery. Where concept-led visuals are used, we
                recommend clear disclosure-based presentation.
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <p className="text-[1.2rem] font-semibold uppercase tracking-[0.18em] text-[#8a4b30]">
                  Navigate
                </p>
                <div className="mt-5 grid gap-3">
                  {[
                    { href: "#how-it-works", label: "How It Works" },
                    { href: "#pricing", label: "Pricing" },
                    { href: "#faq", label: "FAQ" },
                    { href: "#contact", label: "Contact" },
                  ].map((item) => (
                    <Link key={item.href} href={item.href} className="text-[1.55rem] text-[#522717] transition-colors hover:text-[#994729]">
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-[1.2rem] font-semibold uppercase tracking-[0.18em] text-[#8a4b30]">
                  Action
                </p>
                <div className="mt-5 flex flex-col items-start gap-4">
                  <Link href="#book-call" className="primary-button">
                    Book a Call
                  </Link>
                  <span className="text-[1.4rem] uppercase tracking-[0.16em] text-[rgba(82,39,23,0.62)]">
                    propertymotionstudio.ie
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

function SectionShell({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) {
  return (
    <section id={id} className="section-shell">
      <div className="site-container">{children}</div>
    </section>
  );
}