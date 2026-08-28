import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Bell,
  Check,
  Github,
  Heart,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Search,
  Share2,
  Sparkles,
} from "lucide-react";
import phishguardImg from "@/assets/phishguard.jpg";
import lconnectImg from "@/assets/lconnect.jpg";
import profileImg from "@/assets/profile.jpg";
import { Typewriter } from "@/components/Typewriter";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Siddharth Sharma — AI Engineer & GenAI Developer" },
      {
        name: "description",
        content:
          "AI Engineer building ML-powered applications: phishing detection at 94% accuracy, LAN collaboration platforms, RAG pipelines and agentic AI systems.",
      },
      { property: "og:title", content: "Siddharth Sharma — AI Engineer & GenAI Developer" },
      {
        property: "og:description",
        content:
          "Building the intelligence layer: FastAPI backends, scikit-learn models, LangChain RAG systems and deployed AI products.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const EMAIL = "iamsiddharthsharma48@gmail.com";
const GITHUB = "https://github.com/Siddharth-89-dev";
const LINKEDIN = "https://linkedin.com/in/siddharth-sharma-68102b2a4";
const PHONE = "+91 88585 36920";

const mailtoLink = (subject = "") =>
  `mailto:${EMAIL}${
    subject ? `?subject=${encodeURIComponent(subject)}` : ""
  }`;

const roles = [
  "AI Engineer",
  "GenAI Developer",
  "RAG Pipeline Architect",
  "ML Systems Builder",
  "Agentic AI Explorer",
];

const stats = [
  { label: "Problems solved", value: 200, suffix: "+" },
  { label: "Shipped projects", value: 3, suffix: "+" },
  { label: "Model accuracy", value: 94, suffix: "%" },
  { label: "URLs analyzed", value: 20, suffix: "K+" },
];

const projects = [
  {
    title: "PhishGuard",
    date: "Nov 2025",
    tag: "Machine Learning",
    image: phishguardImg,
    alt: "PhishGuard threat detection dashboard visualizing scanned URLs",
    description:
      "AI-based phishing detection tool that analyzes URLs in real time to catch zero-day threats, with explainable risk scoring served over a REST API.",
    bullets: [
      "Real-time detection web app built on FastAPI",
      "Trained on 20,000+ URLs at 94% accuracy",
      "Explainable risk scoring via REST APIs",
      "Backend deployed on Render",
    ],
    tags: ["Python", "FastAPI", "Scikit-learn", "REST APIs"],
    likes: 128,
    comments: 24,
  },
  {
    title: "LConnect",
    date: "Aug 2025",
    tag: "Systems & Networking",
    image: lconnectImg,
    alt: "LConnect peer-to-peer LAN collaboration interface",
    description:
      "LAN-based chat and collaboration platform for real-time communication without internet dependency — messaging, file sharing and a shared whiteboard over raw sockets.",
    bullets: [
      "Real-time messaging and file sharing over LAN",
      "Private rooms and screen sharing",
      "Collaborative whiteboarding",
      "Peer-to-peer socket architecture",
    ],
    tags: ["Python", "Flask", "Socket Programming"],
    likes: 96,
    comments: 12,
  },
];

const tiers = [
  {
    name: "Say hello",
    price: "Free",
    blurb: "Drop a message about an idea, a bug, or an internship opportunity.",
    perks: ["Reply within 24 hours", "Quick technical feedback", "Portfolio walkthrough"],
    cta: "Send a message",
    href: mailtoLink(),
    featured: false,
  },
  {
    name: "Build together",
    price: "Collab",
    blurb: "ML prototypes, RAG pipelines and FastAPI backends — from notebook to deploy.",
    perks: [
      "Model training & evaluation",
      "RAG / agentic AI architecture",
      "Production API + deployment",
      "Weekly async updates",
    ],
    cta: "Start a project",
    href: mailtoLink("Project collaboration"),
    featured: true,
  },
  {
    name: "Hire full-time",
    price: "Open",
    blurb: "Available for AI/ML engineering roles and internships from 2026.",
    perks: ["Resume on request", "Live technical interview", "Immediate onboarding"],
    cta: "View LinkedIn",
    href: LINKEDIN,
    featured: false,
  },
];

const skillGroups = [
  { label: "Languages", items: ["Python", "Java"] },
  { label: "Backend", items: ["FastAPI", "Flask", "REST APIs", "Socket Programming"] },
  {
    label: "Machine Learning",
    items: ["Scikit-learn", "Supervised Learning", "Classification", "Feature Engineering"],
  },
  { label: "GenAI & Data", items: ["LangChain", "RAG", "XGBoost", "Agentic AI"] },
  { label: "Security", items: ["Phishing Detection", "URL Analysis", "Zero-Day Threats"] },
  { label: "Databases & Deploy", items: ["PostgreSQL", "Render", "Vercel", "Railway", "Git"] },
];

const education = [
  {
    period: "2023 — Present",
    title: "B.Tech, Computer Science (AI & ML)",
    place: "United Institute of Technology, Prayagraj",
    active: true,
  },
  { period: "2023", title: "Intermediate (CBSE)", place: "Central Academy, Prayagraj", active: false },
  { period: "2021", title: "High School (CBSE)", place: "Central Academy, Prayagraj", active: false },
];

const tabs = [
  { label: "Home", href: "#top" },
  { label: "Projects", href: "#work" },
  { label: "Stack", href: "#stack" },
  { label: "About", href: "#about" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top bar */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
          <a href="#top" className="flex items-center gap-2 font-extrabold tracking-tight">
            <span className="grid size-8 place-items-center rounded-full bg-primary text-primary-foreground">
              <Sparkles className="size-4" />
            </span>
            <span className="hidden sm:inline">siddharth</span>
          </a>

          <div className="hidden flex-1 items-center gap-2 rounded-full bg-muted px-4 py-2 text-sm text-muted-foreground md:flex md:max-w-sm">
            <Search className="size-4" />
            <span>Search projects, skills…</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              className="hidden size-10 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground sm:grid"
              aria-label="Notifications"
            >
              <Bell className="size-5" />
            </button>
            <a
              href={mailtoLink()}
              className="rounded-full bg-foreground px-5 py-2.5 text-sm font-bold text-background transition-transform hover:scale-[1.03]"
            >
              Get in touch
            </a>
          </div>
        </div>
      </nav>

      {/* Cover banner */}
      <header id="top" className="scroll-mt-16">
        <div className="banner-mesh relative h-48 w-full md:h-72">
          <div className="dot-grid absolute inset-0 opacity-30" aria-hidden="true" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-5">
          <div className="-mt-16 flex flex-col gap-6 md:-mt-20 md:flex-row md:items-end md:justify-between">
            <div className="flex items-end gap-5">
              <img
                src={profileImg}
                alt="Siddharth Sharma"
                className="size-28 shrink-0 rounded-full border-4 border-background object-cover shadow-lift md:size-36"
                width={144}
                height={144}
              />
              <div className="pb-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                  <span className="size-1.5 rounded-full bg-primary" />
                  Available for work
                </span>
              </div>
            </div>

            <div className="flex gap-2 pb-2">
              <button
                type="button"
                className="grid size-11 place-items-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:text-primary"
                aria-label="Share profile"
              >
                <Share2 className="size-4" />
              </button>
              <a
                href="#membership"
                className="rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-soft transition-transform hover:scale-[1.03]"
              >
                Work with me
              </a>
            </div>
          </div>

          <div className="mt-6 max-w-2xl">
            <h1 className="font-display text-5xl leading-[1.05] md:text-7xl">Siddharth Sharma</h1>
            <p className="mt-4 text-lg text-muted-foreground md:text-xl">
              <Typewriter phrases={roles} /> — building the intelligence layer between neural
              architectures and production-grade systems.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="size-4" /> Prayagraj, India
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Heart className="size-4 text-primary" /> 2 flagship projects
              </span>
            </div>
          </div>

          {/* Tabs */}
          <div className="mt-8 flex gap-1 overflow-x-auto border-b border-border">
            {tabs.map((t, i) => (
              <a
                key={t.label}
                href={t.href}
                className={`whitespace-nowrap border-b-2 px-4 py-3 text-sm font-bold transition-colors ${
                  i === 0
                    ? "border-foreground text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {t.label}
              </a>
            ))}
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-5 pb-24">
        <div className="grid gap-10 pt-10 lg:grid-cols-[1fr_340px]">
          {/* Feed */}
          <div className="min-w-0">
            <Reveal>
              <section
                aria-label="Key numbers"
                className="grid grid-cols-2 gap-3 sm:grid-cols-4"
              >
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl border border-border bg-card p-5 shadow-soft transition-transform hover:-translate-y-0.5"
                  >
                    <div className="text-3xl font-extrabold tracking-tight">
                      <Counter target={s.value} suffix={s.suffix} />
                    </div>
                    <div className="mt-1 text-xs font-medium text-muted-foreground">{s.label}</div>
                  </div>
                ))}
              </section>
            </Reveal>

            <section id="work" className="scroll-mt-20 pt-12">
              <h2 className="font-display text-3xl md:text-4xl">Latest posts</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Deep dives into what I build and how it works.
              </p>

              <div className="mt-6 space-y-6">
                {projects.map((p, i) => (
                  <Reveal key={p.title} delay={i * 120}>
                    <article className="group overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-shadow hover:shadow-lift">
                      <div className="flex items-center gap-3 px-6 pt-6">
                        <img
                          src={profileImg}
                          alt="Siddharth Sharma"
                          className="size-10 rounded-full object-cover"
                          width={40}
                          height={40}
                        />
                        <div className="min-w-0">
                          <div className="text-sm font-bold">Siddharth Sharma</div>
                          <div className="text-xs text-muted-foreground">
                            {p.date} · {p.tag}
                          </div>
                        </div>
                      </div>

                      <div className="mt-5 aspect-[16/9] overflow-hidden bg-muted">
                        <img
                          src={p.image}
                          alt={p.alt}
                          loading="lazy"
                          width={1200}
                          height={675}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                        />
                      </div>

                      <div className="p-6">
                        <h3 className="font-display text-3xl">{p.title}</h3>
                        <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                          {p.description}
                        </p>

                        <ul className="mt-5 space-y-2 text-[15px]">
                          {p.bullets.map((b) => (
                            <li key={b} className="flex gap-3">
                              <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                              <span className="text-muted-foreground">{b}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="mt-5 flex flex-wrap gap-2">
                          {p.tags.map((t) => (
                            <span
                              key={t}
                              className="rounded-full bg-muted px-3 py-1 text-xs font-semibold text-muted-foreground"
                            >
                              {t}
                            </span>
                          ))}
                        </div>

                        <div className="mt-6 flex items-center justify-between border-t border-border pt-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-5">
                            <button
                              type="button"
                              className="inline-flex items-center gap-2 transition-colors hover:text-primary"
                            >
                              <Heart className="size-4" /> {p.likes}
                            </button>
                            <span className="inline-flex items-center gap-2">
                              <MessageCircle className="size-4" /> {p.comments}
                            </span>
                          </div>
                          <a
                            href={GITHUB}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 font-bold text-foreground transition-colors hover:text-primary"
                          >
                            View code <ArrowUpRight className="size-4" />
                          </a>
                        </div>
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
            </section>

            {/* Stack */}
            <section id="stack" className="scroll-mt-20 pt-16">
              <h2 className="font-display text-3xl md:text-4xl">The stack</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {skillGroups.map((g, i) => (
                  <Reveal key={g.label} delay={i * 60}>
                    <div className="h-full rounded-2xl border border-border bg-card p-5 shadow-soft">
                      <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                        {g.label}
                      </h3>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {g.items.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-border px-3 py-1.5 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </section>

            {/* About / education */}
            <section id="about" className="scroll-mt-20 pt-16">
              <h2 className="font-display text-3xl md:text-4xl">About & education</h2>
              <div className="mt-6 space-y-3">
                {education.map((e) => (
                  <div
                    key={e.title}
                    className="flex flex-col gap-1 rounded-2xl border border-border bg-card p-5 shadow-soft sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div>
                      <h3 className="font-bold">{e.title}</h3>
                      <p className="text-sm text-muted-foreground">{e.place}</p>
                    </div>
                    <span
                      className={`w-fit rounded-full px-3 py-1 text-xs font-bold ${
                        e.active
                          ? "bg-primary/10 text-primary"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {e.period}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar — membership tiers */}
          <aside id="membership" className="scroll-mt-20 lg:sticky lg:top-24 lg:self-start">
            <h2 className="font-display text-2xl">Choose how we work</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Pick a lane — I&apos;ll reply from {EMAIL.split("@")[0]}@…
            </p>

            <div className="mt-5 space-y-4">
              {tiers.map((t) => (
                <div
                  key={t.name}
                  className={`relative rounded-3xl border bg-card p-6 shadow-soft transition-shadow hover:shadow-lift ${
                    t.featured ? "border-primary" : "border-border"
                  }`}
                >
                  {t.featured && (
                    <span className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary-foreground">
                      Most popular
                    </span>
                  )}
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-bold">{t.name}</h3>
                    <span className="text-sm font-extrabold text-primary">{t.price}</span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{t.blurb}</p>
                  <ul className="mt-4 space-y-2 text-sm">
                    {t.perks.map((perk) => (
                      <li key={perk} className="flex gap-2">
                        <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                        <span className="text-muted-foreground">{perk}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={t.href}
                    target={t.href.startsWith("http") ? "_blank" : undefined}
                    rel={t.href.startsWith("http") ? "noreferrer" : undefined}
                    className={`mt-5 block rounded-full px-5 py-3 text-center text-sm font-bold transition-transform hover:scale-[1.02] ${
                      t.featured
                        ? "bg-primary text-primary-foreground"
                        : "border border-border bg-background text-foreground"
                    }`}
                  >
                    {t.cta}
                  </a>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-3xl border border-border bg-card p-6 shadow-soft">
              <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Elsewhere
              </h3>
              <div className="mt-4 grid grid-cols-4 gap-2">
                {[
                  { href: GITHUB, icon: Github, label: "GitHub" },
                  { href: LINKEDIN, icon: Linkedin, label: "LinkedIn" },
                  { href: `mailto:${EMAIL}`, icon: Mail, label: "Email" },
                  { href: `tel:${PHONE.replace(/\s/g, "")}`, icon: Phone, label: "Phone" },
                ].map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noreferrer" : undefined}
                    aria-label={label}
                    className="grid aspect-square place-items-center rounded-2xl bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    <Icon className="size-5" />
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </main>

      <footer className="border-t border-border bg-card">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-8 text-sm text-muted-foreground md:flex-row">
          <span>&copy; 2026 Siddharth Sharma</span>
          <a href={`mailto:${EMAIL}`} className="font-medium hover:text-primary">
            {EMAIL}
          </a>
        </div>
      </footer>
    </div>
  );
}
