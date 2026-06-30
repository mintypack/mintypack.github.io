import { cn } from "@/lib/utils"

export default function Container({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return <div className={cn("mx-auto max-w-280 px-8", className)} {...props} />
}
