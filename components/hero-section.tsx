import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { AppStoreBadge } from "@/components/app-store-badge"
import { IPhoneMockup } from "@/components/iphone-mockup"

export function HeroSection() {
  return (
    <section className="relative py-12 md:py-20 lg:py-28 overflow-hidden bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Professional AI Headshots & Photo Transformations - 5 FREE Credits
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Create LinkedIn headshots, anime art, restore family photos, and preview interior designs with AI. 
                Professional results in under 5 minutes. Start with 5 FREE transformations ($15 value) - no subscription required.
              </p>
            </div>
            <div className="flex flex-row flex-wrap gap-3">
              <AppStoreBadge size="medium" />
              <Button size="lg" variant="outline" asChild className="border-primary/50 hover:bg-primary/10 hover:text-primary">
                <Link href="#features">
                  Learn More
                </Link>
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm">
              <div className="flex items-center gap-1">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span>5 FREE credits ($15 value)</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span>Results in under 5 minutes</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span>5⭐ rated</span>
              </div>
            </div>
          </div>
          <div className="relative mt-4 lg:mt-0 mx-auto lg:mx-0 max-w-[350px] lg:max-w-none flex justify-center">
            <IPhoneMockup 
              className="transform rotate-3 hover:rotate-0 transition-transform duration-500"
              imageSrc="/transformation-demo.gif"
              imageAlt="AI transformation demo showing before and after results"
              isAnimated={true}
            />
          </div>
        </div>
      </div>
    </section>
  )
}