import { Search, TrendingUp, BarChart3, Share2, Calendar, Palette, Sparkles, Award, CheckCircle } from 'lucide-react';

export default function Skills() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Skills, Tools & Certifications</h1>
          <p className="text-xl text-gray-600">Structured Learning & Professional Tool Expertise</p>
        </div>

        <section className="mb-20">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-gradient-to-r from-blue-900 to-purple-600 rounded-xl flex items-center justify-center">
                <Search className="text-white" size={28} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Keyword Research Tools</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl border-2 border-blue-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Ubersuggest</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-purple-600 flex-shrink-0 mt-0.5" />
                    <span>Keyword discovery & suggestions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-purple-600 flex-shrink-0 mt-0.5" />
                    <span>Search volume analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-purple-600 flex-shrink-0 mt-0.5" />
                    <span>Competitive difficulty scoring</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-cyan-50 p-6 rounded-xl border-2 border-purple-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">SEMrush</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-cyan-500 flex-shrink-0 mt-0.5" />
                    <span>Comprehensive keyword research</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-cyan-500 flex-shrink-0 mt-0.5" />
                    <span>Competitor analysis insights</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-cyan-500 flex-shrink-0 mt-0.5" />
                    <span>SERP position tracking</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-xl border-2 border-cyan-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Google Keyword Planner</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-blue-900 flex-shrink-0 mt-0.5" />
                    <span>Official Google search data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-blue-900 flex-shrink-0 mt-0.5" />
                    <span>Monthly search volume trends</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-blue-900 flex-shrink-0 mt-0.5" />
                    <span>Bid estimates & competition</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-r from-blue-900 to-purple-600 text-white p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">Keyword Research Application</h3>
              <div className="grid sm:grid-cols-3 gap-4 text-sm">
                <div className="flex items-start gap-2">
                  <TrendingUp size={18} className="flex-shrink-0 mt-0.5" />
                  <span>Understanding keyword intent (informational, commercial, transactional)</span>
                </div>
                <div className="flex items-start gap-2">
                  <TrendingUp size={18} className="flex-shrink-0 mt-0.5" />
                  <span>Analyzing search volume & competition metrics</span>
                </div>
                <div className="flex items-start gap-2">
                  <TrendingUp size={18} className="flex-shrink-0 mt-0.5" />
                  <span>Planning SEO content strategy based on data</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-xl flex items-center justify-center">
                <BarChart3 className="text-white" size={28} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Analytics & SEO Tracking</h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl border-2 border-blue-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Search Console</h3>
                <p className="text-gray-600 mb-6">
                  Essential tool for monitoring website presence in Google Search results and identifying
                  optimization opportunities.
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                    <div>
                      <span className="font-semibold">Performance Reports:</span> Track clicks, impressions,
                      CTR, and average position for search queries
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                    <div>
                      <span className="font-semibold">Search Queries:</span> Analyze which keywords drive
                      traffic to your website
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                    <div>
                      <span className="font-semibold">Indexing Status:</span> Monitor page indexing and
                      resolve crawl errors
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                    <div>
                      <span className="font-semibold">SEO Visibility Analysis:</span> Understand how Google
                      sees and ranks your content
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-cyan-50 p-8 rounded-xl border-2 border-purple-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Analytics (GA4)</h3>
                <p className="text-gray-600 mb-6">
                  Understanding modern analytics concepts for measuring user behavior and website performance.
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2"></div>
                    <div>
                      <span className="font-semibold">User Flow:</span> Visualizing how visitors navigate
                      through website pages
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2"></div>
                    <div>
                      <span className="font-semibold">Navigation Paths:</span> Understanding common user
                      journeys and behavior patterns
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2"></div>
                    <div>
                      <span className="font-semibold">Engagement Metrics:</span> Tracking time on page,
                      bounce rate, and session duration
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2"></div>
                    <div>
                      <span className="font-semibold">Traffic Analysis Basics:</span> Understanding source,
                      medium, and campaign performance
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-900 rounded-xl flex items-center justify-center">
                <Share2 className="text-white" size={28} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Social Media & Content Tools</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl border border-blue-200">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-900 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <Share2 className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Meta Business Suite</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Unified platform for managing Facebook & Instagram presence
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-1.5"></div>
                    <span>Post scheduling & publishing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-1.5"></div>
                    <span>Basic performance monitoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-1.5"></div>
                    <span>Engagement tracking</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-cyan-50 p-6 rounded-xl border border-purple-200">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Buffer</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Social media scheduling tool for content consistency
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-1.5"></div>
                    <span>Multi-platform scheduling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-1.5"></div>
                    <span>Content calendar management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-1.5"></div>
                    <span>Optimal timing suggestions</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-xl border border-cyan-200">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-900 rounded-lg flex items-center justify-center mb-4">
                  <Palette className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Canva</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Design tool for creating visual content
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-900 rounded-full mt-1.5"></div>
                    <span>Social media graphics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-900 rounded-full mt-1.5"></div>
                    <span>Thumbnail creation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-900 rounded-full mt-1.5"></div>
                    <span>Template customization</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl border border-blue-200">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-900 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <Sparkles className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">AI-Based Prompting</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Leveraging AI tools for content productivity
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-1.5"></div>
                    <span>Image ideation & concepts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-1.5"></div>
                    <span>Content structuring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-1.5"></div>
                    <span>Workflow productivity support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="bg-gradient-to-r from-blue-900 via-purple-600 to-cyan-500 rounded-2xl shadow-2xl p-8 md:p-12 text-white">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <Award className="text-white" size={32} />
              </div>
              <h2 className="text-4xl font-bold">Certifications</h2>
            </div>

            <p className="text-xl mb-8 text-white/90">
              Verified Learning & Structured Skill Development
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Google Certified</h3>
                    <p className="text-white/90 leading-relaxed">
                      Completed Google Digital Marketing Certifications covering fundamental concepts
                      in search, display, analytics, and digital marketing strategy.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">ODMT Certified</h3>
                    <p className="text-white/90 leading-relaxed">
                      Certification demonstrating comprehensive understanding of digital marketing tools,
                      tactics, and best practices in modern online marketing.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-bold mb-3">Certification Value</h3>
              <div className="grid sm:grid-cols-3 gap-4 text-sm">
                <div className="flex items-start gap-2">
                  <CheckCircle size={18} className="flex-shrink-0 mt-0.5" />
                  <span>Foundation-backed expertise from recognized authorities</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle size={18} className="flex-shrink-0 mt-0.5" />
                  <span>Structured, systematic approach to learning digital marketing</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle size={18} className="flex-shrink-0 mt-0.5" />
                  <span>Verified knowledge of industry-standard practices</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="mt-16 text-center">
          <div className="inline-block bg-white rounded-2xl shadow-lg p-8">
            <p className="text-lg text-gray-700 mb-4">
              Ready to contribute to SEO and digital marketing success
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <span className="px-4 py-2 bg-gradient-to-r from-blue-900 to-purple-600 text-white rounded-full text-sm font-medium">
                SEO-First Approach
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-500 text-white rounded-full text-sm font-medium">
                Data-Driven Mindset
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-900 text-white rounded-full text-sm font-medium">
                Continuous Learning
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
