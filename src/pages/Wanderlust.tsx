import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CustomCursor from '../components/CustomCursor';

export default function Wanderlust() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden cursor-none">
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none"></div>
      
      <CustomCursor />
      <Navbar />

      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <a
            href="/works/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Works</span>
          </a>

          {/* Project Header */}
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Wanderlust Travel</h1>
            <div className="flex flex-wrap gap-4 mb-8">
              {['React', 'Framer Motion', 'TailwindCSS', 'Next.js'].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full bg-white/5 border border-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Project Image */}
          <div className="relative rounded-2xl overflow-hidden mb-12">
            <img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/aaed3f210891927.67191488c6720.png"
              alt="Wanderlust Travel Landing Page"
              className="w-full"
            />
          </div>

          {/* Project Description */}
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-6">
              <section>
                <h2 className="text-2xl font-bold mb-4">About</h2>
                <p className="text-gray-400 leading-relaxed">
                  Wanderlust is a modern travel landing page designed to inspire wanderers and adventure seekers. With its immersive visuals and intuitive interface, it showcases breathtaking destinations and curated travel experiences, making trip planning an enjoyable journey in itself.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                <ul className="space-y-3 text-gray-400">
                  <li>• Interactive destination explorer</li>
                  <li>• Smooth animations and transitions</li>
                  <li>• Integrated booking system</li>
                  <li>• Virtual tour previews</li>
                  <li>• Personalized travel recommendations</li>
                  <li>• Real-time weather updates</li>
                </ul>
              </section>
            </div>

            <div>
              <section>
                <h2 className="text-2xl font-bold mb-4">Timeline</h2>
                <p className="text-gray-400">
                  Project Duration: 6 weeks<br />
                  Completed: March 2024
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}