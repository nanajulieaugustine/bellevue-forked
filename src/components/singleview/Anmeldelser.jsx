import Link from "next/link";
import Stjerner from "../global/ikoner/Stjerner";

const Anmeldelser = ({ review }) => {
  const antalStjerner = Number(review.stjerner); // API giver "5" som string

  return (
    <Link
      href={review.link}
      target="_blank"
      className="text-center p-10 max-w-150"
    >
      <blockquote className="text-xl font-black italic p-10">
        "{review.tekst}"
      </blockquote>

      <p className="bold">- {review.anmelder}</p>

      <div className="flex justify-center gap-1 mt-4 text-(--hvid)">
        {[...Array(antalStjerner)].map((_, i) => (
          <Stjerner key={i} size={30} />
        ))}
      </div>
    </Link>
  );
};

export default Anmeldelser;
