import HeroSection from "../layouts/HeroSection";
import BookingParallax from "../components/BookingParallax";
import BookingSection from "../components/BookingSection";
import BlogSection from "../components/BlogSection";
import Destinations from "../components/Destinations";
import CallToActionSection from "../components/CallToActionSection";

function Homepage() {
  return (
    <>
      <HeroSection />
      <BookingParallax />
      <BookingSection />
      <Destinations />
      <BlogSection />
      <CallToActionSection />
    </>
  )
}

export default Homepage