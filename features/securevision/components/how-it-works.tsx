import { Card } from "@/components/ui/card"

export function HowItWorks() {
  const steps = [
    {
      title: "Real-time video analysis",
      description:
        "AI software processes live video feeds instantly, rather than waiting for footage to be reviewed manually.",
    },
    {
      title: "Object and behavior recognition",
      description:
        "Algorithms can be trained to recognize specific objects (like weapons), identify suspicious activities (like loitering or aggression), and track movement.",
    },
    {
      title: "Proactive alerts",
      description:
        "When the system detects an anomaly or threat, it sends real-time alerts to security personnel, allowing for immediate intervention.",
    },
    {
      title: "Pattern recognition",
      description:
        "AI can identify patterns over time, allowing it to learn and adapt to specific environments and detect subtle changes that might be missed by humans.",
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Our advanced AI-powered computer vision system delivers intelligent surveillance
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-foreground/70">{step.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
