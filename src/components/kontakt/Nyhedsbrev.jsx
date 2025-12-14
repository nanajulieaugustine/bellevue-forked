"use client";

import Image from "next/image";
import { useState } from "react";
import PopupNyhedsbrev from "../global/komponenter/PopupNyhedsbrev";
import Tilmeld from "../global/knapper/Tilmeld";

const Nyhedsbrev = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({}); // til at holde styr på fejl
  const [shake, setShake] = useState({}); // til shake animation

  const handleTilmeldClick = () => {
    let newErrors = {};
    let newShake = {};

    if (!email.trim()) {
      newErrors.email = "Skal udfyldes";
      newShake.email = true;
    }

    setErrors(newErrors);
    setShake(newShake);

    // Hvis der er fejl, stop her
    if (Object.keys(newErrors).length > 0) {
      // Fjern shake efter 500ms så animationen kan køre igen næste gang
      setTimeout(() => setShake({}), 500);
      return;
    }

    // Ingen fejl → vis popup og nulstil felter
    setShowPopup(true);
    setEmail("");
    setErrors({});
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="">
      <section className="pt-20 pb-20">
        <div className="p-0 md:px-4 mx-auto max-w-xl">
          <div className="col-span-2 bg-(--bellevueblaa-600) text-(--beige-600) rounded-0 md:rounded-2xl p-10">
            <div className="w-full mx-auto flex flex-col gap-5 font-light">
            <div className="flex justify-center">
          <Image
            src="/svg/watertower-mini.svg"
            alt=""
            width={40}
            height={900}
          />
        </div>
        <p className="text-center mb-6 text-xl pt-5">
          Tilmeld dig vores nyhedsbrev og modtag de seneste nyheder direkte i
           din indbakke
      </p>

              {/* EMAIL INPUT */}
              <div className={`relative ${shake.email ? "animate-shake" : ""}`}>
                <input
                  id="email"
                  type="email"
                  placeholder="Skriv din email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`bg-(--beige-600) rounded-xl p-4 w-full text-(--moerkblaa-900) border-2 ${
                    errors.email ? "border-(--roed-600)" : "border-transparent"
                  }`}
                />
                {errors.email && (
                  <p className="text-(--roed-600) text-sm mt-1 absolute top-full left-0">
                    {errors.email}
                  </p>
                )}
              </div>

              <Tilmeld onClick={handleTilmeldClick} />

            </div>
          </div>
        </div>
      </section> 

      {/* Popup */}
      {showPopup && <PopupNyhedsbrev onClose={handleClosePopup} />}

      {/* Shake animation CSS */}
      <style jsx>{`
        @keyframes shake {
          0% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          50% { transform: translateX(5px); }
          75% { transform: translateX(-5px); }
          100% { transform: translateX(0); }
        }
        .animate-shake {
          animation: shake 0.3s;
        }
      `}</style>
    </div>
  );
};
export default Nyhedsbrev;

