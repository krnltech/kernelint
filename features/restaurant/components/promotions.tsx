import Image from "next/image"
import { FeatureGrid } from "./feature-grid"
import { adminDarkOnlyScreens, promotions } from "../data/restaurant-data"

export function Promotions() {
  return (
    <FeatureGrid
      id="promotions"
      title="Bring Customers"
      titleAccent="Back"
      subtitle="A full promotions and marketing stack built into the same system that takes the orders"
      items={promotions}
      className="bg-secondary/30"
    >
      <div className="grid md:grid-cols-3 gap-6 mt-16">
        {adminDarkOnlyScreens.map((screen) => (
          <figure key={screen.src}>
            <div className="rounded-xl overflow-hidden border border-border bg-muted shadow-sm">
              <Image
                src={`/products/restaurant/${screen.src}-dark.webp`}
                alt={screen.title}
                width={screen.width}
                height={screen.height}
                className="w-full h-auto"
              />
            </div>
            <figcaption className="mt-3 text-center text-sm">
              <span className="font-semibold">{screen.title}</span>
              <span className="block text-foreground/60 mt-1">{screen.caption}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </FeatureGrid>
  )
}
