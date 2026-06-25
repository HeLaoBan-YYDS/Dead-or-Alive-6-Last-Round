import { BookOpenText, CalendarDays, Clapperboard, Gamepad2, MessagesSquare, Monitor, Sparkles, Star, type LucideIcon } from "lucide-react";

type NavigationItem = {
  key: string;
  path: `/${string}`;
  icon: LucideIcon;
  isContentType: boolean;
};

export const NAVIGATION_CONFIG: readonly NavigationItem[] = [
  { key: "guide", path: "/guide", icon: BookOpenText, isContentType: true },
  { key: "release", path: "/release", icon: CalendarDays, isContentType: true },
  { key: "platforms", path: "/platforms", icon: Monitor, isContentType: true },
  { key: "characters", path: "/characters", icon: Gamepad2, isContentType: true },
  { key: "features", path: "/features", icon: Sparkles, isContentType: true },
  { key: "media", path: "/media", icon: Clapperboard, isContentType: true },
  { key: "reviews", path: "/reviews", icon: Star, isContentType: true },
  { key: "community", path: "/community", icon: MessagesSquare, isContentType: true },
];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
