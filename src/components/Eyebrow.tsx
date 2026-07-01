import { cn } from "@/lib/utils"

export default function Eyebrow({
  label,
  className,
  children,
  ...props
}: { label: string } & React.ComponentProps<"p">) {
  return (
    <p
      className={cn(
        "font-mono text-xs uppercase tracking-[0.06em] text-muted-foreground",
        className,
      )}
      {...props}
    >
      <span className="text-primary">{label}</span> · {children}
    </p>
  )
}
