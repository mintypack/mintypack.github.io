import Container from "@/components/Container"
import PostCard from "@/components/PostCard"
import { posts } from "@/content/posts"

// All posts, newest first
const allPosts = posts.toSorted((a, b) => b.date.localeCompare(a.date))

export default function Projects() {
  return (
    <section className="pt-14 pb-16">
      <Container>
        <ul className="mt-8 grid list-none gap-6 md:grid-cols-3">
          {allPosts.map((post) => (
            <li key={post.slug}>
              <PostCard post={post} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}