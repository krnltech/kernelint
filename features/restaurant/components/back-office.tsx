import { FeatureGrid } from "./feature-grid"
import { backOffice } from "../data/restaurant-data"

export function BackOffice() {
  return (
    <FeatureGrid
      id="back-office"
      title="A Back Office That Knows Your"
      titleAccent="Margins"
      subtitle="Stock, waste, expenses and reporting joined up, so profitability is a number you can see rather than a number you estimate"
      items={backOffice}
    />
  )
}
