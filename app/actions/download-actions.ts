"use server"

import { revalidatePath } from "next/cache"
import fs from "fs"
import path from "path"
import { headers as getHeaders } from "next/headers"

type DownloadEvent = {
  timestamp: string
  fileName: string
  userAgent?: string
  referer?: string
  ip?: string
}

// In a real app, you would store this in a database
const downloadEvents: DownloadEvent[] = []

// Server-side Google Analytics tracking
async function trackEventInGoogleAnalytics(event: string, params: Record<string, any>) {
  try {
    // Get the Google Analytics Measurement ID from environment variables or use a default
    const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-XXXXXXXXXX"

    // Get client IP and user agent
    const headersList = getHeaders()
    const userAgent = headersList.get("user-agent") || ""
    const clientIp = headersList.get("x-forwarded-for") || "anonymous"

    // Prepare the event data
    const eventData = {
      client_id: clientIp, // Use IP as client ID for server-side events
      user_agent: userAgent,
      events: [
        {
          name: event,
          params: {
            ...params,
            engagement_time_msec: "100",
            session_id: Date.now().toString(),
          },
        },
      ],
    }

    // Send the event to Google Analytics Measurement Protocol
    const response = await fetch(
      `https://www.google-analytics.com/mp/collect?measurement_id=${measurementId}&api_secret=${process.env.GA_API_SECRET || ""}`,
      {
        method: "POST",
        body: JSON.stringify(eventData),
        headers: {
          "Content-Type": "application/json",
        },
      },
    )

    if (!response.ok) {
      console.error("Failed to send event to Google Analytics:", await response.text())
    }
  } catch (error) {
    console.error("Error sending event to Google Analytics:", error)
  }
}

export async function trackDownload(
  fileName: string,
  userAgent?: string,
  referer?: string,
): Promise<{ success: boolean; message: string; filePath?: string }> {
  try {
    // Get file path
    const filePath = path.join(process.cwd(), "public", fileName)

    // Check if file exists
    if (!fs.existsSync(filePath)) {
      return {
        success: false,
        message: "File not found",
      }
    }

    // Track the download event
    const downloadEvent: DownloadEvent = {
      timestamp: new Date().toISOString(),
      fileName,
      userAgent,
      referer,
      // In a real app with middleware, you could get the IP
      // ip: headers.get("x-forwarded-for") || undefined,
    }

    // In a real app, you would save this to a database
    downloadEvents.push(downloadEvent)

    // Log the download (in production, you'd send this to your analytics service)
    console.log("Download tracked:", downloadEvent)

    // Track the download in Google Analytics server-side
    await trackEventInGoogleAnalytics("file_download", {
      file_name: fileName,
      file_extension: fileName.split(".").pop(),
      user_agent: userAgent,
      referrer: referer,
      timestamp: new Date().toISOString(),
    })

    // Revalidate the path to update any statistics shown on the page
    revalidatePath("/")

    return {
      success: true,
      message: "Download tracked successfully",
      filePath: fileName,
    }
  } catch (error) {
    console.error("Error tracking download:", error)
    return {
      success: false,
      message: "Error tracking download",
    }
  }
}

// For demonstration purposes - in a real app, this would be a database query
export async function getDownloadStats() {
  return {
    totalDownloads: downloadEvents.length,
    recentDownloads: downloadEvents.slice(-5),
  }
}
