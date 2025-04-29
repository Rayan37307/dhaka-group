'use client'
import React, { useState } from 'react';
import { MotionMenu } from './_motion-navbar';
import { Home, Info, Phone, Building, Users, MapPin } from 'lucide-react';


const MenuItems = [
  { name: 'Home', href: '/home', icon: Home },
  { name: 'About', href: '/about', icon: Info },
  { name: 'Contact', href: '/contact', icon: Phone },
  { name: 'Companies', href: '/companies', icon: Building },
  { name: 'Resorts', href: '/resorts', icon: MapPin },
  { name: 'Board Members', href: '/board-members', icon: Users },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-30">
  <div className="mx-auto max-w-7xl border-b border-gray-100 bg-white bg-opacity-95 backdrop-blur-md shadow-lg px-6 py-4 flex justify-between items-center rounded-b-2xl">
    <a href="/" className="flex gap-3 items-center">
      <img src="/next.svg" alt="Logo" className="w-14 h-14 rounded-lg shadow" />
      <span className="font-extrabold text-2xl text-gray-900 tracking-tight">Dhaka Group</span>
    </a>
        {/* Desktop Menu */}
        <nav className="hidden md:block">
          <ul className="flex gap-2">
            {MenuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="px-4 flex items-center gap-1 py-2 rounded-md font-medium text-gray-800 hover:bg-gray-100 hover:text-black transition-all duration-150"
                >
                  <item.icon className="w-5 h-5" />
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        {/* Hamburger for Mobile */}
        <button
          className="md:hidden flex flex-col gap-1 items-center justify-center p-2 rounded-elegant hover:bg-[#f3f3f3] transition"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span className={`block w-7 h-0.5 bg-gray-700 rounded transition-all ${open ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-7 h-0.5 bg-gray-700 rounded transition-all ${open ? 'opacity-0' : ''}`}></span>
          <span className={`block w-7 h-0.5 bg-gray-700 rounded transition-all ${open ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </div>
      {/* Mobile Menu with framer-motion */}
      <MotionMenu open={open}>
        <ul className="flex flex-col gap-1 items-center py-2">
          {MenuItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="nav-link block text-lg font-medium text-gray-900 px-2 py-2"
                onClick={() => setOpen(false)}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </MotionMenu>
    </header>
  );
};

export default Navbar;
