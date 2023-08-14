import Searchbar from "@/components/searchbar";
import Table from "@/components/table";
import Graph from "@/components/graph";
import Banner from "@/components/banner";
import Overview from "@/components/overview";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);

  function toTop() {
    const main = document.getElementById("main__container") as HTMLElement;
    main.scrollTo(0, 0);
  }

  function checkScroll() {
    const main = document.getElementById("main__container") as HTMLElement;
    const triggerHeight = (main.scrollHeight - main.clientHeight) * 0.05;
    main.scrollTop > triggerHeight ? setShow(true) : setShow(false);
  }

  return (
    <main
      id="main__container"
      onScroll={checkScroll}
      className="w-[100dvw] h-[100dvh] bg-[rgb(23,21,21)] flex flex-col overflow-y-scroll overflow-x-hidden scroll-smooth"
    >
      {show && (
        <button
          onClick={() => toTop()}
          className="fixed bottom-2 right-2 bg-white border border-cyan-900 rounded-full animate-bounce z-40"
        >
          <BsFillArrowUpCircleFill className="w-[50px] h-[50px] text-cyan-900" />
        </button>
      )}
      <section className="w-full h-[10%] sticky top-0 z-10">
        <Banner />
      </section>
      <section id="overview__container" className="w-full">
        <Overview />
      </section>
      <section id="graph__container" className="w-full">
        <div className="text-[2.5rem] md:text-[3.5rem] p-2 m-2 text-cyan-300 border-b-[1px] border-cyan-300 font-semibold">
          Statistic Graphs
        </div>
        <Graph />
      </section>
      <section id="record__container" className="w-full bg-white">
        <div className="text-[2.5rem] md:text-[3.5rem] p-2 m-2 text-cyan-800 border-b-[1px] border-cyan-800 font-semibold">
          Historical Record
        </div>
        <div className="w-full mt-[2%]">
          <Searchbar />
          <Table />
        </div>
      </section>
    </main>
  );
}

export default App;
