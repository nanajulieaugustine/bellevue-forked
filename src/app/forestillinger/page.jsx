import ListServer from "@/components/listview/forestillinger/ListServer";
import ListCardHero from "@/components/listview/ListServer";
import ListCard from "@/components/listview/ListCardHero";

const Forestillinger = () => {
  return (
    <div>
      <ListServer />
      <ListCard />
      <ListCardHero />
    </div>
  );
};

export default Forestillinger;
