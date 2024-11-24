import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CustomCursor from '../components/CustomCursor';

const pricingTiers = [
  {
    badge: 'Starter',
    name: 'Digital Ads',
    description: 'Perfect for anyone only looking for fresh social media ad creatives and short videos for online advertising or daily content, all day everyday.',
    price: '399',
    features: [
      'Carousel Ads',
      'Social Media Ads',
      'Google Display Ads',
      'Stories Graphics',
      'Custom Illustrations',
      'Photo Editing',
      'Short Videos <60s'
    ],
    trial: '7 days free trial',
    cancelText: 'Pause or cancel anytime.'
  },
  {
    badge: 'Best Value',
    name: 'Marketing',
    description: 'Ideal for those seeking branding services or a brand refresh, along with marketing materials like social media ads, Ecommerce assets, and landing pages.',
    price: '499',
    features: [
      'Everything in Previous Tier',
      'Logo & Brand Design',
      'Ecommerce Graphics',
      'Listing Images',
      'Email Templates',
      'Landing Page Design',
      'Book & Album Covers'
    ],
    trial: '7 days free trial',
    cancelText: 'Pause or cancel anytime.',
    highlight: true
  },
  {
    badge: 'Everything',
    name: 'Full Service',
    description: 'Ideal for anyone requiring a versatile service capable of handling projects across various mediums, including digital, print, web, 3D design, etc.',
    price: '699',
    features: [
      'Everything in Previous Tier',
      'Video Editing <10m',
      'Packaging & Label Design',
      'Print Media Design',
      'T-Shirt & Merchandise Design',
      'UI/UX Design',
      '3D Design and Render'
    ],
    trial: '7 days free trial',
    cancelText: 'Pause or cancel anytime.'
  }
];

export default function Pricing() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden">
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none"></div>
      
      <CustomCursor />
      <Navbar />

      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Simple,{' '}
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                Transparent
              </span>{' '}
              Pricing
            </h1>
            <p className="text-gray-400 text-lg">
              Choose the perfect plan for your design needs. All plans include unlimited design requests and revisions.
            </p>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className={`relative flex flex-col h-full p-8 bg-black/40 backdrop-blur-sm rounded-2xl transition-all duration-300 hover:transform hover:scale-[1.02] ${
                  tier.highlight
                    ? 'ring-2 ring-purple-500 bg-[#1a1333]'
                    : 'ring-1 ring-white/10'
                }`}
              >
                {/* Badge */}
                <div className={`inline-flex self-start px-3 py-1 rounded-full text-sm font-medium mb-6 ${
                  tier.highlight
                    ? 'bg-purple-500 text-white'
                    : 'bg-white/10 text-gray-300'
                }`}>
                  {tier.badge}
                </div>

                {/* Title & Description */}
                <h2 className="text-2xl font-bold mb-2">{tier.name}</h2>
                <p className="text-gray-400 mb-6">{tier.description}</p>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-5xl font-bold">${tier.price}</span>
                    <span className="ml-2 text-gray-400">/month</span>
                  </div>
                  <p className="mt-2 text-purple-400">{tier.trial}</p>
                  <p className="text-sm text-gray-400">{tier.cancelText}</p>
                </div>

                {/* Features */}
                <div className="flex-grow">
                  <p className="text-sm font-semibold text-purple-400 mb-4">Services</p>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-purple-500" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button className="group relative w-full px-6 py-3 text-base font-medium rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-black">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    See Pricing Details
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}