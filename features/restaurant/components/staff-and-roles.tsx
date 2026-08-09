import { Card } from "@/components/ui/card"
import { staffAndRoles } from "../data/restaurant-data"

export function StaffAndRoles() {
  return (
    <section id="staff" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
            Control Over <span className="text-primary">Who Does What</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Granular permissions and a complete audit trail across every branch and every terminal
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {staffAndRoles.map((item) => (
            <Card key={item.title} className="p-6 hover:shadow-lg transition">
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-foreground/70">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
