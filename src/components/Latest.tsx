import { Link } from "react-router"

import Container from "@/components/Container"
import Eyebrow from "@/components/Eyebrow"
import PostCard from "@/components/PostCard"
import { posts } from "@/content/posts"

// Three most recent posts, newest first
const latestPosts = posts
  .toSorted((a, b) => b.date.localeCompare(a.date))
  .slice(0, 3)

export default function Latest() {
  return (
    <section className="border-t border-border pt-14 pb-8">
      <Container>
        <div className="mb-8 flex items-baseline justify-between gap-4">
          <div>
            <Eyebrow label="02">latest</Eyebrow>
            <h2 className="mt-2 text-[28px] font-semibold tracking-[-0.02em]">
              Fresh from the workshop
            </h2>
          </div>
          <Link
            to="/projects"
            className="group inline-flex items-center gap-1.5 whitespace-nowrap text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            view all projects
            <span
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-0.75"
            >
              →
            </span>
          </Link>
        </div>

        <ul className="grid list-none gap-6 md:grid-cols-3">
          {latestPosts.map((post) => (
            <li key={post.slug}>
              <PostCard post={post} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
