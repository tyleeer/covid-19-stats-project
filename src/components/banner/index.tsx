import { ImHome } from "react-icons/im";

const Banner = () => {
  function navmoblie() {
    const nav = document.getElementById("nav__mobile");
    nav?.classList.contains("translate-x-[100dvw]");
    if (nav?.classList.contains("translate-x-[100dvw]")) {
      nav?.classList.remove("translate-x-[100dvw]");
    } else nav?.classList.add("translate-x-[100dvw]");
  }
  function toTop() {
    const page = document.getElementById("main__container");
    page?.scrollTo(0, 0);
  }
  function toOverview() {
    const overview = document.getElementById(
      "overview__container"
    ) as HTMLElement;
    overview?.scrollIntoView();
  }
  function toGraph() {
    const graph = document.getElementById("graph__container");
    graph?.scrollIntoView();
  }
  function toRecord() {
    const record = document.getElementById("record__container");
    record?.scrollIntoView();
  }
  return (
    <>
      <section className="lg:hidden w-full py-4 flex items-center justify-between bg-[rgb(16,15,15)]">
        <button onClick={() => toTop()} className="px-4">
          <ImHome className="w-[60px] h-[60px] text-white hover:text-[rgb(0,146,136)]" />
        </button>
        <button className="py-2 px-4">
          <label className="relative swap swap-rotate text-white hover:text-[rgb(0,146,136)]">
            <input type="checkbox" onClick={() => navmoblie()} />
            <svg
              className="swap-off fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>
            <svg
              className="absolute top-0 swap-on fill-current z-30"
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 512 512"
            >
              <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
          </label>
        </button>
        <div
          id="nav__mobile"
          className="fixed top-0 z-20 px-[20%] flex flex-col justify-evenly text-[2rem] sm:text-[3rem] bg-[rgb(29,29,29)] w-[100dvw] h-[100dvh] text-white transition-all translate-x-[100dvw]"
        >
          <button
            onClick={() => {
              navmoblie(), toTop();
            }}
            className="px-4 hover:border-b-2 hover:border-[rgb(0,146,136)] hover:text-[rgb(0,146,136)]"
          >
            Home
          </button>
          <button
            onClick={() => {
              navmoblie(), toOverview();
            }}
            className="px-4 hover:border-b-2 hover:border-[rgb(0,146,136)] hover:text-[rgb(0,146,136)]"
          >
            Overview
          </button>
          <button
            onClick={() => {
              navmoblie(), toGraph();
            }}
            className="px-4 hover:border-b-2 hover:border-[rgb(0,146,136)] hover:text-[rgb(0,146,136)]"
          >
            Graphs
          </button>
          <button
            onClick={() => {
              navmoblie(), toRecord();
            }}
            className="px-4 hover:border-b-2 hover:border-[rgb(0,146,136)] hover:text-[rgb(0,146,136)]"
          >
            Historical Record
          </button>
        </div>
      </section>
      <section className="w-full py-4 hidden lg:flex items-center justify-between bg-[rgb(16,15,15)]">
        <button onClick={() => toTop()} className="px-4">
          <ImHome className="w-[60px] h-[60px] text-white hover:text-[rgb(0,146,136)]" />
        </button>
        <div className="flex items-center text-white text-[2rem]">
          <button
            onClick={() => toTop()}
            className="px-4 hover:underline hover:underline-offset-2 hover:text-[rgb(0,146,136)]"
          >
            Home
          </button>
          <button
            onClick={() => toOverview()}
            className="px-4 hover:underline hover:underline-offset-2 hover:text-[rgb(0,146,136)]"
          >
            Overview
          </button>
          <button
            onClick={() => toGraph()}
            className="px-4 hover:underline hover:underline-offset-2 hover:text-[rgb(0,146,136)]"
          >
            Graphs
          </button>
          <button
            onClick={() => toRecord()}
            className="px-4 hover:underline hover:underline-offset-2 hover:text-[rgb(0,146,136)]"
          >
            Historical Record
          </button>
        </div>
      </section>
    </>
  );
};

export default Banner;
