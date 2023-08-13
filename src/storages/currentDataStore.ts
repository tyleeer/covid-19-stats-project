import { getCurrent } from "@/interfaces";
import { create } from "zustand";

const initData = {
  fetchToday: {
    data: undefined,
    loading: false,
  },
  fetchYesterday: {
    data: undefined,
    loading: false,
  },
  fetchTwoDaysAgo: {
    data: undefined,
    loading: false,
  },
};

export type currentType = {
  data: getCurrent | undefined;
  loading: boolean;
};

type useCurrentDataStore = {
  fetchToday: currentType;
  fetchYesterday: currentType;
  fetchTwoDaysAgo: currentType;
  setFetchToday: (value: currentType) => void;
  setFetchYesterday: (value: currentType) => void;
  setFetchTwoDaysAgo: (value: currentType) => void;
  clearHistory: () => void;
};

export const useCurrentDataStore = create<useCurrentDataStore>((set) => ({
  ...initData,
  setFetchToday: (value) => set({ fetchToday: value }),
  setFetchYesterday: (value) => set({ fetchYesterday: value }),
  setFetchTwoDaysAgo: (value) => set({ fetchTwoDaysAgo: value }),
  clearHistory: () => set({ ...initData }),
}));
