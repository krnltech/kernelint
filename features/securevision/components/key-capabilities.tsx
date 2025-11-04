import { Card } from "@/components/ui/card"

export function KeyCapabilities() {
  const capabilities = [
    {
      title: "Facial recognition",
      description: "Identifies known individuals or people on a watchlist.",
    },
    {
      title: "Object detection",
      description: "Locates and tracks specific objects, such as vehicles, or potential threats like weapons.",
    },
    {
      title: "Anomaly detection",
      description: "Flags unusual or out-of-the-ordinary events that do not conform to normal patterns.",
    },
    {
      title: "Customizable detection",
      description:
        "Allows for the configuration of specific trip wires or rules, such as detecting anyone crossing a specific line in a particular direction.",
    },
    {
      title: "Crowd analysis",
      description: "Get alert when your area getting fill by uncontrolled crowds.",
    },
    {
      title: "Vehicle detection",
      description:
        "Vehicle Plate, Brand & Model, Color Detection - Access control of vehicles with their plate and other features to prevent violation and fraud.",
    },
  ]

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
            Key <span className="text-primary">Capabilities</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Powerful features designed for comprehensive security monitoring
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((capability, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition">
              <h3 className="text-lg font-semibold mb-2">{capability.title}</h3>
              <p className="text-foreground/70">{capability.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
