import { Card } from "@/components/ui/card"
import { useCases } from "../data/restaurant-data"

export function UseCases() {
  return (
    <section id="solutions" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
            Fits the Way <span className="text-primary">You Operate</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            From a single counter to a multi-branch group running delivery at scale
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((useCase) => (
            <Card key={useCase.title} className="p-6 text-center hover:shadow-lg transition flex flex-col items-center">
              <div className="mb-4">
                <useCase.icon className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{useCase.title}</h3>
              <p className="text-sm text-foreground/70">{useCase.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
