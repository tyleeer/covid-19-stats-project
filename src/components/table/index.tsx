import { useHistoricalDataStore } from "@/storages/historicalDataStore";
import { getDate } from "@/utils";

const Table = () => {
  const { history, filterType, filterYear, filterMonth } =
    useHistoricalDataStore();
  const dateList = getDate(filterMonth, filterYear);

  return (
    <>
      {history && history.loading ? (
        <div className="h-[50%] flex justify-center items-center text-[2rem]">
          loading.....
        </div>
      ) : (
        <div className="w-full lg:w-[90%] m-auto mb-[5%] overflow-x-scroll">
          {filterType === "cases" ? (
            <table className="text-white relative border-separate border-spacing-x-2">
              <thead>
                <tr>
                  <th className="sticky left-0 bg-black">Country</th>
                  {dateList.map((i, index) => {
                    return <th key={index}>{i}</th>;
                  })}
                </tr>
              </thead>
              <tbody>
                {history.data &&
                  (history.data.length > 0 ? (
                    history.data.map((item, index) => {
                      return (
                        <tr
                          key={index}
                          className="odd:bg-[rgb(147,250,243)] odd:text-black"
                        >
                          <td className="font-semibold sticky left-0 bg-black text-white">
                            {item ? item.country : null}
                          </td>
                          {dateList.map((i, index) => {
                            return (
                              <td
                                key={index}
                                className="w-full text-center text-[0.8rem]"
                              >
                                {item
                                  ? item.timeline.cases[i] !== undefined
                                    ? Number(
                                        item.timeline.cases[i]
                                      ).toLocaleString()
                                    : "no data"
                                  : null}
                              </td>
                            );
                          })}
                        </tr>
                      );
                    })
                  ) : (
                    <tr className="w-full lg:w-[70%] fixed text-[2rem] mt-[2%] text-center">
                      No Data
                    </tr>
                  ))}
              </tbody>
            </table>
          ) : filterType === "deaths" ? (
            <table className="text-white relative border-separate border-spacing-x-2">
              <thead>
                <tr>
                  <th className="sticky left-0 bg-black">Country</th>
                  {dateList.map((i, index) => {
                    return <th key={index}>{i}</th>;
                  })}
                </tr>
              </thead>
              <tbody>
                {history.data &&
                  (history.data.length > 0 ? (
                    history.data.map((item, index) => {
                      return (
                        <tr
                          key={index}
                          className="odd:bg-[rgb(147,250,243)] odd:text-black"
                        >
                          <td className="font-semibold sticky left-0 bg-black text-white">
                            {item ? item.country : null}
                          </td>
                          {dateList.map((i, index) => {
                            return (
                              <td
                                key={index}
                                className="w-full text-center text-[0.8rem]"
                              >
                                {item
                                  ? item.timeline.deaths[i] !== undefined
                                    ? Number(
                                        item.timeline.deaths[i]
                                      ).toLocaleString()
                                    : "no data"
                                  : null}
                              </td>
                            );
                          })}
                        </tr>
                      );
                    })
                  ) : (
                    <tr className="w-full lg:w-[70%] fixed text-[2rem] mt-[2%] text-center">
                      No Data
                    </tr>
                  ))}
              </tbody>
            </table>
          ) : (
            <table className="text-white relative border-separate border-spacing-x-2">
              <thead>
                <tr>
                  <th className="sticky left-0 bg-black">Country</th>
                  {dateList.map((i, index) => {
                    return <th key={index}>{i}</th>;
                  })}
                </tr>
              </thead>
              <tbody>
                {history.data &&
                  (history.data.length > 0 ? (
                    history.data.map((item, index) => {
                      return (
                        <tr
                          key={index}
                          className="odd:bg-[rgb(147,250,243)] odd:text-black"
                        >
                          <td className="font-semibold sticky left-0 bg-black text-white">
                            {item ? item.country : null}
                          </td>
                          {dateList.map((i, index) => {
                            return (
                              <td
                                key={index}
                                className="w-full text-center text-[0.8rem]"
                              >
                                {item
                                  ? item.timeline.recovered[i] !== undefined
                                    ? Number(
                                        item.timeline.recovered[i]
                                      ).toLocaleString()
                                    : "no data"
                                  : null}
                              </td>
                            );
                          })}
                        </tr>
                      );
                    })
                  ) : (
                    <tr className="w-full lg:w-[70%] fixed text-[2rem] mt-[2%] text-center">
                      No Data
                    </tr>
                  ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </>
  );
};

export default Table;
