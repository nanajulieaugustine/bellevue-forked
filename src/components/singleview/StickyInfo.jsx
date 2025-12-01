const StickyInfo = ({item}) => {
    return ( 
        <div className="flex flex-col gap-20 max-w-200 p-10 backdrop-blur-3xl rounded-2xl">
             <h1>{item.name}</h1>
        <div className="h-full z-10 flex gap-20">

            <div className="flex flex-col gap-20">
                    <div>
                    <h3>Spilleperiode</h3>
                    <p>{item.date}</p>
                    </div>

                    <div>
                    <h3>Varighed</h3>
                    <p>{item.varighed}</p>
                    </div>
            </div>

            <div className="flex flex-col gap-20">
                    <div>
                    <h3>Pris</h3>
                    <p>{item.price}</p>
                    </div>

                    <div>
                    <h3>Alder</h3>
                    <p>{item.alder}</p>
                    </div>
            </div>
        </div>

        <div>
            <p>{item.description_short}</p>
        </div>
        {/* {item.embed ? (
            <iframe title={`trailer af ${item.name}`}
                    src={item.embed}
                    className="h-80 w-full rounded-lg"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    ></iframe>
          ) : null  } */}
    </div>
     );
}
 
export default StickyInfo;