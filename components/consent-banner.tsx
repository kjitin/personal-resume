"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { X } from "lucide-react"

export function ConsentBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    // Check if user has already given consent
    const hasConsent = localStorage.getItem("analytics-consent")
    if (!hasConsent) {
      setShowBanner(true)
    }
  }, [])

  const acceptAll = () => {
    localStorage.setItem("analytics-consent", "granted")
    if (window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: "granted",
        ad_storage: "granted",
      })
    }
    setShowBanner(false)
  }

  const rejectAll = () => {
    localStorage.setItem("analytics-consent", "denied")
    if (window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: "denied",
        ad_storage: "denied",
      })
    }
    setShowBanner(false)
  }

  const closeBanner = () => {
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <Card className="mx-auto max-w-4xl shadow-lg">
        <CardHeader className="pb-2">
          <div className="flex items-start justify-between">
            <CardTitle>Cookie Consent</CardTitle>
            <Button variant="ghost" size="icon" onClick={closeBanner}>
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
          </div>
          <CardDescription>
            We use cookies to enhance your browsing experience, analyze site traffic, and personalize content.
          </CardDescription>
        </CardHeader>
        <CardContent className="pb-2 text-sm text-muted-foreground">
          <p>
            This website uses Google Analytics to collect anonymous information such as the number of visitors to the
            site, most popular pages, and user locations. Allowing these cookies helps us to improve our website.
          </p>
        </CardContent>
        <CardFooter className="flex justify-end gap-2">
          <Button variant="outline" onClick={rejectAll}>
            Reject All
          </Button>
          <Button onClick={acceptAll}>Accept All</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
