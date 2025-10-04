import { destinations, cityImages } from "../data/destinations";
import { useDestinationsSelect } from "../custom hooks/useDestinationSelect";
import { FaGlobe, FaSearch } from "react-icons/fa";
import { getBookingUrl } from "../helpers/bookingUrlHelper";
function Destinations() {
  const {
    selectedContinent,
    selectedCountry,
    selectedCity,
    setSelectedContinent,
    setSelectedCountry,
    setSelectedCity,
    continents,
    countries,
    cities,
    images,
  } = useDestinationsSelect(destinations, cityImages);

  
  return (
    <section className="relative overflow-hidden py-16 px-2 md:px-8">
      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start px-2">
        {/* Left: Selectors & Images */}
        <div>
          <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-gray-500">Best Destination</h2>
          <p className="mb-6 text-gray-700 dark:text-gray-400">
            Choose your ideal destination among Orizon's destinations!
          </p>
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <select
              value={selectedContinent}
              onChange={e => setSelectedContinent(e.target.value)}
              className="px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white dark:bg-gray-900 dark:text-gray-100"
            >
              <option value="">-- Select Continent --</option>
              {continents.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
            <select
              value={selectedCountry}
              onChange={e => setSelectedCountry(e.target.value)}
              disabled={!selectedContinent}
              className="px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:bg-gray-100 dark:bg-gray-900 dark:text-gray-100"
            >
              <option value="">-- Select Country --</option>
              {countries.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
            <select
              value={selectedCity}
              onChange={e => setSelectedCity(e.target.value)}
              disabled={!selectedCountry}
              className="px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:bg-gray-100 dark:bg-gray-900 dark:text-gray-100"
            >
              <option value="">-- Select Destination --</option>
              {cities.map((city) => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </div>
          {/* Dynamic Images */}
          <div className="flex flex-wrap gap-4 mt-6">
            {images.length === 0 && (
              <div className="text-gray-400 dark:text-gray-500 italic">
                Select a continent, country or city to see the images.
              </div>
            )}
            {images.map((img, i) => (
              <img
                key={img + i}
                src={img}
                alt={`${selectedCity || selectedCountry || selectedContinent} ${i + 1}`}
                className="w-40 h-28 object-cover rounded shadow"
              />
            ))}
          </div>
        </div>
        {/* Right: Info Box */}
        <div className="bg-white dark:bg-gray-800/80 rounded-3xl p-8 lg:p-10 border border-gray-200 dark:border-gray-700 shadow-2xl flex flex-col items-center justify-center w-full max-w-lg break-words">
          <FaGlobe className="text-4xl text-blue-600 mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3 text-center">
            Travel only in South America and Asia
          </h3>
          <p className="text-gray-700 dark:text-gray-300 text-center mb-6">
            We organize authentic experiences only in the best countries of Asia and South America.
            Choose your destination and get inspired by our images!
          </p>
          <a
            href={getBookingUrl()}
            className={`w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold py-3 px-8 rounded-xl text-lg hover:from-blue-500 hover:via-indigo-500 hover:to-purple-500 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 flex items-center justify-center space-x-3 ${
              !selectedContinent ? "pointer-events-none opacity-50" : ""
            }`}
            tabIndex={selectedContinent ? 0 : -1}
            aria-disabled={!selectedContinent}
          >
            <FaSearch className="text-xl" />
            <span>Search destination</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Destinations;