"use client";
import Image from "next/image";
import TilmeldForm from "../global/komponenter/TilmeldForm";

const Nyhedsbrev = () => {
  return (
    <section className="pt-10">
      <div className="p-0 md:px-4 mx-auto max-w-xl">
        <div className="col-span-2 bg-(--bellevueblaa-600) text-(--beige-600) rounded-0 rounded-2xl p-10">
          <div className="w-full mx-auto flex flex-col gap-5">
            <div className="flex justify-center">
              <Image
                src="/svg/watertower-mini.svg"
                alt=""
                width={40}
                height={900}
              />
            </div>
            <p className="text-center mb-6 text-xl pt-5 font-medium">
              Tilmeld dig vores nyhedsbrev og modtag de seneste nyheder direkte
              i din indbakke
            </p>

            <TilmeldForm
              fields={[
                {
                  name: "email",
                  type: "email",
                  placeholder: "Skriv din email",
                },
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nyhedsbrev;
