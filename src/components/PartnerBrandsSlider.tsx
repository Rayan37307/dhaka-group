'use client'

// Replace these with your actual brand logos or names
const brands = [
  { name: "Brand A", img: "/brand.webp" },
  { name: "Brand B", img: "/brand.webp" },
  { name: "Brand C", img: "/brand.webp" },
  { name: "Brand D", img: "/brand.webp" },
  { name: "Brand E", img: "/brand.webp" },
];

const PartnerBrandsSlider = () => (
  <section className="w-full py-16 bg-gradient-to-br from-white via-gray-50 to-gray-100">
  <h2 className="text-center text-4xl font-extrabold text-gray-900 mb-6 tracking-tight">Brands</h2>
  <div className="w-full h-[2px] bg-gray-200 my-8 rounded" />
  <div className="overflow-x-auto">
    <div className="flex gap-10 px-4 py-4 items-center min-w-max">
      {brands.map((brand) => (
        <div
          key={brand.name}
          className="flex flex-col items-center justify-center min-w-[200px] max-w-[200px] bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-shadow duration-300 p-4 group"
        >
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-tr from-indigo-50 via-white to-indigo-100 rounded-xl mb-2">
            <img
              src={brand.img}
              alt={brand.name}
              className="w-full h-[100px] object-contain rounded bg-white shadow group-hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "https://via.placeholder.com/80x80?text=Brand";
              }}
            />
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
);

export default PartnerBrandsSlider;
