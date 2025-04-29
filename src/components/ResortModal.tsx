import React from "react";
import { resorts } from "./ResortsList";

interface ResortModalProps {
  open: boolean;
  onClose: () => void;
  resortId: string | null;
}

export default function ResortModal({ open, onClose, resortId }: ResortModalProps) {
  if (!open || !resortId) return null;
  const resort = resorts.find(r => r.id === resortId);
  if (!resort) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur bg-white/60">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 relative animate-fadeIn">
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-2xl font-bold"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        <img src={resort.img} alt={resort.name} className="w-full h-56 object-cover rounded-xl mb-6" />
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{resort.name}</h2>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-yellow-500 font-semibold">★ {resort.rating}</span>
          <span className="text-gray-400 text-xs">{resort.reviews} reviews</span>
        </div>
        <p className="text-gray-700 mb-4">{resort.description}</p>
        {/* Add more resort details, gallery, map, reviews, etc. here if desired */}
      </div>
    </div>
  );
}
