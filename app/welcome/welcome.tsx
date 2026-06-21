import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";

import React, { useState, useEffect, useRef } from 'react';
import { 
  BookOpen, 
  Code, 
  PenTool, 
  Clock, 
  ShieldCheck, 
  Award, 
  MessageCircle, 
  Menu, 
  X, 
  ChevronRight,
  ChevronLeft,
  Star,
  CheckCircle2,
  Globe2,
  Quote
} from 'lucide-react';
import { FaInstagram, FaEnvelope, FaFacebook, FaLinkedin } from "react-icons/fa";

const WHATSAPP_NUMBER = "+919279347528"; 
const WHATSAPP_DEFAULT_MSG = encodeURIComponent("Hello Global Assignment Solutions! I need help with an assignment.");
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_DEFAULT_MSG}`;


export function Welcome() {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const countries = [
    { name: 'USA', flag: '🇺🇸', code: 'US' },
    { name: 'UK', flag: '🇬🇧', code: 'GB' },
    { name: 'Australia', flag: '🇦🇺', code: 'AU' },
    { name: 'Canada', flag: '🇨🇦', code: 'CA' },
    { name: 'UAE', flag: '🇦🇪', code: 'AE' },
    { name: 'New Zealand', flag: '🇳🇿', code: 'NZ' },
    { name: 'Singapore', flag: '🇸🇬', code: 'SG' },
    { name: 'Ireland', flag: '🇮🇪', code: 'IE' }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah J.",
      course: "Nursing Student, UK",
      text: "The quality of the case study provided was exceptional. It was well-researched, followed all the grading rubrics, and delivered two days before my deadline. Highly recommended!",
      rating: 5
    },
    {
      id: 2,
      name: "Michael T.",
      course: "Computer Science, USA",
      text: "I was stuck with a complex Java assignment and the deadline was approaching fast. Their programming expert not only wrote clean code but also added helpful comments explaining the logic.",
      rating: 5
    },
    {
      id: 3,
      name: "Emma W.",
      course: "Business Management, Australia",
      text: "Life-saver! Managing a part-time job and university is tough. Global Assignment Solutions handled my marketing essay perfectly. Plagiarism report was provided as promised.",
      rating: 4
    },
    {
      id: 4,
      name: "David L.",
      course: "Law Student, Canada",
      text: "The legal memo was formatted perfectly and cited all the required case laws. The writer clearly knew what they were doing. Will definitely use this service again.",
      rating: 5
    },
    {
      id: 5,
      name: "Aisha M.",
      course: "Engineering, UAE",
      text: "Saved my semester! The CAD project and accompanying report were exactly what my professor asked for. The 24/7 WhatsApp support was also very reassuring.",
      rating: 5
    },
    {
      id: 6,
      name: "James B.",
      course: "Economics, Singapore",
      text: "The data analysis was spot on. They used SPSS exactly as requested and the interpretation of the results was flawless. Got an A+!",
      rating: 5
    },
    {
      id: 7,
      name: "Maria G.",
      course: "Sociology, Ireland",
      text: "Great communication throughout the process. My research paper required a lot of nuanced arguments and the writer captured my perspective brilliantly.",
      rating: 5
    },
    {
      id: 8,
      name: "Chen Y.",
      course: "Finance, New Zealand",
      text: "Financial modeling assignments are always stressful for me. The expert broke down the Excel sheet formulas so I could actually understand it for my finals.",
      rating: 4
    },
    {
      id: 9,
      name: "Sophie R.",
      course: "Literature, UK",
      text: "Beautifully written essay on Shakespearean themes. The vocabulary used was academic but natural. Revisions were made promptly without any fuss.",
      rating: 5
    },
    {
      id: 10,
      name: "Ahmed K.",
      course: "Mechanical Eng, USA",
      text: "The thermodynamics calculations were accurate and showed all steps clearly. It served as a great study guide for my midterms.",
      rating: 5
    },
    {
      id: 11,
      name: "Olivia P.",
      course: "Psychology, Canada",
      text: "Helped me format my entire dissertation in APA 7th edition perfectly. Saved me hours of tedious work! Excellent attention to detail.",
      rating: 5
    },
    {
      id: 12,
      name: "Liam D.",
      course: "History, Australia",
      text: "Thoroughly researched term paper with excellent primary sources cited. The writer clearly had a background in European history.",
      rating: 5
    }
  ];

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const firstCard = carouselRef.current.children[0];
      if (firstCard instanceof HTMLElement) {
        // Calculate scroll based on the width of the first card + its gap margin (24px)
        const scrollAmount = firstCard.offsetWidth + 24;
        carouselRef.current.scrollBy({
          left: direction === 'left' ? -scrollAmount : scrollAmount,
          behavior: 'smooth'
        });
      }
    }
  };


  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800 overflow-x-hidden">
      
      {/* Custom Styles for Animations */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-250px * 8)); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
          width: calc(250px * 16);
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      
      {}
      {/* Navigation Bar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-white/90 backdrop-blur-sm py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('home')}>
              <img src="/logo.png" alt="Global Assignment Solutions logo" className="h-8 w-8 mr-2 object-contain" />
              <span className="text-xl font-bold text-gray-900 tracking-tight">
                Global Assignment <span className="text-blue-600">Solutions</span>
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              <button onClick={() => scrollToSection('home')} className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Home</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Services</button>
              <button onClick={() => scrollToSection('features')} className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Why Us</button>
              <button onClick={() => scrollToSection('reviews')} className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Reviews</button>
              <a 
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full font-medium transition-colors shadow-sm flex items-center"
              >
                Get Help Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMobileMenu} className="text-gray-600 hover:text-gray-900 focus:outline-none">
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-xl absolute top-full left-0 w-full border-t border-gray-100">
            <div className="px-4 pt-2 pb-6 space-y-2">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left px-3 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">Home</button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left px-3 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">Services</button>
              <button onClick={() => scrollToSection('features')} className="block w-full text-left px-3 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">Why Us</button>
              <button onClick={() => scrollToSection('reviews')} className="block w-full text-left px-3 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">Reviews</button>
              <a 
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center mt-4 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-md font-medium flex items-center justify-center"
              >
                <MessageCircle className="h-5 w-5 mr-2" /> Message on WhatsApp
              </a>
            </div>
          </div>
        )}
      </nav>

      {}
      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 font-medium text-sm mb-6">
            <Star className="h-4 w-4 mr-2 text-yellow-500 fill-current" />
            #1 Trusted Academic Helper Globally
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
            Excel in Your Studies with <br className="hidden md:block" />
            <span className="text-blue-600 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Expert Assignment Help</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 mb-10">
            Struggling with deadlines? Our professional academic writers and tutors are here to help you achieve top grades. Plagiarism-free, on-time, every time.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center transform hover:-translate-y-1"
            >
              <MessageCircle className="h-6 w-6 mr-2" />
              Chat on WhatsApp
            </a>
            <button 
              onClick={() => scrollToSection('services')}
              className="w-full sm:w-auto bg-white border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600 text-gray-700 px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center"
            >
              Explore Services <ChevronRight className="h-5 w-5 ml-1" />
            </button>
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm font-medium text-gray-500">
            <div className="flex items-center"><CheckCircle2 className="h-5 w-5 text-green-500 mr-2"/> 100% Confidential</div>
            <div className="flex items-center"><CheckCircle2 className="h-5 w-5 text-green-500 mr-2"/> 24/7 Support</div>
            <div className="flex items-center"><CheckCircle2 className="h-5 w-5 text-green-500 mr-2"/> Plagiarism Free</div>
          </div>
        </div>
      </section>

      {}
      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Academic Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">We provide comprehensive assistance across various subjects and assignment types.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow group">
              <div className="bg-blue-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <PenTool className="h-7 w-7 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Essay Writing</h3>
              <p className="text-gray-600 mb-4">From descriptive essays to complex argumentative papers, our experts craft compelling, well-researched essays.</p>
            </div>

            {/* Service 2 */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow group">
              <div className="bg-indigo-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors">
                <BookOpen className="h-7 w-7 text-indigo-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Dissertations & Thesis</h3>
              <p className="text-gray-600 mb-4">Comprehensive help with proposals, literature reviews, methodology, and data analysis for higher degrees.</p>
            </div>

            {/* Service 3 */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow group">
              <div className="bg-green-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors">
                <Code className="h-7 w-7 text-green-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Programming & IT</h3>
              <p className="text-gray-600 mb-4">Expert coding help in Python, Java, C++, Web Development, and Database management assignments.</p>
            </div>

            {/* Service 4 */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow group">
              <div className="bg-purple-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors">
                <img src="/logo.png" alt="Global Assignment Solutions logo" className="h-7 w-7 object-contain" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Case Studies</h3>
              <p className="text-gray-600 mb-4">In-depth analysis and strategic solutions for business, nursing, law, and management case studies.</p>
            </div>

            {/* Service 5 */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow group">
              <div className="bg-red-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors">
                <ShieldCheck className="h-7 w-7 text-red-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Proofreading & Editing</h3>
              <p className="text-gray-600 mb-4">Polish your existing work. We fix grammar, structure, formatting, and ensure correct citations (APA, MLA, Harvard).</p>
            </div>

            {/* CTA Box inside Services */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 shadow-lg text-white flex flex-col justify-center items-center text-center">
              <h3 className="text-2xl font-bold mb-4">Need Something Else?</h3>
              <p className="text-blue-100 mb-6">We cover over 50+ subjects. Just send us your requirements.</p>
              <a 
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 hover:bg-gray-50 px-6 py-3 rounded-full font-bold transition-colors w-full"
              >
                Discuss Your Task
              </a>
            </div>
          </div>
        </div>
      </section>

      {}
      {/* Why Choose Us Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Students Trust Global Assignment Solutions</h2>
              <p className="text-lg text-gray-600 mb-8">
                We don't just complete assignments; we ensure you understand the subject matter and secure the grades you deserve. Our commitment to quality sets us apart.
              </p>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                      <Award className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-gray-900">Ph.D. & Master's Experts</h4>
                    <p className="mt-1 text-gray-600">Your work is handled by subject-matter experts with advanced degrees and years of academic writing experience.</p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-100 text-green-600">
                      <Clock className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-gray-900">Always On Time</h4>
                    <p className="mt-1 text-gray-600">Strict adherence to deadlines. We even handle urgent assignments with a turnaround time of as little as 6 hours.</p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-100 text-purple-600">
                      <ShieldCheck className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-gray-900">100% Original Content</h4>
                    <p className="mt-1 text-gray-600">Every paper is written from scratch. We provide free Turnitin/plagiarism reports upon request.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Simple Graphic/Illustration using CSS */}
            <div className="lg:w-1/2 w-full mt-10 lg:mt-0">
              <div className="relative bg-white p-8 rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 rounded-full bg-blue-100 opacity-50 blur-2xl"></div>
                <div className="absolute bottom-0 left-0 -ml-8 -mb-8 w-32 h-32 rounded-full bg-green-100 opacity-50 blur-2xl"></div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-6 relative z-10">How It Works</h3>
                
                <div className="space-y-6 relative z-10">
                  <div className="flex items-center p-4 bg-gray-50 rounded-xl">
                    <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 shrink-0">1</div>
                    <p className="font-medium text-gray-800">Send requirements via WhatsApp</p>
                  </div>
                  <div className="flex items-center p-4 bg-gray-50 rounded-xl">
                    <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 shrink-0">2</div>
                    <p className="font-medium text-gray-800">Get a free quote instantly</p>
                  </div>
                  <div className="flex items-center p-4 bg-gray-50 rounded-xl">
                    <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 shrink-0">3</div>
                    <p className="font-medium text-gray-800">Make secure payment</p>
                  </div>
                  <div className="flex items-center p-4 bg-gray-50 rounded-xl">
                    <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 shrink-0">4</div>
                    <p className="font-medium text-gray-800">Receive perfect assignment on time</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {}
      {/* Countries We Assist - Animated Marquee */}
      <section className="py-14 bg-blue-600 overflow-hidden relative">
        {/* Decorative Background for Countries */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-10">
          <div className="text-center">
            {/* <Globe2 className="h-12 w-12 text-blue-200 mx-auto mb-4" /> */}
            <img src="/logo.png" alt="Global Assignment Solutions logo" className="h-32 w-32 mx-auto mb-4 object-contain" />
            <h2 className="text-3xl font-bold text-white mb-2">Global Academic Reach</h2>
            <p className="text-blue-100 max-w-2xl mx-auto">Providing expert assistance to students studying in universities across the globe.</p>
          </div>
        </div>

        {/* Scrolling Container */}
        <div className="relative w-full flex overflow-hidden">
          {/* Gradient Masks for smooth fading edges */}
          <div className="absolute top-0 left-0 w-16 md:w-32 h-full bg-gradient-to-r from-blue-600 to-transparent z-20 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-16 md:w-32 h-full bg-gradient-to-l from-blue-600 to-transparent z-20 pointer-events-none"></div>

          {/* Marquee Track (Doubled for infinite loop effect) */}
          <div className="flex animate-scroll">
            {[...countries, ...countries].map((country, index) => (
              <div 
                key={index} 
                className="w-[200px] flex-shrink-0 mx-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 flex flex-col items-center justify-center group hover:bg-white transition-all duration-300 cursor-default"
              >
                <span className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300 drop-shadow-md" role="img" aria-label={`${country.name} flag`}>
                  {country.flag}
                </span>
                <span className="text-white font-semibold text-lg group-hover:text-blue-700 transition-colors">{country.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {}
      {/* Reviews Section */}
      <section id="reviews" className="py-24 relative overflow-hidden bg-slate-50">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
          <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block py-1.5 px-4 rounded-full bg-blue-100 text-blue-700 font-bold tracking-wider uppercase text-xs mb-4 shadow-sm border border-blue-200">
              Real Success Stories
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
              What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Students Say</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
              Join thousands of students who have boosted their grades and reduced their stress with our help.
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative w-full max-w-[100vw] sm:max-w-7xl mx-auto mt-12 group">
            
            {/* Main Carousel Track (Multi-Card) */}
            <div 
              ref={carouselRef}
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-12 pt-4 px-2 sm:px-8"
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="w-[85vw] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)] flex-shrink-0 snap-center sm:snap-start bg-white/90 backdrop-blur-xl border border-white rounded-[2rem] shadow-xl p-8 relative flex flex-col hover:-translate-y-2 transition-transform duration-300 group/card"
                >
                  <Quote className="absolute top-6 right-6 h-12 w-12 text-blue-50 opacity-80 z-0 group-hover/card:text-blue-100 transition-colors" />
                  
                  <div className="flex mb-5 z-10 relative space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-5 w-5 drop-shadow-sm ${i < testimonial.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-200'}`} 
                      />
                    ))}
                  </div>
                  
                  <p className="text-gray-700 font-medium italic mb-8 relative z-10 flex-grow leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="mt-auto flex items-center z-10 relative border-t border-gray-50 pt-5">
                    <div className="relative mr-4">
                      <div className="h-12 w-12 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white font-bold text-lg border-2 border-white shadow-md">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-0.5 border border-white">
                        <CheckCircle2 className="h-3 w-3 text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-base leading-tight">{testimonial.name}</h4>
                      <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide mt-0.5">{testimonial.course}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Absolute Navigation Arrows */}
            <button 
              onClick={() => scrollCarousel('left')}
              className="absolute left-0 sm:-left-4 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white text-gray-800 hover:text-blue-600 hover:bg-blue-50 border border-gray-100 shadow-xl transition-all focus:outline-none hover:scale-110 active:scale-95 z-20 hidden md:flex"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-7 w-7" />
            </button>
            <button 
              onClick={() => scrollCarousel('right')}
              className="absolute right-0 sm:-right-4 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white text-gray-800 hover:text-blue-600 hover:bg-blue-50 border border-gray-100 shadow-xl transition-all focus:outline-none hover:scale-110 active:scale-95 z-20 hidden md:flex"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-7 w-7" />
            </button>
          </div>
          
          {/* Trust Badge Footer */}
          <div className="text-center mt-6">
             <div className="inline-flex flex-wrap items-center justify-center p-3 bg-white/80 backdrop-blur-md border border-gray-200/60 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex -space-x-3 mr-5 mb-2 sm:mb-0">
                  {[1,2,3,4].map(i => (
                    <div key={i} className={`h-12 w-12 rounded-full border-2 border-white flex items-center justify-center text-white font-bold text-sm shadow-sm relative`} style={{ zIndex: 10 - i }}>
                      <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${i%2===0 ? 'from-blue-400 to-blue-600' : 'from-indigo-400 to-indigo-600'}`}></div>
                      <span className="relative">{String.fromCharCode(64 + i)}</span>
                    </div>
                  ))}
                  <div className="h-12 w-12 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-gray-700 font-bold text-xs relative shadow-sm z-0">
                    +1.2k
                  </div>
                </div>
                <div className="text-left pr-4">
                  <div className="flex items-center">
                    <span className="text-amber-400 drop-shadow-sm mr-1.5 text-xl tracking-tighter">★★★★★</span>
                    <span className="font-extrabold text-gray-900 text-lg">4.9/5</span>
                  </div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mt-0.5">
                    Based on Verified Students
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {}
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
                <li><button onClick={() => scrollToSection('home')} className="hover:text-white transition-colors">Home</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors">Our Services</button></li>
                <li><button onClick={() => scrollToSection('features')} className="hover:text-white transition-colors">Why Choose Us</button></li>
                <li><button onClick={() => scrollToSection('reviews')} className="hover:text-white transition-colors">Reviews</button></li>
                {/* <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li> */}
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
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
                  {/* <a
                    href="https://facebook.com/globalassignmentsolutions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    <FaFacebook className="h-4 w-4 mr-2" />
                    Facebook
                  </a>
                  <a
                    href="https://linkedin.com/company/global-assignment-solutions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    <FaLinkedin className="h-4 w-4 mr-2" />
                    LinkedIn
                  </a> */}
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
            {/* <p className="mt-2 text-xs">Disclaimer: The reference papers provided by Global Assignment Solutions should be used as model papers or study guides. Students are not encouraged to submit them directly as their own work.</p> */}
          </div>
        </div>
      </footer>

      {}
      {/* Floating WhatsApp Button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-transform hover:scale-110 z-50 flex items-center justify-center group"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="h-8 w-8" />
        
        {/* Tooltip on hover */}
        <span className="absolute right-full mr-4 bg-gray-900 text-white text-sm px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Need Help? Chat with us!
        </span>
        
        {/* Notification Ping */}
        <span className="absolute top-0 right-0 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500 border-2 border-white"></span>
        </span>
      </a>
    </div>
  );
}

// const resources = [
//   {
//     href: "https://reactrouter.com/docs",
//     text: "React Router Docs",
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="24"
//         height="20"
//         viewBox="0 0 20 20"
//         fill="none"
//         className="stroke-gray-600 group-hover:stroke-current dark:stroke-gray-300"
//       >
//         <path
//           d="M9.99981 10.0751V9.99992M17.4688 17.4688C15.889 19.0485 11.2645 16.9853 7.13958 12.8604C3.01467 8.73546 0.951405 4.11091 2.53116 2.53116C4.11091 0.951405 8.73546 3.01467 12.8604 7.13958C16.9853 11.2645 19.0485 15.889 17.4688 17.4688ZM2.53132 17.4688C0.951566 15.8891 3.01483 11.2645 7.13974 7.13963C11.2647 3.01471 15.8892 0.951453 17.469 2.53121C19.0487 4.11096 16.9854 8.73551 12.8605 12.8604C8.73562 16.9853 4.11107 19.0486 2.53132 17.4688Z"
//           strokeWidth="1.5"
//           strokeLinecap="round"
//         />
//       </svg>
//     ),
//   },
//   {
//     href: "https://rmx.as/discord",
//     text: "Join Discord",
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="24"
//         height="20"
//         viewBox="0 0 24 20"
//         fill="none"
//         className="stroke-gray-600 group-hover:stroke-current dark:stroke-gray-300"
//       >
//         <path
//           d="M15.0686 1.25995L14.5477 1.17423L14.2913 1.63578C14.1754 1.84439 14.0545 2.08275 13.9422 2.31963C12.6461 2.16488 11.3406 2.16505 10.0445 2.32014C9.92822 2.08178 9.80478 1.84975 9.67412 1.62413L9.41449 1.17584L8.90333 1.25995C7.33547 1.51794 5.80717 1.99419 4.37748 2.66939L4.19 2.75793L4.07461 2.93019C1.23864 7.16437 0.46302 11.3053 0.838165 15.3924L0.868838 15.7266L1.13844 15.9264C2.81818 17.1714 4.68053 18.1233 6.68582 18.719L7.18892 18.8684L7.50166 18.4469C7.96179 17.8268 8.36504 17.1824 8.709 16.4944L8.71099 16.4904C10.8645 17.0471 13.128 17.0485 15.2821 16.4947C15.6261 17.1826 16.0293 17.8269 16.4892 18.4469L16.805 18.8725L17.3116 18.717C19.3056 18.105 21.1876 17.1751 22.8559 15.9238L23.1224 15.724L23.1528 15.3923C23.5873 10.6524 22.3579 6.53306 19.8947 2.90714L19.7759 2.73227L19.5833 2.64518C18.1437 1.99439 16.6386 1.51826 15.0686 1.25995ZM16.6074 10.7755L16.6074 10.7756C16.5934 11.6409 16.0212 12.1444 15.4783 12.1444C14.9297 12.1444 14.3493 11.6173 14.3493 10.7877C14.3493 9.94885 14.9378 9.41192 15.4783 9.41192C16.0471 9.41192 16.6209 9.93851 16.6074 10.7755ZM8.49373 12.1444C7.94513 12.1444 7.36471 11.6173 7.36471 10.7877C7.36471 9.94885 7.95323 9.41192 8.49373 9.41192C9.06038 9.41192 9.63892 9.93712 9.6417 10.7815C9.62517 11.6239 9.05462 12.1444 8.49373 12.1444Z"
//           strokeWidth="1.5"
//         />
//       </svg>
//     ),
//   },
// ];
