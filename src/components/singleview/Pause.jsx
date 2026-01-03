import FindRundtServer from "../global/komponenter/interaktivtkort/FindRundtServer";
const Pause = ({ item }) => {
  return (
    <div className="text-center p-10 flex flex-col gap-5">
      <div>
        <h2>Bestil til pausen</h2>
        <h3>Så undgår du kø</h3>
      </div>
      <div className="">
        <p>
          I vores barer finder du udvalg af drikkevarer og snacks til dit
          teaterophold.
        </p>
        <p>
          Betal inden forestillingen, så sørger vi for, din ordrer står klar til
          dig i foryeeren.
        </p>
      </div>
      <FindRundtServer defaultGroup="Barer" />
    </div>
  );
};

export default Pause;
