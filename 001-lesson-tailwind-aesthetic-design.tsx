// 001-lesson-tailwind-aesthetic-design.tsx
// This lesson demonstrates a simple, clean, professional UI layout using Tailwind CSS classes.

import React from 'react';

export default function LessonTailwindAesthetic() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
            Tailwind Aesthetic Design
          </h1>
          <p className="text-gray-700 mb-6">
            This component shows how to use Tailwind CSS for a clean, professional look.
          </p>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
