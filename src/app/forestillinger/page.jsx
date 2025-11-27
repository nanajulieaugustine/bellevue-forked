import ListServer from "@/components/listview/forestillinger/ListServer";
import ListCardHero from "@/components/listview/listeviewhero/ListCardHero";
import ListCard from "@/components/listview/forestillinger/ListServer";

const Forestillinger = () => {
  return (
    <div>
      <ListCardHero />
      <ListServer />
      <ListCard />
    </div>
  );
};

export default Forestillinger;
