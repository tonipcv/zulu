"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This is a placeholder form - no actual submission occurs
    setFormSubmitted(true);
    // Reset form after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 5000);
  };

  return (
    <div className="font-sans min-h-screen flex flex-col bg-black text-white">
      <header className="bg-black border-b border-white/20 p-6 sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Image src="/icon.png" alt="Zuzu Logo" width={40} height={40} className="rounded-md" />
            <h1 className="text-2xl font-bold">Zuzu</h1>
          </div>
          <nav className="flex space-x-6">
            <Link href="/privacy" className="hover:text-blue-400 transition-colors duration-200">
              Privacy Policy
            </Link>
          </nav>
        </div>
      </header>
      
      <main className="flex-grow container mx-auto px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <section className="mb-20 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Elevate Your Daily Habits
            </h1>
            
            <div className="mb-10 flex justify-center">
              <Image src="/icon.png" alt="Zuzu Logo" width={120} height={120} className="rounded-xl shadow-lg shadow-blue-500/20" />
            </div>
            
            <p className="text-xl mb-10 text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Zuzu is your professional companion for tracking habits and achieving your goals with precision and elegance.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              <div className="bg-gray-900/80 p-8 rounded-xl shadow-lg border border-white/10 hover:border-blue-500/30 transition-all duration-300">
                <div className="w-16 h-16 bg-blue-900/30 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h2 className="font-semibold text-xl mb-3 text-blue-300">Enterprise Solutions</h2>
                <p className="text-gray-300">Customized habit tracking solutions for businesses and teams.</p>
              </div>
              
              <div className="bg-gray-900/80 p-8 rounded-xl shadow-lg border border-white/10 hover:border-purple-500/30 transition-all duration-300">
                <div className="w-16 h-16 bg-purple-900/30 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h2 className="font-semibold text-xl mb-3 text-purple-300">Professional Interface</h2>
                <p className="text-gray-300">Clean, intuitive design that helps you stay focused and consistent.</p>
              </div>
              
              <div className="bg-gray-900/80 p-8 rounded-xl shadow-lg border border-white/10 hover:border-green-500/30 transition-all duration-300">
                <div className="w-16 h-16 bg-green-900/30 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="font-semibold text-xl mb-3 text-green-300">Start Today</h2>
                <p className="text-gray-300">Begin your journey to better habits and improved productivity.</p>
              </div>
            </div>
          </section>
          
          <section className="mb-20 bg-gray-900/50 p-10 rounded-2xl border border-white/10">
            <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
            
            {formSubmitted ? (
              <div className="bg-green-900/30 border border-green-500/30 rounded-lg p-6 text-center">
                <div className="flex justify-center mb-4">
                  <Image src="/icon.png" alt="Zuzu Logo" width={60} height={60} className="rounded-md" />
                </div>
                <h3 className="text-xl font-semibold text-green-300 mb-2">Thank you for your message!</h3>
                <p className="text-gray-300">We've received your inquiry and will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
                <div className="mb-6">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-300 shadow-lg shadow-blue-500/20"
                >
                  Send Message
                </button>
              </form>
            )}
          </section>
        </div>
      </main>
      
      <footer className="bg-gray-900 border-t border-white/10 py-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-6 md:mb-0">
              <Image src="/icon.png" alt="Zuzu Logo" width={40} height={40} className="rounded-md mr-3" />
              <span className="text-xl font-bold">Zuzu</span>
            </div>
            
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-center md:text-left">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-200">Contact</h3>
                <p className="text-gray-400 mb-1">
                  <a href="mailto:contato@htps.io" className="hover:text-blue-400 transition-colors duration-200">contato@htps.io</a>
                </p>
                <p className="text-gray-400">
                  <a 
                    href="https://wa.me/447598216250" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-green-400 transition-colors duration-200 flex items-center justify-center md:justify-start"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    WhatsApp
                  </a>
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-200">Legal</h3>
                <p className="text-gray-400">
                  <Link href="/privacy" className="hover:text-blue-400 transition-colors duration-200">
                    Privacy Policy
                  </Link>
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-white/10 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Zuzu App. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
