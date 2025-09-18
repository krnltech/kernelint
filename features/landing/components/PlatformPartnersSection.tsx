"use client";

import { platformPartners } from "../data/landing-data";
import type { ClientLogo } from "../types";

interface PartnerLogoProps {
  partner: ClientLogo;
}

function PartnerLogo({ partner }: PartnerLogoProps) {
  const handleClick = () => {
    if (partner.website) {
      window.open(partner.website, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div
      className={`flex items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group ${
        partner.website ? 'cursor-pointer' : ''
      }`}
      onClick={handleClick}
    >
      <div className="w-24 h-16 flex items-center justify-center">
        <img
          src={partner.logo}
          alt={`${partner.name} logo`}
          className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300 filter grayscale group-hover:grayscale-0"
          onError={(e) => {
            // Fallback for broken images
            e.currentTarget.style.display = 'none';
            e.currentTarget.nextElementSibling?.classList.remove('hidden');
          }}
        />
        <div className="hidden w-24 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
          <span className="text-blue-600 font-semibold text-sm">{partner.name}</span>
        </div>
      </div>
    </div>
  );
}

export function PlatformPartnersSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Platforms We Work With
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We partner with industry-leading platforms to deliver cutting-edge AI and data solutions
          </p>
        </div>

        {/* Partners Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {platformPartners.map((partner, index) => (
              <PartnerLogo key={index} partner={partner} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}