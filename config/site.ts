import { NavItem } from "@/types/nav"

interface SiteConfig {
  name: string
  description: string
  mainNav: NavItem[]
}

export const siteConfig: SiteConfig = {
  name: "Neat Chat",
  description: "AI Chat for World of Warcraft Gamers",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Chat",
      href: "/chat",
    },
    {
      title: "Embed",
      href: "/embeddings",
    },
    {
      title: "Learn",
      href: "/learn",
    },
  ],
}
