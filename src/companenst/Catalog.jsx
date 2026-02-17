import React from "react";

const restaurants = [
  {
    id: 1,
    name: "Foodworld",
    rating: 46,
    discount: 20,
    fast: true,
    status: "Opens tomorrow",
    brand: "Disney",
    brandColor: "#2563eb",
    img: "https://picsum.photos/seed/foodworld/800/500",
  },
  {
    id: 2,
    name: "Pizzahub",
    rating: 40,
    discount: 15,
    fast: true,
    status: "Opens tomorrow",
    brand: "Pizza",
    brandColor: "#f59e0b",
    img: "https://picsum.photos/seed/pizzahub/800/500",
  },
  {
    id: 3,
    name: "Donuts hut",
    rating: 20,
    discount: 10,
    fast: true,
    status: "Open Now",
    brand: "Dunkin",
    brandColor: "#3b82f6",
    img: "https://picsum.photos/seed/donut1/800/500",
  },
  {
    id: 4,
    name: "Donuts hut",
    rating: 50,
    discount: 15,
    fast: true,
    status: "Open Now",
    brand: "Subway",
    brandColor: "#22c55e",
    img: "https://picsum.photos/seed/donut2/800/500",
  },
  {
    id: 5,
    name: "Ruby Tuesday",
    rating: 26,
    discount: 10,
    fast: true,
    status: "Open Now",
    brand: "Ruby",
    brandColor: "#f97316",
    img: "https://picsum.photos/seed/steak1/800/500",
  },
  {
    id: 6,
    name: "Kuatata Fried Chicken",
    rating: 53,
    discount: 25,
    fast: true,
    status: "Open Now",
    brand: "KFC",
    brandColor: "#16a34a",
    img: "https://picsum.photos/seed/chicken1/800/500",
  },
  {
    id: 7,
    name: "Red Square",
    rating: 45,
    discount: 10,
    fast: true,
    status: "Open Now",
    brand: "Cafe",
    brandColor: "#ef4444",
    img: "https://picsum.photos/seed/soup1/800/500",
  },
  {
    id: 8,
    name: "Taco Bell",
    rating: 35,
    discount: 10,
    fast: true,
    status: "Open Now",
    brand: "Taco",
    brandColor: "#f59e0b",
    img: "https://picsum.photos/seed/breakfast1/800/500",
  },
];

function Badge({ children }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "6px 10px",
        borderRadius: 999,
        background: "#f59e0b",
        color: "white",
        fontWeight: 700,
        fontSize: 12,
        lineHeight: 1,
      }}
    >
      {children}
    </span>
  );
}

function Pill({ children, tone = "green" }) {
  const tones = {
    green: { bg: "#dcfce7", text: "#166534" },
    orange: { bg: "#ffedd5", text: "#9a3412" },
  };

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "8px 12px",
        borderRadius: 999,
        background: tones[tone].bg,
        color: tones[tone].text,
        fontWeight: 700,
        fontSize: 12,
        width: "fit-content",
      }}
    >
      {children}
    </span>
  );
}

function Card({ item }) {
  const isOpenNow = item.status.toLowerCase().includes("open now");
  return (
    <article
      style={{
        borderRadius: 18,
        overflow: "hidden",
        background: "white",
        boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
      }}
    >
      {/* image */}
      <div style={{ position: "relative" }}>
        <img
          src={item.img}
          alt={item.name}
          style={{
            width: "100%",
            height: 150,
            objectFit: "cover",
            display: "block",
          }}
        />

        {/* top badges */}
        <div
          style={{
            position: "absolute",
            top: 10,
            left: 10,
            display: "flex",
            gap: 8,
          }}
        >
          <Badge>🏷 {item.discount}% off</Badge>
          {item.fast && <Badge>⚡ Fast</Badge>}
        </div>
      </div>

      {/* content */}
      <div style={{ padding: 14 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginBottom: 10,
          }}
        >
          {/* brand mini logo */}
          <div
            style={{
              width: 34,
              height: 26,
              borderRadius: 8,
              background: item.brandColor,
              color: "white",
              display: "grid",
              placeItems: "center",
              fontWeight: 800,
              fontSize: 11,
            }}
            title={item.brand}
          >
            {item.brand.slice(0, 2).toUpperCase()}
          </div>

          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 800, fontSize: 14 }}>{item.name}</div>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ color: "#f59e0b" }}>★</span>
              <span style={{ fontWeight: 700, color: "#374151", fontSize: 13 }}>
                {item.rating}
              </span>
            </div>
          </div>
        </div>

        <Pill tone={isOpenNow ? "green" : "orange"}>{item.status}</Pill>
      </div>
    </article>
  );
}

export default function Catalog() {
  return (
    <section style={{ background: "#fff", padding: "40px 18px" }}>
      <div style={{ maxWidth: 1050, margin: "0 auto" }}>
        <h2
          style={{
            textAlign: "center",
            fontSize: 22,
            fontWeight: 900,
            margin: 0,
          }}
        >
          Featured Restaurants
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
            gap: 22,
            marginTop: 26,
          }}
        >
          {restaurants.map((r) => (
            <Card key={r.id} item={r} />
          ))}
        </div>

        <div style={{ display: "flex", justifyContent: "center", marginTop: 30 }}>
          <button
            style={{
              border: "none",
              cursor: "pointer",
              padding: "12px 18px",
              borderRadius: 14,
              background: "#f59e0b",
              color: "white",
              fontWeight: 900,
              boxShadow: "0 10px 20px rgba(245, 158, 11, 0.35)",
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            View All <span style={{ fontSize: 18, lineHeight: 1 }}>›</span>
          </button>
        </div>

        {/* Responsive */}
        <style>{`
          @media (max-width: 1024px) {
            .grid4 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          }
          @media (max-width: 520px) {
            .grid4 { grid-template-columns: 1fr; }
          }
        `}</style>
      </div>

      {/* хак: style tag үчүн класс беребиз */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
          const el = document.querySelector('[data-grid4]');
          if(el) el.classList.add('grid4');
        `,
        }}
      />
    </section>
  );
}
