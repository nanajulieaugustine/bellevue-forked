//Fortæller at det kører i browseren, gør det muligt at klikke osv
"use client";
import { useState } from "react";
import PopupNyhedsbrev from "./PopupNyhedsbrev";
import Tilmeld from "../knapper/TertiaryButton";

//Laver variablen TilmeldForm - modtager props: fields, onsuccess, buttontext som skal være tilmeld standard
const TilmeldForm = ({ fields, onSuccess, buttonText = "Tilmeld" }) => {
  //Gemmer brugerens indtastede værdier (fx navn og email)
  const [values, setValues] = useState({});
  //Gemmer fejlbeskeder for hvert felt.
  const [errors, setErrors] = useState({});
  //Bruges til at styre ryste-animation, hvis der er fejl
  const [shake, setShake] = useState({});
  //Bestemmer om popup’en skal vises eller ej. som udgangspunkt nej, medmindre andet er sagt.
  const [showPopup, setShowPopup] = useState(false);

  // Gemmer de indtastede værdier, så de kan vises i popup'en
  const [submittedData, setSubmittedData] = useState({});

//Kører hver gang brugeren skriver i et inputfelt.
  const handleChange = (name, value) => {
    //Gem det nye input – men behold alt det, der allerede er skrevet.
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  //Den funktion der sørger for at der felterne er korrekt udfyldt. 
  const handleSubmit = () => {
    //Opretter midlertidige objekter til fejl og animation
    let newErrors = {};
    let newShake = {};

    //Går igennem alle inputfelter, der er sendt ind via props
    fields.forEach((field) => {
      //Henter værdien og fjerner mellemrum før/efter
      //?. sikrer, at koden ikke crasher hvis feltet er tomt
      const value = values[field.name]?.trim();

      //Hvis feltet ikke er udfyldt
      if (!values[field.name]?.trim()) {
        //Vises fejlbesked
        newErrors[field.name] = "Skal udfyldes*";
        //Og der rystes
        newShake[field.name] = true;
      }

          // Ekstra validering for email - "Hvis teksten ikke ligner en gyldig e-mailadresse, så er der en fejl.
      if (
        // Tjekker om det nuværende felt er et e-mail-felt
        field.type === "email" &&
        //Sikrer, at der faktisk er indtastet noget (feltet er ikke tomt)
        value &&
        //Tester om værdien ikke matcher et gyldigt e-mailformat
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
        //Hvis alle ovenstående betingelser er opfyldt, kører koden herunder
      ) {
        //Gemmer en fejlbesked for det specifikke felt:
        newErrors[field.name] = "Indtast en gyldig e-mail!";
        //Aktiverer ryste-animationen på det felt, der er ugyldigt
        newShake[field.name] = true;
      }
    });

    //Gemmer/opdatere state med de fundne fejl
    setErrors(newErrors);
    setShake(newShake);

    //Hvis der er en fejl i udfyldningen kommer der ryst, og burgeren har mulgiehd for at dobbelttjekke at alle feler er udfyldt.
    // Object.keys laver en liste med alle feltnavne, der har fejl
// Hvis listen er større end 0, er der fejl i formularen
    if (Object.keys(newErrors).length > 0) {
      setTimeout(() => setShake({}), 500);
      return;
    }

    // Hvis alle felter er gyldige:
    // - Gemmes brugerens input
    // - Popup vises som succes-feedback
    // - Formularen nulstilles
    setShowPopup(true);
    setValues({});
    setErrors({});
    onSuccess?.(values);
    setSubmittedData(values);
  };

  return (
    <>
    {/* fields er en array (liste) af objekter */}
    {/* .map() = Den går igennem hvert element i arrayen og laver noget nyt ud fra det. */}
      {fields.map((field) => (
        <div
          key={field.name}
          //turnary operator= er shake sand? tilføj shake funtion ellers null
          className={`relative ${
            shake[field.name] ? "animate-shake" : ""
          } mb-4`}
        >
          <input
          //|| "text" betyder: Hvis field.type ikke findes, så brug "text" som standard.
            type={field.type || "text"}
            //Viser grå tekst i inputfeltet, som beskriver hvad man skal skrive
            placeholder={field.placeholder}
            //Holder styr på hvad brugeren har skrevet - || "" sikrer, at feltet ikke er undefined, hvis brugeren ikke har skrevet noget endnu
            value={values[field.name] || ""}
            //Når brugeren skriver noget, kaldes denne funktion
            onChange={(e) => handleChange(field.name, e.target.value)}
            className={`bg-(--beige-600) rounded-xl p-4 w-full text-(--moerkblaa-900) border-2 ${
              //Hvis der er fejl i feltet name, laver den rød kan - ellers gennemsigtig
              errors[field.name] ? "border-(--roed-600)" : "border-transparent"
            }`}
          />
          {/* tjekker: Er der en fejlbesked gemt for dette felt */}
          {/* “Hvis der findes en fejlbesked (errors[field.name] er sand), så vis det, der står efter &&.” */}
          {errors[field.name] && (
            <p className="text-(--roed-600) text-sm mt-1 absolute top-full left-0">
              {errors[field.name]}
            </p>
          )}
        </div>
      ))}

      <Tilmeld onClick={handleSubmit}>{buttonText}</Tilmeld>

{/* Popup vises efter succesfuld submit
    Sender navn og email videre for at bekræfte brugerens input */}
      {showPopup && (
    <PopupNyhedsbrev
    onClose={() => setShowPopup(false)}
    navn={submittedData.navn}
    email={submittedData.email}
  />
)}

{/* // Tallene 0%, 25%, 50%, 75%, 100% er tids-stempler */}
      <style jsx>{`
        @keyframes shake {
          0% {
            transform: translateX(0);
          }
          25% {
            transform: translateX(-5px);
          }
          50% {
            transform: translateX(5px);
          }
          75% {
            transform: translateX(-5px);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-shake {
          animation: shake 0.3s;
        }
      `}</style>
    </>
  );
};

export default TilmeldForm;
