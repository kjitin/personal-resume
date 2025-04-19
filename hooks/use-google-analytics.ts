"use client"

import { useCallback, useEffect, useState } from "react"

interface AnalyticsEvent {
  action: string
  category?: string
  label?: string
  value?: number
  nonInteraction?: boolean
  [key: string]: any
}

export function useGoogleAnalytics() {
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    // Check if Google Analytics is loaded
    if (typeof window !== "undefined" && window.gtag) {
      setIsInitialized(true)
    }
  }, [])

  const trackEvent = useCallback(
    (event: AnalyticsEvent) => {
      if (!isInitialized) return

      const { action, category, label, value, nonInteraction, ...rest } = event

      // Send event to Google Analytics
      window.gtag("event", action, {
        event_category: category,
        event_label: label,
        value: value,
        non_interaction: nonInteraction,
        ...rest,
      })

      // Log event in development
      if (process.env.NODE_ENV === "development") {
        console.log("📊 Analytics Event:", {
          action,
          category,
          label,
          value,
          nonInteraction,
          ...rest,
        })
      }
    },
    [isInitialized],
  )

  const trackDownload = useCallback(
    (fileName: string, filePath: string) => {
      trackEvent({
        action: "download",
        category: "resume",
        label: filePath,
        value: 1,
        nonInteraction: false,
        file_name: fileName,
        file_extension: fileName.split(".").pop(),
        download_method: "tracked_button",
      })
    },
    [trackEvent],
  )

  return {
    isInitialized,
    trackEvent,
    trackDownload,
  }
}
