export interface FetchCountriesResponse {
  confirmed: Status;
  deaths: Status;
  lastUpdate: string;
  recovered: Status;
}

export interface LandingState {
  confirmed: number;
  deaths: number;
  didSomethingWrong: boolean;
  isLoading: boolean;
  lastUpdate: string;
  recovered: number;
}

interface Status {
  detail: string;
  value: number;
}
