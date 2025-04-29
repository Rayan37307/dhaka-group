import { resorts } from "@/components/ResortsList"; // Adjust path if needed

export default function ResortDetail({ params }: {params: {id: string}}) {
  const resort = resorts.find(r => r.id === params.id);
  if (!resort) return <div>Resort not found.</div>;

  return (
    <section className="max-w-3xl mx-auto py-12 px-4">
      <img src={resort.img} alt={resort.name} className="w-full h-72 object-cover rounded-3xl mb-6" />
      <h1 className="text-3xl font-bold accent mb-4">{resort.name}</h1>
      <div className="flex items-center gap-2 mb-2">
        {/* Star rating as in the card */}
      </div>
      <p className="text-lg text-gray-700 mb-4">{resort.description}</p>
      {/* Add more resort details, gallery, map, reviews, etc. */}
    </section>
  );
}
