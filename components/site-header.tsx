import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { siteConfig } from "@/config/site"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-b-mauve-7 backdrop-blur-lg">
      <div className="container flex h-16 items-center justify-between">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex items-center space-x-4">
          <nav className="flex items-center space-x-1">
            <ThemeToggle />
          </nav>
          <a
            href="https://discord.gg/neatgang"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded bg-pink-500 px-4 py-2 font-medium text-white hover:bg-pink-600 focus:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
          >
            Join Our Discord
          </a>
        </div>
      </div>
    </header>
  )
}
