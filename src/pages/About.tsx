import { Mail, MapPin } from "lucide-react"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { Link } from "react-router"

import Container from "@/components/Container"
import Eyebrow from "@/components/Eyebrow"

type CvEntry = {
  period: string
  location: string
  title: string
  org: string
  orgNote?: string
  blurb?: string
  bullets?: string[]
  tags?: string[]
}

const experience: CvEntry[] = [
  {
    period: "Jun 2025 — Present",
    location: "East Lansing, MI",
    title: "Software Engineer",
    org: "XmoreAI",
    blurb:
      "Building a multi-agent LLM platform for autonomous security alert triage.",
    bullets: [
      "Develop a multi-agent LLM platform for autonomous security alert triage; built with a FastAPI and Temporal backend, a React frontend, and PostgreSQL/MongoDB, deployed on client infrastructure across AWS and Azure.",
      "Designed the agent’s investigation pipeline over CloudTrail, CloudWatch, and WAF logs, including prompts, reasoning loop, MITRE ATT&CK technique mapping, and SQL queries to accurately separate real threats from false alarms and reduce manual analyst triage.",
      "Built a self-extending workflow system that compiles natural-language descriptions into dynamically-registered workflows with auto-generated input schemas and per-workflow tool bindings, letting non-technical users create new agentic investigations without code changes.",
    ],
    tags: ["FastAPI", "Temporal", "React", "PostgreSQL", "MongoDB", "AWS", "Azure"],
  },
  {
    period: "May 2024 — May 2025",
    location: "East Lansing, MI",
    title: "Research Assistant",
    org: "Michigan State University",
    bullets: [
      "Built Vue 3 survey sites and custom JavaScript browser extensions to support ongoing research studies and automate repetitive lab workflows.",
      "Fine-tuned open-source LLMs to clean and structure web-scraped data into JSON for further analysis.",
    ],
    tags: ["Vue 3", "JavaScript", "LLMs"],
  },
  {
    period: "Summer 2024",
    location: "East Lansing, MI",
    title: "Research Assistant",
    org: "Michigan State University",
    bullets: [
      "Collected and curated large datasets via web scraping with Selenium and BeautifulSoup to support training and fine-tuning a Llama 3 model.",
      "Fine-tuned Llama 3 and built a Retrieval-Augmented Generation (RAG) system over the collected data for security applications.",
    ],
    tags: ["Python", "Selenium", "BeautifulSoup", "Llama 3", "RAG"],
  },
  {
    period: "Summer 2024",
    location: "Ann Arbor, MI",
    title: "Machine Learning Intern",
    org: "Aeroforged",
    bullets: [
      "Designed and implemented a predictive model using an LSTM architecture in PyTorch to project CFD simulation outcomes from historical time-step data.",
      "Ran model training, validation, and iterative tuning, reaching strong predictive accuracy for real-time use.",
    ],
    tags: ["PyTorch", "LSTM"],
  },
  {
    period: "Jan 2023 — May 2024",
    location: "East Lansing, MI",
    title: "Undergraduate Learning Assistant",
    org: "Michigan State University",
    bullets: [
      "Helped students with programming assignments and Python fundamentals by reviewing lecture content and addressing conceptual questions.",
      "Led help-room sessions for over 50 students, focused on problem-solving and debugging.",
    ],
  },
]

const education: CvEntry[] = [
  // {
  //   period: "Aug 2026 — Expected May 2031",
  //   location: "Athens, GA",
  //   title: "Ph.D. in Computer Science",
  //   org: "University of Georgia",
  //   orgNote: "Incoming Fall 2026",
  // },
  {
    period: "Aug 2021 — May 2025",
    location: "East Lansing, MI",
    title: "B.S. Computer Science & Computational Mathematics",
    org: "Michigan State University",
  },
]

const skills: { label: string; items: string[] }[] = [
  {
    label: "Languages",
    items: ["Python", "C++", "TypeScript", "JavaScript", "SQL", "Bash"],
  },
  {
    label: "Tools & Cloud",
    items: [
      "FastAPI",
      "React",
      "PostgreSQL",
      "MongoDB",
      "Docker",
      "AWS",
      "Azure",
      "GCP",
      "PyTorch",
    ],
  },
]

const contacts: {
  icon: React.ComponentType<{ className?: string }>
  label: string
  value: string
  href?: string
}[] = [
  {
    icon: Mail,
    label: "Email",
    value: "leduy2@msu.edu",
    href: "mailto:leduy2@msu.edu",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "github.com/mintypack",
    href: "https://github.com/mintypack",
  },
  {
    icon: FaLinkedinIn,
    label: "LinkedIn",
    value: "in/dle0403",
    href: "https://linkedin.com/in/dle0403",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "East Lansing, MI · ET",
  },
]

function ContactRow({ icon: Icon, label, value, href }: (typeof contacts)[number]) {
  return (
    <div className="flex items-center gap-3.5">
      <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-md bg-muted text-muted-foreground">
        <Icon className="size-4" />
      </span>
      <div>
        <div className="mb-0.5 font-mono text-[10px] uppercase tracking-[0.06em] text-muted-foreground/60">
          {label}
        </div>
        {href ? (
          <a
            href={href}
            className="text-sm text-foreground transition-colors hover:text-primary"
          >
            {value}
          </a>
        ) : (
          <div className="text-sm text-foreground">{value}</div>
        )}
      </div>
    </div>
  )
}

// Shared two-column row for Experience and Education
function Entry({ entry }: { entry: CvEntry }) {
  return (
    <article className="grid gap-3 border-t border-border py-7 first:border-t-0 first:pt-0 last:pb-0 md:grid-cols-[160px_minmax(0,1fr)] md:gap-10">
      <div className="flex flex-col gap-1 font-mono text-[13px] text-muted-foreground">
        <div>{entry.period}</div>
        <div className="text-xs text-muted-foreground/60">{entry.location}</div>
      </div>

      <div>
        <h3 className="text-[19px] font-semibold tracking-[-0.015em]">
          {entry.title}
        </h3>
        <div className="mt-1 text-[15px] text-muted-foreground">
          <span className="font-medium text-foreground">{entry.org}</span>
          {entry.orgNote && <> · {entry.orgNote}</>}
        </div>

        {entry.blurb && (
          <p className="mt-3.5 text-[15px] leading-[1.65] text-muted-foreground">
            {entry.blurb}
          </p>
        )}

        {entry.bullets && (
          <ul className="mt-3.5 flex flex-col gap-1.5">
            {entry.bullets.map((bullet) => (
              <li
                key={bullet}
                className="relative pl-[18px] text-sm leading-[1.55] text-muted-foreground before:absolute before:left-0 before:top-[9px] before:h-px before:w-1.5 before:bg-muted-foreground/50"
              >
                {bullet}
              </li>
            ))}
          </ul>
        )}

        {entry.tags && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {entry.tags.map((tag) => (
              <span
                key={tag}
                className="inline-block rounded border border-border px-2.5 py-[3px] font-mono text-[11px] text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  )
}

// Eyebrow + heading block shared by every CV section
function SectionHeading({
  num,
  eyebrow,
  title,
}: {
  num: string
  eyebrow: string
  title: string
}) {
  return (
    <div className="mb-10">
      <Eyebrow label={num}>{eyebrow}</Eyebrow>
      <h2 className="mt-2 text-[32px] font-semibold tracking-[-0.025em]">
        {title}
      </h2>
    </div>
  )
}

export default function About() {
  return (
    <>
      <section className="pt-20 pb-14">
        <Container>
          <div className="grid gap-16 md:grid-cols-[minmax(0,1fr)_320px] md:items-start">
            <div>
              <div className="mb-6 flex size-24 items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--primary),color-mix(in_oklab,var(--primary)_60%,#7c3aed))] text-[32px] font-semibold tracking-[-0.02em] text-white shadow-md">
                DL
              </div>
              <h1 className="mb-3 text-[clamp(40px,6vw,64px)] font-semibold leading-[1.05] tracking-[-0.03em]">
                Duy Le
              </h1>
              <p className="mb-7 font-mono text-[13px] uppercase tracking-[0.04em] text-muted-foreground">
                Software Engineer · East Lansing, MI
              </p>
              <p className="max-w-[560px] text-[19px] leading-[1.65]">
                I graduated from Michigan State with a B.S. in Computer Science and Computational Mathematics, and
                now a full-time SWE. Outside of that I tinker with my homelab, lately that's meant getting into
                networking, wiring up the rack and reaching it from anywhere over a VPN.
              </p>
            </div>

            <aside className="flex flex-col gap-3.5 rounded-lg border border-border bg-card p-6">


              {contacts.map((contact) => (
                <ContactRow key={contact.label} {...contact} />
              ))}

              <a
                href="mailto:leduy2@msu.edu"
                className="group mt-2 inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-[15px] font-medium text-primary-foreground transition-colors hover:bg-[color-mix(in_oklab,var(--primary)_88%,black)]"
              >
                Send a message
                <span
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-0.75"
                >
                  →
                </span>
              </a>
            </aside>
          </div>
        </Container>
      </section>

      <section className="border-t border-border py-14">
        <Container>
          <SectionHeading num="01" eyebrow="work" title="Experience" />
          <div className="flex flex-col">
            {experience.map((entry) => (
              <Entry key={entry.title + entry.period} entry={entry} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border py-14">
        <Container>
          <SectionHeading num="02" eyebrow="school" title="Education" />
          <div className="flex flex-col">
            {education.map((entry) => (
              <Entry key={entry.title + entry.period} entry={entry} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border py-14">
        <Container>
          <SectionHeading num="03" eyebrow="tools" title="Skills" />
          <div>
            {skills.map((group) => (
              <div
                key={group.label}
                className="grid gap-3 border-t border-border py-[22px] first:border-t-0 first:pt-0 md:grid-cols-[160px_1fr] md:gap-10"
              >
                <div className="pt-1 font-mono text-xs uppercase tracking-[0.06em] text-muted-foreground">
                  {group.label}
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-border bg-card px-3 py-1.5 text-sm text-foreground transition-colors hover:border-border-strong hover:bg-secondary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border py-14">
        <Container>
          <div className="rounded-lg border border-border bg-card p-12 text-center">
            <h2 className="text-[32px] font-semibold tracking-[-0.025em]">
              Get in touch
            </h2>
            <p className="mx-auto mt-3 max-w-[460px] text-[17px] leading-[1.6] text-muted-foreground">
              Happy to talk about tech stuff :)
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <a
                href="mailto:leduy2@msu.edu"
                className="group inline-flex items-center gap-2 rounded-md bg-primary px-5.5 py-3.5 text-[15px] font-medium text-primary-foreground transition-colors hover:bg-[color-mix(in_oklab,var(--primary)_88%,black)]"
              >
                Say hi
                <span
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-0.75"
                >
                  →
                </span>
              </a>
              <Link
                to="/projects"
                className="inline-flex items-center rounded-md border border-border-strong px-5.5 py-3.5 text-[15px] font-medium text-foreground transition-colors hover:border-foreground hover:bg-secondary"
              >
                See my projects
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
