import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { CreateEmissionDialog } from "./create-emission-dialog";

export function Navbar() {
  return (
    <nav className="sticky top-0 py-2 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex justify-between items-center">
        <Link href="/">
          <span className="font-semibold text-lg">new <span className="text-primary">opea</span></span>
        </Link>
        <div className="flex items-center gap-2">
          <CreateEmissionDialog />
          <ModeToggle />
        </div>
      </div>
    </nav>
  )
}