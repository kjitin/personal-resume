"use client"

import { useState } from "react"
import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { trackDownload } from "@/app/actions/download-actions"
import { useToast } from "@/components/ui/use-toast"
import { useGoogleAnalytics } from "@/hooks/use-google-analytics"

interface TrackedDownloadButtonProps {
  resumePath: string
  fileName?: string
  className?: string
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
}

export function TrackedDownloadButton({
  resumePath,
  fileName,
  className,
  variant = "default",
  size = "sm",
}: TrackedDownloadButtonProps) {
  const [isDownloading, setIsDownloading] = useState(false)
  const { toast } = useToast()
  const { trackDownload: trackDownloadAnalytics } = useGoogleAnalytics()

  const handleDownload = async () => {
    try {
      setIsDownloading(true)

      // Track the download server-side
      const result = await trackDownload(resumePath, navigator.userAgent, document.referrer)
      if (result.success) {
        // Create a client-side download
        const link = document.createElement("a")
        link.href = resumePath
        link.download = fileName || resumePath.split("/").pop() || "resume.pdf"
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)

        // Show success toast
        toast({
          title: "Download started",
          description: "Your resume download has started.",
          duration: 3000,
        })

        // Track in client-side analytics
        trackDownloadAnalytics(fileName || resumePath.split("/").pop() || "resume.pdf", resumePath)
      } else {
        console.error("resume path is "+ resumePath)
        throw new Error(result.message)
      }
    } catch (error) {
      console.error("Download error:", error)
      toast({
        title: "Download failed",
        description: "There was a problem downloading the resume. Please try again.",
        variant: "destructive",
        duration: 5000,
      })
    } finally {
      setIsDownloading(false)
    }
  }

  return (
    <Button variant={variant} size={size} className={className} onClick={handleDownload} disabled={isDownloading}>
      <Download className="mr-2 h-4 w-4" />
      {isDownloading ? "Downloading..." : "Resume"}
    </Button>
  )
}
