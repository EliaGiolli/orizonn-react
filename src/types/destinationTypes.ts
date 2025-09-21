export type DestinationsData = {
  [continent: string]: {
    [country: string]: string[];
  };
};

export type CityImages = {
  [continent: string]: {
    [country: string]: {
      [city: string]: string[];
    };
  };
};