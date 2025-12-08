const HeroSektion = () => {
  return (
    // =============================== WRAPPER FOR HERO INDHOLD ================================
    <section className="flex flex-col gap-12">
      <h1>PRAKTISK INFO</h1>
      <div className="flex flex-col gap-4 max-w-3xl">
        <p>
          <strong> Alt det, der gør dit besøg nemt og trygt</strong>
        </p>
        <p>
          Her kan du finde alle de praktiske informationer, der er gode at
          kende, før du besøger Bellevue Teatret. Uanset om du vil vide mere om
          transport, parkering, adgangsforhold, café, garderobe eller dine
          billetter, har vi samlet svar på de mest almindelige spørgsmål ét
          sted.
        </p>
        <p>
          Vi håber, at du her kan få ro på det praktiske, så du i stedet kan
          glæde dig til selve oplevelsen - stemningen, forestillingen og mødet
          med Bellevue.
        </p>
      </div>
    </section>
  );
};

export default HeroSektion;
