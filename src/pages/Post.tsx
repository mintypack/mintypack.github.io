import { Link, useParams } from "react-router"
import type { MDXComponents } from "mdx/types"

import Container from "@/components/Container"
import Diagram from "@/components/Diagram"
import Figure from "@/components/Figure"
import NotFound from "@/pages/NotFound"
import { CATEGORIES, formatPostDate, posts } from "@/content/posts"

const mdxComponents: MDXComponents = {
  Diagram,
  Figure,
  h2: (props) => (
    <h2
      className="mt-10 text-xl font-semibold tracking-[-0.015em]"
      {...props}
    />
  ),
  p: (props) => (
    <p className="mt-4 leading-relaxed text-muted-foreground" {...props} />
  ),
  ul: (props) => (
    <ul
      className="mt-4 list-disc space-y-1.5 pl-5 leading-relaxed text-muted-foreground"
      {...props}
    />
  ),
  a: (props) => (
    <a
      target="_blank"
      className="underline underline-offset-2 transition-colors hover:text-foreground"
      {...props}
    />
  ),

  // Table stuff
  table: (props) => (
    <div className="my-5 overflow-x-auto">
      <table className="w-full text-sm" {...props} />
    </div>
  ),
  th: (props) => (
    <th
      className="border-b border-border-strong px-3 py-2.5 text-left font-mono text-[11px] font-normal uppercase tracking-[0.04em] text-muted-foreground"
      {...props}
    />
  ),
  td: (props) => (
    <td className="border-b border-border px-3 py-2.5 align-top" {...props} />
  ),
  code: (props) => (
    <code
      className="rounded bg-muted px-1.5 py-0.5 font-mono text-[0.85em]"
      {...props}
    />
  ),
  figure: (props) => (
    <figure
      className="my-5 overflow-hidden rounded-lg border border-border"
      {...props}
    />
  ),
  figcaption: (props) => (
    <figcaption
      className="border-b border-border bg-accent px-4 py-2.5 font-mono text-xs text-muted-foreground"
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="overflow-x-auto bg-muted px-5 py-4 font-mono text-[13px] leading-[1.7] text-foreground [&>code]:bg-transparent [&>code]:p-0 [&>code]:[font-size:inherit]"
      {...props}
    />
  ),
}

export default function Post() {
  const { slug } = useParams()
  const post = posts.find((p) => p.slug === slug)

  if (!post) return <NotFound />

  const { Body } = post

  return (
    <section className="pt-14 pb-16">
      <Container className="max-w-224">
        <Link
          to="/projects"
          className="text-[13px] text-muted-foreground transition-colors hover:text-foreground"
        >
          ← all projects
        </Link>

        <div className="mt-7 flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.04em] text-muted-foreground">
          <span
            className="size-1.75 rounded-full"
            style={{ background: CATEGORIES[post.category] }}
          />
          {post.category}
          <span className="text-muted-foreground/60">·</span>
          {formatPostDate(post.date)}
        </div>

        <h1 className="mt-3 text-[36px] font-semibold leading-[1.15] tracking-[-0.02em]">
          {post.title}
        </h1>
        <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
          {post.blurb}
        </p>

        <Body components={mdxComponents} />
      </Container>
    </section>
  )
}
