"use client";

const KalenderCard = ({ items }) => {
  if (!items.length) return <p>Ingen items fundet</p>;

  return (
    <li>
      {/* Herunder hentes data ind */}
      {items.map((item) => (
        <div
          key={item.id}
          className="bg-(--beige-100) p-10 mb-10 flex justify-between rounded-2xl"
        >
          {/* Container VENSTRE */}
          <div className="grid gap-5">
            {/* Container for tid + tag */}
            <div className="w-150">
              <div className="grid grid-cols-2">
                <p>{item.date}</p>
                <div className="flex gap-20">
                  <p>|</p>
                  <p>{item.tags}</p>
                </div>
              </div>
            </div>

            {/* Container for heading */}
            <h2 className="text-4xl">{item.name}</h2>
          </div>

          {/* Container HØJRE */}
          <div className="self-end">
            <a
              className="px-9 py-3 rounded-4xl border border-(--bellevueblaa-600) text-(--bellevueblaa-600)"
              href="https://www.ticketmaster.dk/artist/folk-og-rovere-i-kardemommeby-billetter/871667?brand=dk_bellevue&language=da-dk&venueId=305"
              target="_blank"
            >
              Køb billet
            </a>
          </div>
        </div>
      ))}
    </li>
  );
};
export default KalenderCard;
