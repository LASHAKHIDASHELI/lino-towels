import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState('idle'); // idle, sending, sent
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '', towelType: '140/70' });
  const heroRef = useRef(null);
  const navRef = useRef(null);

  // Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        if (window.scrollY > 50) {
          navRef.current.classList.add('backdrop-blur-md', 'bg-white/30', 'shadow-lg');
        } else {
          navRef.current.classList.remove('backdrop-blur-md', 'bg-white/30', 'shadow-lg');
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hero animation
  useEffect(() => {
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current.querySelectorAll('.hero-item'),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: 'power2.out' }
      );
    }
  }, []);

  // Floating fabric animation
  const FabricAnimation = () => {
    const svgRef = useRef(null);
    useEffect(() => {
      if (svgRef.current) {
        const swatches = svgRef.current.querySelectorAll('.swatch');
        swatches.forEach((swatch, i) => {
          gsap.to(swatch, {
            y: -30,
            opacity: 0,
            duration: 3,
            delay: i * 0.4,
            repeat: -1,
            ease: 'power1.inOut',
          });
        });
      }
    }, []);

    return (
      <svg ref={svgRef} className="absolute inset-0 w-full h-full opacity-40" viewBox="0 0 400 600">
        <defs>
          <linearGradient id="fabricGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2D5A3D" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#F5F1E8" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        {[...Array(6)].map((_, i) => (
          <g key={i} className="swatch" transform={`translate(${60 + i * 50}, ${100 + i * 40})`}>
            <rect width="40" height="60" fill="url(#fabricGrad)" rx="4" />
            <circle cx="20" cy="30" r="2" fill="#F5F1E8" opacity="0.6" />
          </g>
        ))}
      </svg>
    );
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('sent');
      setFormData({ name: '', email: '', phone: '', message: '', towelType: '140/70' });
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Navigation */}
      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-0 bg-transparent"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-forest to-cream flex items-center justify-center">
                <span className="text-white font-bold text-lg">L</span>
              </div>
              <span className="text-2xl font-bold text-forest hidden sm:inline">Lino</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#products" className="text-gray-700 hover:text-forest transition">Products</a>
              <a href="#about" className="text-gray-700 hover:text-forest transition">About</a>
              <a href="#contact" className="text-gray-700 hover:text-forest transition">Contact</a>
              <button className="px-6 py-2 bg-forest text-cream rounded-full hover:bg-opacity-90 transition">
                Inquire
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-3 animate-fadeIn">
              <a href="#products" className="block text-gray-700 hover:text-forest">Products</a>
              <a href="#about" className="block text-gray-700 hover:text-forest">About</a>
              <a href="#contact" className="block text-gray-700 hover:text-forest">Contact</a>
              <button className="w-full px-4 py-2 bg-forest text-cream rounded-full hover:bg-opacity-90">
                Inquire
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative w-full h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center overflow-hidden pt-20"
        style={{
          backgroundImage: "url('/images/701790152_122100598905320775_7608371752353814292_n.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <FabricAnimation />

        <div className="relative z-10 text-center px-4 max-w-3xl">
          <h1 className="hero-item text-5xl sm:text-6xl lg:text-7xl font-bold text-white drop-shadow-lg mb-6 leading-tight">
            Luxury Towels
          </h1>
          <p className="hero-item text-lg sm:text-xl text-white drop-shadow-md mb-8 max-w-2xl mx-auto">
            Experience the pinnacle of softness and elegance. Handcrafted premium towels that elevate your everyday moments.
          </p>
          <div className="hero-item flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-forest text-cream rounded-full font-semibold hover:bg-opacity-90 transition transform hover:scale-105">
              Explore Products
            </button>
            <button className="px-8 py-4 border-2 border-forest text-forest rounded-full font-semibold hover:bg-forest hover:text-cream transition">
              Contact Us
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-forest mb-4">Our Collections</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Two premium sizes, crafted for luxury and comfort
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Product 1 */}
          <div className="group border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition duration-300 bg-gradient-to-br from-cream to-white">
            <div className="h-80 bg-cover bg-center relative overflow-hidden" style={{
              backgroundImage: "url('/images/702546679_122100598635320775_2709942923591283293_n.jpg')"
            }}>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition"></div>
              <div className="text-center text-white z-10 relative h-full flex items-center justify-center">
                <div>
                  <div className="text-6xl font-bold mb-2">140</div>
                  <div className="text-2xl">x 70 cm</div>
                </div>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-forest mb-3">Premium Large</h3>
              <p className="text-gray-600 mb-6">Perfect for bath and spa use. Luxuriously oversized for maximum comfort.</p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>✓ 100% premium cotton</li>
                <li>✓ Extra soft finish</li>
                <li>✓ Durable construction</li>
                <li>✓ Quick drying</li>
              </ul>
              <button className="w-full py-3 bg-forest text-cream rounded-lg font-semibold hover:bg-opacity-90 transition">
                Inquire Now
              </button>
            </div>
          </div>

          {/* Product 2 */}
          <div className="group border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition duration-300 bg-gradient-to-br from-cream to-white">
            <div className="h-80 bg-cover bg-center relative overflow-hidden" style={{
              backgroundImage: "url('/images/703065017_122100598815320775_2501672670733356201_n.jpg')"
            }}>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition"></div>
              <div className="text-center text-white z-10 relative h-full flex items-center justify-center">
                <div>
                  <div className="text-6xl font-bold mb-2">100</div>
                  <div className="text-2xl">x 50 cm</div>
                </div>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-forest mb-3">Elegant Standard</h3>
              <p className="text-gray-600 mb-6">Classic size perfect for everyday elegance and versatile use.</p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>✓ Premium cotton blend</li>
                <li>✓ Ultra plush feel</li>
                <li>✓ Fade resistant</li>
                <li>✓ Easy maintenance</li>
              </ul>
              <button className="w-full py-3 bg-forest text-cream rounded-lg font-semibold hover:bg-opacity-90 transition">
                Inquire Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="about" className="py-20 px-4 bg-gradient-to-b from-cream/50 to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-forest text-center mb-16">Why Choose Lino</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition">
              <div className="w-16 h-16 bg-forest/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">✨</span>
              </div>
              <h3 className="text-xl font-bold text-forest mb-3">Premium Quality</h3>
              <p className="text-gray-600">
                Crafted with the finest materials, every thread speaks to our commitment to excellence.
              </p>
            </div>

            <div className="p-8 bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition">
              <div className="w-16 h-16 bg-forest/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">🌿</span>
              </div>
              <h3 className="text-xl font-bold text-forest mb-3">Natural Materials</h3>
              <p className="text-gray-600">
                Eco-conscious production using sustainable materials for a better tomorrow.
              </p>
            </div>

            <div className="p-8 bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition">
              <div className="w-16 h-16 bg-forest/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-forest mb-3">Luxury Comfort</h3>
              <p className="text-gray-600">
                Designed for those who appreciate life's finer details and uncompromising comfort.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl font-bold text-forest mb-8">Get in Touch</h2>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-forest/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone size={24} className="text-forest" />
                </div>
                <div>
                  <h4 className="font-semibold text-forest mb-1">Phone</h4>
                  <p className="text-gray-600">+995 599 223662</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-forest/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail size={24} className="text-forest" />
                </div>
                <div>
                  <h4 className="font-semibold text-forest mb-1">Email</h4>
                  <p className="text-gray-600">khidasheli2008@gmail.com</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-forest/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock size={24} className="text-forest" />
                </div>
                <div>
                  <h4 className="font-semibold text-forest mb-1">Hours</h4>
                  <p className="text-gray-600">24/7 Available</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 bg-gradient-to-br from-forest to-green-700 text-white rounded-2xl">
              <h3 className="text-2xl font-bold mb-3">Premium Service</h3>
              <p className="mb-4">Experience luxury from inquiry to delivery. We're here whenever you need us.</p>
              <p className="text-cream/80">Available for wholesale inquiries, custom orders, and corporate partnerships.</p>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleFormSubmit} className="bg-gradient-to-br from-cream to-white p-8 rounded-2xl border border-gray-200">
            <h3 className="text-2xl font-bold text-forest mb-6">Send us a Message</h3>

            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest focus:border-transparent outline-none transition"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest focus:border-transparent outline-none transition"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest focus:border-transparent outline-none transition"
                  placeholder="+995 599 223662"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Towel Size Interest</label>
                <select
                  value={formData.towelType}
                  onChange={(e) => setFormData({...formData, towelType: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest focus:border-transparent outline-none transition"
                >
                  <option>140 x 70 cm</option>
                  <option>100 x 50 cm</option>
                  <option>Both sizes</option>
                  <option>Information only</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  rows="4"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest focus:border-transparent outline-none transition resize-none"
                  placeholder="Tell us about your inquiry..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={formStatus !== 'idle'}
                className={`w-full py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition ${
                  formStatus === 'idle' ? 'bg-forest text-cream hover:bg-opacity-90' :
                  formStatus === 'sending' ? 'bg-yellow-500 text-white' :
                  'bg-green-500 text-white'
                }`}
              >
                {formStatus === 'idle' && (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
                {formStatus === 'sending' && (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                )}
                {formStatus === 'sent' && '✓ Message Sent!'}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-forest text-cream py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-lg bg-cream flex items-center justify-center">
                  <span className="text-forest font-bold">L</span>
                </div>
                <span className="font-bold text-lg">Lino Towels</span>
              </div>
              <p className="text-cream/80">Premium luxury towels crafted for elegance and comfort.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-cream/80">
                <li><a href="#products" className="hover:text-cream transition">Products</a></li>
                <li><a href="#about" className="hover:text-cream transition">About</a></li>
                <li><a href="#contact" className="hover:text-cream transition">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-cream/80">
                <li>Phone: +995 599 223662</li>
                <li>Email: khidasheli2008@gmail.com</li>
                <li>Available 24/7</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="https://facebook.com/profile.php?id=61589623272446" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-cream/20 rounded-lg flex items-center justify-center hover:bg-cream/30 transition">f</a>
                <a href="#" className="w-10 h-10 bg-cream/20 rounded-lg flex items-center justify-center hover:bg-cream/30 transition">in</a>
              </div>
            </div>
          </div>

          <div className="border-t border-cream/20 pt-8 text-center text-cream/80">
            <p>&copy; 2026 Lino Towels. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
