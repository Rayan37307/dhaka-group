
export default function About() {
  return (
<section className="py-24 bg-gradient-to-br from-white via-gray-50 to-gray-100">
  <h2 className="text-center text-4xl font-extrabold text-gray-900 mb-6 tracking-tight">About</h2>
  <div className="w-full h-[2px] bg-gray-200 my-8 rounded" />
  <div className="container mx-auto px-6 md:px-12">
    <div className="flex flex-col lg:flex-row items-center bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
      <div className="w-full lg:w-1/2 p-10 flex justify-center items-center bg-gradient-to-tr from-indigo-50 via-white to-indigo-100">
        <img src="/about.svg" alt="About Us" className="w-64 h-64 object-contain" />
      </div>
      <div className="w-full lg:w-1/2 p-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">About Us</h2>
        <p className="text-lg text-gray-600 mb-4">
          Dhaka Group is a holding company of renowned business entities. The company has been operating since 2019 and has established itself as a reliable and trustworthy business partner. 
        </p>
        <p className="text-lg text-gray-600">
          Our mission is to build long-term relationships with our customers and partners by providing them with the best possible service and support. We strive to be a leader in the industry and to continuously improve our services and products.
        </p>
      </div>
    </div>
  </div>
</section>
  );
}
