import { Card } from "@/components/ui/card"

export function Features() {
  const features = [
    {
      title: "Real-Time Video Analysis",
      description:
        "AI software processes live video feeds instantly, rather than waiting for footage to be reviewed manually.",
    },
    {
      title: "Advanced Detection",
      description:
        "Recognize specific objects like weapons, identify suspicious activities like loitering or aggression, and track movement.",
    },
    {
      title: "Instant Threat Response",
      description:
        "Send real-time alerts to security personnel when anomalies or threats are detected, enabling immediate intervention.",
    },
    {
      title: "Restricted Area Control",
      description:
        "Monitor and control access to restricted areas for people, vehicles, animals and more with customizable rules.",
    },
    {
      title: "Smart Pattern Learning",
      description:
        "AI identifies patterns over time, learns and adapts to specific environments, and detects subtle changes.",
    },
    {
      title: "Intelligent Analytics",
      description: "Comprehensive reports and insights for security optimization across all monitored locations.",
    },
  ]

  return (
    <section id="features" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
            Powerful Features for <span className="text-primary">Complete Protection</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Our AI-powered platform delivers comprehensive security monitoring across all environments
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition">
              <div className="w-10 h-10 rounded-full bg-primary/20 mb-4 flex items-center justify-center">
                <span className="text-primary font-bold">{index + 1}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-foreground/70">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
