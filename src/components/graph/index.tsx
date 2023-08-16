import { useCurrentDataStore } from "@/storages/currentDataStore";
import "./index.css";
import { useEffect } from "react";
import { currentDataServic } from "@/services";
import ReactLoading from "react-loading";

const Graph = () => {
  const {
    fetchToday,
    fetchYesterday,
    fetchTwoDaysAgo,
    setFetchToday,
    setFetchYesterday,
    setFetchTwoDaysAgo,
  } = useCurrentDataStore();

  const callData = async () => {
    setFetchToday({ data: undefined, loading: true });
    setFetchYesterday({ data: undefined, loading: true });
    setFetchTwoDaysAgo({ data: undefined, loading: true });

    const response = await currentDataServic.getCurrentData();

    if (
      response.today.status === 200 &&
      response.yesterday.status === 200 &&
      response.twoDaysAgo.status === 200
    ) {
      setFetchToday({ data: response.today.data, loading: false });
      setFetchYesterday({ data: response.yesterday.data, loading: false });
      setFetchTwoDaysAgo({ data: response.twoDaysAgo.data, loading: false });
    } else {
      alert("Error404");
      setFetchToday({ data: undefined, loading: false });
      setFetchYesterday({ data: undefined, loading: false });
      setFetchTwoDaysAgo({ data: undefined, loading: false });
    }
  };

  useEffect(() => {
    callData();
  }, []);

  return (
    <div className="main-container w-full m-auto rounded-xl overflow-hidden mt-[1%] mb-[3%]">
      {!fetchToday.loading ? (
        <>
          <div className="flex lg:hidden flex-col gap-5">
            <div className="flex items-center justify-around mt-[15px] relative flex-col min-[450px]:flex-row gap-2 min-[450px]:gap-0">
              <div className="graph-container">
                <span>
                  Date: {new Date().getDate()}/{new Date().getMonth() + 1}/
                  {new Date().getFullYear()}
                </span>
                <div className="percent">
                  <svg viewBox="0 0 36 36" className="circular-chart">
                    <path
                      className="circle"
                      strokeDasharray={`${
                        fetchToday.data &&
                        (
                          (fetchToday.data?.recovered /
                            fetchToday.data?.recovered) *
                          100
                        ).toFixed(0)
                      }, 100`}
                      d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="circle"
                      strokeDasharray={`${
                        fetchToday.data &&
                        (
                          (fetchToday.data?.active /
                            fetchToday.data?.recovered) *
                          100
                        ).toFixed(0)
                      }, 100`}
                      d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="circle"
                      strokeDasharray={`${
                        fetchToday.data &&
                        (
                          (fetchToday.data?.deaths /
                            fetchToday.data?.recovered) *
                          100
                        ).toFixed(0)
                      }, 100`}
                      d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                </div>
                <p>
                  Total:{" "}
                  {fetchToday.data &&
                    Number(fetchToday.data?.cases).toLocaleString()}{" "}
                  cases
                </p>
              </div>
              <div className="info">
                <span className="font-semibold">Global COVID-19 Cases</span>
                <p className="flex gap-1">
                  <>total:</>
                  <span>
                    {fetchToday.data &&
                      Number(fetchToday.data?.cases).toLocaleString()}
                  </span>
                  <>cases</>
                </p>
                <div className="flex items-center gap-1">
                  <div className="w-[10px] h-[10px] bg-[#155E75]"></div>
                  <>recoverd:</>
                  <span>
                    {fetchToday.data &&
                      Number(fetchToday.data?.recovered).toLocaleString()}
                  </span>
                  <>cases</>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-[10px] h-[10px] bg-[#e59f3c]"></div>
                  <>active:</>
                  <span>
                    {fetchToday.data &&
                      Number(fetchToday.data?.active).toLocaleString()}
                  </span>
                  <>cases</>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-[10px] h-[10px] bg-[#5397d6]"></div>
                  <>death:</>
                  <span>
                    {fetchToday.data &&
                      Number(fetchToday.data?.deaths).toLocaleString()}
                  </span>
                  <>cases</>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-around mt-[15px] relative flex-col min-[450px]:flex-row gap-2 min-[450px]:gap-0">
              <div className="graph-container">
                <span>
                  Date: {new Date().getDate() - 1}/{new Date().getMonth() + 1}/
                  {new Date().getFullYear()}
                </span>
                <div className="percent">
                  <svg viewBox="0 0 36 36" className="circular-chart">
                    <path
                      className="circle"
                      strokeDasharray={`${
                        fetchYesterday.data &&
                        (
                          (fetchYesterday.data?.recovered /
                            fetchYesterday.data?.recovered) *
                          100
                        ).toFixed(0)
                      }, 100`}
                      d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="circle"
                      strokeDasharray={`${
                        fetchYesterday.data &&
                        (
                          (fetchYesterday.data?.active /
                            fetchYesterday.data?.recovered) *
                          100
                        ).toFixed(0)
                      }, 100`}
                      d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="circle"
                      strokeDasharray={`${
                        fetchYesterday.data &&
                        (
                          (fetchYesterday.data?.deaths /
                            fetchYesterday.data?.recovered) *
                          100
                        ).toFixed(0)
                      }, 100`}
                      d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                </div>
                <p>
                  Total:{" "}
                  {fetchYesterday.data &&
                    Number(fetchYesterday.data?.cases).toLocaleString()}{" "}
                  cases
                </p>
              </div>
              <div className="info">
                <p className="flex gap-1">
                  <>total:</>
                  <span>
                    {fetchYesterday.data &&
                      Number(fetchYesterday.data?.cases).toLocaleString()}
                  </span>
                  <>cases</>
                </p>
                <div className="flex items-center gap-1">
                  <div className="w-[10px] h-[10px] bg-[#155E75]"></div>
                  <>recoverd:</>
                  <span>
                    {fetchYesterday.data &&
                      Number(fetchYesterday.data?.recovered).toLocaleString()}
                  </span>
                  <>cases</>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-[10px] h-[10px] bg-[#e59f3c]"></div>
                  <>active:</>
                  <span>
                    {fetchYesterday.data &&
                      Number(fetchYesterday.data?.active).toLocaleString()}
                  </span>
                  <>cases</>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-[10px] h-[10px] bg-[#5397d6]"></div>
                  <>death:</>
                  <span>
                    {fetchYesterday.data &&
                      Number(fetchYesterday.data?.deaths).toLocaleString()}
                  </span>
                  <>cases</>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-around mt-[15px] relative flex-col min-[450px]:flex-row gap-2 min-[450px]:gap-0">
              <div className="graph-container">
                <span>
                  Date: {new Date().getDate() - 2}/{new Date().getMonth() + 1}/
                  {new Date().getFullYear()}
                </span>
                <div className="percent">
                  <svg viewBox="0 0 36 36" className="circular-chart">
                    <path
                      className="circle"
                      strokeDasharray={`${
                        fetchTwoDaysAgo.data &&
                        (
                          (fetchTwoDaysAgo.data?.recovered /
                            fetchTwoDaysAgo.data?.recovered) *
                          100
                        ).toFixed(0)
                      }, 100`}
                      d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="circle"
                      strokeDasharray={`${
                        fetchTwoDaysAgo.data &&
                        (
                          (fetchTwoDaysAgo.data?.active /
                            fetchTwoDaysAgo.data?.recovered) *
                          100
                        ).toFixed(0)
                      }, 100`}
                      d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="circle"
                      strokeDasharray={`${
                        fetchTwoDaysAgo.data &&
                        (
                          (fetchTwoDaysAgo.data?.deaths /
                            fetchTwoDaysAgo.data?.recovered) *
                          100
                        ).toFixed(0)
                      }, 100`}
                      d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                </div>
                <p>
                  Total:{" "}
                  {fetchTwoDaysAgo.data &&
                    Number(fetchTwoDaysAgo.data?.cases).toLocaleString()}{" "}
                  cases
                </p>
              </div>
              <div className="info">
                <p className="flex gap-1">
                  <>total:</>
                  <span>
                    {fetchTwoDaysAgo.data &&
                      Number(fetchTwoDaysAgo.data?.cases).toLocaleString()}
                  </span>
                  <>cases</>
                </p>
                <div className="flex items-center gap-1">
                  <div className="w-[10px] h-[10px] bg-[#155E75]"></div>
                  <>recoverd:</>
                  <span>
                    {fetchTwoDaysAgo.data &&
                      Number(fetchTwoDaysAgo.data?.recovered).toLocaleString()}
                  </span>
                  <>cases</>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-[10px] h-[10px] bg-[#e59f3c]"></div>
                  <>active:</>
                  <span>
                    {fetchTwoDaysAgo.data &&
                      Number(fetchTwoDaysAgo.data?.active).toLocaleString()}
                  </span>
                  <>cases</>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-[10px] h-[10px] bg-[#5397d6]"></div>
                  <>death:</>
                  <span>
                    {fetchTwoDaysAgo.data &&
                      Number(fetchTwoDaysAgo.data?.deaths).toLocaleString()}
                  </span>
                  <>cases</>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden relative lg:flex justify-around gap-5">
            <span className="absolute -top-2 left-0 text-[1.5rem] font-semibold">
              Global COVID-19 Cases
            </span>
            <div className="flex items-center justify-around mt-[4%] relative flex-col gap-2">
              <div className="graph-container">
                <span>
                  Date: {new Date().getDate()}/{new Date().getMonth() + 1}/
                  {new Date().getFullYear()}
                </span>
                <div className="percent">
                  <svg viewBox="0 0 36 36" className="circular-chart">
                    <path
                      className="circle"
                      strokeDasharray={`${
                        fetchToday.data &&
                        (
                          (fetchToday.data?.recovered /
                            fetchToday.data?.recovered) *
                          100
                        ).toFixed(0)
                      }, 100`}
                      d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="circle"
                      strokeDasharray={`${
                        fetchToday.data &&
                        (
                          (fetchToday.data?.active /
                            fetchToday.data?.recovered) *
                          100
                        ).toFixed(0)
                      }, 100`}
                      d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="circle"
                      strokeDasharray={`${
                        fetchToday.data &&
                        (
                          (fetchToday.data?.deaths /
                            fetchToday.data?.recovered) *
                          100
                        ).toFixed(0)
                      }, 100`}
                      d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                </div>
                <p>
                  Total:{" "}
                  {fetchToday.data &&
                    Number(fetchToday.data?.cases).toLocaleString()}{" "}
                  cases
                </p>
              </div>
              <div className="info">
                <p className="flex gap-1">
                  <>total:</>
                  <span>
                    {fetchToday.data &&
                      Number(fetchToday.data?.cases).toLocaleString()}
                  </span>
                  <>cases</>
                </p>
                <div className="flex items-center gap-1">
                  <div className="w-[10px] h-[10px] bg-[#155E75]"></div>
                  <>recoverd:</>
                  <span>
                    {fetchToday.data &&
                      Number(fetchToday.data?.recovered).toLocaleString()}
                  </span>
                  <>cases</>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-[10px] h-[10px] bg-[#e59f3c]"></div>
                  <>active:</>
                  <span>
                    {fetchToday.data &&
                      Number(fetchToday.data?.active).toLocaleString()}
                  </span>
                  <>cases</>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-[10px] h-[10px] bg-[#5397d6]"></div>
                  <>death:</>
                  <span>
                    {fetchToday.data &&
                      Number(fetchToday.data?.deaths).toLocaleString()}
                  </span>
                  <>cases</>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-around mt-[4%] relative flex-col gap-2">
              <div className="graph-container">
                <span>
                  Date: {new Date().getDate() - 1}/{new Date().getMonth() + 1}/
                  {new Date().getFullYear()}
                </span>
                <div className="percent">
                  <svg viewBox="0 0 36 36" className="circular-chart">
                    <path
                      className="circle"
                      strokeDasharray={`${
                        fetchYesterday.data &&
                        (
                          (fetchYesterday.data?.recovered /
                            fetchYesterday.data?.recovered) *
                          100
                        ).toFixed(0)
                      }, 100`}
                      d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="circle"
                      strokeDasharray={`${
                        fetchYesterday.data &&
                        (
                          (fetchYesterday.data?.active /
                            fetchYesterday.data?.recovered) *
                          100
                        ).toFixed(0)
                      }, 100`}
                      d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="circle"
                      strokeDasharray={`${
                        fetchYesterday.data &&
                        (
                          (fetchYesterday.data?.deaths /
                            fetchYesterday.data?.recovered) *
                          100
                        ).toFixed(0)
                      }, 100`}
                      d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                </div>
                <p>
                  Total:{" "}
                  {fetchYesterday.data &&
                    Number(fetchYesterday.data?.cases).toLocaleString()}{" "}
                  cases
                </p>
              </div>
              <div className="info">
                <p className="flex gap-1">
                  <>total:</>
                  <span>
                    {fetchYesterday.data &&
                      Number(fetchYesterday.data?.cases).toLocaleString()}
                  </span>
                  <>cases</>
                </p>
                <div className="flex items-center gap-1">
                  <div className="w-[10px] h-[10px] bg-[#155E75]"></div>
                  <>recoverd:</>
                  <span>
                    {fetchYesterday.data &&
                      Number(fetchYesterday.data?.recovered).toLocaleString()}
                  </span>
                  <>cases</>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-[10px] h-[10px] bg-[#e59f3c]"></div>
                  <>active:</>
                  <span>
                    {fetchYesterday.data &&
                      Number(fetchYesterday.data?.active).toLocaleString()}
                  </span>
                  <>cases</>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-[10px] h-[10px] bg-[#5397d6]"></div>
                  <>death:</>
                  <span>
                    {fetchYesterday.data &&
                      Number(fetchYesterday.data?.deaths).toLocaleString()}
                  </span>
                  <>cases</>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-around mt-[4%] relative flex-col gap-2">
              <div className="graph-container">
                <span>
                  Date: {new Date().getDate() - 2}/{new Date().getMonth() + 1}/
                  {new Date().getFullYear()}
                </span>
                <div className="percent">
                  <svg viewBox="0 0 36 36" className="circular-chart">
                    <path
                      className="circle"
                      strokeDasharray={`${
                        fetchTwoDaysAgo.data &&
                        (
                          (fetchTwoDaysAgo.data?.recovered /
                            fetchTwoDaysAgo.data?.recovered) *
                          100
                        ).toFixed(0)
                      }, 100`}
                      d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="circle"
                      strokeDasharray={`${
                        fetchTwoDaysAgo.data &&
                        (
                          (fetchTwoDaysAgo.data?.active /
                            fetchTwoDaysAgo.data?.recovered) *
                          100
                        ).toFixed(0)
                      }, 100`}
                      d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="circle"
                      strokeDasharray={`${
                        fetchTwoDaysAgo.data &&
                        (
                          (fetchTwoDaysAgo.data?.deaths /
                            fetchTwoDaysAgo.data?.recovered) *
                          100
                        ).toFixed(0)
                      }, 100`}
                      d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                </div>
                <p>
                  Total:{" "}
                  {fetchTwoDaysAgo.data &&
                    Number(fetchTwoDaysAgo.data?.cases).toLocaleString()}{" "}
                  cases
                </p>
              </div>
              <div className="info">
                <p className="flex gap-1">
                  <>total:</>
                  <span>
                    {fetchTwoDaysAgo.data &&
                      Number(fetchTwoDaysAgo.data?.cases).toLocaleString()}
                  </span>
                  <>cases</>
                </p>
                <div className="flex items-center gap-1">
                  <div className="w-[10px] h-[10px] bg-[#155E75]"></div>
                  <>recoverd:</>
                  <span>
                    {fetchTwoDaysAgo.data &&
                      Number(fetchTwoDaysAgo.data?.recovered).toLocaleString()}
                  </span>
                  <>cases</>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-[10px] h-[10px] bg-[#e59f3c]"></div>
                  <>active:</>
                  <span>
                    {fetchTwoDaysAgo.data &&
                      Number(fetchTwoDaysAgo.data?.active).toLocaleString()}
                  </span>
                  <>cases</>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-[10px] h-[10px] bg-[#5397d6]"></div>
                  <>death:</>
                  <span>
                    {fetchTwoDaysAgo.data &&
                      Number(fetchTwoDaysAgo.data?.deaths).toLocaleString()}
                  </span>
                  <>cases</>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="w-full flex justify-center">
          <ReactLoading type="bars" color="#155E75" height={100} width={100} />
        </div>
      )}
    </div>
  );
};

export default Graph;
