'use client'
import Link from "next/link";


export const resorts = [
  {
    id: "bali-bliss",
    name: "Bali Bliss Resort",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    description: "A luxurious tropical retreat surrounded by lush gardens and rice paddies. Enjoy infinity pools, spa treatments, and world-class dining.",
    rating: 4.8,
    reviews: 112,
  },
  {
    id: "maldives-paradise",
    name: "Maldives Paradise",
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    description: "Overwater villas, crystal-clear lagoons, and private beaches await at this Maldives icon. Perfect for honeymoons and family getaways.",
    rating: 4.9,
    reviews: 203,
  },
  {
    id: "alpine-retreat",
    name: "Alpine Retreat",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    description: "Cozy up in the mountains with breathtaking views, ski-in/ski-out access, and gourmet alpine cuisine.",
    rating: 4.7,
    reviews: 87,
  },
  {
    id: "tropical-escape",
    name: "Tropical Escape",
    img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80",
    description: "A vibrant beachfront resort with palm-lined pools, water sports, and nightly entertainment for all ages.",
    rating: 4.6,
    reviews: 76,
  },
  {
    id: "desert-oasis",
    name: "Desert Oasis",
    img: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=600&q=80",
    description: "Experience serenity in the dunes with luxury tents, camel rides, and starlit dinners under the vast desert sky.",
    rating: 4.5,
    reviews: 54,
  },
];
import React, { useState } from "react";
import ResortModal from "./ResortModal";

export default function ResortsList() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedResortId, setSelectedResortId] = useState<string | null>(null);

  const handleOpen = (id: string) => {
    setSelectedResortId(id);
    setModalOpen(true);
  };
  const handleClose = () => {
    setModalOpen(false);
    setSelectedResortId(null);
  };

  return (
    <section className="w-full py-20 bg-gradient-to-br from-white via-gray-50 to-gray-100">
      <h2 className="text-center text-4xl font-extrabold text-gray-900 mb-6 tracking-tight">Resorts</h2>
      <div className="w-full h-[2px] bg-gray-200 my-8 rounded" />
      <div className="flex justify-center flex-wrap gap-10 px-4">
        {resorts.map((resort) => (
          <div key={resort.id} className="relative w-[320px] bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col">
            <img src={resort.img} alt={resort.name} className="w-full h-48 object-cover rounded-t-2xl" />
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-gray-900 mb-1">{resort.name}</h3>
              <p className="text-gray-600 text-sm mb-6 flex-1 line-clamp-3">{resort.description}</p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-yellow-500 font-semibold">★ {resort.rating}</span>
                <span className="text-gray-400 text-xs">{resort.reviews} reviews</span>
              </div>
              <button
                className="bg-indigo-500 border-l-4 border-b-4 hover:border-b-2 hover:border-l-2 border-indigo-600 hover:bg-indigo-700 text-white rounded-lg py-2 px-5 font-semibold shadow transition-all duration-150"
                onClick={() => handleOpen(resort.id)}
              >
                View More
              </button>
            </div>
          </div>
        ))}
      </div>
      <ResortModal open={modalOpen} onClose={handleClose} resortId={selectedResortId} />
    </section>
  );
}


