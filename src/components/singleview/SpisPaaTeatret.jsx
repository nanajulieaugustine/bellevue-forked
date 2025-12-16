"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import PrimaryLink from "../global/knapper/PrimaryLink";
import AnchorTagPrimaryButton from "../global/knapper/AnchorTagPrimaryButton";
import PrimaryButton from "../global/knapper/PrimaryButton";

const SpisPaaTeatret = () => {
  return (
    <>
      <section className="flex flex-col md:flex-row md:justify-between gap-10 w-screen p-10 py-30">
        <div className="flex flex-col gap-5 max-w-150">
          <h2>Spis På Teatret</h2>
          <p>
            Gør teateroplevelsen endnu mere særlig med lækker anretning i
            Øvrebar på første sal - og på varme dage også ude på den skømme
            tagteresse.
          </p>
          <p>
            Maden serveres en halv time efter dørerne åbner (halvanden time før
            forestillingens start), hvor I bliver anvist en plads og kan nyde
            roen og atmosfæren.
          </p>
          <p>
            Vi tilbyder luksus-smørrebrød på hjemmebagt rugbrød fra vores faste
            samarbejdspartner, Prinsessens Lækre Bag - smagfuldt, friskt og
            lavet med omhu.
          </p>
          <p className="font-bold">
            Bestil senest kl. 12 to dage før forestillingen
          </p>
          <div className="flex gap-20 justify-baseline mt-10 md:mt-auto">
            <h4>210 kr. pr. person</h4>
            <AnchorTagPrimaryButton
              href="https://www.ticketmaster.dk/artist/bellevue-spisning-billetter/1023312?brand=dk_bellevue&language=da-dk"
              target="_blank"
            >
              Køb smørrebrød
            </AnchorTagPrimaryButton>
          </div>
        </div>

        <div>
          <Image
            src="/images/spisning.webp"
            alt="smørrebrød"
            width={400}
            height={400}
            className="object-cover shrink-0 w-full h-full rounded-2xl"
          />
        </div>
      </section>

      <div className="bg-(--moerkblaa-600) w-screen p-10">
        <h2 className="text-center beige-100">
          Nyd vores udvalgte smørrebrødsmneu
        </h2>

        <div className="flex flex-col gap-20 md:gap-10 py-20">
          <motion.div
            className="flex flex-col md:flex-row justify-center items-center gap-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease: "easeOut" },
            }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <div className="flex flex-col gap-5">
              <h3 className="beige-100">Den Klassiske</h3>
              <p className="beige-100 max-w-150">
                En tidsløs favorit med hønsesalat på saftig Rokkedahl-Kylling,
                sprød bacon og stegte samt syltede svampe - ledsaget af en
                smagfuld roastbeef fra Grambogård toppet med pickles, peberrod
                og sprøde ristede løg.
              </p>
            </div>
            <div className="bg-gray-200 h-100 w-100"></div>
          </motion.div>

          <motion.div
            className="flex flex-col md:flex-row justify-center items-center gap-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease: "easeOut" },
            }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <div className="flex flex-col gap-5">
              <h3 className="beige-100">Den Elegante</h3>
              <p className="beige-100 max-w-150">
                En raffineret og delikat kombination af røget laks og cremet
                røræg lavet på økoæg fra Niels og Grete, fulgt af den smukke dop
                af røræg og saftige rejer. Let, luksuriøst og perfekt til dig,
                der foretrækker de friske, milde og elegante smagsnuancer.
              </p>
            </div>
            <div className="bg-gray-200 h-100 w-100 md:-order-1"></div>
          </motion.div>

          <motion.div
            className="flex flex-col md:flex-row justify-center items-center gap-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease: "easeOut" },
            }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <div className="flex flex-col gap-5">
              <h3 className="beige-100">Den Jordnære</h3>
              <p className="beige-100 max-w-150">
                En vegetarisk favorit med nye kartofler, hjemmerørt mayonnaise
                og bløde løgtoner, efterfulgt af en mild og frisk kombination af
                avocado, mozzarella og solmodne tomater. En enkel, grøn og ærlig
                servering med masser af smag og ro på tallerkenen.
              </p>
            </div>
            <div className="bg-gray-200 h-100 w-100"></div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default SpisPaaTeatret;
