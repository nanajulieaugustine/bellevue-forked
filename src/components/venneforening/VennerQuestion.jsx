import VennerQAndA from "./VennerQAndA";

const VennerQuestion = () => (
  <div>
    <div className="grid grid-cols-2">
      <h4 className="text-right pr-10">Ofte stillede spørgsmål</h4>
      <div>
        <p>
          Spørgsmål til indmeldelse, udmeldelse, kontingent og lignende kan
          sendes til venner@bellevueteatret.dk.
        </p>
        <p className="pt-5">
          Andre spørgsmål kan rettes til Bellevue Teatrets Venner den 4., 6.,
        </p>
        <p>13. og 20. november kl. 11.30 til 13.30 på telefon 39 63 49 00.</p>
      </div>
    </div>

    <VennerQAndA />
  </div>
);

export default VennerQuestion;
