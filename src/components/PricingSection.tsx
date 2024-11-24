import React from 'react';
import { Check, Zap } from 'lucide-react';

const pricingTiers = {
  development: [
    {
      name: 'Starter Web',
      price: '999',
      description: 'Perfect for small businesses needing a professional web presence',
      features: [
        'Responsive Single Page Website',
        'Basic SEO Optimization',
        'Mobile-Friendly Design',
        '2 Weeks Development Time',
        '1 Round of Revisions',
        'Basic Contact Form',
        'SSL Security Integration',
      ],
      isPopular: false,
    },
    {
      name: 'Professional Web',
      price: '2,499',
      description: 'Ideal for growing businesses needing advanced functionality',
      features: [
        'Multi-Page Custom Website',
        'Advanced SEO Optimization',
        'E-commerce Integration',
        'Responsive Design',
        '4 Weeks Development Time',
        '2 Rounds of Revisions',
        'Content Management System',
        'Social Media Integration',
        'Performance Optimization',
        'Google Analytics Setup',
      ],
      isPopular: true,
    },
    {
      name: 'Enterprise Web',
      price: '4,999',
      description: 'Full-scale web applications with advanced features',
      features: [
        'Full Custom Web Application',
        'Advanced Custom Backend',
        'Enterprise-Level SEO',
        'Complex Functionality',
        '8 Weeks Development Time',
        'Unlimited Revisions',
        'Custom CRM Integration',
        'Advanced Security Protocols',
        'Dedicated Support',
        'Performance Monitoring',
        'Scalable Architecture',
        'API Development',
        'Custom Dashboard',
      ],
      isPopular: false,
    },
  ],
  design: [
    {
      name: 'Starter Design',
      price: '799',
      description: 'Essential branding package for new businesses',
      features: [
        'Basic Brand Identity',
        'Logo Design',
        'Simple Brand Guidelines',
        '2 Initial Concepts',
        'Source Files',
      ],
      isPopular: false,
    },
    {
      name: 'Professional Design',
      price: '1,999',
      description: 'Complete brand presence for established businesses',
      features: [
        'Comprehensive Brand Identity',
        'Logo Design & Variations',
        'Extended Brand Guidelines',
        'Social Media Package',
        '3-5 Concept Iterations',
        'Marketing Templates',
      ],
      isPopular: true,
    },
    {
      name: 'Premium Design',
      price: '3,999',
      description: 'Full brand ecosystem for enterprise clients',
      features: [
        'Full Brand Ecosystem',
        'Complete Identity System',
        'Extensive Logo Variations',
        'Comprehensive Guidelines',
        'Unlimited Iterations',
        'Marketing Collateral',
        'Brand Strategy Session',
      ],
      isPopular: false,
    },
  ],
};

type PricingCardProps = {
  tier: {
    name: string;
    price: string;
    description: string;
    features: string[];
    isPopular: boolean;
  };
};

const PricingCard = ({ tier }: PricingCardProps) => (
  <div className={`relative flex flex-col h-full p-8 bg-black/40 backdrop-blur-sm rounded-2xl transition-all duration-300 hover:transform hover:scale-[1.02] hover:bg-black/50 ${
    tier.isPopular ? 'ring-2 ring-purple-500' : 'ring-1 ring-white/10'
  }`}>
    {tier.isPopular && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-purple-500 rounded-full text-sm font-medium">
        Most Popular
      </div>
    )}

    <div className="mb-6">
      <h3 className="text-2xl font-bold">{tier.name}</h3>
      <p className="mt-2 text-gray-400">{tier.description}</p>
    </div>

    <div className="mb-6">
      <div className="flex items-baseline">
        <span className="text-4xl font-bold">${tier.price}</span>
        <span className="ml-2 text-gray-400">/project</span>
      </div>
    </div>

    <ul className="flex-grow space-y-4 mb-8">
      {tier.features.map((feature) => (
        <li key={feature} className="flex items-center gap-3">
          <Check className="w-5 h-5 text-purple-500 flex-shrink-0" />
          <span className="text-gray-300">{feature}</span>
        </li>
      ))}
    </ul>

    <a
      href="https://calendly.com/sayankunduatwork/30min"
      target="_blank"
      rel="noopener noreferrer"
      className="group relative w-full px-6 py-3 text-base font-medium rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-black"
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        Get Started
        <Zap className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" />
      </span>
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </a>
  </div>
);

export default function PricingSection() {
  return (
    <section className="relative py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Transparent Pricing for{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Every Need
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Choose the perfect package for your project. No hidden fees, just clear value.
          </p>
        </div>

        {/* Development Pricing */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-12">Web Development Solutions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.development.map((tier) => (
              <PricingCard key={tier.name} tier={tier} />
            ))}
          </div>
        </div>

        {/* Design Pricing */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-12">Design Solutions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.design.map((tier) => (
              <PricingCard key={tier.name} tier={tier} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}