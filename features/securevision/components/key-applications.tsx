import { Card } from "@/components/ui/card"

export function KeyApplications() {
  const applications = [
    {
      title: "Enhanced security",
      description:
        "Detects threats and unauthorized access in real-time, reducing response times and preventing incidents.",
    },
    {
      title: "Business and retail",
      description: "Monitors for theft, identifies unusual customer behavior, and analyzes foot traffic patterns.",
    },
    {
      title: "Public safety",
      description: "Helps monitor public spaces for potential dangers, like an unattended bag in a busy station.",
    },
    {
      title: "Traffic management",
      description: "Can be used to monitor traffic flow and detect incidents on roads and public transport.",
    },
    {
      title: "Critical infrastructure",
      description: "Provides an extra layer of security to monitor access to sensitive areas.",
    },
    {
      title: "Suspicious object detection",
      description: "Detect doubtful attitudes and potential harmful objects, bags, box etc. to secure your area.",
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
            Key <span className="text-primary">Applications</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Real-world use cases for AI-powered surveillance monitoring
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {applications.map((application, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition">
              <h3 className="text-lg font-semibold mb-2">{application.title}</h3>
              <p className="text-foreground/70">{application.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
