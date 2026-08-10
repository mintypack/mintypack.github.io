import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

// Renders a single image with an optional caption. Clicking the image opens it at full viewport width.
export default function Figure({
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
          <img
            src={src}
            alt={alt}
            loading="lazy"
            className="mx-auto block max-w-full rounded-lg border border-border"
          />
        </DialogTrigger>
        <DialogContent className="max-w-[92vw] sm:max-w-[92vw]">
          <DialogTitle className="sr-only">{alt}</DialogTitle>
          <img
            src={src}
            alt={alt}
            className="mx-auto max-h-[85vh] w-auto max-w-full rounded-lg"
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
