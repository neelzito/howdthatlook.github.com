import Link from "next/link"
import Image from "next/image"
import { BookOpen } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t bg-accent/20">
      <div className="container px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/howdthatlook-icon.png"
                alt="how'dthatlook app icon"
                width={28}
                height={28}
                className="rounded-lg"
              />
              <span className="font-bold text-xl text-primary/90">
                How'd That <span className="text-milivon-orange">Look</span><span className="text-milivon-orange">?</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Visualize your world differently with our AI-powered visualization platform.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="font-medium text-primary/90">Company</h3>
            <ul className="space-y-2 md:space-y-0 md:flex md:gap-6">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} How'd That Look?. Developed by <Link href="https://www.milivon.com" className="text-primary hover:underline">MILIVON</Link>. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}