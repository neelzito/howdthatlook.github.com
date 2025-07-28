"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQSection() {
  return (
    <section id="faq" className="bg-background py-16 md:py-24">
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
                Our AI provides highly realistic visualizations with over 95% accuracy for standard features. We use advanced models trained on millions of images to ensure quality results.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left text-base font-medium">
                What can I create with how'dthatlook?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                You can create:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Professional LinkedIn headshots (18 styles)</li>
                  <li>Anime & creative art</li>
                  <li>Restored family photos</li>
                  <li>Interior design previews</li>
                  <li>Enhanced photos, object removal, and videos</li>
                </ul>
                All powered by advanced AI.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left text-base font-medium">
                How much does it cost?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                The app is free to download and includes <b>5 FREE credits</b> ($15 value). After that, purchase credits as you go - no subscriptions.
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>25 credits: €3.99</li>
                  <li>100 credits: €17.99</li>
                  <li>500 credits: €79.99</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left text-base font-medium">
                How do I take the best photo for visualization?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                For best results:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Use good, even lighting.</li>
                  <li>Face the camera directly for portraits.</li>
                  <li>Capture the full space for interior design.</li>
                  <li>Avoid extreme angles and cluttered backgrounds.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left text-base font-medium">
                Can I save and share my results?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes! Save visualizations to your device, share them with friends, and compare different options side-by-side.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger className="text-left text-base font-medium">
                How is my data and privacy protected?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Your privacy is our top priority. Your photos are processed securely and deleted immediately after use. We do not store your images or personal data.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
} 