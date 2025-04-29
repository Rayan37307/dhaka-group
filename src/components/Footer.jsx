import Link from 'next/link';
import React from 'react';
const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-gray-100 via-white to-white text-gray-800 py-12 md:py-16 px-6 md:px-12 lg:px-24 border-t border-gray-200 shadow-inner">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Section 1: Brand/Description */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Dhaka Group</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            A brief description of your company or website. Highlighting your mission or key value proposition.
          </p>
        </div>

        {/* Section 2: Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3> {/* Changed heading text to darker gray */}
          {/* List of navigation links */}
          <ul className="space-y-2">
            {/* Links with dark gray base color and even darker gray on hover */}
            <li><Link href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-300">Home</Link></li>
            <li><Link href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-300">About Us</Link></li>
            <li><Link href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-300">Services</Link></li>
            <li><Link href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-300">Contact</Link></li>
          </ul>
        </div>

        {/* Section 3: Resources/Support Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Resources</h3> {/* Changed heading text to darker gray */}
          {/* List of resource/support links */}
          <ul className="space-y-2">
             {/* Links with dark gray base color and even darker gray on hover */}
            <li><Link href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-300">FAQ</Link></li>
            <li><Link href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-300">Support</Link></li>
            <li><Link href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-300">Privacy Policy</Link></li>
            <li><Link href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-300">Terms of Service</Link></li>
          </ul>
        </div>

        {/* Section 4: Social Media & Contact */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Connect With Us</h3> {/* Changed heading text to darker gray */}
          {/* Social media icons (using placeholder links) */}
          <div className="flex space-x-4 mb-4">
            {/* Icons with dark gray base color and even darker gray on hover */}
            <Link href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-300" aria-label="Facebook">
              {/* Placeholder SVG for a social icon */}
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.299c-1.213 0-1.58.756-1.58 1.536V12h3.292l-.517 3.203h-2.775V22c4.781-.75 8.437-4.887 8.437-9.879z" clipRule="evenodd" />
              </svg>
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-300" aria-label="Twitter">
               {/* Placeholder SVG for a social icon */}
               <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c1.803 0 3.533-.643 4.932-1.804l.795-.795c1.693 1.196 3.873 1.991 6.191 1.991 3.535 0 6.412-2.877 6.412-6.412 0-.252-.01-.503-.03-.752A4.654 4.654 0 0024 8.59a4.636 4.636 0 01-1.347.37c1.553-.932 2.611-2.414 3.149-4.172a8.913 8.913 0 01-2.866 1.093c-1.357-1.449-3.288-2.35-5.383-2.35-4.01 0-7.264 3.254-7.264 7.264 0 .567.066 1.118.193 1.647-6.03-3.03-11.36-8.723-14.93-16.424a7.35 7.35 0 00-.995 3.707c0 2.529 1.287 4.756 3.254 6.075a3.533 3.533 0 01-1.652-.457v.09c0 3.514 2.494 6.436 5.806 7.097a3.535 3.535 0 01-1.595.06c.912 2.874 3.58 4.97 6.76 5.029a7.21 7.21 0 004.056 1.303c.264 0 .526-.015.786-.047a9.07 9.07 0 01-2.662 1.952z" />
              </svg>
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-300" aria-label="LinkedIn">
               <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.582-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
          <p className="text-sm">Email: <Link href="mailto:info@yourbrand.com" className="text-gray-600 hover:text-gray-800 transition-colors duration-300">info@yourbrand.com</Link></p>
          <p className="text-sm">Phone: <Link href="tel:+1234567890" className="text-gray-600 hover:text-gray-800 transition-colors duration-300">+1 (234) 567-890</Link></p>
        </div>

      </div>
      <div className="border-t border-gray-300 mt-8 pt-6 text-center text-sm text-gray-600"> {/* Changed copyright text and border color */}
        &copy; {new Date().getFullYear()} Your Brand. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
