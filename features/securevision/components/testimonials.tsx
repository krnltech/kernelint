import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Retail Manager",
      content:
        "SecureVision reduced theft incidents by 80% in just three months. The AI detection is incredibly accurate.",
      stars: 5,
    },
    {
      name: "Mike Rodriguez",
      role: "Warehouse Manager",
      content:
        "Best investment we made for facility safety. Real-time alerts have prevented multiple potential incidents.",
      stars: 5,
    },
    {
      name: "Emma Thompson",
      role: "Homeowner",
      content: "Finally, a security system that actually understands what it's monitoring. Peace of mind at last.",
      stars: 5,
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
            Trusted by Security <span className="text-primary">Professionals</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6">
              <div className="flex gap-1 mb-4">
                {Array(testimonial.stars)
                  .fill(0)
                  .map((_, i) => (
                    <Star key={i} size={16} className="fill-accent text-accent" />
                  ))}
              </div>
              <p className="text-foreground/70 mb-4 italic">"{testimonial.content}"</p>
              <div>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-foreground/60">{testimonial.role}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
