import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CustomCursor from '../components/CustomCursor';

export default function MemeCoin() {
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
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">DogeMoon Token</h1>
            <div className="flex flex-wrap gap-4 mb-8">
              {['React', 'Web3.js', 'TailwindCSS', 'Framer Motion'].map((tag) => (
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
              src="https://mir-cdn.behance.net/v1/rendition/project_modules/max_3840_webp/d659de210236081.670e04c82d16a.png"
              alt="DogeMoon Token Landing Page"
              className="w-full"
            />
          </div>

          {/* Project Description */}
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-6">
              <section>
                <h2 className="text-2xl font-bold mb-4">About</h2>
                <p className="text-gray-400 leading-relaxed">
                  DogeMoon is a community-driven meme token project that combines humor with blockchain technology. The landing page showcases the token's unique value proposition, tokenomics, and roadmap in an engaging and visually appealing way.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                <ul className="space-y-3 text-gray-400">
                  <li>• Interactive token statistics dashboard</li>
                  <li>• Real-time price chart integration</li>
                  <li>• Animated roadmap visualization</li>
                  <li>• Community engagement features</li>
                  <li>• Multi-wallet connection support</li>
                  <li>• Token swap interface</li>
                  <li>• Tokenomics visualization</li>
                </ul>
              </section>
            </div>

            <div>
              <section>
                <h2 className="text-2xl font-bold mb-4">Timeline</h2>
                <p className="text-gray-400">
                  Project Duration: 3 weeks<br />
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