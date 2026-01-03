"use client";
import { useState } from "react";
import PopupNyhedsbrev from "./PopupNyhedsbrev";
import Tilmeld from "../knapper/TertiaryButton";

const TilmeldForm = ({ fields, onSuccess, buttonText = "Tilmeld" }) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [shake, setShake] = useState({});
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (name, value) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    let newErrors = {};
    let newShake = {};

    fields.forEach((field) => {
      const value = values[field.name]?.trim();

      if (!values[field.name]?.trim()) {
        newErrors[field.name] = "Skal udfyldes";
        newShake[field.name] = true;
      }

          // Ekstra validering for email - "Hvis teksten ikke ligner en gyldig e-mailadresse, så er der en fejl.""
          // Starter en betingelse (vi tjekker, om der skal vises en fejl)
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
        newErrors[field.name] = "Indtast en gyldig e-mail";
        //Aktiverer ryste-animationen på det felt, der er ugyldigt
        newShake[field.name] = true;
      }
    });

    setErrors(newErrors);
    setShake(newShake);

    if (Object.keys(newErrors).length > 0) {
      setTimeout(() => setShake({}), 500);
      return;
    }

    setShowPopup(true);
    setValues({});
    setErrors({});
    onSuccess?.(values);
  };

  return (
    <>
      {fields.map((field) => (
        <div
          key={field.name}
          className={`relative ${
            shake[field.name] ? "animate-shake" : ""
          } mb-4`}
        >
          <input
            type={field.type || "text"}
            placeholder={field.placeholder}
            value={values[field.name] || ""}
            onChange={(e) => handleChange(field.name, e.target.value)}
            className={`bg-(--beige-600) rounded-xl p-4 w-full text-(--moerkblaa-900) border-2 ${
              errors[field.name] ? "border-(--roed-600)" : "border-transparent"
            }`}
          />
          {errors[field.name] && (
            <p className="text-(--roed-600) text-sm mt-1 absolute top-full left-0">
              {errors[field.name]}
            </p>
          )}
        </div>
      ))}

      <Tilmeld onClick={handleSubmit}>{buttonText}</Tilmeld>

      {showPopup && <PopupNyhedsbrev onClose={() => setShowPopup(false)} />}

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
