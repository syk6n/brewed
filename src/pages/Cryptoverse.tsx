import React from 'react';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CustomCursor from '../components/CustomCursor';

export default function CryptoVerse() {
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
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">CryptoVerse Web3</h1>
            <div className="flex flex-wrap gap-4 mb-8">
              {['React', 'Web3.js', 'Solidity', 'TailwindCSS'].map((tag) => (
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
              src="https://cdn.dribbble.com/userupload/16429289/file/original-d4cab2b8e55cff9f4973e0a630dfc4cb.png?resize=752x&vertical=center"
              alt="CryptoVerse Web3"
              className="w-full"
            />
          </div>

          {/* Project Description */}
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-6">
              <section>
                <h2 className="text-2xl font-bold mb-4">About</h2>
                <p className="text-gray-400 leading-relaxed">
                  A little exploration inspired by Halo Lab about crypto web3. A decentralized platform empowering users with secure, transparent crypto solutions. Seamlessly explore DeFi, NFTs, and blockchain technology with ultimate control over your digital assets.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                <ul className="space-y-3 text-gray-400">
                  <li>• Decentralized cryptocurrency exchange</li>
                  <li>• NFT marketplace integration</li>
                  <li>• Real-time blockchain analytics</li>
                  <li>• Secure wallet management</li>
                  <li>• Smart contract interaction</li>
                </ul>
              </section>
            </div>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4">Project Links</h2>
                <div className="space-y-4">
                  <a
                    href="#"
                    className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span>Source Code</span>
                  </a>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Timeline</h2>
                <p className="text-gray-400">
                  Project Duration: 3 months<br />
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