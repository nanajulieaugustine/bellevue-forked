import ScrollToTertiaryButton from "../global/knapper/ScrollToTertiaryButton";

const MedlemsGoder = () => (
  <div className="bg-(--moerkblaa-600) text-(--beige-100) pb-15 flex flex-col justify-center">
        <section>
        <h3 className="beige-100 text-center pt-10 pb-10">Det du får som medlem</h3>
        <div className="flex gap-20">

            <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                <h4 className="beige-100">Tidligere adgang til billetter</h4>
                <p>Sikre dig pladser før offentligheden, især til særligt efterspurgte forestillinger.</p>
                </div>

                    <div className="flex flex-col gap-2">
                        <h4 className="beige-100">Eksklusive medlemsarrangementer</h4>
                        <p>Oplev rundvisninger, sæsonpræsentationer og talks kun for medlemmer.</p>
                    </div>

                <div className="flex flex-col gap-2">
                <h4 className="beige-100">Særlige rabatter og tilbud</h4>
                <p>Få fordelagtige priser og udvalgte medlemstilbud gennem året.</p>
                </div>
            </div>

            <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                <h4 className="beige-100">Indblik bag kulisserne</h4>
                <p>Modtag et medlemsnyhedsbrev med historier, interviews og glimt fra prøvearbejdet</p>
                </div>
            <div className="flex flex-col gap-2">
               <h4 className="beige-100">Et stærkt kulturelt fællesskab</h4>
                <p>Bliv en del af en engageret gruppe, der bakker op om Bellevue Teatrets virke.</p>
            </div>
            </div>
        </div>
        <div className="mt-auto flex justify-center pt-20">
        <ScrollToTertiaryButton scrollToId="blivmedlem">
        Bliv medlem
        </ScrollToTertiaryButton>
        </div>
  </section>
    </div>
);

export default MedlemsGoder;
