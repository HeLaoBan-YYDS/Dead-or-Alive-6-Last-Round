import { cn } from "@/lib/utils"

const AD_BANNER_UNITS = {
  "banner-160x300": {
    src: "/ads/banner-160x300.html",
    width: 160,
    height: 300,
  },
  "banner-160x600": {
    src: "/ads/banner-160x600.html",
    width: 160,
    height: 600,
  },
  "banner-300x250": {
    src: "/ads/banner-300x250.html",
    width: 300,
    height: 250,
  },
  "banner-320x50": {
    src: "/ads/banner-320x50.html",
    width: 320,
    height: 50,
  },
  "banner-468x60": {
    src: "/ads/banner-468x60.html",
    width: 468,
    height: 60,
  },
  "banner-728x90": {
    src: "/ads/banner-728x90.html",
    width: 728,
    height: 90,
  },
} as const

const ADSTERRA_SLOT_TO_TYPE = {
  "160x300": "banner-160x300",
  "160x600": "banner-160x600",
  "300x250": "banner-300x250",
  "320x50": "banner-320x50",
  "468x60": "banner-468x60",
  "728x90": "banner-728x90",
} as const

export type AdBannerType = keyof typeof AD_BANNER_UNITS
export type AdsterraBannerSlot = keyof typeof ADSTERRA_SLOT_TO_TYPE

type AdBannerProps = {
  type: AdBannerType
  adKey?: string
  eager?: boolean
  className?: string
  title?: string
}

type AdsterraBannerProps = {
  slot: AdsterraBannerSlot
  adKey?: string
  eager?: boolean
  className?: string
  title?: string
}

export function AdBanner({
  type,
  adKey,
  eager = false,
  className,
  title,
}: AdBannerProps) {
  const key = adKey?.trim()
  const ad = AD_BANNER_UNITS[type]

  if (!key) {
    return null
  }

  const src = `${ad.src}?key=${encodeURIComponent(key)}`

  return (
    <div
      data-slot="ad-banner"
      className={cn(
        "flex w-full items-center justify-center overflow-hidden",
        className
      )}
    >
      <iframe
        title={title ?? `Advertisement ${type}`}
        src={src}
        width={ad.width}
        height={ad.height}
        scrolling="no"
        loading={eager ? "eager" : "lazy"}
        sandbox="allow-scripts allow-same-origin allow-popups"
        referrerPolicy="strict-origin-when-cross-origin"
        style={{ border: "none" }}
        className="block max-w-full"
      />
    </div>
  )
}

export function AdsterraBanner({
  slot,
  adKey,
  eager,
  className,
  title,
}: AdsterraBannerProps) {
  return (
    <AdBanner
      type={ADSTERRA_SLOT_TO_TYPE[slot]}
      adKey={adKey}
      eager={eager}
      className={className}
      title={title}
    />
  )
}
