const StickyInfo = ({item}) => {
    return ( 
        <div className="flex flex-col gap-20">
             <h1>{item.name}</h1>
        <div className="h-full z-10 flex gap-20">

            <div className="flex flex-col gap-20">
                    <div>
                    <h3>Spilleperiode</h3>
                    <p>{item.date}</p>
                    </div>

                    <div>
                    <h3>Varighed</h3>
                    <p>{item.date}</p>
                    </div>
            </div>

            <div className="flex flex-col gap-20">
                    <div>
                    <h3>Pris</h3>
                    <p>{item.price}</p>
                    </div>

                    <div>
                    <h3>Alder</h3>
                    <p>{item.date}</p>
                    </div>
            </div>
        </div>

        <div>
            <p>{item.description_short}</p>
        </div>
    </div>
     );
}
 
export default StickyInfo;