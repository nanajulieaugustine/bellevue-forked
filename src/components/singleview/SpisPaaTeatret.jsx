"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import AnchorTagPrimaryButton from "../global/knapper/AnchorTagPrimaryButton";

const SpisPaaTeatret = () => {
  return (
    <>
      {/* Intro */}
      <section
        aria-labelledby="spis-paa-teatret-heading"
        className="mx-auto py-20"
      >
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex flex-col gap-5 max-w-prose">
            <h2 id="spis-paa-teatret-heading">Spis på teatret</h2>

            <p>
              Gør teateroplevelsen endnu mere særlig med lækker anretning i
              Øvrebar på første sal – og på varme dage også ude på den smukke
              tagterrasse.
            </p>

            <p>
              Maden serveres en halv time efter dørene åbner (halvanden time før
              forestillingens start), hvor I bliver anvist en plads og kan nyde
              roen og atmosfæren.
            </p>

            <p>
              Vi tilbyder luksus-smørrebrød på hjemmebagt rugbrød fra vores faste
              samarbejdspartner, Prinsessens Lækre Bag.
            </p>

            <p className="font-semibold">
              Bestil senest kl. 12 to dage før forestillingen
            </p>

            <div className="flex flex-wrap items-center gap-6 mt-6">
              <p className="text-lg font-bold">210 kr. pr. person</p>

              <AnchorTagPrimaryButton
                href="https://www.ticketmaster.dk/artist/bellevue-spisning-billetter/1023312?brand=dk_bellevue&language=da-dk"
                target="_blank"
                ariaLabel="Køb smørrebrød til Spis på Teatret"
              >
                Køb smørrebrød
              </AnchorTagPrimaryButton>
            </div>
          </div>

          <div className="w-full md:max-w-md">
            <Image
              src="/images/spisning.webp"
              alt="Udvalg af luksus-smørrebrød serveret på teatret"
              width={500}
              height={500}
              priority
              className="rounded-2xl object-cover aspect-square w-full"
            />
          </div>
        </div>
      </section>

      {/* Menu */}
      <div
        aria-labelledby="menu-heading"
        className="bg-(--moerkblaa-600) py-24"
      >
        <h2 id="menu-heading" className="text-center beige-100 mb-26">
          Vores udvalgte smørrebrødsmenu
        </h2>

        <section className="max-w-7xl flex flex-col gap-20 mx-auto py-24">
          {/* Den Klassiske */}
          <motion.article
            className="flex flex-col md:flex-row items-center gap-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease: "easeOut" },
            }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <div className="max-w-prose space-y-4 flex flex-col gap-5">
              <h3 className="beige-100">Den klassiske</h3>
              <p className="beige-100 max-w-100">
                En tidløs favorit med hønsesalat på saftig Rokkedahl-kylling, sprød bacon og stegte samt syltede svampe – ledsaget af en smagfuld roastbeef fra Grambogård toppet med pickles, peberrod og sprøde ristede løg. En fyldig og velkendt klassiker, der rammer lige i hjertet af det danske smørrebrød.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 w-full max-w-md">
              <Image
                src="/svg/roastbeef.svg"
                alt="Roastbeef smørrebrød med ristede løg og pickles"
                width={300}
                height={300}
              />
              <Image
                src="/svg/hoensesalat.svg"
                alt="Hønsesalat smørrebrød med bacon og svampe"
                width={300}
                height={300}
              />
            </div>
          </motion.article>

          {/* Den Elegante */}
          <motion.article
            className="flex flex-col md:flex-row-reverse items-center gap-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease: "easeOut" },
            }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <div className="max-w-prose space-y-4 flex flex-col gap-5">
              <h3 className="beige-100">Den elegante</h3>
              <p className="beige-100 max-w-100">
                En raffineret og delikat kombination af røget laks og cremet røræg lavet på økoæg fra Niels og Grete, fulgt af den smukke duo af økoæg og saftige rejer. Let, luksuriøst og perfekt til dig, der foretrækker de friske, milde og elegante smagsnuancer.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 w-full max-w-md">
              <Image
                src="/svg/rejer.svg"
                alt="Smørrebrød med rejer og røræg"
                width={300}
                height={300}
              />
              <Image
                src="/svg/laks.svg"
                alt="Smørrebrød med røget laks"
                width={300}
                height={300}
              />
            </div>
          </motion.article>

          {/* Den Jordnære */}
          <motion.article
            className="flex flex-col md:flex-row items-center gap-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease: "easeOut" },
            }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <div className="max-w-prose space-y-4 flex flex-col gap-5">
              <h3 className="beige-100">Den jordnære</h3>
              <p className="beige-100 max-w-100">
                En vegetarisk favorit med nye kartofler, hjemmerørt mayonnaise og bløde løgtoner, efterfulgt af en mild og frisk kombination af avocado, mozzarella og solmodne tomater. En enkel, grøn og ærlig servering med masser af smag og ro på tallerkenen.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 w-full max-w-md">
              <Image
                src="/svg/avokado.svg"
                alt="Vegetarisk smørrebrød med avocado og mozzarella"
                width={300}
                height={300}
              />
              <Image
                src="/svg/kartoffel.svg"
                alt="Smørrebrød med kartofler og mayonnaise"
                width={300}
                height={300}
              />
            </div>
          </motion.article>
        </section>
      </div>
    </>
  );
};

export default SpisPaaTeatret;