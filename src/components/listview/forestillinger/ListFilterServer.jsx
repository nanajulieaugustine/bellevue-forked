import ListFilterClient from "./ListFilterClient";

export default async function ListFilterServer() {
  // fx fetch data fra API
  const res = await fetch("https://api.example.com/items");
  const items = await res.json();

  // Vi kan ikke bruge useSearchParams her!
  return <ListFilterClient items={items} />;
}
