"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { TrackedDownloadButton } from "@/components/tracked-download-button"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="flex flex-col">
      <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        <div className="flex items-center justify-between">
          <div className="font-bold text-xl">
            John<span className="text-primary">Dev</span>
          </div>
          <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
            <X className="h-5 w-5" />
            <span className="sr-only">Close menu</span>
          </Button>
        </div>
        <nav className="flex flex-col gap-4 mt-8">
          <Link
            href="#about"
            className="text-foreground hover:text-primary transition-colors py-2 border-b border-muted"
            onClick={() => setOpen(false)}
          >
            About
          </Link>
          <Link
            href="#skills"
            className="text-foreground hover:text-primary transition-colors py-2 border-b border-muted"
            onClick={() => setOpen(false)}
          >
            Skills
          </Link>
          <Link
            href="#projects"
            className="text-foreground hover:text-primary transition-colors py-2 border-b border-muted"
            onClick={() => setOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="#experience"
            className="text-foreground hover:text-primary transition-colors py-2 border-b border-muted"
            onClick={() => setOpen(false)}
          >
            Experience
          </Link>
          <Link
            href="#contact"
            className="text-foreground hover:text-primary transition-colors py-2 border-b border-muted"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
        </nav>
        <div className="mt-auto pt-4">
          <TrackedDownloadButton
            resumePath="/JitinKayyala.pdf"
            fileName="JitinKayyala.pdf"
            className="w-full"
          />
        </div>
      </SheetContent>
    </Sheet>
  )
}
