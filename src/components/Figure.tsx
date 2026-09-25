import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

// Renders the image, or both variants when a dark one exists and lets the theme class pick one
function ThemedImage({
  src,
  darkSrc,
  alt,
  className,
  lazy,
}: {
  src: string
  darkSrc?: string
  alt: string
  className: string
  lazy?: boolean
}) {
  const loading = lazy ? "lazy" : undefined

  if (!darkSrc) {
    return <img src={src} alt={alt} loading={loading} className={className} />
  }

  return (
    <>
      <img
        src={src}
        alt={alt}
        loading={loading}
        className={cn(className, "dark:hidden")}
      />
      <img
        src={darkSrc}
        alt={alt}
        loading={loading}
        className={cn(className, "hidden dark:block")}
      />
    </>
  )
}

// Renders a single image with an optional caption. Clicking the image opens it at full viewport width.
// `darkSrc` is an optional variant shown in dark mode.
export default function Figure({
  src,
  darkSrc,
  alt,
  caption,
}: {
  src: string
  darkSrc?: string
  alt: string
  caption?: string
}) {
  return (
    <figure className="my-8">
      <Dialog>
        <DialogTrigger
          render={
            <button
              type="button"
              className="block w-full cursor-zoom-in rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
            />
          }
        >
          <ThemedImage
            src={src}
            darkSrc={darkSrc}
            alt={alt}
            lazy
            className="mx-auto block max-w-full rounded-lg border border-border"
          />
        </DialogTrigger>
        <DialogContent className="max-w-[92vw] sm:max-w-[92vw]">
          <DialogTitle className="sr-only">{alt}</DialogTitle>
          <ThemedImage
            src={src}
            darkSrc={darkSrc}
            alt={alt}
            className="mx-auto block max-h-[85vh] w-auto max-w-full rounded-lg"
          />
        </DialogContent>
      </Dialog>
      {caption && (
        <figcaption className="mt-3 text-center text-sm text-muted-foreground">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
