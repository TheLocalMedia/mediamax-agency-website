import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <Image
                src="/1.png"
                alt="MediaMax Logo"
                width={50}
                height={50}
                className="rounded-lg"
              />
              <h1 className="text-2xl font-bold text-gray-900">MediaMax</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Digital Marketing
            <span className="text-blue-600 block">Excellence</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Transform your brand with our comprehensive digital marketing solutions. 
            We specialize in social media management, content creation, and digital advertising 
            that drives real results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Get Started Today
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              View Our Work
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h3>
            <p className="text-xl text-gray-600">Comprehensive digital marketing solutions for your business</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors">
              <div className="w-16 h-16 bg-blue-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">📱</span>
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Social Media Management</h4>
              <p className="text-gray-600">
                Strategic social media campaigns that engage your audience and build brand loyalty across all platforms.
              </p>
            </div>
            
            <div className="text-center p-8 rounded-lg bg-indigo-50 hover:bg-indigo-100 transition-colors">
              <div className="w-16 h-16 bg-indigo-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">✍️</span>
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Content Creation</h4>
              <p className="text-gray-600">
                Compelling content that tells your story and connects with your target audience across all channels.
              </p>
            </div>
            
            <div className="text-center p-8 rounded-lg bg-purple-50 hover:bg-purple-100 transition-colors">
              <div className="w-16 h-16 bg-purple-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">📊</span>
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Digital Advertising</h4>
              <p className="text-gray-600">
                Data-driven advertising campaigns that maximize ROI and drive qualified leads to your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold text-gray-900 mb-6">Why Choose MediaMax?</h3>
              <p className="text-lg text-gray-600 mb-6">
                With over a decade of experience in digital marketing, we understand what it takes 
                to build successful brands in the digital age. Our team of experts combines creativity 
                with data-driven strategies to deliver exceptional results.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm">✓</span>
                  </span>
                  <span className="text-gray-700">10+ Years of Industry Experience</span>
                </li>
                <li className="flex items-center">
                  <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm">✓</span>
                  </span>
                  <span className="text-gray-700">500+ Successful Campaigns</span>
                </li>
                <li className="flex items-center">
                  <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm">✓</span>
                  </span>
                  <span className="text-gray-700">24/7 Customer Support</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-8 text-white">
              <h4 className="text-2xl font-bold mb-4">Ready to Get Started?</h4>
              <p className="mb-6">
                Join hundreds of satisfied clients who have transformed their digital presence with MediaMax.
              </p>
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Contact Us Today
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-4 mb-4">
                <Image
                  src="/1.png"
                  alt="MediaMax Logo"
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
                <h5 className="text-xl font-bold">MediaMax</h5>
              </div>
              <p className="text-gray-400">
                Your trusted partner for digital marketing excellence.
              </p>
            </div>
            
            <div>
              <h6 className="font-semibold mb-4">Services</h6>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Social Media</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Content Creation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Digital Ads</a></li>
                <li><a href="#" className="hover:text-white transition-colors">SEO</a></li>
              </ul>
            </div>
            
            <div>
              <h6 className="font-semibold mb-4">Company</h6>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Our Team</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h6 className="font-semibold mb-4">Contact Info</h6>
              <ul className="space-y-2 text-gray-400">
                <li>📧 hello@mediamax.com</li>
                <li>📞 (555) 123-4567</li>
                <li>📍 123 Marketing St, Digital City</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 MediaMax. All rights reserved. | Built with Next.js</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
