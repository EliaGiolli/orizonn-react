import { FaArrowRight, FaPlane, FaMapMarkedAlt, FaHeart } from 'react-icons/fa';
import { Link } from 'react-router';

function CallToActionSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/20 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-white/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 text-center">
        {/* Main Content */}
        <div className="space-y-8">
          {/* Icons */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
              <FaPlane className="text-3xl text-white" />
            </div>
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
              <FaMapMarkedAlt className="text-3xl text-white" />
            </div>
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
              <FaHeart className="text-3xl text-white" />
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Pronto a Iniziare la Tua
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
              Avventura?
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-8">
            Unisciti a migliaia di viaggiatori che hanno già scoperto le meraviglie del mondo. 
            La tua prossima avventura ti aspetta.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">10,000+</div>
              <div className="text-blue-200">Viaggiatori Felici</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-blue-200">Destinazioni</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-blue-200">Supporto</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              to="/booking"
              className="group bg-white text-blue-600 font-bold py-4 px-8 rounded-xl text-lg hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-white/25 flex items-center space-x-3"
            >
              <span>Prenota Ora</span>
              <FaArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            
            <Link 
              to="/destinations"
              className="group border-2 border-white text-white font-bold py-4 px-8 rounded-xl text-lg hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-300 flex items-center space-x-3"
            >
              <span>Esplora Destinazioni</span>
              <FaMapMarkedAlt className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="pt-8 space-y-4">
            <p className="text-blue-200 text-lg">
              ✨ <strong>Prenotazione gratuita</strong> • 🔒 <strong>Pagamento sicuro</strong> • 🌟 <strong>Garanzia soddisfatti</strong>
            </p>
            <p className="text-blue-300 text-sm">
              Iscriviti alla nostra newsletter per ricevere offerte esclusive e consigli di viaggio
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CallToActionSection;
