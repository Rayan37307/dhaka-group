import React from 'react';
import Link from 'next/link';

export const boardMembers = [
  {
    id: "john-doe",
    name: "John Doe",
    position: "Chief Executive Officer",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
    bio: "John brings over 20 years of experience in hospitality management with a focus on luxury resorts and sustainable tourism.",
  },
  {
    id: "jane-smith",
    name: "Jane Smith",
    position: "Chief Financial Officer",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    bio: "With a background in investment banking, Jane oversees all financial operations and strategic growth initiatives.",
  },
  {
    id: "david-johnson",
    name: "David Johnson",
    position: "Chief Operations Officer",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80",
    bio: "David specializes in operational excellence and guest experience enhancement across our global properties.",
  },
  {
    id: "sarah-williams",
    name: "Sarah Williams",
    position: "Chief Marketing Officer",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
    bio: "Sarah leads our brand development and marketing strategies with innovative approaches to luxury hospitality.",
  }
];

const BoardMembers = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-white via-gray-50 to-gray-100">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-900 tracking-tight">Our Leadership Team</h2>
    <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-14">
      Meet the visionaries behind our success, dedicated to creating exceptional experiences and driving innovation in luxury hospitality.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
      {boardMembers.map((member) => (
        <Link href={`/board-members/${member.id}`} key={member.id}>
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden cursor-pointer group border border-gray-100">
            <div className="h-60 overflow-hidden">
              <img 
                src={member.img} 
                alt={member.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6 flex flex-col items-center">
              <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
              <p className="text-indigo-600 font-medium mb-3">{member.position}</p>
              <p className="text-gray-500 text-center line-clamp-3">{member.bio}</p>
            </div>
          </div>
        </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BoardMembers;
