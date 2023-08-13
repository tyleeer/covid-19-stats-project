import Searchbar from "@/components/searchbar";
import Table from "@/components/table";
import Graph from "./components/graph";

function App() {
  return (
    <main className="w-[100dvw] h-[100dvh] bg-black flex flex-col overflow-scroll">
      <section className="w-full font-semibold flex flex-col gap-2 lg:flex-row justify-center items-center uppercase p-2 text-[1.5rem] sm:text-[2rem]">
        <span>Global Reach of COVID-19:</span>
        <span>Worldwide Perspective</span>
      </section>
      <section className="w-full">
        <Graph />
      </section>
      <section className="w-full">
        <Searchbar />
        <Table />
      </section>
    </main>
  );
}

export default App;
