import { getHistory, getCurrent } from "@/interfaces";
import { allCountries } from "@/utils";
import axios from "axios";

interface getHistoricalResponse {
  status: number;
  data: getHistory | undefined;
}

interface getCurrentResponse {
  status: number;
  data: getCurrent | undefined;
}

interface getAllCurrentResponse {
  today: getCurrentResponse;
  yesterday: getCurrentResponse;
  twoDaysAgo: getCurrentResponse;
}

export const historicalDataService = {
  getHistoryData: async (): Promise<getHistoricalResponse> => {
    let countries = "";
    for (const item of allCountries) {
      if (item.continent === "All Countries") {
        for (let i = 0; i < item.countries.length; i++) {
          const lastInx = item.countries.length - 1;
          i < lastInx
            ? (countries = countries.concat(item.countries[i], ","))
            : (countries = countries.concat(item.countries[i]));
        }
      }
    }

    const response = await axios.get(
      `https://disease.sh/v3/covid-19/historical/${countries}?lastdays=all`
    );
    return response;
  },
};

export const currentDataServic = {
  getCurrentData: async (): Promise<getAllCurrentResponse> => {
    const todayResponse = await axios.get(`https://disease.sh/v3/covid-19/all`);
    const yesterdayResponse = await axios.get(
      `https://disease.sh/v3/covid-19/all?yesterday=true`
    );
    const twoDaysAgoResponse = await axios.get(
      `https://disease.sh/v3/covid-19/all?twoDaysAgo=true`
    );
    const response = {
      today: todayResponse,
      yesterday: yesterdayResponse,
      twoDaysAgo: twoDaysAgoResponse,
    };
    return response;
  },
};
