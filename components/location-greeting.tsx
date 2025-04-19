"use client"

import { useState, useEffect } from "react"

export function LocationGreeting() {
  const [location, setLocation] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Function to get user's location using the Geolocation API
    const getUserLocation = async () => {
      try {
        // First, check if we have consent
        const hasConsent = localStorage.getItem("analytics-consent") === "granted"
        if (!hasConsent) {
          setLoading(false)
          return
        }

        // Use the browser's geolocation API to get coordinates
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            async (position) => {
              const { latitude, longitude } = position.coords

              // Use a reverse geocoding service to get the location name
              try {
                const response = await fetch(
                  `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=10`,
                )
                const data = await response.json()

                // Extract city or country from the response
                const city = data.address?.city || data.address?.town || data.address?.village
                const country = data.address?.country

                if (city) {
                  setLocation(`${city}, ${country}`)
                } else if (country) {
                  setLocation(country)
                }
              } catch (error) {
                console.error("Error fetching location name:", error)
              }

              setLoading(false)
            },
            (error) => {
              console.error("Geolocation error:", error)
              setLoading(false)
            },
          )
        } else {
          setLoading(false)
        }
      } catch (error) {
        console.error("Location error:", error)
        setLoading(false)
      }
    }

    getUserLocation()
  }, [])

  if (loading || !location) {
    return null
  }

  return (
    <div className="text-sm text-muted-foreground mt-2">
      Hello visitor from <span className="font-medium text-primary">{location}</span>! Welcome to my portfolio.
    </div>
  )
}
