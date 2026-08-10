import { Link } from "react-router"

import { CATEGORIES, formatPostDate, type PostMeta } from "@/content/posts"

export default function PostCard({ post }: { post: PostMeta }) {
  const color = CATEGORIES[post.category]

  return (
    <Link
      to={`/projects/${post.slug}`}
      className="flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card transition hover:-translate-y-[3px] hover:border-border-strong hover:shadow-md"
    >
      {/* Decorative: the card's own heading already names the post */}
      {post.cover ? (
        <img
          src={post.cover}
          alt=""
          loading="lazy"
          className="aspect-[16/10] w-full object-cover"
        />
      ) : (
        <div className="aspect-[16/10]" style={{ background: color }} />
      )}

      <div className="flex flex-1 flex-col gap-[9px] px-5 pt-[18px] pb-5">
        <div className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.04em] text-muted-foreground">
          <span
            className="size-1.75 rounded-full"
            style={{ background: color }}
          />
          {post.category}
          <span className="text-muted-foreground/60">·</span>
          {formatPostDate(post.date)}
        </div>

        <h3 className="text-lg font-semibold leading-[1.25] tracking-[-0.015em]">
          {post.title}
        </h3>

        <p className="line-clamp-2 text-sm leading-normal text-muted-foreground">
          {post.blurb}
        </p>
      </div>
    </Link>
  )
}
