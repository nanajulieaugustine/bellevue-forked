"use client";
import { useState } from "react";
import PopupNyhedsbrev from "./PopupNyhedsbrev";

const TilmeldForm = ({ fields, render }) => {
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
      if (!values[field.name]?.trim()) {
        newErrors[field.name] = "Skal udfyldes";
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
       {render({
        values,
        errors,
        shake,
        handleChange,
        handleSubmit,
      })}

      {showPopup && <PopupNyhedsbrev onClose={() => setShowPopup(false)} />}

      {/* Shake animation */}
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
    </>
  );
};

export default TilmeldForm;
