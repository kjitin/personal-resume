"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface ScrollButtonProps {
  targetId: string
  size?: "default" | "sm" | "lg" | "icon"
  children: React.ReactNode
  showArrow?: boolean
}

export function ScrollButton({ targetId, children,  size = "default",showArrow = true, ...props }: ScrollButtonProps) {
  const handleClick = () => {
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <Button onClick={handleClick} size = {size} {...props}>
      {children}
      {showArrow && <ArrowRight className="ml-2 h-4 w-4" />}
    </Button>
  )
}
