export function StructuredData() {
  const appSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "HOWDTHATLOOK",
    "applicationCategory": "PhotoApplication",
    "operatingSystem": "iOS",
    "description": "AI-powered photo transformation app that creates professional headshots, anime art, restores old photos, and previews interior designs in under 5 minutes.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "description": "5 FREE AI transformations included"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "ratingCount": "1000"
    },
    "author": {
      "@type": "Organization",
      "name": "HOWDTHATLOOK Team"
    },
    "downloadUrl": "https://apps.apple.com/app/howdthatlook",
    "featureList": [
      "Professional LinkedIn Headshots",
      "Anime Art Creation",
      "Photo Restoration",
      "Interior Design Preview",
      "AI-powered transformations",
      "5 FREE credits included"
    ]
  }

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "HOWDTHATLOOK",
    "description": "AI photo transformation platform offering professional headshots, creative art, and photo restoration services.",
    "url": "https://howdthatlook.com",
    "logo": "https://howdthatlook.com/howdthatlook-icon.png",
    "sameAs": [
      "https://apps.apple.com/app/howdthatlook"
    ]
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI Photo Transformation Services",
    "description": "Professional AI-powered photo editing services including LinkedIn headshots, anime art creation, photo restoration, and interior design visualization.",
    "provider": {
      "@type": "Organization",
      "name": "HOWDTHATLOOK"
    },
    "serviceType": "Photo Editing",
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Photo Transformation Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "LinkedIn Headshots",
            "description": "Professional AI-generated headshots perfect for LinkedIn profiles"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Anime Art Creation",
            "description": "Transform photos into beautiful anime-style artwork"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Photo Restoration",
            "description": "Restore damaged or faded family photos using AI"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Interior Design Preview",
            "description": "Visualize furniture and decor changes in your space"
          }
        }
      ]
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  )
}