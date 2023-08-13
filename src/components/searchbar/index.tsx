import { useSearchBar } from "./seacrh.hook.js";
import { monthList } from "@/utils";

const Searchbar = () => {
  const { fieldMonth, fieldText, fieldType, fieldYear } = useSearchBar();
  return (
    <section className="w-full lg:w-[90%] px-2 grid grid-cols-2 gap-2 p-2 lg:flex lg:justify-between lg:items-center bg-[rgb(68,78,128)] text-white font-semibold m-auto rounded-t-xl">
      <div className="lg:w-[20%] flex justify-end">
        <label htmlFor="year" className="">
          year: 20
        </label>
        <select
          {...fieldYear}
          id="year"
          className="text-black bg-white border-2 border-[rgb(132,151,243)] rounded-xl"
        >
          <option>23</option>
          <option>22</option>
          <option>21</option>
          <option>20</option>
        </select>
      </div>
      <div className="lg:w-[20%] flex gap-1">
        <label htmlFor="month" className="">
          month:
        </label>
        <select
          {...fieldMonth}
          id="month"
          className="border-2 border-[rgb(132,151,243)] text-black lg:w-[100px] rounded-xl bg-white px-1"
        >
          {monthList.map((item, index) => {
            return <option key={index}>{item}</option>;
          })}
        </select>
      </div>
      <div className="lg:w-[20%] flex gap-1 justify-end">
        <label htmlFor="type" className="">
          type:
        </label>
        <select
          {...fieldType}
          id="type"
          className="border-2 border-[rgb(132,151,243)] text-black lg:w-[100px] rounded-xl bg-white px-2"
        >
          <option className="">cases</option>
          <option className="">deaths</option>
          <option className="">recoverd</option>
        </select>
      </div>
      <div className="lg:w-[25%] flex gap-1">
        <label htmlFor="type" className="">
          seacrh:
        </label>
        <input
          {...fieldText}
          type="text"
          className="border-2 border-[rgb(132,151,243)] text-black rounded-xl bg-white px-2 w-full max-w-[200px]"
        ></input>
      </div>
    </section>
  );
};

export default Searchbar;
