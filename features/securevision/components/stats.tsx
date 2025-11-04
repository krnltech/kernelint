export function Stats() {
  const stats = [
    { value: "99.9%", label: "Uptime Guarantee" },
    { value: "< 100ms", label: "Detection Latency" },
    { value: "50K+", label: "Active Installations" },
    { value: "24/7", label: "Expert Support" },
  ]

  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-primary-foreground/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
