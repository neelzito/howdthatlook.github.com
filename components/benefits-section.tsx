import { DollarSign, Zap, Shield, Clock, Users, Star } from "lucide-react"

export function BenefitsSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-primary">
              Why Choose HOWDTHATLOOK for AI Photo Transformations?
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Professional-quality results without the professional price tag. Get started with 5 FREE credits and transform your photos instantly.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
              <DollarSign className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-primary/90">No Subscription Fees</h3>
            <p className="text-muted-foreground">
              Pay only for what you create with our transparent credit system. Perfect for occasional users who don't want monthly commitments or hidden fees.
            </p>
          </div>
          
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
              <Zap className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-primary/90">Lightning Fast Results</h3>
            <p className="text-muted-foreground">
              Get professional-quality transformations in under 5 minutes using the latest AI models like FLUX and Stable Diffusion used by million-dollar studios.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-primary/90">Privacy First</h3>
            <p className="text-muted-foreground">
              Your photos are processed securely and never permanently stored on our servers. What you create stays yours forever - complete privacy guaranteed.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
              <Clock className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-primary/90">5 FREE Credits to Start</h3>
            <p className="text-muted-foreground">
              Begin with $15 worth of FREE transformations. Try our LinkedIn headshots, anime art, photo restoration, and interior design features risk-free.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-primary/90">Trusted by Thousands</h3>
            <p className="text-muted-foreground">
              Join thousands of professionals, creators, and families who use HOWDTHATLOOK daily for their photo transformation needs.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
              <Star className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-primary/90">5⭐ Rated App</h3>
            <p className="text-muted-foreground">
              Consistently rated 5 stars by users who love our quality results, fair pricing, and exceptional user experience across all features.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}