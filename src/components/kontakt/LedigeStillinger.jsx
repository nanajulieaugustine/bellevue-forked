const LedigeStillinger = () => {
    return ( 
    <div className="text-center text-(--beige-100) bg-(--moerkblaa-600)">
      <h3 className="pb-7 font-light pt-15 beige-100">Ledige Stillinger</h3>

      {/* <!-- Responsiv container --> */}
      <div className="font-extralight mx-auto px-4 max-w-2xl">
        <p className="pb-4">
          Der er i øjeblikket ingen ledige stillinger men vi hører altid gerne
          fra dig. Hvis du brænder for kultur, formidling og gode
          gæsteoplevelser, er du meget velkommen til at sende en uopfordret
          ansøgning.
        </p>
        <p>Administration: adm@bellevueteatret.dk</p>
        <p>Forhus: forhus@bellevueteatret.dk</p>
      </div>

      <p className="font-medium pb-15 pt-5">
        Vi glæder os til at høre fra dig.
      </p>
    </div>
     );
}
 
export default LedigeStillinger;