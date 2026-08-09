import { FeatureGrid } from "./feature-grid"
import { features } from "../data/restaurant-data"

export function Features() {
  return (
    <FeatureGrid
      id="features"
      title="Built for How Restaurants"
      titleAccent="Actually Trade"
      subtitle="Everything the front of house needs on a busy night, without workarounds"
      items={features}
      className="bg-secondary/30"
    />
  )
}
