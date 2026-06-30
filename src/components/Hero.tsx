import Container from "@/components/Container"

export default function Hero() {
  return (
    <section className="pt-14 pb-12 md:pt-24 md:pb-20">
      <Container>
        <span className="mb-8 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 font-mono text-xs text-muted-foreground">
          <span
            className="size-1.75 rounded-full bg-[#16a34a] shadow-[0_0_0_3px_rgba(22,163,74,0.18)]"
            aria-hidden="true"
          />
          building things
        </span>

        <h1 className="mb-7 text-[clamp(48px,9vw,96px)] font-semibold leading-[0.98] tracking-[-0.04em]">
          Hi, I'm Zoe<span className="text-primary">.</span>
        </h1>

        <p className="mb-10 max-w-140 text-[clamp(18px,2.2vw,22px)] leading-normal text-muted-foreground">
          Software engineer by day, tinkerer by night. I build homelabs,
          fly drones, print things, and occasionally write code that doesn't run
          on a server.
        </p>

        <div className="flex flex-wrap gap-3">
          <a
            href="/projects"
            className="group inline-flex items-center gap-2.5 whitespace-nowrap rounded-md border border-transparent bg-primary px-5.5 py-3.5 text-[15px] font-medium tracking-[-0.005em] text-primary-foreground transition-colors hover:bg-[color-mix(in_oklab,var(--primary)_88%,black)]"
          >
            See what I'm building
            <span
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-0.75"
            >
              →
            </span>
          </a>
          <a
            href="/about"
            className="inline-flex items-center whitespace-nowrap rounded-md border border-border-strong bg-transparent px-5.5 py-3.5 text-[15px] font-medium tracking-[-0.005em] text-foreground transition-colors hover:border-foreground hover:bg-secondary"
          >
            About me
          </a>
        </div>
      </Container>
    </section>
  )
}
