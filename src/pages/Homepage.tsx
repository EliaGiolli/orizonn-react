import HeroSection from "../layouts/HeroSection";
import BookingParallax from "../components/BookingParallax";
import BookingSection from "../components/BookingSection";
import Destinations from "../components/Destinations";

function Homepage() {
  return (
    <>
      <HeroSection />
      <BookingParallax />
      <BookingSection />
      <Destinations />
    </>
  )
}

export default Homepage