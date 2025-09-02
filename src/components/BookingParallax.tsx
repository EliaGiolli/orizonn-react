import { Parallax } from 'react-parallax';
import { Link } from 'react-router';
import { FaPlane, FaMapMarkedAlt, FaCalendarAlt, FaGlobe } from 'react-icons/fa';

function BookingParallax() {
  return (
    <div className="relative">
      {/* First Parallax Layer - Background Mountains/Sky */}
      <Parallax
        blur={0}
        bgImage="../assets/xian.jpg"
        bgImageAlt="Travel background"
        strength={200}
        className="min-h-screen"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/30 to-blue-900/60"></div>
        
        {/* Content Container */}
        <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
          <div className="text-center text-white max-w-4xl mx-auto">
            {/* Main Heading */}
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Ready to
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                Explore?
              </span>
            </h2>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl mb-12 text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Discover breathtaking destinations, create unforgettable memories, and let us craft your perfect journey
            </p>
            
            {/* Feature Icons Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-3xl mx-auto">
              <div className="flex flex-col items-center space-y-3">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                  <FaPlane className="text-2xl text-yellow-400" />
                </div>
                <span className="text-sm font-medium">Flights</span>
              </div>
              
              <div className="flex flex-col items-center space-y-3">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                  <FaMapMarkedAlt className="text-2xl text-yellow-400" />
                </div>
                <span className="text-sm font-medium">Destinations</span>
              </div>
              
              <div className="flex flex-col items-center space-y-3">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                  <FaCalendarAlt className="text-2xl text-yellow-400" />
                </div>
                <span className="text-sm font-medium">Planning</span>
              </div>
              
              <div className="flex flex-col items-center space-y-3">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                  <FaGlobe className="text-2xl text-yellow-400" />
                </div>
                <span className="text-sm font-medium">Adventures</span>
              </div>
            </div>
            
            {/* CTA Button */}
            <div className="space-y-4">
              <Link 
                to="/booking"
                className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold py-4 px-8 rounded-full text-lg md:text-xl hover:from-yellow-300 hover:to-orange-400 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-yellow-400/25"
              >
                Start Your Journey
              </Link>
              
              <p className="text-blue-200 text-sm">
                ✨ Trusted by thousands of travelers worldwide
              </p>
            </div>
          </div>
        </div>
      </Parallax>
      
      {/* Second Parallax Layer - Floating Elements */}
      <Parallax
        blur={0}
        strength={-100}
        className="relative -mt-32"
      >
        <div className="bg-gradient-to-b from-blue-900 to-gray-900 min-h-screen relative overflow-hidden">

          {/* Content for Next Section */}
          <div className="relative z-10 pt-32 pb-20 px-4">
            <div className="max-w-6xl mx-auto text-center">
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-8">
                Your Next Adventure Awaits
              </h3>
              <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
                From the vibrant streets of Rio de Janeiro to the ancient temples of Asia, 
                we've curated the most extraordinary experiences just for you.
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">50+</div>
                  <div className="text-gray-300">Destinations</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-orange-400 mb-2">10K+</div>
                  <div className="text-gray-300">Happy Travelers</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">24/7</div>
                  <div className="text-gray-300">Support</div>
                </div>
              </div>
              
              {/* Final CTA */}
              <div className="space-y-6">
                <Link 
                  to="/destinations"
                  className="inline-block bg-white text-gray-900 font-bold py-4 px-8 rounded-full text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl"
                >
                  Explore Destinations
                </Link>
                <p className="text-gray-400">
                  ↓ Scroll down to start planning your trip ↓
                </p>
              </div>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
}

export default BookingParallax;