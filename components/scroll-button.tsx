"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import type { ButtonProps } from "@/components/ui/button"

interface ScrollButtonProps extends ButtonProps {
  targetId: string
  children: React.ReactNode
  showArrow?: boolean
}

export function ScrollButton({ targetId, children, showArrow = true, ...props }: ScrollButtonProps) {
  const handleClick = () => {
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <Button onClick={handleClick} {...props}>
      {children}
      {showArrow && <ArrowRight className="ml-2 h-4 w-4" />}
    </Button>
  )
}
