import { User, Palette, Home, Sparkles, Clock, Zap } from "lucide-react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { BeforeAfterSlider } from "@/components/before-after-slider"

export function FeaturesSection() {
  return (
    <section id="features" className="bg-background py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium">Features</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-primary">
              Transform your photos with AI magic
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Professional results in under 5 minutes. From LinkedIn headshots to anime art - our AI does it all.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 py-12 md:grid-cols-2">
          <Card className="border-primary/20 bg-card/80 backdrop-blur-sm overflow-hidden">
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <User className="h-6 w-6 text-primary" />
                <div>
                  <CardTitle className="text-primary/90">LinkedIn Headshots</CardTitle>
                  <CardDescription>
                    Land your dream job with a perfect headshot.
                  </CardDescription>
                </div>
              </div>
              <BeforeAfterSlider
                beforeImage="/headshot before.jpeg"
                afterImage="/headshot after.png"
                beforeAlt="Original selfie"
                afterAlt="Professional LinkedIn headshot"
                height={250}
                className="mb-4"
              />
              <p className="text-sm text-muted-foreground">
                Transform any selfie into a professional LinkedIn headshot. Perfect lighting, background, and styling automatically applied.
              </p>
            </div>
          </Card>

          <Card className="border-primary/20 bg-card/80 backdrop-blur-sm overflow-hidden">
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Palette className="h-6 w-6 text-primary" />
                <div>
                  <CardTitle className="text-primary/90">Anime & Creative Art</CardTitle>
                  <CardDescription>
                    Unleash your creativity with AI-powered art.
                  </CardDescription>
                </div>
              </div>
              <BeforeAfterSlider
                beforeImage="/anime before.jpeg"
                afterImage="/anime after.png"
                beforeAlt="Original photo"
                afterAlt="Anime-style transformation"
                height={250}
                className="mb-4"
              />
              <p className="text-sm text-muted-foreground">
                Create beautiful anime-style portraits and artistic transformations. Multiple creative styles including watercolor art.
              </p>
            </div>
          </Card>

          <Card className="border-primary/20 bg-card/80 backdrop-blur-sm overflow-hidden">
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="h-6 w-6 text-primary" />
                <div>
                  <CardTitle className="text-primary/90">Photo Restoration</CardTitle>
                  <CardDescription>
                    Preserve your precious memories.
                  </CardDescription>
                </div>
              </div>
              <BeforeAfterSlider
                beforeImage="/image resto before.jpeg"
                afterImage="/Image resto after.png"
                beforeAlt="Damaged old photo"
                afterAlt="Restored photo"
                height={250}
                className="mb-4"
              />
              <p className="text-sm text-muted-foreground">
                Restore damaged or faded family photos. Remove scratches, enhance colors, and bring your memories back to life.
              </p>
            </div>
          </Card>

          <Card className="border-primary/20 bg-card/80 backdrop-blur-sm overflow-hidden">
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Home className="h-6 w-6 text-primary" />
                <div>
                  <CardTitle className="text-primary/90">Interior Design Preview</CardTitle>
                  <CardDescription>
                    Design your dream home with confidence.
                  </CardDescription>
                </div>
              </div>
              <BeforeAfterSlider
                beforeImage="/Interior before.jpeg"
                afterImage="/Interior after.png"
                beforeAlt="Empty room"
                afterAlt="Furnished room preview"
                height={250}
                className="mb-4"
              />
              <p className="text-sm text-muted-foreground">
                Preview how furniture and decor will look in your space. Make confident design decisions with AI visualization.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}