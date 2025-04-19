"use client"

import { useCallback } from "react"

export function useAnalytics() {
  // Custom event tracking function
  const trackEvent = useCallback((eventName: string, eventParams: Record<string, any> = {}) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", eventName, eventParams)
    }
  }, [])

  // Track user location
  const trackLocation = useCallback(() => {
    const hasConsent = typeof localStorage !== "undefined" && localStorage.getItem("analytics-consent") === "granted"

    if (hasConsent && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords

          if (window.gtag) {
            window.gtag("event", "user_location", {
              latitude,
              longitude,
              precision: "high",
              source: "browser_geolocation",
            })
          }
        },
        () => {
          console.log("Geolocation permission denied, falling back to IP-based location")
        },
      )
    }
  }, [])

  return { trackEvent, trackLocation }
}
