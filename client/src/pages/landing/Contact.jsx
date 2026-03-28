import React from 'react';
import { FaRunning, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import Footer from '../../compnents/layout/Footer';
import Navbar from './Navbar';

export default function Contact() {
  return (
    <>
      <Navbar />

      {/* Contact Hero with Form */}
      <section
        className="min-h-[70vh] flex flex-col items-center justify-center pt-18 pb-10 px-4 bg-cover bg-center relative"
        style={{
          backgroundImage: `url('/contact_main.jpg')`,
          backgroundColor: 'rgba(0,0,0,0.6)',
          backgroundBlendMode: 'overlay',
        }}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-1 text-center p-6">
          Contact Us
        </h1>

        {/* Glassmorphism Contact Form */}
        <div
          className="backdrop-blur-md bg-white/10 border border-white/30 shadow-lg rounded-xl p-6 md:p-8 max-w-md w-full text-white"
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
          }}
        >
          <form className="space-y-4 text-sm">
            <div>
              <label className="block mb-1 font-medium">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-2 rounded bg-white/70 text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 rounded bg-white/70 text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Message</label>
              <textarea
                rows="3"
                placeholder="Type your message..."
                className="w-full p-2 rounded bg-white/70 text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-cyan-500 hover:bg-cyan-600 transition text-white font-semibold py-2 px-4 rounded-full w-full"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* Three-Column Info Section */}
      <section className="bg-gray-100 border-t border-gray-300 py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center text-gray-700">
          {[
            {
              icon: <FaRunning size={28} />,
              title: 'ABOUT FEST',
              lines: ['Sports Events', 'Cultural & Technical'],
            },
            {
              icon: <FaPhoneAlt size={28} />,
              title: 'PHONE (Landline)',
              lines: ['+91 98765 43210', '+91 87654 32109'],
            },
            {
              icon: <FaMapMarkerAlt size={28} />,
              title: 'COLLEGE LOCATION',
              lines: ['ABC College Campus', 'Kudal, Maharashtra, India'],
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col items-center gap-3 transform hover:-translate-y-1"
            >
              <div className="bg-blue-100 p-4 rounded-full shadow-md">
                <div className="text-blue-600">{item.icon}</div>
              </div>
              <h4 className="font-semibold text-xl text-gray-800 mt-2">{item.title}</h4>
              {item.lines.map((line, i) => (
                <p className="text-sm text-gray-600" key={i}>
                  {line}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
