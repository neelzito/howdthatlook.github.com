import Image from "next/image"
import { Camera, Sparkles, Eye } from "lucide-react"

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium">How It Works</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-primary">
              Visualize anything in three simple steps
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our intuitive process makes visualization effortless and instant.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
          <div className="flex flex-col items-center space-y-4 rounded-lg border border-primary/20 bg-card p-6 text-center shadow-sm">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
              <Camera className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-primary/90">1. Take a Photo</h3>
            <p className="text-muted-foreground">
              Snap a picture of yourself or your space using your smartphone camera or upload an existing photo.
            </p>
            <div className="rounded-xl border border-primary/20 bg-card overflow-hidden shadow-lg">
              <Image
                src="/app-screenshot-upload.png"
                alt="App screenshot showing photo upload interface"
                width={300}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className="flex flex-col items-center space-y-4 rounded-lg border border-primary/20 bg-card p-6 text-center shadow-sm">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
              <Sparkles className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-primary/90">2. Choose Changes</h3>
            <p className="text-muted-foreground">
              Select what you want to try - new hairstyles, clothes, furniture arrangements, or other modifications.
            </p>
            <div className="rounded-xl border border-primary/20 bg-card overflow-hidden shadow-lg">
              <Image
                src="/app-screenshot-options.png"
                alt="App screenshot showing transformation options and style selection"
                width={300}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className="flex flex-col items-center space-y-4 rounded-lg border border-primary/20 bg-card p-6 text-center shadow-sm">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
              <Eye className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-primary/90">3. See Results</h3>
            <p className="text-muted-foreground">
              Get instant AI-generated visualizations showing exactly how you'd look with the changes or how items would fit in your space.
            </p>
            <div className="rounded-xl border border-primary/20 bg-card overflow-hidden shadow-lg">
              <Image
                src="/app-screenshot-results.png"
                alt="App screenshot showing AI transformation results"
                width={300}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}