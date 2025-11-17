"use client";

export default function ListClient({ items = [] }) {
  if (!items.length) return <p>Ingen items fundet</p>;

  return (
    <div>
      <h1>Bellevue_tems fra tabel testside</h1>

      {/* Herunder hentes data ind */}
      <div>
        {items.map((item) => (
          <div key={item.id}>
            <h2>{item.name}</h2>
            <p>Pris: {item.price} kr</p>
            <p>{item.description}</p>

            {item.image?.[0] && (
              <img
                src={item.image[0].url}
                alt={item.image[0].alt}
                style={{ width: "200px" }}
              />
            )}

            <p>Tags: {item.tags}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
