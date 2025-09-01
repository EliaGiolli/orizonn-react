import { z } from "zod";

export const bookingFormSchema = z.object({
    bookingOptionId: z.string().nonempty("Select a destination"),
    checkIn: z.string().nonempty("Select check-in date"),
    checkOut: z.string().nonempty("Select check-out date"),
    guests: z
      .number({ error: "Guests must be a number" })
      .min(1, "At least 1 guest"),
  });
  