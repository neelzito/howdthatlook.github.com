"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQSection() {
  return (
    <section id="faq" className="bg-accent/30 py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium">FAQ</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-primary">
              Frequently asked questions
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Everything you need to know about <span className="text-foreground">How'd That </span><span className="text-milivon-orange">Look</span><span className="text-milivon-orange">?</span>
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl space-y-8 py-12">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left text-base font-medium">
                How accurate are the visualization results?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Our AI technology provides highly realistic visualizations with 95%+ accuracy for standard features like hairstyles and clothing. Results are based on millions of training images and advanced computer vision models that understand lighting, angles, and natural positioning.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left text-base font-medium">
                What can I create with how'dthatlook?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Create professional LinkedIn headshots (18 styles), anime & creative art, restore old family photos, preview interior designs, enhance photos, remove objects, and generate videos. All powered by advanced AI models like FLUX and Stable Diffusion.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left text-base font-medium">
                How much does it cost?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                The app is free to download with 5 FREE credits included (worth $15). After that, you can purchase credits: 25 credits for €3.99, 100 credits for €17.99, or 500 credits for €79.99. No monthly subscriptions - pay only for what you use ($1-3 per image).
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left text-base font-medium">
                How do I take the best photo for visualization?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                For best results, use good lighting with minimal shadows. Face the camera directly for hairstyle/makeup changes, or capture your full room for furniture arrangements. Avoid extreme angles, poor lighting, or cluttered backgrounds that might confuse the AI.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left text-base font-medium">
                Can I save and share my results?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes! You can save all visualizations to your device and share them with friends via social media, text, or email. You can also compare different options side-by-side before making decisions.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger className="text-left text-base font-medium">
                How is my data and privacy protected?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Your privacy is our priority. Photos are processed securely and deleted immediately after visualization. We don't store your images or personal data. All processing happens with enterprise-grade encryption and security measures.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
} 