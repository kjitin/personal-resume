"use client"

import { useEffect, useState } from "react"
import { siteConfig } from "@/app/seo.config"

export function StructuredData() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: "Jitin Kayyala",
      jobTitle: "Java Backend Developer",
      description: siteConfig.description,
      url: siteConfig.url,
      sameAs: [siteConfig.links.github, siteConfig.links.linkedin],
      knowsAbout: [
        "Java",
        "Spring Boot",
        "Microservices",
        "Database Optimization",
        "API Development",
        "Cloud Architecture",
      ],
      worksFor: {
        "@type": "Organization",
        name: "TechCorp Solutions",
      },
      alumniOf: {
        "@type": "EducationalOrganization",
        name: "University of Technology",
      },
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}
