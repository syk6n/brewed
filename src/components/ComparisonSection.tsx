import React from 'react';
import { X, Zap, Crown, Clock, SmilePlus } from 'lucide-react';
import Logo from './Logo';

export default function ComparisonSection() {
  return (
    <section className="relative py-20 sm:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -left-1/4 top-1/4 w-1/2 h-1/2 bg-gradient-to-r from-purple-500/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute -right-1/4 bottom-1/4 w-1/2 h-1/2 bg-gradient-to-l from-pink-500/20 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-center gap-8 mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold">Other Agencies</h2>
          <div className="px-4 py-2 rounded-full bg-black/30 backdrop-blur-sm border border-white/10">
            <span className="text-gray-400">V/S</span>
          </div>
          <div className="w-32">
            <Logo />
          </div>
        </div>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Other Agencies */}
          <div className="group p-8 rounded-2xl bg-black/40 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:bg-black/50">
            <h3 className="text-2xl font-bold mb-8">Other Agencies</h3>
            <div className="space-y-6">
              {[
                'Lengthy Project Timelines',
                'High Level of Client Involvement',
                'Prioritize Aesthetics over Conversion',
                'Limited Availability for Client Support'
              ].map((item) => (
                <div key={item} className="flex items-center gap-4 text-gray-400">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center">
                    <X className="w-4 h-4 text-red-500" />
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Brewed Agency */}
          <div className="group p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:from-purple-500/20 hover:to-pink-500/20">
            <h3 className="text-2xl font-bold mb-8">Brewed Agency</h3>
            <div className="space-y-6">
              {[
                { text: 'Fast Project Completion in 1 Week', icon: Zap },
                { text: 'Less Client Time Involvement', icon: SmilePlus },
                { text: 'Design with Conversion as Intention', icon: Crown },
                { text: '24/7 Availability', icon: Clock }
              ].map(({ text, icon: Icon }) => (
                <div key={text} className="flex items-center gap-4 text-white group-hover:scale-105 transition-transform duration-300">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center transform transition-transform duration-300 group-hover:rotate-12">
                    <Icon className="w-4 h-4" />
                  </span>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}