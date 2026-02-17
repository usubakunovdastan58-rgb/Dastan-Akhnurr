import React from "react";
import "./Home.css";

const deals = [
  {
    id: 1,
    title: "Greys Vage",
    discount: "15% off",
    days: "6 Days Remaining",
    img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
  },
  {
    id: 2,
    title: "Greys Vage",
    discount: "10% off",
    days: "6 Days Remaining",
    img: "https://images.unsplash.com/photo-1551183053-bf91a1d81141"
  },
  {
    id: 3,
    title: "Greys Vage",
    discount: "25% off",
    days: "7 Days Remaining",
    img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd"
  },
  {
    id: 4,
    title: "Greys Vage",
    discount: "20% off",
    days: "8 Days Remaining",
    img: "https://images.unsplash.com/photo-1543353071-873f17a7a088"
  }
];

export default function Home() {
  return (
    <div className="home">
      {/* Header */}
      <header className="header">
        <div className="logo">
          <span className="logo-icon">🚚</span>
          <span className="logo-text">foodwagon</span>
        </div>

        <div className="location">
          Deliver to: <b>Current Location Mohammadpur Bus Stand, Dhaka</b>
        </div>

        <div className="header-actions">
          <button className="search-btn">Search Food</button>
          <button className="login-btn">Login</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Are you starving?</h1>
          <p>Within a few clicks, find meals that are accessible near you</p>

          <div className="search-card">
            <div className="tabs">
              <button className="active">Delivery</button>
              <button>Pickup</button>
            </div>

            <div className="search-form">
              <input placeholder="Enter Your Address" />
              <button>Find Food</button>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1555126634-323283e090fa"
            alt="noodles"
          />
        </div>
      </section>

      {/* Deals Section */}
      <section className="deals">
        {deals.map(deal => (
          <div key={deal.id} className="deal-card">
            <div className="deal-image">
              <img src={deal.img} alt="" />
              <div className="discount">{deal.discount}</div>
            </div>

            <h3>{deal.title}</h3>
            <span className="days">{deal.days}</span>
          </div>
        ))}
      </section>
    </div>
  );
}
