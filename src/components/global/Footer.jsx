"use client";

import { useState } from "react";
import PopupNyhedsbrev from "../global/komponenter/PopupNyhedsbrev";
import Tilmeld from "./knapper/TertiaryButton";
import Image from "next/image";

const Footer = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState("");

  const handleTilmeldClick = () => {
    if (!email.trim()) return; // kan tilføje validering senere

    setShowPopup(true);
    setEmail(""); // nulstil feltet
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const praktiskLinks = ["Handelsbetingelser", "CVR", "Privatdatapolitik", "Årsrapporter", "Vedtægter", "Egnsaftale", "Presse"];


  return (
    <div className="bg-(--moerkblaa-600) text-(--moerkblaa-100) grid grid-cols-1 md:grid-cols-3 gap-8 p-5">
      {/* --- Kolonne 1 --- */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <div>{/* logo af some */}</div>

        <div className="md:pt-40">
          <p className="font-bold pb-2 text-white">Administration:</p>
          <p>39 63 49 00 </p>
          <p> (hverdage 10 - 14)</p>
        </div>

        <div className="pt-10">
          <p className="font-bold pb-2 text-white">Billettelefon:</p>
          <p>Ticketmaster: 38 48 16 30 </p>
          <p> (hverdage 10 - 16.30)</p>
          <p>Kørestol- og ledsagerpladser:</p>
          <p> 38 48 16 33</p>
        </div>

        <div className="flex gap-7 pt-10 items-center">
          <a
            href="https://www.instagram.com/bellevueteatret/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/svg/insta-icon.svg"
              alt="Instagram"
              width={60}
              height={80}
            />
          </a>

          <a
            href="https://www.facebook.com/BellevueTeatret?locale=da_DK"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/svg/facebook-icon.svg"
              alt="Facebook"
              width={40}
              height={80}
            />
          </a>
        </div>


      </div>

      {/* --- Kolonne 2 --- */}
      <div className="pt-10 md:pt-40 flex flex-col items-center text-center">
        <h3 className="pb-4 text-white text-2xl beige-100">
          Hold dig opdateret
        </h3>
        <p className="text-(--beige-600)">
          Tilmeld dig vores nyhedsbrev og modtag de seneste nyheder direkte i
          din indbakke
        </p>
        <div className="w-full mx-auto flex flex-col gap-2 pt-10">
          <input
            id="footer-email"
            type="email"
            placeholder="Skriv din email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-(--beige-600) rounded-xl p-4 w-full text-(--moerkblaa-900) border-2 border-(--beige-900) focus:outline-none"
          />
          <Tilmeld onClick={handleTilmeldClick} />

        </div>
      </div>

      {/* --- Kolonne 3 --- */}
      <div className="pt-10 md:pt-40 flex flex-col items-center md:items-end text-center md:text-right">
        <p className="font-bold pb-2 text-white">Praktisk</p>
        <div className="flex flex-col items-center md:items-end gap-2">
          {praktiskLinks.map((link) => (
            <button key={link}>{link}</button>
          ))}
        </div>

        <div className="pt-10 flex flex-col items-center md:items-end">
          <div className="pb-4">
            {/* <button className="text-(--koboltblaa-600) border-2 border-(--koboltblaa-600) bg-(--bellevueblaa-100) pt-3 pb-3 pl-15 pr-15 rounded-xl">
              Find vej
            </button> */}
                    <a
          href="https://www.google.com/maps/search/?api=1&query=Strandvejen+451+2930+Klampenborg"
          target="_blank"
          rel="noopener noreferrer"
          className="
          text-(--koboltblaa-600)
          border-2 border-(--koboltblaa-600)
          bg-(--bellevueblaa-100)
          pt-3 pb-3 pl-15 pr-15
          rounded-xl
          transition-colors duration-300
          hover:bg-(--koboltblaa-600)
          hover:text-(--bellevueblaa-100)
            "
          >
          Find vej
        </a>
          </div>
          <p className="text-center font-bold md:text-right max-w-49">
            Strandvejen 451​ 2930 Klampenborg
          </p>
        </div>
      </div>

      {/* Popup */}
      {showPopup && <PopupNyhedsbrev onClose={handleClosePopup} />}
    </div>
  );
};

export default Footer;
