export interface SearchHeaderParameters {
  readonly country: string;
}

export interface SearchParameters {
  readonly locationType: string;
  readonly locationCode: string;
  readonly checkIn: string | undefined;
  readonly checkOut: string | undefined;
  readonly occupancy: string;
  readonly locale: string;
  readonly country: string;
}

export interface SearchError {
  exists: boolean;
  code?: string;
  message?: string;
}
