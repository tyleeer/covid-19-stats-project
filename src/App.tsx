import Searchbar from "@/components/searchbar";
import Table from "@/components/table";
import Graph from "@/components/graph";
import Banner from "@/components/banner";
import Overview from "@/components/overview";

function App() {
  return (
    <main
      id="main__container"
      className="w-[100dvw] h-[100dvh] bg-black flex flex-col overflow-scroll scroll-smooth"
    >
      <section className="w-full h-[10%] sticky top-0 z-10">
        <Banner />
      </section>
      <section id="overview__container" className="w-full">
        <Overview />
      </section>
      <section id="graph__container" className="w-full">
        <Graph />
      </section>
      <section id="record__container" className="w-full">
        <Searchbar />
        <Table />
      </section>
    </main>
  );
}

export default App;
