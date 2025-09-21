import { FaMapMarkedAlt, FaCalendarAlt, FaGlobe, FaUsers, FaSearch, FaDollarSign, FaClock, FaStar } from 'react-icons/fa';
import { useState } from 'react';
import { bookingOptions } from '../data/bookingOptions';

function BookingSection() {
  const [searchData, setSearchData] = useState({
    destination: '',
    checkIn: '',
    checkOut: '',
    priceRange: [0, 5000],
    duration: '',
    people: 1,
    flexibleDates: false
  });

  const handleSearch = () => {
    const queryParams = new URLSearchParams({
      city: searchData.destination,
      from: searchData.checkIn,
      to: searchData.checkOut,
      priceMin: searchData.priceRange[0].toString(),
      priceMax: searchData.priceRange[1].toString(),
      duration: searchData.duration,
      people: searchData.people.toString(),
      flexible: searchData.flexibleDates.toString()
    });
    
    window.location.href = `/booking?${queryParams.toString()}`;
  };

  // Extract unique locations from existing bookingOptions
  // new Set() avoids duplicates in the array
  const popularDestinations = [...new Set(bookingOptions.map(option => option.location))];

  return (
    <section className="relative bg-inherit overflow-hidden">
      {/* Background Elements - Subtle accent colors */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-32 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-1/3 w-36 h-36 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Image & Content */}
          <div className="space-y-8">
            {/* Hero Image with Floating Elements */}
            <div className="relative group">
              {/* Glow Effect - Using theme-appropriate colors */}
              <div className="absolute -inset-6 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-3xl blur opacity-15 group-hover:opacity-25 transition duration-700"></div>
              
              {/* Main Image */}
              <img 
                src="../assets/rio-hero.jpg" 
                alt="Exotic travel destination - Rio de Janeiro" 
                className="relative w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl transform group-hover:scale-105 transition duration-700"
              />
              
              {/* Overlay Gradient - Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-2xl"></div>
              
              {/* Floating Badge */}
              <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-xl border border-white/20">
                <div className="flex items-center space-x-2">
                  <FaGlobe className="text-blue-600 text-lg" />
                  <span className="text-sm font-bold text-gray-800">50+ Destinations</span>
                </div>
              </div>

              {/* Floating Rating */}
              <div className="absolute bottom-6 left-6 bg-black/80 backdrop-blur-sm px-3 py-2 rounded-full shadow-xl">
                <div className="flex items-center space-x-2">
                  <FaStar className="text-yellow-500 text-sm" />
                  <span className="text-white text-sm font-medium">4.9/5</span>
                </div>
              </div>
            </div>

            {/* Content Below Image */}
            <div className="text-inherit space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                Plan Your Dream
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                  Adventure
                </span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                From the vibrant streets of South America to the ancient temples of Asia, 
                we craft unforgettable journeys tailored to your dreams. Let us handle the details 
                while you focus on creating memories.
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">15+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-indigo-600">10K+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Happy Travelers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">24/7</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Support</div>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="pt-4 space-y-2">
                <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 text-sm">
                  <span>✨</span>
                  <span>Trusted by thousands of travelers worldwide</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 text-sm">
                  <span>🔒</span>
                  <span>Secure booking with instant confirmation</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 text-sm">
                  <span>🌟</span>
                  <span>Best price guarantee</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Search Form */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-3xl p-8 lg:p-10 border border-gray-200 dark:border-gray-700 shadow-2xl">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">Find Your Perfect Trip</h3>
              <p className="text-gray-600 dark:text-gray-300">Search, compare, and book your next adventure</p>
            </div>

            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); handleSearch(); }}>
              
              {/* Destination */}
              <div>
                <label className="text-gray-900 dark:text-white font-medium mb-3 flex items-center">
                  <FaMapMarkedAlt className="mr-2 text-blue-600" />
                  Where do you want to go?
                </label>
                <select 
                  value={searchData.destination}
                  onChange={(e) => setSearchData({...searchData, destination: e.target.value})}
                  className="w-full px-4 py-3 bg-white/50 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  required
                >
                  <option value="">Select destination</option>
                  {popularDestinations.map((dest, index) => (
                    <option key={index} value={dest}>{dest}</option>
                  ))}
                  <option value="custom">Other destination</option>
                </select>
              </div>

              {/* Date Range */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-gray-900 dark:text-white font-medium mb-3 flex items-center">
                    <FaCalendarAlt className="mr-2 text-blue-600" />
                    Check-in
                  </label>
                  <input 
                    type="date" 
                    value={searchData.checkIn}
                    onChange={(e) => setSearchData({...searchData, checkIn: e.target.value})}
                    className="w-full px-4 py-3 bg-white/50 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
                <div>
                  <label className="text-gray-900 dark:text-white font-medium mb-3 flex items-center">
                    <FaClock className="mr-2 text-blue-600" />
                    Check-out
                  </label>
                  <input 
                    type="date" 
                    value={searchData.checkOut}
                    onChange={(e) => setSearchData({...searchData, checkOut: e.target.value})}
                    className="w-full px-4 py-3 bg-white/50 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
              </div>

              {/* Duration & People */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-gray-900 dark:text-white font-medium mb-3 flex items-center">
                    <FaClock className="mr-2 text-blue-600" />
                    Duration
                  </label>
                  <select 
                    value={searchData.duration}
                    onChange={(e) => setSearchData({...searchData, duration: e.target.value})}
                    className="w-full px-4 py-3 bg-white/50 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    required
                  >
                    <option value="">Select duration</option>
                    <option value="1-3">1-3 days</option>
                    <option value="4-7">4-7 days</option>
                    <option value="8-14">8-14 days</option>
                    <option value="15+">15+ days</option>
                  </select>
                </div>
                <div>
                  <label className="text-gray-900 dark:text-white font-medium mb-3 flex items-center">
                    <FaUsers className="mr-2 text-blue-600" />
                    Travelers
                  </label>
                  <select 
                    value={searchData.people}
                    onChange={(e) => setSearchData({...searchData, people: parseInt(e.target.value)})}
                    className="w-full px-4 py-3 bg-white/50 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    required
                  >
                    {[1,2,3,4,5,6,7,8,9,10].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'person' : 'people'}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Price Range */}
              <div>
                <label className="text-gray-900 dark:text-white font-medium mb-3 flex items-center">
                  <FaDollarSign className="mr-2 text-blue-600" />
                  Price Range: ${searchData.priceRange[0].toLocaleString()} - ${searchData.priceRange[1].toLocaleString()}
                </label>
                <div className="space-y-3">
                  <input 
                    type="range" 
                    min="0" 
                    max="10000" 
                    step="100"
                    value={searchData.priceRange[1]}
                    onChange={(e) => setSearchData({...searchData, priceRange: [searchData.priceRange[0], parseInt(e.target.value)]})}
                    className="w-full h-3 bg-gray-200 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer slider focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300">
                    <span>$0</span>
                    <span>$10,000+</span>
                  </div>
                </div>
              </div>

              {/* Flexible Dates */}
              <div className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl border border-gray-200 dark:border-gray-600">
                <input 
                  type="checkbox" 
                  id="flexibleDates"
                  checked={searchData.flexibleDates}
                  onChange={(e) => setSearchData({...searchData, flexibleDates: e.target.checked})}
                  className="w-5 h-5 text-blue-600 bg-white border-gray-300 dark:border-gray-600 rounded focus:ring-blue-500 focus:ring-2"
                />
                <label htmlFor="flexibleDates" className="text-gray-900 dark:text-white font-medium">
                  <span className="block font-semibold">Flexible dates?</span>
                  <span className="text-sm text-gray-600 dark:text-gray-300">Get better deals and more options</span>
                </label>
              </div>

              {/* Search Button */}
              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold py-4 px-8 rounded-xl text-lg hover:from-blue-500 hover:via-indigo-500 hover:to-purple-500 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 flex items-center justify-center space-x-3"
              >
                <FaSearch className="text-xl" />
                <span>Search Adventures</span>
              </button>

              {/* Additional Info */}
              <div className="text-center pt-4 space-y-2">
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  🎯 Personalized recommendations based on your preferences
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  💰 No hidden fees, transparent pricing
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookingSection;
