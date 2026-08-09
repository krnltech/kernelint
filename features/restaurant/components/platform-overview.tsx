import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"
import { surfaces } from "../data/restaurant-data"

export function PlatformOverview() {
  return (
    <section id="platform" className="py-20 md:py-32 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
            Four Applications, <span className="text-primary">One System</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Each one is built for the people who use it, and all of them share the same menu, stock and order
            data in real time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {surfaces.map((surface) => (
            <Card key={surface.title} className="p-8 hover:shadow-lg transition">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <surface.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{surface.title}</h3>
              <p className="text-foreground/70 mb-6">{surface.description}</p>
              <ul className="space-y-2">
                {surface.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-foreground/70">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
