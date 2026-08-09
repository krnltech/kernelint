import { ArrowRight, Boxes, Check } from "lucide-react";
import Link from "next/link";
import { products } from "../data/landing-data";

export function ProductsSection() {
  return (
    <section
      id="products"
      className="py-28 bg-gradient-to-br from-white via-slate-50 to-primary/5 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            <Boxes size={16} />
            Our Products
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Software We
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent"> Built and Ship</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Alongside our consultancy work, we develop and maintain our own platforms —
            production systems running real businesses today.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <Link
              key={product.name}
              href={product.href}
              className="group relative bg-white/80 backdrop-blur-sm p-8 md:p-10 rounded-3xl border border-gray-200/50 hover:border-primary/20 transition-all duration-700 transform hover:-translate-y-3 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Card shadow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-lg group-hover:shadow-2xl transition-shadow duration-500"></div>

              {/* Content */}
              <div className="relative z-10">
                <div className={`bg-gradient-to-br ${getProductGradient(product.color)} w-20 h-20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg mb-8`}>
                  <product.icon className="text-white drop-shadow-sm" size={36} />
                </div>

                <div className="text-sm font-mono tracking-wider text-gray-500 mb-2">
                  {product.tagline}
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed text-base">
                  {product.description}
                </p>

                <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                  {product.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2 text-sm text-gray-600">
                      <Check size={16} className="text-primary flex-shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all duration-300">
                  Explore {product.name}
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// Helper function to get product gradients
function getProductGradient(color: string) {
  const gradients = {
    primary: "from-primary via-primary/90 to-primary/80",
    blue: "from-blue-500 via-blue-600 to-blue-700",
    green: "from-green-500 via-green-600 to-green-700",
    purple: "from-purple-500 via-purple-600 to-purple-700",
    rose: "from-rose-500 via-rose-600 to-rose-700",
    amber: "from-amber-500 via-amber-600 to-amber-700",
  };

  return gradients[color as keyof typeof gradients] || gradients.primary;
}
