import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section id="cta" className="bg-primary text-primary-foreground py-16 md:py-24 relative overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Ready to transform your photos?
            </h2>
            <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Join over 10,000 users who trust our app for trying new looks and making better style decisions.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="https://apps.apple.com/es/app/howdthatlook/id6747389099?l=en-GB">
                Download from App Store
              </Link>
            </Button>
          </div>
          <p className="text-sm text-primary-foreground/80">Free download • 5 credits included ($15 value)</p>
        </div>
      </div>
    </section>
  )
}