import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  Battery,
  Building2,
  CheckCircle2,
  ClipboardList,
  Compass,
  Hammer,
  Lightbulb,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  PlugZap,
  Ruler,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  Sun,
  Users,
  Video,
  Wrench,
} from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Gallery } from "@/components/site/Gallery";
import { useReveal } from "@/components/site/useReveal";
import {
  ABOUT_IMAGE,
  CONTACT,
  GALLERY,
  HERO_IMAGE,
  LOGO_DARK,
  LOGO_LIGHT,
  SERVICE_IMAGES,
} from "@/lib/portfolio";

const TITLE =
  "BAM ARCHIPOWER SOLUTION | Electrical, Architectural, Solar & Construction Services";
const DESCRIPTION =
  "BAM ARCHIPOWER SOLUTION provides electrical services, architectural design, solar and inverter systems, and building construction solutions in Oyo State, Nigeria.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "BAM ARCHIPOWER SOLUTION",
          slogan: "Powering Tomorrow, Building Better.",
          description: DESCRIPTION,
          telephone: "+2349168573727",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Shaki West LGA, Ijale Oda",
            addressRegion: "Oyo State",
            addressCountry: "NG",
          },
        }),
      },
    ],
  }),
});

const SERVICES = [
  {
    no: "01",
    key: "Electrical",
    title: "Electrical Services",
    icon: PlugZap,
    image: SERVICE_IMAGES["Electrical"],
    body: "Professional electrical solutions designed for safety, functionality, efficiency, and modern living. From installation and wiring to lighting and electrical systems, we help create spaces that work beautifully and efficiently.",
    points: ["House wiring", "Lighting installation", "Switches & sockets", "Electrical finishing"],
    cta: "Request Electrical Service",
  },
  {
    no: "02",
    key: "Architecture",
    title: "Architectural Design",
    icon: Ruler,
    image: SERVICE_IMAGES["Architecture"],
    body: "Thoughtful architectural design that transforms ideas into functional, attractive, and buildable spaces. We combine creativity and technical thinking to develop designs around the client's vision.",
    points: ["Floor plans", "Elevations & sections", "Roof and site plans", "Design development"],
    cta: "Start Your Design",
  },
  {
    no: "03",
    key: "Solar & Inverter",
    title: "Solar & Inverter Systems",
    icon: Sun,
    image: SERVICE_IMAGES["Solar & Inverter"],
    body: "Smart and dependable renewable-energy solutions designed to provide reliable power while improving energy efficiency and reducing dependence on conventional electricity sources.",
    points: ["System sizing", "Panel & inverter installation", "Battery solutions", "Wiring & protection"],
    cta: "Discuss Solar Solution",
  },
  {
    no: "04",
    key: "Construction",
    title: "Building Construction",
    icon: Hammer,
    image: null,
    body: "Quality-focused building construction from early-stage development through structural and finishing work, with attention to functionality, durability, craftsmanship, and project requirements.",
    points: ["Structural work", "Roofing", "Finishing", "Project requirements"],
    cta: "Discuss Your Building Project",
  },
] as const;

const PROCESS = [
  {
    no: "01",
    title: "Consultation",
    icon: Users,
    body: "We listen to the client's needs, project goals, budget considerations, and expectations.",
  },
  {
    no: "02",
    title: "Planning & Design",
    icon: Compass,
    body: "We develop the appropriate architectural, electrical, energy, or construction approach.",
  },
  {
    no: "03",
    title: "Proposal",
    icon: ClipboardList,
    body: "Present the recommended solution, scope of work, and project requirements.",
  },
  {
    no: "04",
    title: "Execution",
    icon: Wrench,
    body: "The project moves into implementation with attention to quality and detail.",
  },
  {
    no: "05",
    title: "Inspection & Delivery",
    icon: SearchCheck,
    body: "Review the completed work and ensure the project meets the agreed requirements.",
  },
];

const WHY = [
  {
    title: "Quality-First Approach",
    icon: ShieldCheck,
    body: "We focus on delivering work that combines functionality, appearance, reliability, and attention to detail.",
  },
  {
    title: "Practical Solutions",
    icon: Lightbulb,
    body: "We focus on solutions that make sense for the client's actual needs rather than simply recommending unnecessary complexity.",
  },
  {
    title: "Attention to Detail",
    icon: SearchCheck,
    body: "From architectural concepts to electrical installations and construction finishing, details matter.",
  },
  {
    title: "Integrated Expertise",
    icon: Building2,
    body: "Electrical services, architectural design, renewable energy, and construction are brought together under one professional brand.",
  },
  {
    title: "Client-Centered Service",
    icon: Users,
    body: "We listen carefully to each client's requirements and develop solutions around the project.",
  },
  {
    title: "Building for the Future",
    icon: Sparkles,
    body: "Our approach reflects our motto: Powering Tomorrow, Building Better.",
  },
];

const VIDEO_TOPICS = [
  {
    title: "Architectural Design",
    icon: Ruler,
    body: "How drawings and building plans are developed — from sketches and floor plans to design development.",
  },
  {
    title: "Solar & Inverter",
    icon: Sun,
    body: "Solar panel installation, inverter and battery set-up, system wiring and how solar delivers power.",
  },
  {
    title: "Electrical Services",
    icon: PlugZap,
    body: "House wiring, lighting installation and fittings, and how good electrical work improves a home.",
  },
  {
    title: "Building Construction",
    icon: Hammer,
    body: "Construction stages on site — structural work, roofing, plastering and finishing.",
  },
];

const TRUST = [
  { title: "Professional Service", icon: ShieldCheck },
  { title: "Quality Workmanship", icon: CheckCircle2 },
  { title: "Innovative Solutions", icon: Lightbulb },
  { title: "Client-Focused Approach", icon: Users },
];

function Index() {
  useReveal();

  return (
    <div className="overflow-x-hidden">
      <Nav />
      <main id="home">
        <Hero />
        <TrustStrip />
        <About />
        <Services />
        <Showcase />
        <Process />
        <Videos />
        <Why />
        <CtaBand />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <MobileBar />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-deep pt-32 pb-28 lg:pt-40 lg:pb-32">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-25"
        style={{ background: "var(--gradient-navy)" }}
      />
      <div
        aria-hidden="true"
        className="absolute -top-32 -right-24 -z-10 size-[32rem] rounded-full bg-gold/10 blur-3xl"
      />
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div className="reveal" data-visible="true">
          <p className="eyebrow">Powering Tomorrow, Building Better.</p>
          <h1 className="mt-5 font-display text-4xl leading-[1.05] font-extrabold text-navy-foreground sm:text-5xl lg:text-6xl">
            BAM ARCHIPOWER
            <span className="block bg-linear-to-r from-gold to-gold-soft bg-clip-text text-transparent">
              SOLUTION
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-navy-foreground/75 sm:text-lg">
            Innovative solutions for modern living and sustainable development. From electrical
            services and architectural design to solar energy systems and building construction,
            BAM ARCHIPOWER SOLUTION brings expertise, creativity, and quality together to turn
            ideas into reality.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#contact" className="btn-base btn-gold">
              Get a Quote <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a
              href={CONTACT.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-base btn-outline-light"
            >
              <MessageCircle className="size-4" aria-hidden="true" /> Chat on WhatsApp
            </a>
          </div>
          <a
            href={CONTACT.phoneHref}
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy-foreground/80 transition-colors hover:text-gold"
          >
            <Phone className="size-4" aria-hidden="true" /> Call {CONTACT.phoneDisplay}
          </a>
        </div>

        <div className="reveal relative" data-visible="true">
          <div className="overflow-hidden rounded-2xl border border-navy-foreground/15 shadow-2xl">
            <img
              src={HERO_IMAGE}
              alt="Rooftop solar panel installation carried out by BAM Archipower Solution"
              className="aspect-4/3 w-full object-cover"
              width={1024}
              height={768}
              fetchPriority="high"
            />
          </div>
          <div className="absolute -bottom-6 -left-4 hidden items-center gap-3 rounded-xl border border-navy-foreground/15 bg-navy px-5 py-4 shadow-xl sm:flex">
            <img
              src={LOGO_DARK}
              alt=""
              aria-hidden="true"
              className="size-11 rounded-full object-cover"
            />
            <span className="text-xs leading-tight font-semibold tracking-wide text-navy-foreground/85">
              Solar • Electrical
              <br />
              Architecture • Construction
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustStrip() {
  return (
    <section className="border-b border-border bg-surface">
      <div className="mx-auto grid max-w-7xl gap-6 px-5 py-10 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {TRUST.map((t) => (
          <div key={t.title} className="reveal flex items-center gap-3">
            <span className="grid size-11 shrink-0 place-items-center rounded-full bg-navy/5 text-navy">
              <t.icon className="size-5" aria-hidden="true" />
            </span>
            <span className="text-sm font-bold tracking-wide text-navy uppercase">{t.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function SectionHead({
  eyebrow,
  title,
  intro,
  light,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  light?: boolean;
}) {
  return (
    <div className="reveal mx-auto mb-14 max-w-3xl text-center">
      <p className="eyebrow">{eyebrow}</p>
      <h2
        className={`mt-4 font-display text-3xl font-extrabold sm:text-4xl ${
          light ? "text-navy-foreground" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`mt-4 text-base leading-relaxed ${
            light ? "text-navy-foreground/70" : "text-muted-foreground"
          }`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}

function About() {
  return (
    <section id="about" className="py-24 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
        <div className="reveal relative">
          <img
            src={ABOUT_IMAGE}
            alt="Physical architectural model of a proposed central mosque produced by BAM Archipower Solution"
            loading="lazy"
            className="aspect-4/3 w-full rounded-2xl object-cover shadow-[var(--shadow-lift)]"
          />
          <img
            src={LOGO_LIGHT}
            alt="BAM Archipower Solution logo"
            loading="lazy"
            className="absolute -right-3 -bottom-8 hidden size-32 rounded-2xl border border-border bg-card object-contain p-2 shadow-[var(--shadow-card)] sm:block"
          />
        </div>
        <div className="reveal">
          <p className="eyebrow">About BAM Archipower Solution</p>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-navy sm:text-4xl">
            Built on skill. Driven by quality. Focused on the future.
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              BAM ARCHIPOWER SOLUTION is built around a passion for creating better spaces,
              reliable power solutions, practical architectural designs, and quality construction.
            </p>
            <p>
              Our approach combines technical thinking, creativity, attention to detail, and an
              understanding of what clients need from a modern project.
            </p>
            <p>
              Whether the goal is to design a building, improve electrical systems, create a
              dependable solar and inverter solution, or construct a quality building, we approach
              every project with professionalism and a commitment to delivering practical results.
            </p>
            <p>
              Our motto, <strong className="text-navy">"Powering Tomorrow, Building Better"</strong>
              , represents our vision: to contribute to a future where buildings are better
              designed, better powered, more efficient, and built to last.
            </p>
          </div>
          <a href="#contact" className="btn-base btn-navy mt-9">
            Discuss Your Project <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="bg-surface py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHead
          eyebrow="What we do"
          title="Our Services"
          intro="From concept to completion, we provide solutions designed around your project."
        />
        <div className="grid gap-7 lg:grid-cols-2">
          {SERVICES.map((s) => (
            <article key={s.no} className="reveal card-elegant overflow-hidden">
              {s.image ? (
                <div className="aspect-16/10 overflow-hidden">
                  <img
                    src={s.image}
                    alt={`${s.title} work by BAM Archipower Solution`}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              ) : (
                <div
                  className="grid aspect-16/10 place-items-center"
                  style={{ background: "var(--gradient-navy)" }}
                >
                  <s.icon className="size-16 text-gold/70" aria-hidden="true" />
                </div>
              )}
              <div className="p-7 sm:p-9">
                <div className="flex items-center gap-3">
                  <span className="font-display text-sm font-extrabold text-gold">
                    Service {s.no}
                  </span>
                  <span className="h-px flex-1 bg-border" />
                  <s.icon className="size-5 text-navy" aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-display text-2xl font-bold text-navy">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                <ul className="mt-5 grid grid-cols-2 gap-2">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-xs font-semibold text-navy">
                      <CheckCircle2 className="size-4 shrink-0 text-gold" aria-hidden="true" />
                      {p}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="btn-base btn-outline-dark mt-7 w-full">
                  {s.cta}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Showcase() {
  return (
    <section id="projects" className="py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHead
          eyebrow="Our work"
          title="Project Gallery"
          intro="Photographs from completed and ongoing work across electrical installation, solar systems and architectural design. Select a category or open any image to view it larger."
        />
        <div className="reveal">
          <Gallery />
        </div>
        <p className="mt-8 text-center text-xs text-muted-foreground">
          {GALLERY.length} project photographs shown. Building construction photographs will be
          added as they are supplied.
        </p>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="bg-navy py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHead
          light
          eyebrow="How we work"
          title="From Idea to Reality"
          intro="A clear, structured path from the first conversation to a completed project."
        />
        <ol className="relative grid gap-6 lg:grid-cols-5">
          {PROCESS.map((p) => (
            <li
              key={p.no}
              className="reveal rounded-xl border border-navy-foreground/12 bg-navy-deep/50 p-7 transition-colors hover:border-gold/50"
            >
              <span className="grid size-12 place-items-center rounded-full bg-gold/12 text-gold">
                <p.icon className="size-5" aria-hidden="true" />
              </span>
              <p className="mt-5 font-display text-xs font-extrabold tracking-[0.2em] text-gold">
                {p.no}
              </p>
              <h3 className="mt-2 font-display text-lg font-bold text-navy-foreground">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-foreground/65">{p.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Videos() {
  return (
    <section id="videos" className="bg-surface py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHead
          eyebrow="Videos"
          title="See How the Work Comes to Life"
          intro="Short videos covering each area of our work. Video content is being prepared for the categories below."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VIDEO_TOPICS.map((v) => (
            <article key={v.title} className="reveal card-elegant overflow-hidden">
              <div
                className="grid aspect-video place-items-center"
                style={{ background: "var(--gradient-navy)" }}
              >
                <span className="grid size-14 place-items-center rounded-full border border-gold/40 bg-navy-deep/60">
                  <Video className="size-6 text-gold" aria-hidden="true" />
                </span>
              </div>
              <div className="p-6">
                <p className="text-[0.65rem] font-bold tracking-[0.2em] text-gold uppercase">
                  Category
                </p>
                <h3 className="mt-2 font-display text-lg font-bold text-navy">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-muted-foreground">
          No videos have been uploaded yet — send your clips or video links and they will appear in
          these categories.
        </p>
      </div>
    </section>
  );
}

function Why() {
  return (
    <section id="why" className="py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHead
          eyebrow="The difference"
          title="Why Choose BAM Archipower Solution?"
          intro="Integrated technical skill, careful planning, and neat, practical delivery."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {WHY.map((w) => (
            <article key={w.title} className="reveal card-elegant p-8">
              <span className="grid size-12 place-items-center rounded-xl bg-navy text-gold">
                <w.icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-6 font-display text-lg font-bold text-navy">{w.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{w.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaBand() {
  return (
    <section
      className="relative isolate overflow-hidden py-24"
      style={{ background: "var(--gradient-navy)" }}
    >
      <div
        aria-hidden="true"
        className="absolute -top-24 left-1/2 -z-10 size-[36rem] -translate-x-1/2 rounded-full bg-gold/10 blur-3xl"
      />
      <div className="reveal mx-auto max-w-3xl px-5 text-center">
        <h2 className="font-display text-3xl font-extrabold text-navy-foreground sm:text-4xl">
          Have a Project in Mind?
        </h2>
        <p className="mt-4 text-base text-navy-foreground/75">
          Let's turn your idea into a practical, beautiful, reliable solution.
        </p>
        <p className="eyebrow mt-6">Powering Tomorrow. Building Better.</p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <a href="#contact" className="btn-base btn-gold">
            Request a Quote
          </a>
          <a
            href={CONTACT.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-base btn-outline-light"
          >
            <MessageCircle className="size-4" aria-hidden="true" /> Chat on WhatsApp
          </a>
          <a href={CONTACT.phoneHref} className="btn-base btn-outline-light">
            <Phone className="size-4" aria-hidden="true" /> Call Now
          </a>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const lines = [
      `Name: ${data.get("name")}`,
      `Phone: ${data.get("phone")}`,
      `Email: ${data.get("email")}`,
      `Service: ${data.get("service")}`,
      `Location: ${data.get("location")}`,
      `Preferred contact: ${data.get("preferred")}`,
      "",
      `${data.get("details")}`,
    ].join("\n");
    window.open(`https://wa.me/2349029715719?text=${encodeURIComponent(lines)}`, "_blank");
    setSent(true);
  }

  const field =
    "mt-2 w-full rounded-lg border border-input bg-card px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-gold focus:ring-2 focus:ring-gold/25";
  const label = "block text-xs font-bold tracking-[0.12em] text-navy uppercase";

  return (
    <section id="contact" className="bg-surface py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHead
          eyebrow="Get in touch"
          title="Contact BAM Archipower Solution"
          intro="Tell us about your project and we will get back to you with the next steps."
        />
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="reveal space-y-4">
            <a
              href={CONTACT.phoneHref}
              className="card-elegant flex items-start gap-4 p-6 hover:no-underline"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-full bg-navy text-gold">
                <Phone className="size-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-xs font-bold tracking-[0.15em] text-muted-foreground uppercase">
                  Phone calls
                </span>
                <span className="mt-1 block font-display text-lg font-bold text-navy">
                  {CONTACT.phoneDisplay}
                </span>
              </span>
            </a>
            <a
              href={CONTACT.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="card-elegant flex items-start gap-4 p-6"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-full bg-navy text-gold">
                <MessageCircle className="size-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-xs font-bold tracking-[0.15em] text-muted-foreground uppercase">
                  WhatsApp
                </span>
                <span className="mt-1 block font-display text-lg font-bold text-navy">
                  {CONTACT.whatsappDisplay}
                </span>
              </span>
            </a>
            <div className="card-elegant flex items-start gap-4 p-6">
              <span className="grid size-11 shrink-0 place-items-center rounded-full bg-navy text-gold">
                <MapPin className="size-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-xs font-bold tracking-[0.15em] text-muted-foreground uppercase">
                  Location
                </span>
                <span className="mt-1 block text-sm font-semibold text-navy">
                  {CONTACT.location}
                </span>
              </span>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <p className="flex items-center gap-2 text-xs font-bold tracking-[0.15em] text-navy uppercase">
                <Battery className="size-4 text-gold" aria-hidden="true" /> Services
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Electrical services · Architectural design · Solar &amp; inverter systems · Building
                construction
              </p>
            </div>
          </div>

          <form onSubmit={onSubmit} className="reveal card-elegant p-7 sm:p-9">
            <h3 className="font-display text-xl font-bold text-navy">Project Enquiry</h3>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div>
                <label className={label} htmlFor="name">
                  Full Name
                </label>
                <input id="name" name="name" required maxLength={100} className={field} />
              </div>
              <div>
                <label className={label} htmlFor="phone">
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  maxLength={30}
                  className={field}
                />
              </div>
              <div>
                <label className={label} htmlFor="email">
                  Email
                </label>
                <input id="email" name="email" type="email" maxLength={255} className={field} />
              </div>
              <div>
                <label className={label} htmlFor="service">
                  Service Required
                </label>
                <select id="service" name="service" required className={field} defaultValue="">
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option>Electrical Services</option>
                  <option>Architectural Design</option>
                  <option>Solar &amp; Inverter Systems</option>
                  <option>Building Construction</option>
                  <option>Multiple Services</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className={label} htmlFor="location">
                  Project Location
                </label>
                <input id="location" name="location" maxLength={120} className={field} />
              </div>
              <div>
                <label className={label} htmlFor="preferred">
                  Preferred Contact Method
                </label>
                <select id="preferred" name="preferred" className={field} defaultValue="WhatsApp">
                  <option>WhatsApp</option>
                  <option>Phone call</option>
                  <option>Email</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className={label} htmlFor="details">
                  Project Description
                </label>
                <textarea
                  id="details"
                  name="details"
                  rows={5}
                  maxLength={1500}
                  required
                  className={field}
                />
              </div>
            </div>
            <button type="submit" className="btn-base btn-gold mt-7 w-full">
              Request a Quote
            </button>
            <p className="mt-4 flex items-start gap-2 text-xs leading-relaxed text-muted-foreground">
              <Mail className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              {sent
                ? "Your details were opened in WhatsApp — press send there to deliver your enquiry."
                : "This form opens WhatsApp with your details filled in so you can send the enquiry directly. Automatic email delivery can be added later."}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Videos", href: "#videos" },
    { label: "Contact", href: "#contact" },
  ];
  return (
    <footer className="bg-navy-deep pt-16 pb-28 lg:pb-16">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={LOGO_DARK}
              alt="BAM Archipower Solution logo"
              loading="lazy"
              className="size-14 rounded-full object-cover ring-1 ring-gold/30"
            />
            <span>
              <span className="block font-display text-base font-extrabold text-navy-foreground">
                BAM ARCHIPOWER SOLUTION
              </span>
              <span className="eyebrow">Powering Tomorrow, Building Better.</span>
            </span>
          </div>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-navy-foreground/60">
            Electrical services, architectural design, solar &amp; inverter systems, and building
            construction solutions.
          </p>
          <a
            href={CONTACT.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-gold/40 px-5 py-3 text-xs font-bold tracking-[0.08em] text-gold uppercase transition-colors hover:bg-gold/10"
          >
            <MessageCircle className="size-4" aria-hidden="true" /> WhatsApp us
          </a>
        </div>

        <nav aria-label="Footer">
          <h3 className="font-display text-sm font-bold tracking-[0.15em] text-navy-foreground uppercase">
            Navigate
          </h3>
          <ul className="mt-5 space-y-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-navy-foreground/65 transition-colors hover:text-gold"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="font-display text-sm font-bold tracking-[0.15em] text-navy-foreground uppercase">
            Contact
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-navy-foreground/65">
            <li>{CONTACT.location}</li>
            <li>
              <a href={CONTACT.phoneHref} className="transition-colors hover:text-gold">
                Call: {CONTACT.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={CONTACT.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-gold"
              >
                WhatsApp: {CONTACT.whatsappDisplay}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-7xl border-t border-navy-foreground/10 px-5 pt-6 lg:px-8">
        <p className="text-center text-xs text-navy-foreground/45">
          © 2026 BAM ARCHIPOWER SOLUTION. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={CONTACT.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with BAM Archipower Solution on WhatsApp"
      className="fixed right-5 bottom-24 z-60 grid size-14 place-items-center rounded-full bg-[#25D366] shadow-[0_14px_34px_-10px_rgba(0,0,0,0.5)] transition-transform hover:scale-105 lg:bottom-8"
    >
      <MessageCircle className="size-7 text-white" aria-hidden="true" />
    </a>
  );
}

function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-55 grid grid-cols-3 border-t border-navy-foreground/10 bg-navy-deep/95 backdrop-blur lg:hidden">
      <a
        href={CONTACT.phoneHref}
        className="flex items-center justify-center gap-2 py-4 text-xs font-bold tracking-wide text-navy-foreground uppercase"
      >
        <Phone className="size-4" aria-hidden="true" /> Call
      </a>
      <a
        href={CONTACT.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 border-x border-navy-foreground/10 py-4 text-xs font-bold tracking-wide text-navy-foreground uppercase"
      >
        <MessageCircle className="size-4" aria-hidden="true" /> WhatsApp
      </a>
      <a
        href="#contact"
        className="flex items-center justify-center gap-2 bg-gold py-4 text-xs font-bold tracking-wide text-accent-foreground uppercase"
      >
        Get a Quote
      </a>
    </div>
  );
}
