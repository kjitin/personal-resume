"use client"

import { useEffect, useState } from "react"
import { getDownloadStats } from "@/app/actions/download-actions"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Download } from "lucide-react"

export function DownloadStats() {
  const [stats, setStats] = useState({ totalDownloads: 0, recentDownloads: [] })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchStats() {
      try {
        const data = await getDownloadStats()
        setStats(data)
      } catch (error) {
        console.error("Error fetching download stats:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchStats()

    // Set up an interval to refresh stats every 30 seconds
    const interval = setInterval(fetchStats, 30000)

    return () => clearInterval(interval)
  }, [])

  if (loading) {
    return <div className="text-center p-4">Loading download statistics...</div>
  }

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium flex items-center gap-2">
          <Download className="h-4 w-4 text-primary" />
          Resume Downloads
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold">{stats.totalDownloads}</p>
        <p className="text-xs text-muted-foreground mt-1">
          {stats.totalDownloads === 0
            ? "Be the first to download!"
            : stats.totalDownloads === 1
              ? "1 download so far"
              : `${stats.totalDownloads} downloads so far`}
        </p>
      </CardContent>
    </Card>
  )
}
