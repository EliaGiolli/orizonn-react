import { bookingFormSchema } from "../schemas/bookingSchema";

export interface BookingOption {
    id: string;
    name: string;
    location: string;
    pricePerNight: number;
    rating: number; // 1 to 5
    availableFrom: string; // ISO date string
    availableTo: string;   // ISO date string
    imageUrl: string;
    amenities: string[];
  }
  
  export type BookingFormData = {
    checkIn: string;     // ISO date string
    checkOut: string;    // ISO date string
    guests: number;
    bookingOptionId: string; // riferimento a BookingOption
  };
  

//Zod types  
export type BookingFormZod = typeof bookingFormSchema;

export type UseBookingFormProps = {
  defaultValues?: Partial<BookingFormData>;
  onSubmit: (data: BookingFormData) => void;
};
