import React from "react";
import { Mail, Phone, MapPin, Facebook, Linkedin, Globe } from "lucide-react";

const Contact = () => {
  return (
    <section className="max-w-3xl mx-auto my-16 p-8 bg-white rounded-xl shadow-lg border border-gray-100">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Contact Us</h2>
        <p className="text-gray-500 text-lg">We'd love to hear from you! Reach out with any questions or comments.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="text-gray-700">123 Gulshan Ave, Dhaka, Bangladesh</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-primary" />
            <span className="text-gray-700">+880 1234 567890</span>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-primary" />
            <span className="text-gray-700">info@dhakagroup.com</span>
          </div>
          <div className="flex gap-4 mt-4">
            <a href="https://facebook.com/" target="_blank" rel="noopener" className="hover:text-blue-600 transition"><Facebook className="w-5 h-5" /></a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener" className="hover:text-blue-700 transition"><Linkedin className="w-5 h-5" /></a>
            <a href="https://dhakagroup.com/" target="_blank" rel="noopener" className="hover:text-green-700 transition"><Globe className="w-5 h-5" /></a>
          </div>
        </div>
        {/* Contact Form */}
        <form className="space-y-5">
          <div>
            <label className="block mb-1 font-medium text-gray-700">Name</label>
            <input type="text" className="w-full px-4 py-2 outline-none border rounded-md focus:ring-2 focus:ring-primary focus:outline-none" placeholder="Your Name" required />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">Email</label>
            <input type="email" className="w-full px-4 py-2 outline-none border rounded-md focus:ring-2 focus:ring-primary focus:outline-none" placeholder="you@email.com" required />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">Message</label>
            <textarea className="w-full px-4 py-2 outline-none focus:ring-2 focus:ring-primary focus:outline-none border rounded-md min-h-[100px]" placeholder="Type your message..." required />
          </div>
          <button type="submit" className="w-full bg-primary text-white font-semibold py-2 rounded-md shadow hover:bg-primary-dark transition">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
