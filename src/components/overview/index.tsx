import banner from "@/img/banner2.jpg";
import { useCurrentDataStore } from "@/storages/currentDataStore";
import { overviewData } from "@/utils";

const Overview = () => {
  const { fetchToday } = useCurrentDataStore();
  // console.log(fetchToday);

  return (
    <div className="w-full bg-white text-black">
      <div
        className={`w-full h-[500px] bg-cover bg-[url('./img/banner2.jpg')] bg-center relative overflow-hidden`}
      >
        <img src={banner} className="hidden object-contain" />
        <div className="w-[30%] min-w-[320px] flex flex-col justify-center text-[2.5rem] font-semibold px-10 py-2 bg-white absolute top-[60%] left-[10%] h-[40%]">
          <span className="text-black">Coronavirus</span>
          <span className="text-black">disease</span>
          <span className="text-black">(COVID-19)</span>
        </div>
      </div>
      <div className="w-full px-2 text-black text-[3.5rem] font-semibold">
        <div className="border-b-2 border-black capitalize">
          {overviewData.title}
        </div>
      </div>
      <div className="flex flex-col lg:flex-row w-full py-2">
        <div className="w-full lg:w-[70%] flex flex-col gap-2 px-4 py-2 whitespace-break-spaces">
          <p className="font-semibold">{overviewData.firstMessage}</p>
          <p>{overviewData.secondMessage}</p>
          <p className="font-semibold">{overviewData.thirdMessage}</p>
          <p>{overviewData.fourthMessage}</p>
          <p className="text-[1.2rem]">
            <span className="text-black font-semibold">reference: </span>
            <a
              href="https://www.who.int/health-topics/coronavirus#tab=tab_1"
              target="_blank"
              className="hover:text-[rgb(0,146,136)] hover:underline-offset-2 hover:underline"
            >
              World Health Organization
            </a>
          </p>
          <p></p>
        </div>
        <div className="w-full lg:w-[30%] flex flex-col gap-2 p-4 border-l-[1px] border-black">
          <div className="flex gap-1 text-slate-600">
            <p>Last updated:</p>
            <p>
              {fetchToday.data &&
                new Date(fetchToday.data?.updated)
                  .toLocaleString()
                  .replace(" ", ", ")}
            </p>
          </div>
          <div className="flex w-full ml-[10%] lg:ml-0 items-center lg:items-start gap-2 lg:flex-col">
            <p className="sm:text-[1.5rem]">Global COVID-19 Cases:</p>
            <p className="text-[1.2rem] sm:text-[2rem] font-semibold lg:text-center lg:w-full">
              {fetchToday.data &&
                Number(fetchToday.data.cases).toLocaleString()}
            </p>
          </div>
          <div className="flex w-full ml-[10%] lg:ml-0 items-center lg:items-start gap-2 lg:flex-col">
            <p className="sm:text-[1.5rem]">Deaths:</p>
            <p className="text-[1.2rem] sm:text-[2rem] font-semibold lg:text-center lg:w-full">
              {fetchToday.data &&
                Number(fetchToday.data.deaths).toLocaleString()}
            </p>
          </div>
          <div className="flex w-full ml-[10%] lg:ml-0 items-center lg:items-start gap-2 lg:flex-col">
            <p className="sm:text-[1.5rem]">Recovered:</p>
            <p className="text-[1.2rem] sm:text-[2rem] font-semibold lg:text-center lg:w-full">
              {fetchToday.data &&
                Number(fetchToday.data.recovered).toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
