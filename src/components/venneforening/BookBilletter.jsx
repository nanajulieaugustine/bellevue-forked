"use client";
import { motion } from "framer-motion";

const BookBilletter = () => {
  return (
    <section className="flex flex-col gap-20" id="bookbilletter">
      <h2>Sådan booker du billetter</h2>

      {/* RÆKKE 1 */}
      <div className="flex justify-between gap-20">
        <motion.div
          className="flex gap-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
          }}
          viewport={{ once: false, amount: 1 }}
        >
          <h3 className="flex items-center justify-center w-70 h-20 rounded-full border-2 bellevueblaa-600 border-(--bellevueblaa-600)">
            1
          </h3>
          <p className="max-w-150">
            Du åbner medlemsmailen og finder det event, du ønsker at booke til.
            Under eventet er der en blå bjælke, hvorpå der står: ”Find billetten
            her”. Klik på denne. Herefter bliver du sendt videre til
            Ticketmaster.
          </p>
        </motion.div>

        <motion.div
          className="flex gap-10 pt-30"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
          }}
          viewport={{ once: false, amount: 1 }}
        >
          <h3 className="flex items-center justify-center w-32 h-15 rounded-full border-2 bellevueblaa-600 border-(--bellevueblaa-600)">
            2
          </h3>
          <p className="max-w-150">
            De blå prikker viser ledige pladser. Klik på den plads du ønsker.
            Den bliver nu grøn og får et flueben.
          </p>
        </motion.div>
      </div>

      {/* RÆKKE 2 */}
      <div className="flex justify-between gap-20">
        <motion.div
          className="flex gap-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
          }}
          viewport={{ once: false, amount: 1 }}
        >
          <h3 className="flex items-center justify-center w-22 h-15 rounded-full border-2 bellevueblaa-600 border-(--bellevueblaa-600)">
            3
          </h3>
          <p className="max-w-150">
            Klik på knappen ”Find billetter” nederst i højre hjørne af skærmen.
          </p>
        </motion.div>

        <motion.div
          className="flex gap-10 pt-30"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
          }}
          viewport={{ once: false, amount: 1 }}
        >
          <h3 className="flex items-center justify-center w-35 h-17 rounded-full border-2 bellevueblaa-600 border-(--bellevueblaa-600)">
            4
          </h3>
          <p className="max-w-150">
            Du bliver nu bedt om at logge ind. Hvis du allerede har en profil
            hos Ticketmaster, skal du bruge den. Ellers opretter du en ny.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BookBilletter;
