import { User, Palette, Home, Sparkles, Clock, Zap } from "lucide-react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function FeaturesSection() {
  return (
    <section id="features" className="bg-accent/30 py-16 md:py-24">
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
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-2">
          <Card className="border-primary/20 bg-card/80 backdrop-blur-sm">
            <CardHeader className="pb-2">
              <User className="h-6 w-6 text-primary mb-2" />
              <CardTitle className="text-primary/90">LinkedIn Headshots</CardTitle>
              <CardDescription>
                18 professional styles for your career.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Transform any selfie into a professional LinkedIn headshot. Perfect lighting, background, and styling automatically applied.
              </p>
            </CardContent>
          </Card>
          <Card className="border-primary/20 bg-card/80 backdrop-blur-sm">
            <CardHeader className="pb-2">
              <Palette className="h-6 w-6 text-primary mb-2" />
              <CardTitle className="text-primary/90">Anime & Creative Art</CardTitle>
              <CardDescription>
                Turn photos into stunning artwork.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Create beautiful anime-style portraits and artistic transformations. Multiple creative styles including watercolor art.
              </p>
            </CardContent>
          </Card>
          <Card className="border-primary/20 bg-card/80 backdrop-blur-sm">
            <CardHeader className="pb-2">
              <Sparkles className="h-6 w-6 text-primary mb-2" />
              <CardTitle className="text-primary/90">Photo Restoration</CardTitle>
              <CardDescription>
                Bring old photos back to life.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Restore damaged or faded family photos. Remove scratches, enhance colors, and preserve precious memories.
              </p>
            </CardContent>
          </Card>
          <Card className="border-primary/20 bg-card/80 backdrop-blur-sm">
            <CardHeader className="pb-2">
              <Home className="h-6 w-6 text-primary mb-2" />
              <CardTitle className="text-primary/90">Interior Design Preview</CardTitle>
              <CardDescription>
                See room designs before you buy.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Preview how furniture and decor will look in your space. Make confident design decisions with AI visualization.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}