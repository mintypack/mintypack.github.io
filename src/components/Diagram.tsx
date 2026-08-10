// Renders a pair of Excalidraw exports and swaps them with the theme class.
// `src` is the shared path prefix: "/diagrams/foo" loads foo-light.svg and foo-dark.svg.
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
      <img
        src={`${src}-light.svg`}
        alt={alt}
        loading="lazy"
        className="mx-auto block max-w-full dark:hidden"
      />
      <img
        src={`${src}-dark.svg`}
        alt={alt}
        loading="lazy"
        className="mx-auto hidden max-w-full dark:block"
      />
      {caption && (
        <figcaption className="mt-3 text-center text-sm text-muted-foreground">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
