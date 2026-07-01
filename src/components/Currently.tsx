import Container from "@/components/Container"
import Eyebrow from "@/components/Eyebrow"

const items = [
  {
    label: "Building",
    title: "Homelab - The Neverending Project",
    meta: "Everytime you think it's done, it isn't.",
  },
  {
    label: "Learning",
    title: "Fusion360",
    meta: "Can't print what I can't model yet.",
  },
  {
    label: "Reading",
    title: "Refactoring UI",
    meta: "For obvious reasons :)",
  },
]

export default function Currently() {
  return (
    <section className="border-t border-border py-14">
      <Container>
        <Eyebrow label="01" className="mb-8">
          currently
        </Eyebrow>

        <h2 className="mb-8 text-[28px] font-semibold tracking-[-0.02em]">
          What I'm currently up to
        </h2>

        <ul className="grid list-none gap-6 md:grid-cols-3">
          {items.map((item) => (
            <li
              key={item.label}
              className="rounded-md border border-border bg-card p-6 transition hover:-translate-y-0.5 hover:border-border-strong"
            >
              <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.06em] text-primary">
                {item.label}
              </div>
              <p className="mb-1.5 text-[17px] font-medium tracking-[-0.01em]">
                {item.title}
              </p>
              <p className="text-[13px] text-muted-foreground">{item.meta}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
