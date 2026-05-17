import Navbar from "../components/Navbar";

export default function RecommendationPage() {
  const userName = "Jay";

  const apartments = [
    {
      id: 1,
      name: "Skyline Residency",
      location: "Kharadi, Pune",
      price: "₹18,000 / month",
      image:
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Green Valley Apartments",
      location: "Wakad, Pune",
      price: "₹22,000 / month",
      image:
        "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Urban Nest",
      location: "Hinjewadi, Pune",
      price: "₹25,000 / month",
      image:
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 px-6 md:px-12 py-10">
        
        {/* Heading */}
        <div className="mb-10">
          <h2 className="text-4xl font-bold text-gray-800">
            Hello, {userName}
          </h2>

          <p className="text-gray-600 mt-2 text-lg">
            Best places recommended for you.
          </p>
        </div>

        {/* Apartment Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {apartments.map((apartment) => (
            <div
              key={apartment.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition duration-300"
            >
              <img
                src={apartment.image}
                alt={apartment.name}
                className="w-full h-52 object-cover"
              />

              <div className="p-5">
                <h3 className="text-2xl font-semibold text-gray-800">
                  {apartment.name}
                </h3>

                <p className="text-gray-500 mt-2">
                  {apartment.location}
                </p>

                <div className="flex justify-between items-center mt-5">
                  <span className="text-blue-600 font-bold text-lg">
                    {apartment.price}
                  </span>

                  <button className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white py-5 text-center text-gray-500 text-sm">
        © 2026 PRLSS - Personalized Re-Location Suggestion System
      </footer>
    </div>
  );
}