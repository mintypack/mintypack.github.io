// Labelled aside for prerequisites, warnings, and gotchas. Available in .mdx without an import.
export default function Callout({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <aside className="my-6 rounded-r-sm border-l-[3px] border-primary bg-primary/10 px-5 py-4">
      <p className="mb-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.06em] text-primary">
        {label}
      </p>
      <div className="text-[15px] leading-relaxed [&>p]:mt-0 [&>p+p]:mt-3">
        {children}
      </div>
    </aside>
  )
}
