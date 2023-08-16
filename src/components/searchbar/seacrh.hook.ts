import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useHistoricalDataStore } from "@/storages/historicalDataStore";
import { historicalDataService } from "@/services";
import { eachHitory, getHistory } from "@/interfaces";

export const useSearchBar = () => {
  const { register, watch } = useForm();
  const {
    setHistory,
    setFetchHistory,
    fetchHistory,
    setFilterType,
    setFilterMonth,
    setFilterYear,
  } = useHistoricalDataStore();
  const searchYear = watch("searchYear");
  const searchMonth = watch("searchMonth");
  const searchType = watch("searchType");
  const searchText = watch("searchText");
  const searchSort = watch("searchSort");

  function monthToNum(month: string) {
    switch (month) {
      case "January":
        return 1;
      case "February":
        return 2;
      case "March":
        return 3;
      case "April":
        return 4;
      case "May":
        return 5;
      case "June":
        return 6;
      case "July":
        return 7;
      case "August":
        return 8;
      case "September":
        return 9;
      case "October":
        return 10;
      case "November":
        return 11;
      case "December":
        return 12;
      default:
        return 1;
    }
  }

  function filter(
    data: getHistory | undefined,
    month: number,
    text: string,
    sort: string
  ) {
    const filterText = data?.filter((item) =>
      item
        ? item.country.toLowerCase().includes((text || "").toLowerCase())
        : null
    );

    function filtering() {
      switch (sort) {
        case "A-Z":
         return filterText?.sort((a, b) =>
           a.country > b.country ? 1 : b.country > a.country ? -1 : 0
         );
        case "Z-A":
           return filterText?.sort((a, b) =>
             a.country > b.country ? -1 : b.country > a.country ? 1 : 0
           );

        default:
          return filterText?.sort((a, b) =>
            a.country > b.country ? 1 : b.country > a.country ? -1 : 0
          );
      }
    }

    const filterSort = filtering();

    function checkMonth(item: eachHitory) {
      const casesList = item.timeline.cases;
      for (const i in casesList) {
        const onlymonth = i.slice(0, 2).replace("/", "");
        if (onlymonth === month.toString()) {
          return item;
        }
      }
    }

    const filterMonth = filterSort?.filter(checkMonth);

    return filterMonth;
  }

  const callData = async () => {
    setHistory({ data: undefined, loading: true });
    setFetchHistory({ data: undefined, loading: true });

    const response = await historicalDataService.getHistoryData();

    if (response.status === 200) {
      setFetchHistory({ data: response.data, loading: false });

      const month = monthToNum(searchMonth);
      const res = filter(response.data, month, searchText, searchSort);

      setHistory({ data: res, loading: false });
    } else {
      alert("Error404");
      setHistory({ data: undefined, loading: false });
      setFetchHistory({ data: undefined, loading: false });
    }
  };

  useEffect(() => {
    callData();
  }, []);

  useEffect(() => {
    const month = monthToNum(searchMonth);

    setFilterType(searchType);
    setFilterMonth(month);
    setFilterYear(parseInt(searchYear));
  }, [searchType, searchMonth, searchYear]);

  useEffect(() => {
    const month = monthToNum(searchMonth);
    const response = filter(fetchHistory.data, month, searchText, searchSort);

    setHistory({ data: response, loading: false });
  }, [searchMonth, searchText, searchSort]);

  return {
    fieldYear: register("searchYear"),
    fieldMonth: register("searchMonth"),
    fieldType: register("searchType"),
    fieldText: register("searchText"),
    fieldSort: register("searchSort"),
  };
};
