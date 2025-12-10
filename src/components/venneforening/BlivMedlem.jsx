
const BlivMedlem = () => (
    <div className="">
          <section className="pt-20 pb-20">
            <h2 className="text-center">Bliv medlem - og få et særligt godt tilbud</h2>
            <p className="text-center pt-10 text-2xl max-w-2xl">Tilmeld dig Bellevue Teatrets Venner i dag og få adgang til eksklusive fordele, unikke billetpriser og særlige arrangementer.</p>
          

                    {/* MOBIL OG DESKTOP UDSEENE BLÅ BOX */}
                <div className="
                    p-0            /* MOBILE: ingen padding udenom */
                    md:p-20         /* DESKTOP: padding udenom */
                    md:px-4
                    mx-auto 
                    max-w-xl
                    ">

                    <div className="
                        col-span-2 
                        bg-(--bellevueblaa-600) 
                        text-(--beige-600)
                        rounded-0       /* MOBILE: ingen hjørner */
                        md:rounded-2xl  /* DESKTOP: runde hjørner */
                        p-10            /* padding INDENI boksen – altid! */
                        "
                    >

                        <div className="w-full mx-auto flex flex-col gap-2 font-light">
                        
                        {/* INPUT FELTER + TILMELDKNAP */}
                        <input
                            id="navn"
                            type="navn"
                            placeholder="Dit fulde navn"
                            className="bg-(--beige-600) rounded-xl p-4 w-full text-(--moerkblaa-900)"
                        />
                        <input
                            id="email"
                            type="email"
                            placeholder="Skriv din email"
                            className="bg-(--beige-600) rounded-xl p-4 w-full text-(--moerkblaa-900)"
                        />
                        <button className="self-center font-bold border-3 border-(--beige-600) w-full pt-4 pb-4 rounded-xl">
                            Tilmeld
                        </button>
                        
                            <p className="text-center mb-6 text-xl font-bold">
                            Lige nu: Få et særligt medlemstilbud, når du tilmelder dig!
                            </p>
                        </div>
                    </div>
                </div>
        </section>
    </div>
  );
  
  export default BlivMedlem;
  