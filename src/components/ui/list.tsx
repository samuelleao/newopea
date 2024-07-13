import { cn } from "@/lib/utils"

export function ListWrapper({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <ul className={cn("grid gap-3", className)}>{children}</ul>
  )
}

export function ListLine({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <li className={cn("flex xs:flex-row items-start flex-col xs:items-center justify-between", className)}>{children}</li>
  )
}

export function ListLabel({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <span className={cn("text-muted-foreground md:text-sm text-xs", className)}>{children}</span>
  )
}

export function ListData({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <span className={cn("md:text-sm text-xs", className)}>{children}</span>
  )
}