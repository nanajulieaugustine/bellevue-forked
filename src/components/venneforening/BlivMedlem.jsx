import TilmeldForm from "../global/komponenter/TilmeldForm";
import Image from "next/image";

const BlivMedlem = () => {
  return (
    <section className="pt-20 pb-20" id="blivmedlem">
      <h2 className="text-center">Bliv medlem - og få et særligt godt tilbud</h2>
      <p className="text-center pt-10 text-2xl">
        Tilmeld dig Bellevue Teatrets Venner i dag og få adgang til eksklusive fordele, unikke billetpriser og særlige arrangementer.
      </p>

      <div className="p-0 md:p-20 md:px-4 mx-auto max-w-xl">
        <div className="col-span-2 bg-(--bellevueblaa-600) text-(--beige-600) rounded-0 md:rounded-2xl p-10">
          <div className="w-full mx-auto flex flex-col gap-5 font-light">
            <div className="flex justify-center">
              <Image
                src="/svg/venneforening-logo-lille.svg"
                alt=""
                width={100}
                height={900}
              />
            </div>

            <TilmeldForm
              fields={[
                { name: "navn", type: "text", placeholder: "Dit fulde navn" },
                { name: "email", type: "email", placeholder: "Skriv din email" },
              ]}
              buttonText="Bliv medlem"
            />

            <p className="text-center mb-6 text-xl font-bold mt-4">
              Lige nu: Få et særligt medlemstilbud, når du tilmelder dig!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlivMedlem;
