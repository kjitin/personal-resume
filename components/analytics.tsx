"use client"

import { useEffect } from "react"
import Script from "next/script"

// Replace with your actual Google Analytics ID
const GA_MEASUREMENT_ID = "G-XXXXXXXXXX"

declare global {
  interface Window {
    dataLayer: unknown[]
    gtag: (...args: unknown[]) => void
  }
}

export function Analytics() {
  useEffect(() => {
    // Initialize dataLayer
    window.dataLayer = window.dataLayer || []

    function gtag(...args: unknown[]) {
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
    })

    // Track initial page view
    gtag("event", "page_view", {
      page_title: document.title,
      page_location: window.location.href,
      page_path: window.location.pathname,
    })

    // Get user's country using the Geolocation API if available and permitted
    if (navigator.geolocation && hasConsent === "granted") {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords

          // Send location data to Google Analytics as a custom event
          gtag("event", "user_location", {
            latitude,
            longitude,
            precision: "high",
            source: "browser_geolocation",
          })
        },
        () => {
          // If user denies permission, we'll still have approximate location from IP
          console.log("Geolocation permission denied, falling back to IP-based location")
        },
      )
    }
  }, [])

  return (
    <>
      {/* Google Analytics Script */}
      <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} />
    </>
  )
}
