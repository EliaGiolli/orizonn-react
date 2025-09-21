import { useState } from "react"
import Button from "../components/Button"
import { Link } from "react-router"

import { bookingOptions } from "../data/bookingOptions"
import ModalCard from "./ModalCard"

function HeroSection() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <section className='min-h-screen w-full bg-cover bg-center flex flex-col lg:flex-row items-center justify-center px-4 py-8 lg:py-0'>
        {/* Text Content - Full width on mobile, half width on large screens */}
        <div className='w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left mb-8 lg:mb-0 lg:pr-8'>
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-6'>Welcome to Orizon Travel Agency!</h1>
            <p className='text-base md:text-lg mb-8 text-gray-700'>We are a travel agency that specializes in providing the best travel experiences in South America and Asia.</p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'>
                <Button variant="customBtn">
                    <Link to="/destinations">Destinations</Link>
                </Button>
                <Button variant="shadowBtn" onClick={() => setIsOpen(true)}>
                    <Link to="/booking">Book your trip now!</Link>
                </Button>
                <ModalCard bookingOptions={bookingOptions} isOpen={isOpen} onClose={() => setIsOpen(false)} onSubmit={() => {}} />
            </div>
        </div>
        
        {/* Image - Full width on mobile, half width on large screens */}
        <div className='w-full lg:w-1/2 flex justify-center lg:justify-start'>
            <img 
                src="../assets/rio-hero.jpg" 
                alt="Rio de Janeiro landscape" 
                className='w-full max-w-md lg:max-w-lg xl:max-w-xl h-auto rounded-2xl shadow-lg' 
            />
        </div>
    </section>
  )
}

export default HeroSection