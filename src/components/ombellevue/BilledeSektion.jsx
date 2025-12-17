import Image from "next/image";
import AnchorTagPrimaryButton from "../global/knapper/AnchorTagPrimaryButton";

const BilledeSektion = () => {
  return (
    <section className="relative grid md:grid-cols-2 gap-10 items-center">
      <div className="flex flex-col gap-8">
        {/* =============================== STORST BILLEDE ================================ */}
        <Image
          src="/images/ombellevue1.webp"
          alt=""
          width={2000}
          height={1200}
          className="rounded-xl"
        />

        {/* ============================== TRE BILLEDE GRID =============================== */}
        <div className="grid grid-cols-2 gap-8">
          <Image
            src="/images/ombellevue2.webp"
            alt=""
            width={800}
            height={600}
            className="rounded-xl w-full h-auto"
          />
          <Image
            src="/images/ombellevue4.webp"
            alt=""
            width={800}
            height={600}
            className="rounded-xl w-full h-auto"
          />
        </div>
      </div>

      {/* =============================== BEIGE CONTAINER ================================ */}

      <div className="absolute -left-8 top-1 -z-5 hidden lg:block">
        <Image src="/svg/snoerkel-left.svg" alt="" width={350} height={350} />
      </div>
      <div className="flex flex-col gap-8">
        <p>
          Din rundvisning kan suppleres med smørrebrød eller kaffe og kage i
          teatrets bar. Spørg til mulighederne ved forudbestilling.
        </p>
        <p>Ved spørgsmål bedes du kontakte os på mail:</p>

        <div className="self-center pt-8">
          <AnchorTagPrimaryButton
            href={`mailto:adm@bellevueteatret.dk`}
            ariaLabel={"Kontakt os"}
          >
            Kontakt os
          </AnchorTagPrimaryButton>
        </div>
      </div>
    </section>
  );
};

export default BilledeSektion;
