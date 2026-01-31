import { Search, Code, BarChart3, Share2, FileCheck, Link2, Zap, Smartphone, Server, Lock } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <section className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 leading-tight">
                  AJAY CHILUVERU
                </h1>
                <h2 className="text-2xl sm:text-3xl font-semibold bg-gradient-to-r from-blue-900 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
                  SEO-Focused Digital Marketing Professional | WordPress & Analytics
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  BCA graduate with hands-on exposure to SEO systems, WordPress website management,
                  analytics, and performance-driven digital marketing workflows.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <a href="#seo-section" className="px-8 py-3 bg-gradient-to-r from-blue-900 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg transition-shadow">
                  SEO & Website Skills
                </a>
                <button
                  onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
                  className="px-8 py-3 border-2 border-purple-600 text-purple-600 font-medium rounded-lg hover:bg-purple-50 transition-colors"
                >
                  Tools & Certifications
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="relative w-full h-80 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-purple-600 to-cyan-500 rounded-3xl opacity-10 blur-3xl"></div>
                <div className="relative bg-white p-12 rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <Code size={120} className="text-blue-900" strokeWidth={1.5} />
                  <div className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-600 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                    WordPress
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">About</h2>
          <div className="max-w-3xl mx-auto space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              As a BCA graduate, I bring a strong analytical mindset and systematic approach to
              digital marketing challenges. My academic background in computer applications provides
              a solid foundation for understanding technical SEO concepts and website architecture.
            </p>
            <p>
              My transition into digital marketing was driven by a deep interest in how search engines
              work and how websites can be optimized for better visibility. I focus on understanding
              SEO as a complete system—from keyword research and on-page optimization to technical
              implementation and performance tracking.
            </p>
            <p>
              I'm particularly interested in website performance, search visibility, and user behavior
              analysis. My approach is structured, data-driven, and focused on sustainable,
              white-hat optimization techniques that deliver long-term results.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Core Expertise</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Four Pillars of Digital Marketing Focus</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-900 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                <Search className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Search Engine Optimization</h3>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive SEO strategy including on-page, off-page, and technical optimization for improved search visibility.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                <Code className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">WordPress Website Management</h3>
              <p className="text-gray-600 leading-relaxed">
                Hands-on experience with WordPress CMS, Astra theme, Elementor page builder, and SEO plugin configuration.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-900 rounded-xl flex items-center justify-center mb-6">
                <BarChart3 className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Analytics & Performance Tracking</h3>
              <p className="text-gray-600 leading-relaxed">
                Proficient in Google Analytics (GA4), Search Console, and performance monitoring for data-driven decisions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-900 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                <Share2 className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Social Media & Content Support</h3>
              <p className="text-gray-600 leading-relaxed">
                Experience with Meta Business Suite, Buffer, Canva, and AI-based tools for content creation and scheduling.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="seo-section" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">SEO Master System</h2>
            <p className="text-xl text-gray-600">Understanding SEO as a Complete, Structured System</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl border-2 border-blue-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-900 to-purple-600 rounded-lg flex items-center justify-center">
                  <FileCheck className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">On-Page SEO</h3>
              </div>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <span>Keyword placement and optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <span>Meta titles & descriptions crafting</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <span>Heading structure (H1–H6)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <span>Internal linking strategy</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <span>Content optimization techniques</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-cyan-50 p-8 rounded-2xl border-2 border-purple-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-lg flex items-center justify-center">
                  <Link2 className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Off-Page SEO</h3>
              </div>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2"></div>
                  <span>Link building fundamentals</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2"></div>
                  <span>Authority & trust concepts</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2"></div>
                  <span>Brand signal development</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2"></div>
                  <span>Quality backlink strategies</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2"></div>
                  <span>Domain authority building</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-2xl border-2 border-cyan-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-900 rounded-lg flex items-center justify-center">
                  <Server className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Technical SEO</h3>
              </div>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-900 rounded-full mt-2"></div>
                  <span>Site speed & performance basics</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-900 rounded-full mt-2"></div>
                  <span>Mobile responsiveness</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-900 rounded-full mt-2"></div>
                  <span>Indexing & crawlability</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-900 rounded-full mt-2"></div>
                  <span>XML sitemaps configuration</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-900 rounded-full mt-2"></div>
                  <span>URL structure optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-900 rounded-full mt-2"></div>
                  <span>HTTPS & security basics</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">WordPress & Website Management</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Hands-on Exposure to Professional CMS Tools</p>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Zap className="text-purple-600" size={24} />
                  <h3 className="text-xl font-bold text-gray-900">WordPress CMS Fundamentals</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Practical experience working with WordPress content management system, including
                  post creation, page management, and content organization.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Code className="text-purple-600" size={24} />
                  <h3 className="text-xl font-bold text-gray-900">Astra Theme Customization</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Hands-on work with Astra theme—a lightweight, SEO-optimized theme known for
                  fast loading times and customization flexibility.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Smartphone className="text-purple-600" size={24} />
                  <h3 className="text-xl font-bold text-gray-900">Elementor Page Building</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Experience with Elementor drag-and-drop page builder for creating responsive,
                  professional layouts without coding.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Lock className="text-purple-600" size={24} />
                  <h3 className="text-xl font-bold text-gray-900">Plugin Handling & Performance</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Understanding of WordPress plugin ecosystem, SEO-friendly page structure,
                  and performance optimization awareness.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 border-2 border-purple-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">All in One SEO (AIOSEO)</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Specific hands-on experience with AIOSEO plugin for comprehensive WordPress SEO management:
              </p>
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Metadata handling & optimization</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Sitemap generation & submission</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">SEO audit & recommendations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
