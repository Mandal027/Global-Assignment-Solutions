import React from 'react';
import { Link } from 'react-router';
// import { FaEnvelope } from "react-icons/fa";
import { MessageCircle, ChevronRight } from 'lucide-react';
import { FaInstagram, FaEnvelope } from "react-icons/fa";

const WHATSAPP_NUMBER = "+919279347528"; 
const WHATSAPP_DEFAULT_MSG = encodeURIComponent("Hello Global Assignment Solutions! I need help with an assignment.");
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_DEFAULT_MSG}`;

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-white shadow-md py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center cursor-pointer">
              <img src="/logo.png" alt="Global Assignment Solutions logo" className="h-8 w-8 mr-2 object-contain" />
              <span className="text-xl font-bold text-gray-900 tracking-tight">
                Global Assignment <span className="text-blue-600">Solutions</span>
              </span>
            </Link>
            <div className="hidden md:flex space-x-6 items-center">
              <Link to="/" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Home</Link>
              <Link to="/#services" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Services</Link>
              <Link to="/#features" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Why Us</Link>
              <Link to="/#reviews" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Reviews</Link>
              <Link to="/#faqs" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">FAQs</Link>
              <Link to="/#reviews" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Reviews</Link>
              <a 
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full font-medium transition-colors shadow-sm flex items-center"
              >
                Get Help Now
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block py-1.5 px-4 rounded-full bg-purple-100 text-purple-700 font-bold tracking-wider uppercase text-xs mb-4 shadow-sm border border-purple-200">
              Your Privacy Matters
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
              Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Policy</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
              We are committed to protecting your privacy and ensuring you have a positive experience on our platform.
            </p>
            {/* <p className="text-sm text-gray-500 mt-3">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p> */}
          </div>

          {/* Content Cards */}
          <div className="space-y-6 mb-12">
            {/* Introduction */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex gap-4">
                <div className="text-4xl">🔐</div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">At Global Assignment Solutions, we value your privacy</h2>
                  <p className="text-gray-600 leading-relaxed">
                    We are committed to protecting your personal information and ensuring transparency about how we collect, use, and safeguard your data. This Privacy Policy outlines our practices regarding information handling.
                  </p>
                </div>
              </div>
            </div>

            {/* Information We Collect */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex gap-4">
                <div className="text-4xl">📋</div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">Information We Collect</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    We may collect the following information when you contact us or place an order:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-blue-600 font-bold mr-3">•</span>
                      <span>Your name and email address</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 font-bold mr-3">•</span>
                      <span>Contact number and communication preferences</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 font-bold mr-3">•</span>
                      <span>Assignment details and academic requirements</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 font-bold mr-3">•</span>
                      <span>Payment information (processed securely)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How We Use Your Information */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex gap-4">
                <div className="text-4xl">⚙️</div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">How We Use Your Information</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    The information provided by you is used only for the following purposes:
                  </p>
                  <div className="space-y-3">
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-100">
                      <h3 className="font-semibold text-gray-900 mb-1">Process and Manage Your Requests</h3>
                      <p className="text-gray-600 text-sm">To handle your orders, provide quotes, and deliver completed assignments</p>
                    </div>
                    <div className="bg-gradient-to-r from-green-50 to-teal-50 p-4 rounded-lg border border-green-100">
                      <h3 className="font-semibold text-gray-900 mb-1">Communication</h3>
                      <p className="text-gray-600 text-sm">To communicate regarding your assignments, updates, and customer support</p>
                    </div>
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg border border-purple-100">
                      <h3 className="font-semibold text-gray-900 mb-1">Service Improvement</h3>
                      <p className="text-gray-600 text-sm">To improve our services, gather feedback, and enhance customer support</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Confidentiality */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex gap-4">
                <div className="text-4xl">🔒</div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">Confidentiality</h2>
                  <p className="text-gray-600 leading-relaxed">
                    All information, files, and documents shared with us are kept strictly confidential and will never be shared with any third party without your explicit consent. Your academic integrity and privacy are our top priorities.
                  </p>
                </div>
              </div>
            </div>

            {/* Data Security */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex gap-4">
                <div className="text-4xl">🛡️</div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">Data Security</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    We take appropriate measures to protect your personal information from unauthorized access, misuse, or disclosure:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-blue-600 font-bold mr-3">✓</span>
                      <span>End-to-end encryption for sensitive data</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 font-bold mr-3">✓</span>
                      <span>Secure servers with advanced firewalls</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 font-bold mr-3">✓</span>
                      <span>Regular security audits and updates</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 font-bold mr-3">✓</span>
                      <span>Limited access to personal information</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Third-Party Services */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex gap-4">
                <div className="text-4xl">🔗</div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">Third-Party Services</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Our website may contain links to third-party platforms such as WhatsApp, payment gateways, and other external services. We are not responsible for the privacy practices of these external services. Please review their privacy policies independently before sharing your information with them.
                  </p>
                </div>
              </div>
            </div>

            {/* Policy Updates */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex gap-4">
                <div className="text-4xl">📢</div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">Policy Updates</h2>
                  <p className="text-gray-600 leading-relaxed">
                    We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. Any changes will be posted on this page, and we encourage you to review this policy periodically to stay informed about how we protect your information.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-white shadow-xl mb-8">
            <h2 className="text-3xl font-bold mb-4">Questions About Our Privacy Policy?</h2>
            <p className="text-purple-100 text-lg mb-6">
              We're here to help! If you have any concerns or questions regarding our Privacy Policy or how we handle your information, please don't hesitate to contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <div className="flex items-center">
                <FaEnvelope className="h-6 w-6 mr-3" />
                <a href="mailto:globalassignmentsolutions1@gmail.com" className="text-white hover:text-purple-100 font-medium transition-colors break-all">
                  globalassignmentsolutions1@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 text-center mb-8">
            <p className="text-gray-600 text-sm leading-relaxed">
              <span className="font-semibold text-gray-900">Your Trust is Our Responsibility</span><br />
              We understand the importance of your privacy in academic matters. Our commitment to confidentiality and data protection is unwavering. By using our services, you consent to the collection and use of your information as outlined in this Privacy Policy.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <a 
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <MessageCircle className="h-6 w-6 mr-2" />
              Contact Us on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}


            <footer className="bg-gray-900 text-white pt-16 pb-8">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                  <div>
                    <div className="flex items-center mb-4">
                      <img src="/logo.png" alt="Global Assignment Solutions logo" className="h-8 w-8 mr-2 object-contain" />
                      <span className="text-xl font-bold tracking-tight">
                        Global Assignment <span className="text-blue-400">Solutions</span>
                      </span>
                    </div>
                    <p className="text-gray-400 mb-6">
                      Empowering students worldwide to achieve academic excellence through professional, reliable, and ethical writing assistance.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">Quick Links</h4>
                    
                    <ul className="space-y-2 text-gray-400">
                        <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                        <li><Link to="/#services" className="hover:text-white transition-colors">Services</Link></li>
                        <li><Link to="/#features" className="hover:text-white transition-colors">Why Choose Us</Link></li>
                        <li><Link to="/#reviews" className="hover:text-white transition-colors">Reviews</Link></li>
                        <li><Link to="/#faqs" className="hover:text-white transition-colors">FAQs</Link></li>
                        <li><Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">Contact Us</h4>
                    <p className="text-gray-400 mb-4">Available 24/7 for your academic needs.</p>
                    <div className="space-y-3">
                      
                      <div className="flex flex-wrap gap-2 pt-2">
                          <a
                          href="mailto:help@globalassignmentsolutions.com"
                          className="inline-flex items-center bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-colors">
                          <FaEnvelope className="h-5 w-5 mr-2" />
                          Email Us
                        </a>
                        <a
                          href="https://instagram.com/globalassignmentsolutions"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-colors"
                        >
                          <FaInstagram className="h-4 w-4 mr-2" />
                          Instagram
                        </a>
                      </div>
      
                      <a 
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-lg font-bold transition-colors"
                      >
                        <MessageCircle className="h-5 w-5 mr-2" />
                        WhatsApp Us
                      </a>
                      
                    </div>
                  </div>
                </div>
                
                <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
                  <p>&copy; {new Date().getFullYear()} Global Assignment Solutions. All rights reserved.</p>
                </div>
              </div>
            </footer>
    </div>
  );
}
