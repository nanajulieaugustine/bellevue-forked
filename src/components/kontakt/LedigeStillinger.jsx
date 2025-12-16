const LedigeStillinger = () => {
  return (
    <div className="text-center text-(--beige-100) bg-(--moerkblaa-600)">
      <h3 className="pb-7 font-light pt-15 beige-100">Ledige Stillinger</h3>

      {/* <!-- Responsiv container --> */}
      <div className="mx-auto px-4 max-w-2xl flex flex-col gap-10">
        <p>
          Der er i øjeblikket ingen ledige stillinger men vi hører altid gerne
          fra dig. Hvis du brænder for kultur, formidling og gode
          gæsteoplevelser, er du meget velkommen til at sende en uopfordret
          ansøgning.
        </p>
        <div className="flex flex-col md:flex-row gap-10 justify-center">
          <a href="mailto:adm@bellevueteatret.dk">adm@bellevueteatret.dk</a>
          <a href="mailto:forhus@bellevueteatret.dk">
            Forhus@bellevueteatret.dk
          </a>
        </div>
      </div>

      <p className="font-medium pb-15 pt-10">
        Vi glæder os til at høre fra dig.
      </p>
    </div>
  );
};

export default LedigeStillinger;
