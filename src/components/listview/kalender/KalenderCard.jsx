"use client";
import Image from "next/image";

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
            <p>{item.description}</p>

            {item.image?.[0] && (
              <Image
                src={item.image[0].url}
                alt={item.image[0].alt}
                width={200}
                height={200}
                className="object-cover"
              />
            )}

            <p>Tags: {item.tags}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
