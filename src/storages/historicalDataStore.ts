import { getHistory } from "@/interfaces";
import { create } from "zustand";

const initData = {
  history: {
    data: undefined,
    loading: false,
  },
  fetchHistory: {
    data: undefined,
    loading: false,
  },
  filterType: "",
  filterMonth: 0,
  filterYear: 0,
};

export type historyType = {
  data: getHistory | undefined;
  loading: boolean;
};

type useHistoricalDataStore = {
  history: historyType;
  fetchHistory: historyType;
  filterType: string;
  filterMonth: number;
  filterYear: number;
  setHistory: (value: historyType) => void;
  setFetchHistory: (value: historyType) => void;
  setFilterType: (value: string) => void;
  setFilterMonth: (value: number) => void;
  setFilterYear: (value: number) => void;
  clearHistory: () => void;
};

export const useHistoricalDataStore = create<useHistoricalDataStore>((set) => ({
  ...initData,
  setHistory: (value) => set({ history: value }),
  setFetchHistory: (value) => set({ fetchHistory: value }),
  setFilterType: (value) => set({ filterType: value }),
  setFilterMonth: (value) => set({ filterMonth: value }),
  setFilterYear: (value) => set({ filterYear: value }),
  clearHistory: () => set({ ...initData }),
}));
