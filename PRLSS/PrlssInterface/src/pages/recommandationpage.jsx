import Navbar from "../components/Navbar";
import "./recommandationpage.css"

export default function RecommendationPage() {

  const apartments = [
    {
      id: 1,
      name: "Skyline Residency",
      location: "Kharadi, Pune",
      price: "₹18,000 / month",
    },
    {
      id: 2,
      name: "Urban Nest",
      location: "Hinjewadi, Pune",
      price: "₹25,000 / month",
    },
    {
      id: 3,
      name: "Green Valley",
      location: "Wakad, Pune",
      price: "₹20,000 / month",
    },
  ];

  return (
    <div className="recommendation-page">

      <Navbar />

      <main className="recommendation-content">

        <div className="recommendation-heading">
          <h1>Hello Jay</h1>

          <p>
            Best places recommended for you
          </p>
        </div>

        <div className="apartment-grid">

          {apartments.map((apartment) => (

            <div className="apartment-card" key={apartment.id}>

              <div className="apartment-image"></div>

              <h2>{apartment.name}</h2>

              <p>{apartment.location}</p>

              <div className="card-footer">

                <span>{apartment.price}</span>

                <button>
                  View
                </button>

              </div>

            </div>

          ))}

        </div>

      </main>

      <footer className="recommendation-footer">
        © 2026 PRLSS - All rights reserved
      </footer>

    </div>
  );
}