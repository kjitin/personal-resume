"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { useMediaQuery } from "@/hooks/use-media-query"

interface ResponsiveProfileImageProps {
  name: string
  imagePath: string
  className?: string
}

export function ResponsiveProfileImage({ name, imagePath, className = "" }: ResponsiveProfileImageProps) {
  const [loaded, setLoaded] = useState(false)
  const isMobile = useMediaQuery("(max-width: 768px)")

  // Force component to re-render once on client side to ensure media query works
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  // Determine image size based on screen size
  const imageSize = isMobile ? 250 : 400

  // Determine appropriate alt text based on context
  const getContextualAltText = () => {
    if (isMobile) {
      return `${name} - Mobile view`
    }
    return `${name} - Professional headshot`
  }

  return (
    <div className={`relative aspect-square w-full max-w-[250px] md:max-w-[400px] mx-auto ${className}`}>
      {mounted && (
        <Image
          src={imagePath || `/jitin.png?height=${imageSize}&width=${imageSize}`}
          alt={getContextualAltText()}
          width={imageSize}
          height={imageSize}
          className={`rounded-full object-cover transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
          priority
          onLoad={() => setLoaded(true)}
        />
      )}
      {(!loaded || !mounted) && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted animate-pulse rounded-full">
          <span className="sr-only">Loading image of {name}</span>
        </div>
      )}
    </div>
  )
}
