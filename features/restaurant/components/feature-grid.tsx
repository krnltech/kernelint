import { Card } from "@/components/ui/card"
import type { FeatureItem } from "../data/restaurant-data"

interface FeatureGridProps {
  id?: string
  /** Heading text rendered before the accented fragment */
  title: string
  /** Trailing fragment of the heading, rendered in the primary colour */
  titleAccent: string
  subtitle: string
  items: FeatureItem[]
  className?: string
  /** Optional content rendered below the grid, inside the same section */
  children?: React.ReactNode
}

/**
 * Shared layout for the four list-style sections (features, back office,
 * promotions, staff). Keeps the section markup in one place so the cards stay
 * consistent as copy changes.
 */
export function FeatureGrid({
  id,
  title,
  titleAccent,
  subtitle,
  items,
  className,
  children,
}: FeatureGridProps) {
  return (
    <section id={id} className={`py-20 md:py-32 ${className ?? ""}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
            {title} <span className="text-primary">{titleAccent}</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <Card key={item.title} className="p-6 hover:shadow-lg transition">
              <div className="w-10 h-10 rounded-full bg-primary/20 mb-4 flex items-center justify-center">
                <span className="text-primary font-bold">{index + 1}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-foreground/70">{item.description}</p>
            </Card>
          ))}
        </div>

        {children}
      </div>
    </section>
  )
}
