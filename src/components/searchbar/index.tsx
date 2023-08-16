import { useSearchBar } from "./seacrh.hook.js";
import { monthList } from "@/utils";

const Searchbar = () => {
  const { fieldSort, fieldMonth, fieldText, fieldType, fieldYear } =
    useSearchBar();
  return (
    <section className="w-full lg:w-[95%] px-2 grid grid-cols-2 gap-2 p-2 lg:flex lg:justify-between lg:items-center bg-cyan-800 text-white font-semibold m-auto rounded-t-sm">
      <div className="w-full lg:w-[15%] flex justify-end lg:justify-center gap-1">
        <label htmlFor="sort" className="lg:hidden">
          sort:
        </label>
        <select
          {...fieldSort}
          id="sort"
          className="text-black w-[120px] min-w-0 text-center bg-white border-2 rounded-xl"
        >
          <option>A-Z</option>
          <option>Z-A</option>
        </select>
      </div>
      <div className="w-full lg:w-[20%] flex gap-1">
        <label htmlFor="year">year: 20</label>
        <select
          {...fieldYear}
          id="year"
          className="text-black min-w-[110px] text-center bg-white border-2 rounded-xl"
        >
          <option>23</option>
          <option>22</option>
          <option>21</option>
          <option>20</option>
        </select>
      </div>
      <div className="w-full lg:w-[20%] flex justify-end lg:justify-start gap-1">
        <label htmlFor="month">month:</label>
        <select
          {...fieldMonth}
          id="month"
          className="border-2 text-black  text-center lg:w-[100px] rounded-xl bg-white px-1"
        >
          {monthList.map((item, index) => {
            return <option key={index}>{item}</option>;
          })}
        </select>
      </div>
      <div className="w-full lg:w-[20%] flex gap-1">
        <label htmlFor="type">category:</label>
        <select
          {...fieldType}
          id="type"
          className="border-2 text-black text-center w-[100px] rounded-xl bg-white px-2"
        >
          <option className="">cases</option>
          <option className="">deaths</option>
          <option className="">recoverd</option>
        </select>
      </div>
      <div className="w-full lg:w-[25%] flex justify-center lg:justify-start gap-1 col-span-2 lg:col-span-1">
        <label htmlFor="type">search:</label>
        <input
          {...fieldText}
          type="text"
          className="border-2 text-black rounded-xl bg-white px-2 w-full max-w-[200px]"
        ></input>
      </div>
    </section>
  );
};

export default Searchbar;
