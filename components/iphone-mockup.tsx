import Image from "next/image"
import { cn } from "@/lib/utils"

interface IPhoneMockupProps {
  className?: string
  imageSrc?: string
  imageAlt?: string
  isAnimated?: boolean
}

export function IPhoneMockup({ 
  className, 
  imageSrc = "/transformation-demo.gif", 
  imageAlt = "AI transformation demo showing before and after results",
  isAnimated = false 
}: IPhoneMockupProps) {
  return (
    <div className={cn("relative w-[280px] mx-auto", className)}>
      {/* iPhone frame container */}
      <div className="relative bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
        {/* Screen area */}
        <div className="bg-black rounded-[2rem] p-1">
          {/* Actual screen content */}
          <div className="bg-white rounded-[1.5rem] overflow-hidden relative" style={{ aspectRatio: '9/19.5' }}>
            {/* Dynamic notch */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-black rounded-b-xl w-20 h-6 z-10"></div>
            
            {/* Screenshot or animated content */}
            <div className="h-full w-full relative">
              {isAnimated ? (
                // For animated GIFs, use regular img tag to preserve animation
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  className="object-cover w-full h-full"
                  style={{ width: '100%', height: '100%' }}
                />
              ) : (
                // For static images, use Next.js Image component
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  width={300}
                  height={600}
                  className="object-cover w-full h-full"
                  priority
                />
              )}
            </div>
          </div>
        </div>
        
        {/* Home indicator */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-700 rounded-full"></div>
      </div>
    </div>
  )
}