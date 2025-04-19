"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, TrendingUp, Users } from "lucide-react"
import { getDownloadStats, type DownloadEvent } from "@/app/actions/download-actions"

interface DownloadAnalytics {
  totalDownloads: number
  recentDownloads: DownloadEvent[]
  conversionRate?: string
  topReferrers?: { source: string; count: number }[]
}

export function DownloadAnalytics() {
  const [analytics, setAnalytics] = useState<DownloadAnalytics>({
    totalDownloads: 0,
    recentDownloads: [],
    conversionRate: "0%",
    topReferrers: [],
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchAnalytics() {
      try {
        // Get basic download stats
        const stats = await getDownloadStats()

        // In a real app, you would fetch this data from Google Analytics API
        // For now, we'll simulate some data
        const simulatedAnalytics = {
          ...stats,
          conversionRate: "4.2%",
          topReferrers: [
            { source: "LinkedIn", count: 12 },
            { source: "GitHub", count: 8 },
            { source: "Direct", count: 5 },
          ],
        }

        setAnalytics(simulatedAnalytics)
      } catch (error) {
        console.error("Error fetching analytics:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchAnalytics()

    // Refresh every minute
    const interval = setInterval(fetchAnalytics, 60000)
    return () => clearInterval(interval)
  }, [])

  if (loading) {
    return <div className="text-center p-4">Loading analytics...</div>
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium flex items-center gap-2">
            <Download className="h-4 w-4 text-primary" />
            Total Downloads
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">{analytics.totalDownloads}</p>
          <p className="text-xs text-muted-foreground mt-1">
            {analytics.totalDownloads === 0
              ? "No downloads yet"
              : `${analytics.totalDownloads} resume downloads tracked`}
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-primary" />
            Conversion Rate
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">{analytics.conversionRate}</p>
          <p className="text-xs text-muted-foreground mt-1">Visitors who download your resume</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium flex items-center gap-2">
            <Users className="h-4 w-4 text-primary" />
            Top Referrers
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-1">
            {analytics.topReferrers?.map((referrer, index) => (
              <li key={index} className="text-sm flex justify-between">
                <span>{referrer.source}</span>
                <span className="font-medium">{referrer.count}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
