// hooks/useBookingForm.ts
import { useForm } from "react-hook-form";
//Zod
import { zodResolver } from "@hookform/resolvers/zod";
import { bookingFormSchema } from "../schemas/bookingSchema";

//Types
import type { BookingFormData } from "../types/booking";
import type { UseBookingFormProps } from "../types/booking";


export const useBookingForm = ({ defaultValues, onSubmit }: UseBookingFormProps) => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<BookingFormData>({
    defaultValues,
    resolver: zodResolver(bookingFormSchema),
  });

  const submitHandler = (data: BookingFormData) => {
    onSubmit(data);
    reset(); 
  };

  return {
    register,
    handleSubmit: handleSubmit(submitHandler),
    control,
    errors,
    isSubmitting,
    reset,
  };
};
