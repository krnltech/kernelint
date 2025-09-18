"use client";

import { technicalCapabilities } from "../data/landing-data";
import type { TechnicalCapabilities } from "../types";

interface TechnologyLogoProps {
  name: string;
  logo: string;
}

function TechnologyLogo({ name, logo }: TechnologyLogoProps) {
  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 group">
      <div className="w-12 h-12 mb-2 flex items-center justify-center">
        <img
          src={logo}
          alt={`${name} logo`}
          className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
          onError={(e) => {
            // Fallback for broken images
            e.currentTarget.style.display = 'none';
            e.currentTarget.nextElementSibling?.classList.remove('hidden');
          }}
        />
        <div className="hidden w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
          <span className="text-blue-600 font-semibold text-xs">{name.charAt(0)}</span>
        </div>
      </div>
      <span className="text-sm font-medium text-gray-700 text-center">{name}</span>
    </div>
  );
}

interface TechnicalCategorySectionProps {
  title: string;
  technologies: Array<{ name: string; logo: string }>;
}

function TechnicalCategorySection({ title, technologies }: TechnicalCategorySectionProps) {
  return (
    <div className="mb-12">
      <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">{title}</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {technologies.map((tech, index) => (
          <TechnologyLogo key={index} name={tech.name} logo={tech.logo} />
        ))}
      </div>
    </div>
  );
}

export function TechnicalCapabilitiesSection() {
  const data: TechnicalCapabilities = technicalCapabilities;

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            {data.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {data.description}
          </p>
        </div>

        {/* Technical Categories Grid */}
        <div className="max-w-7xl mx-auto">
          {data.categories.map((category, index) => (
            <TechnicalCategorySection
              key={index}
              title={category.title}
              technologies={category.technologies}
            />
          ))}
        </div>
      </div>
    </section>
  );
}