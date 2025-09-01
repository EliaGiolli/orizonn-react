import type { BookingOption, BookingFormData } from "./booking";

export type BookingModalProps = {
    isOpen: boolean;
    onClose: () => void;
    bookingOptions: BookingOption[];
    onSubmit: (data: BookingFormData) => void;
  };
  