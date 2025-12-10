import AnchorTagPrimaryButton from "../global/knapper/AnchorTagPrimaryButton";
import FindRundt from "../global/komponenter/FindRundt";

const InteraktivtKort = () => {
  return (
    <div>
      {/* =========================== WRAPPER BLÅ CONTAINER ============================ */}
      <div className="bg-(--moerkblaa-600) py-20">
        <section className="flex flex-col gap-8 items-center">
          <h3 className="beige-100">Find din plads - helt enkelt</h3>
          <p className="text-(--beige-100) text-center max-w-xl">
            Gå på opdagelse i vores interaktive kort og se Bellevue Teatrets sal
            hjemmefra. Her kan du nemt orientere dig, finde din plads og få et
            trygt overblik, før du ankommer.
          </p>
        </section>
      </div>

      {/* ============================ INTERAKTIVT KORT ============================= */}
      <section>
        <FindRundt />

        <div className="flex justify-end">
          <AnchorTagPrimaryButton href={`/om-bellevue`}>
            Læs mere
          </AnchorTagPrimaryButton>
        </div>
      </section>
    </div>
  );
};

export default InteraktivtKort;
