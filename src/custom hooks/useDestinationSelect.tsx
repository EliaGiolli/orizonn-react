import { useState } from "react";
import { type DestinationsData, type CityImages } from "../types/destinationTypes";

export function useDestinationsSelect(destinations: DestinationsData, cityImages: CityImages) {
  const [selectedContinent, setSelectedContinent] = useState<string>("");
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [selectedCity, setSelectedCity] = useState<string>("");

  const continents = Object.keys(destinations);
  const countries = selectedContinent ? Object.keys(destinations[selectedContinent]) : [];
  const cities =
    selectedContinent && selectedCountry
      ? destinations[selectedContinent][selectedCountry]
      : [];

  // Immagini da mostrare: città > paese > continente
  let images: string[] = [];
  if (selectedContinent && selectedCountry && selectedCity) {
    images = cityImages[selectedContinent]?.[selectedCountry]?.[selectedCity] || [];
  } else if (selectedContinent && selectedCountry) {
    // Tutte le immagini di tutte le città del paese
    images = Object.values(cityImages[selectedContinent]?.[selectedCountry] || {}).flat();
  } else if (selectedContinent) {
    // Tutte le immagini di tutte le città di tutti i paesi del continente
    images = Object.values(cityImages[selectedContinent] || {})
      .map(countryObj => Object.values(countryObj).flat())
      .flat();
  }

  // Reset logic
  const handleContinent = (value: string) => {
    setSelectedContinent(value);
    setSelectedCountry("");
    setSelectedCity("");
  };

  const handleCountry = (value: string) => {
    setSelectedCountry(value);
    setSelectedCity("");
  };

  const handleCity = (value: string) => {
    setSelectedCity(value);
  };

  return {
    selectedContinent,
    selectedCountry,
    selectedCity,
    setSelectedContinent: handleContinent,
    setSelectedCountry: handleCountry,
    setSelectedCity: handleCity,
    continents,
    countries,
    cities,
    images,
  };
}