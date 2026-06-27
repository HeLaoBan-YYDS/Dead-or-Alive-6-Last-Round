"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { AdBanner } from "@/components/ads/adsterra-banner"

const topNavAdKey = process.env.NEXT_PUBLIC_AD_MOBILE_320X50 ?? ""

export function TopNavAd() {
  const [dismissed, setDismissed] = useState(false)
  const adKey = topNavAdKey.trim()

  if (!adKey || dismissed) {
    return null
  }

  return (
    <div data-slot="top-nav-ad" className="sticky top-20 z-20 py-2">
      <div className="mx-auto max-w-4xl">
        <div className="relative mx-auto flex w-fit max-w-full items-start justify-center pr-10">
          <AdBanner
            type="banner-320x50"
            adKey={adKey}
            eager
            className="w-auto shrink-0"
          />
          <button
            type="button"
            aria-label="关闭广告"
            className="absolute right-0 top-0 grid size-8 place-items-center text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            onClick={() => setDismissed(true)}
          >
            <X className="size-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
