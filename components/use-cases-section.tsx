import { Briefcase, Camera, Heart, Home, User, Sparkles, Building, Palette } from "lucide-react"

export function UseCasesSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-primary">
              Perfect for Every Professional and Creative Need
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              From job seekers to content creators, families to homeowners - HOWDTHATLOOK serves diverse communities with professional-quality AI transformations.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center space-y-4 text-center p-6 rounded-lg border border-primary/20 bg-card/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
              <Briefcase className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-primary/90">Job Seekers</h3>
            <p className="text-sm text-muted-foreground">
              Professional LinkedIn headshots that help you stand out to recruiters and land interviews faster. Save $200+ on professional photography.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-4 text-center p-6 rounded-lg border border-primary/20 bg-card/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
              <Camera className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-primary/90">Content Creators</h3>
            <p className="text-sm text-muted-foreground">
              Unique anime avatars, artistic portraits, and social media content that gets engagement. No expensive software or design skills needed.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-4 text-center p-6 rounded-lg border border-primary/20 bg-card/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
              <Heart className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-primary/90">Families</h3>
            <p className="text-sm text-muted-foreground">
              Restore precious old family photos and preserve memories forever. Fix damaged photos that you thought were lost with advanced AI restoration.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-4 text-center p-6 rounded-lg border border-primary/20 bg-card/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
              <Home className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-primary/90">Homeowners</h3>
            <p className="text-sm text-muted-foreground">
              Preview furniture and design changes before buying. Make confident design decisions with AI visualization in 10+ interior styles.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-4 text-center p-6 rounded-lg border border-primary/20 bg-card/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
              <User className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-primary/90">Social Media Enthusiasts</h3>
            <p className="text-sm text-muted-foreground">
              Create eye-catching profile pictures and unique content that stands out. Transform your photos into artistic masterpieces instantly.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-4 text-center p-6 rounded-lg border border-primary/20 bg-card/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
              <Building className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-primary/90">Business Professionals</h3>
            <p className="text-sm text-muted-foreground">
              Maintain a professional image across all platforms. Get executive-quality headshots and corporate photos without the studio costs.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-4 text-center p-6 rounded-lg border border-primary/20 bg-card/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
              <Palette className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-primary/90">Artists & Creators</h3>
            <p className="text-sm text-muted-foreground">
              Explore new artistic styles and creative transformations. Generate inspiration and create unique artwork from your photos using AI.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-4 text-center p-6 rounded-lg border border-primary/20 bg-card/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
              <Sparkles className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-primary/90">Anyone Who Wants Better Photos</h3>
            <p className="text-sm text-muted-foreground">
              Whether it's enhancing selfies, creating art, or visualizing changes - HOWDTHATLOOK makes professional photo editing accessible to everyone.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}