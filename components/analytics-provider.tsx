"use client"

import type React from "react"

import { useEffect } from "react"
import Script from "next/script"
import { ConsentBanner } from "@/components/consent-banner"

// Replace with your actual Google Analytics ID
const GA_MEASUREMENT_ID = "G-XXXXXXXXXX"

declare global {
  interface Window {
    dataLayer: any[]
    gtag: (...args: any[]) => void
  }
}

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Initialize dataLayer
    window.dataLayer = window.dataLayer || []

    function gtag(...args: any[]) {
      window.dataLayer.push(args)
    }

    window.gtag = gtag

    // Set default consent to 'denied' until user provides consent
    gtag("consent", "default", {
      analytics_storage: "denied",
      ad_storage: "denied",
    })

    // Check if user has already given consent
    const hasConsent = localStorage.getItem("analytics-consent")
    if (hasConsent === "granted") {
      gtag("consent", "update", {
        analytics_storage: "granted",
        ad_storage: "granted",
      })
    }

    // Initialize gtag with default configs
    gtag("js", new Date())

    // Configure to collect location data
    gtag("config", GA_MEASUREMENT_ID, {
      send_page_view: true,
      anonymize_ip: false, // Set to true if you want to anonymize IP addresses
      allow_google_signals: true,
      allow_ad_personalization_signals: true,
      geography_specifications: true, // Enable geographic data collection
      link_attribution: {
        cookie_name: "_glat",
        cookie_expires: 63072000, // 2 years
      },
      custom_map: {
        dimension1: "file_name",
        dimension2: "file_extension",
        dimension3: "download_method",
      },
    })
  }, [])

  return (
    <>
      {children}
      <ConsentBanner />
      {/* Google Analytics Script */}
      <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  )
}
