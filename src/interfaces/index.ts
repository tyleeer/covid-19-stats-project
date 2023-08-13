export type getHistory = eachHitory[];

export interface eachHitory {
  country: string;
  province: string[];
  timeline: Timeline;
}

export interface Timeline {
  cases: Cases[];
  deaths: Deaths[];
  recovered: Recovered[];
}

export interface Cases {
  date: number;
}

export interface Deaths {
  date: number;
}

export interface Recovered {
  date: number;
}

export interface getCurrent {
  updated: number;
  cases: number;
  todayCases: number;
  deaths: number;
  todayDeaths: number;
  recovered: number;
  todayRecovered: number;
  active: number;
  critical: number;
  casesPerOneMillion: number;
  deathsPerOneMillion: number;
  tests: number;
  testsPerOneMillion: number;
  population: number;
  oneCasePerPeople: number;
  oneDeathPerPeople: number;
  oneTestPerPeople: number;
  activePerOneMillion: number;
  recoveredPerOneMillion: number;
  criticalPerOneMillion: number;
  affectedCountries: number;
}
