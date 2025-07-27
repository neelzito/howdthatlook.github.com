import Image from "next/image"

import {
  Card,
  CardContent,
} from "@/components/ui/card"

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium">Testimonials</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-primary">
              Loved by style enthusiasts everywhere
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              See what our users are saying about their experience with <span className="text-foreground">How'd That </span><span className="text-milivon-orange">Look</span><span className="text-milivon-orange">?</span>
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          <Card className="border-0 bg-accent/40">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="relative h-10 w-10 overflow-hidden rounded-full border border-primary/20">
                  <Image
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop"
                    alt="Margaret T."
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-primary/90">Sarah J.</p>
                  <p className="text-sm text-muted-foreground">Job Seeker</p>
                </div>
              </div>
              <blockquote className="mt-4 border-l-2 border-primary/30 pl-4 italic text-muted-foreground">
                "The LinkedIn headshot feature is incredible! I got my professional headshots done in under 5 minutes and they look better than expensive studio photos. Landed 3 interviews this week!"
              </blockquote>
            </CardContent>
          </Card>
          <Card className="border-0 bg-accent/40">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="relative h-10 w-10 overflow-hidden rounded-full border border-primary/20">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
                    alt="Robert J."
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-primary/90">neelzito</p>
                  <p className="text-sm text-muted-foreground">App Store Reviewer</p>
                </div>
              </div>
              <blockquote className="mt-4 border-l-2 border-primary/30 pl-4 italic text-muted-foreground">
                "Amazing and fun for the whole family! We've been restoring old family photos and creating anime versions of ourselves. The AI is so impressive and results are professional quality."
              </blockquote>
            </CardContent>
          </Card>
          <Card className="border-0 bg-accent/40">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="relative h-10 w-10 overflow-hidden rounded-full border border-primary/20">
                  <Image
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
                    alt="Claire M."
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-primary/90">David C.</p>
                  <p className="text-sm text-muted-foreground">Creative Professional</p>
                </div>
              </div>
              <blockquote className="mt-4 border-l-2 border-primary/30 pl-4 italic text-muted-foreground">
                "The anime art feature is addictive! I've created dozens of artistic versions of my photos. The quality is outstanding and my friends can't believe these are AI-generated. Worth every credit!"
              </blockquote>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}