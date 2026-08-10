import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router"
import type { CSSProperties, ReactNode } from "react"

import Container from "@/components/Container"

const CONES = [
  { top: "14%", left: "6%", dur: "17s", delay: "0s" },
  { top: "64%", left: "14%", dur: "21s", delay: "-4s", scale: 1.4 },
  { top: "22%", left: "82%", dur: "19s", delay: "-8s", scale: 1.2 },
  { top: "74%", left: "88%", dur: "16s", delay: "-2s" },
  { top: "44%", left: "48%", dur: "23s", delay: "-11s", opacity: 0.07, scale: 0.85 },
]

const EXCUSES = [
  "i haven't built this page yet (it's on the todo list, i swear)",
  "deployed to a server i haven't turned on yet",
  "i renamed the folder and now nobody can find it",
  "it's done, just not pushed (laptop's at home)",
  "got 80% through it and started a different project",
  "it lives on a raspberry pi i repurposed for something else",
  "i wrote it in a branch called temp2-final-actually",
  "it was working locally",
  "dns hasn't propagated (it has, i just haven't built it)",
]

// Delay in ms before each terminal line appears
const LINE_DELAYS = [
  400, 450, 120, 120, 200, 500, 650, 250, 200, 550, 350, 200, 600, 300,
]

// Picked once per page load, like the prototype
const EXCUSE = EXCUSES[Math.floor(Math.random() * EXCUSES.length)]

function Prompt({ cmd }: { cmd: string }) {
  return (
    <span className="text-foreground">
      <span className="text-primary">~</span> $ {cmd}
    </span>
  )
}

function Dim({ children }: { children: ReactNode }) {
  return <span className="text-muted-foreground/60">{children}</span>
}

function Cursor() {
  return (
    <span className="ml-0.5 inline-block h-[1.05em] w-2 animate-blink bg-primary align-text-bottom" />
  )
}

// Fake terminal that types out a "diagnosis" of the missing page
function Terminal() {
  const { pathname } = useLocation()
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (count >= LINE_DELAYS.length) return
    const id = setTimeout(() => setCount((c) => c + 1), LINE_DELAYS[count])
    return () => clearTimeout(id)
  }, [count])

  const file = pathname.split("/").pop() || "index.html"

  const lines: ReactNode[] = [
    <Prompt cmd={`curl -sI mintypack.dev${pathname}`} />,
    <span className="text-primary">HTTP/2 404</span>,
    <Dim>server: nginx</Dim>,
    <Dim>content-length: 0</Dim>,
    null,
    <Prompt cmd={`find / -name "${file}"`} />,
    <Dim>searching filesystem...</Dim>,
    <>
      <span className="text-primary">find: 0 results.</span>{" "}
      <Dim>this page hasn't been built yet.</Dim>
    </>,
    null,
    <Prompt cmd="why" />,
    <>
      <span className="text-primary">error:</span> {EXCUSE}
    </>,
    null,
    <Prompt cmd="cd ~ && open ." />,
    <>
      <span className="text-[#2fb14e]">✓</span>{" "}
      <Dim>try the buttons on your left.</Dim>
    </>,
  ]

  return (
    <div
      aria-hidden="true"
      className="overflow-hidden rounded-lg border border-border bg-muted font-mono text-[13.5px] leading-[1.7] shadow-md"
    >
      <div className="flex items-center gap-2 border-b border-border bg-accent px-4 py-3">
        <span className="flex gap-1.75">
          <i className="size-2.75 rounded-full bg-[#e6452f]" />
          <i className="size-2.75 rounded-full bg-[#e0a92f]" />
          <i className="size-2.75 rounded-full bg-[#2fb14e]" />
        </span>
        <span className="ml-1.5 text-xs text-muted-foreground/60">
          zoe@homelab: ~
        </span>
      </div>
      <div className="min-h-60 px-5 pt-5 pb-6 text-muted-foreground">
        {lines.slice(0, count).map((line, i) => (
          <div key={i} className="whitespace-pre-wrap">
            {line ?? " "}
            {i === count - 1 && count < lines.length && <Cursor />}
          </div>
        ))}
        {count >= lines.length && <Cursor />}
      </div>
    </div>
  )
}

export default function NotFound() {
  return (
    <section className="relative flex min-h-[calc(100vh-73px)] items-center overflow-hidden pt-8 pb-16 min-[861px]:pt-12 min-[861px]:pb-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {CONES.map((cone, i) => (
          <span
            key={i}
            className="absolute h-15 w-11.5 opacity-12 blur-[0.3px] motion-safe:animate-cone-float"
            style={
              {
                top: cone.top,
                left: cone.left,
                opacity: cone.opacity,
                "--dur": cone.dur,
                "--delay": cone.delay,
                "--scale": cone.scale,
              } as CSSProperties
            }
          >
            <span className="absolute inset-x-0 top-0 bottom-2.25 bg-[repeating-linear-gradient(var(--color-primary)_0_9px,#fff_9px_15px)] [clip-path:polygon(50%_0%,80%_100%,20%_100%)]" />
            <span className="absolute -inset-x-1.25 bottom-0 h-2.5 rounded-[3px] bg-[color-mix(in_oklab,var(--color-primary)_80%,black)]" />
          </span>
        ))}
      </div>

      <Container className="relative z-1 w-full">
        <div className="grid grid-cols-1 items-center gap-9 min-[861px]:grid-cols-[1.1fr_1fr] min-[861px]:gap-14">
          <div>
            <div className="mb-5 flex items-baseline gap-1 font-mono text-[clamp(72px,13vw,132px)] font-medium leading-[0.9] tracking-[-0.04em]">
              <span>4</span>
              <span className="relative text-primary motion-safe:animate-flicker">
                0
              </span>
              <span>4</span>
            </div>

            <h1 className="mb-4 max-w-[15ch] text-[clamp(24px,3.4vw,34px)] font-semibold tracking-[-0.02em]">
              This page is still under construction.
            </h1>

            <p className="mb-8 max-w-[46ch] text-[17px] leading-[1.6] text-muted-foreground">
              Welp this page doesn't exist yet. It's probably somewhere. I'll yeet it up here when I get around to it.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/"
                className="group inline-flex items-center gap-2.5 whitespace-nowrap rounded-md border border-transparent bg-primary px-5.5 py-3.5 text-[15px] font-medium tracking-[-0.005em] text-primary-foreground transition-colors hover:bg-[color-mix(in_oklab,var(--primary)_88%,black)]"
              >
                Take me home
                <span
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-0.75"
                >
                  →
                </span>
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center whitespace-nowrap rounded-md border border-border-strong bg-transparent px-5.5 py-3.5 text-[15px] font-medium tracking-[-0.005em] text-foreground transition-colors hover:border-foreground hover:bg-secondary"
              >
                Browse the projects
              </Link>
            </div>
          </div>

          <Terminal />
        </div>
      </Container>
    </section>
  )
}
