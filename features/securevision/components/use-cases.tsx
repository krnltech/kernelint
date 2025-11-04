import { Card } from "@/components/ui/card"
import { Home, ShoppingCart, Factory, Building2, Warehouse } from "lucide-react"

export function UseCases() {
  const useCases = [
    {
      icon: <Home className="w-12 h-12 text-accent" />,
      title: "Residential",
      description: "Protect your home with smart perimeter monitoring and intrusion detection",
    },
    {
      icon: <ShoppingCart className="w-12 h-12 text-accent" />,
      title: "Retail & Shops",
      description: "Prevent theft and monitor customer behavior with advanced video analytics",
    },
    {
      icon: <Warehouse className="w-12 h-12 text-accent" />,
      title: "Markets",
      description: "Real-time crowd monitoring and incident detection in high-traffic areas",
    },
    {
      icon: <Building2 className="w-12 h-12 text-accent" />,
      title: "Offices",
      description: "Access control integration and workplace safety monitoring solutions",
    },
    {
      icon: <Factory className="w-12 h-12 text-accent" />,
      title: "Industrial",
      description: "Safety compliance monitoring and equipment protection for facilities",
    },
  ]

  return (
    <section id="solutions" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
            Solutions for Every <span className="text-primary">Environment</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Tailored security solutions for residential, commercial, and industrial applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {useCases.map((useCase, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition flex flex-col items-center">
              <div className="mb-4">{useCase.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{useCase.title}</h3>
              <p className="text-sm text-foreground/70">{useCase.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
