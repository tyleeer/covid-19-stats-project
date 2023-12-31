import { ImHome } from "react-icons/im";

const Banner = () => {
  function navMoblieHandler() {
    const navSwitch = document.getElementById(
      "nav__switch"
    ) as HTMLInputElement;
    const nav = document.getElementById("nav__mobile");

    if (nav?.classList.contains("translate-x-[100dvw]")) {
      nav?.classList.remove("translate-x-[100dvw]");
    } else {
      nav?.classList.add("translate-x-[100dvw]");
      navSwitch.checked = false;
    }
  }

  function toTop() {
    const page = document.getElementById("main__container");
    page?.scrollTo(0, 0);
  }

  function toView(id: string) {
    const section = document.getElementById(id);
    section?.scrollIntoView();
  }

  return (
    <>
      <section
        id="nav__mobile--banner"
        className="lg:hidden w-full flex items-center justify-between bg-[rgb(16,15,15)] transition-all ease-in"
      >
        <button onClick={() => toTop()} className="px-4">
          <ImHome className="w-[40px] h-[40px] text-white hover:text-[rgb(0,146,136)]" />
        </button>
        <button className="py-2 px-4">
          <label className="relative swap swap-rotate text-white hover:text-[rgb(0,146,136)]">
            <input
              id="nav__switch"
              type="checkbox"
              onClick={() => navMoblieHandler()}
            />
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
              navMoblieHandler(), toTop();
            }}
            className="px-4 hover:border-b-2 hover:border-[rgb(0,146,136)] hover:text-[rgb(0,146,136)]"
          >
            Home
          </button>
          <button
            onClick={() => {
              navMoblieHandler(), toView("overview__container");
            }}
            className="px-4 hover:border-b-2 hover:border-[rgb(0,146,136)] hover:text-[rgb(0,146,136)]"
          >
            Overview
          </button>
          <button
            onClick={() => {
              navMoblieHandler(), toView("graph__container");
            }}
            className="px-4 hover:border-b-2 hover:border-[rgb(0,146,136)] hover:text-[rgb(0,146,136)]"
          >
            Graphs
          </button>
          <button
            onClick={() => {
              navMoblieHandler(), toView("record__container");
            }}
            className="px-4 hover:border-b-2 hover:border-[rgb(0,146,136)] hover:text-[rgb(0,146,136)]"
          >
            Historical Record
          </button>
        </div>
      </section>
      <section
        id="nav__desktop"
        className="w-full px-20 py-4 hidden lg:flex items-center justify-between bg-[rgb(16,15,15)] transition-all ease-in"
      >
        <button onClick={() => toTop()}>
          <ImHome className="w-[40px] h-[40px] text-white hover:text-[rgb(0,146,136)]" />
        </button>
        <div className="flex items-center text-white text-[1.5rem]">
          <button
            onClick={() => toTop()}
            className="px-4 hover:underline hover:underline-offset-2 hover:text-[rgb(0,146,136)]"
          >
            Home
          </button>
          <button
            onClick={() => toView("overview__container")}
            className="px-4 hover:underline hover:underline-offset-2 hover:text-[rgb(0,146,136)]"
          >
            Overview
          </button>
          <button
            onClick={() => toView("graph__container")}
            className="px-4 hover:underline hover:underline-offset-2 hover:text-[rgb(0,146,136)]"
          >
            Graphs
          </button>
          <button
            onClick={() => toView("record__container")}
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
