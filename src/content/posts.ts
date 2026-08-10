import type { ComponentType } from "react"
import type { MDXProps } from "mdx/types"

// Category colors
export const CATEGORIES = {
  homelab: "#1e3a8a",
  drone: "#9d174d",
  "3d print": "#5b21b6",
  networking: '#FFA168'
} as const

export type Category = keyof typeof CATEGORIES

type RawFrontmatter = {
  title: string
  blurb: string
  category: string
  // ISO yyyy-mm-dd so string comparison sorts chronologically
  date: string
  // Absolute path into public/, e.g. "/covers/pic.jpg". Falls back to the category color when absent.
  cover?: string
}

type PostModule = { default: ComponentType<MDXProps> }

export type PostMeta = {
  slug: string
  title: string
  blurb: string
  category: Category
  date: string
  cover?: string
  Body: ComponentType<MDXProps>
}

// The `meta` export comes from remark-mdx-frontmatter, configured in vite.config.ts
const frontmatter = import.meta.glob<RawFrontmatter>("./posts/*.mdx", {
  eager: true,
  import: "meta",
})

// Post bodies, keyed by the same paths
const bodies = import.meta.glob<PostModule>("./posts/*.mdx", { eager: true })

// "./posts/rack-v3.mdx" -> "rack-v3"
function slugFromPath(path: string) {
  return path.slice(path.lastIndexOf("/") + 1, -".mdx".length)
}

function toCategory(value: string, path: string): Category {
  if (!Object.hasOwn(CATEGORIES, value)) {
    throw new Error(
      `${path}: unknown category "${value}". Expected one of: ${Object.keys(CATEGORIES).join(", ")}`
    )
  }
  return value as Category
}

export const posts: PostMeta[] = Object.entries(frontmatter).map(
  ([path, meta]) => ({
    ...meta,
    slug: slugFromPath(path),
    category: toCategory(meta.category, path),
    Body: bodies[path].default,
  })
)

const MONTHS = [
  "jan",
  "feb",
  "mar",
  "apr",
  "may",
  "jun",
  "jul",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec",
]

// "2026-05-02" -> "may 02"
export function formatPostDate(date: string) {
  const [, month, day] = date.split("-")
  return `${MONTHS[Number(month) - 1]} ${day}`
}
