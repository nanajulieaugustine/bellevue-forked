import FindRundtServer from "./FindRundtServer";
const InteraktivtKort = () => {
  return (
    <div>
      {/* =========================== WRAPPER BLÅ CONTAINER ============================ */}
      <div className=" py-20">
        <section className="flex flex-col gap-8 items-center">
          <h3>Find din plads - helt enkelt</h3>
          <p className="text-center max-w-xl">
            Gå på opdagelse i vores interaktive kort og se Bellevue Teatrets sal
            hjemmefra. Her kan du nemt orientere dig, finde din plads og få et
            trygt overblik, før du ankommer.
          </p>
        </section>
      </div>

      {/* ============================ INTERAKTIVT KORT ============================= */}
      <section>
        <FindRundtServer />
      </section>
    </div>
  );
};

export default InteraktivtKort;
