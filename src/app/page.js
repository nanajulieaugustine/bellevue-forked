import BellevueStriber from "@/components/global/animationer/BellevueStriber";

export default function Home() {
  return (
    <div>
      <BellevueStriber>
        <div className="flex flex-col max-w-250 relative left-50">
        <h1 className="display bellevueblaa-600">Bellevue</h1>
        <h1 className="display font-thin flex justify-end">Teatret</h1>
        </div>
      </BellevueStriber>
    </div>
  );
}
