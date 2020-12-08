export interface FetchCountriesResponse {
  confirmed: Status;
  deaths: Status;
  lastUpdate: string;
  recovered: Status;
}

export interface LandingState {
  confirmed: number;
  deaths: number;
  lastUpdate: string;
  recovered: number;
}

interface Status {
  detail: string;
  value: number;
}
