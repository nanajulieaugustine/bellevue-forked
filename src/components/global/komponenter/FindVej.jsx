import Image from "next/image";

const FindVej = () => {
  return (
    <div className="bg-(--moerkblaa-600) flex flex-col items-center gap-10 px-10 md:px-0 py-15">
      <h1 className="beige-100">Find vej</h1>
      <p className="beige-100 max-w-150 text-center">
        Bellevue Teatret ligger midt i de ikoniske omgivelser i Arne Jacobsens
        Hvide By i Klampenborg - få skridt fra stranden og skov. Her er let at
        komme til både med bil, tog og bus, hvor den smukke tur ad Strandvejen
        bliver en del af oplevelsen.
      </p>
      <div className="">
        <Image
          src={"/images/findvej.webp"}
          alt={"kort"}
          height={1200}
          width={1200}
          className="w-full h-full object-cover shrink-0"
        />
      </div>
    </div>
  );
};

export default FindVej;
