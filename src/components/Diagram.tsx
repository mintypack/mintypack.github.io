import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

// Renders both exports and lets the theme class pick one
function Pair({
  src,
  alt,
  className,
}: {
  src: string
  alt: string
  className?: string
}) {
  return (
    <>
      <img
        src={`${src}-light.svg`}
        alt={alt}
        loading="lazy"
        className={cn(className, "block dark:hidden")}
      />
      <img
        src={`${src}-dark.svg`}
        alt={alt}
        loading="lazy"
        className={cn(className, "hidden dark:block")}
      />
    </>
  )
}

// Renders a pair of Excalidraw exports and swaps them with the theme class.
// `src` is the shared path prefix: "/diagrams/foo" loads foo-light.svg and foo-dark.svg.
// Clicking the diagram opens it at full viewport width.
export default function Diagram({
  src,
  alt,
  caption,
}: {
  src: string
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
          <Pair src={src} alt={alt} className="mx-auto max-w-full" />
        </DialogTrigger>
        <DialogContent className="max-w-[92vw] sm:max-w-[92vw]">
          <DialogTitle className="sr-only">{alt}</DialogTitle>
          <Pair
            src={src}
            alt={alt}
            className="mx-auto max-h-[85vh] w-auto max-w-full"
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
