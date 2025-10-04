export function getBookingUrl(selectedContinent?: string, selectedCountry?: string, selectedCity?: string) {
  if (selectedCity) {
    return `/booking?city=${encodeURIComponent(selectedCity)}`;
  }
  if (selectedCountry) {
    return `/booking?country=${encodeURIComponent(selectedCountry)}`;
  }
  if (selectedContinent) {
    return `/booking?continent=${encodeURIComponent(selectedContinent)}`;
  }
  return "#";
}