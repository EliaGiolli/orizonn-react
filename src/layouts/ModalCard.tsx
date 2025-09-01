// components/BookingModal.tsx
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import { Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// Custom hook
import { useBookingForm } from "../custom hooks/useBookingForm";

// Types
import type { BookingModalProps } from "../types/modalForm";

function BookingModal({ isOpen, onClose, bookingOptions, onSubmit }: BookingModalProps) {
  const { register, handleSubmit, control, errors, isSubmitting } = useBookingForm({
    onSubmit,
  });

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        {/* Overlay */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <motion.div
            className="fixed inset-0 bg-black/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        </Transition.Child>

        {/* Content */}
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95 translate-y-4"
            enterTo="opacity-100 scale-100 translate-y-0"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100 translate-y-0"
            leaveTo="opacity-0 scale-95 translate-y-4"
          >
            <motion.div
              className="w-full max-w-lg rounded-2xl bg-white shadow-2xl p-6 space-y-6"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
            >
              {/* Header */}
              <div className="flex justify-between items-start">
                <div>
                  <Dialog.Title className="text-xl font-semibold">Quick Booking</Dialog.Title>
                  <p className="text-gray-500 text-sm">Select your destination and dates</p>
                </div>
                <button onClick={onClose} className="rounded-full p-2 hover:bg-gray-100 transition">
                  <FaTimes className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Destination */}
                <div>
                  <label className="block text-sm font-medium mb-1">Destination</label>
                  <select
                    {...register("bookingOptionId")}
                    className="w-full rounded-md border border-gray-300 p-2"
                  >
                    {bookingOptions.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.name} – {option.location}
                      </option>
                    ))}
                  </select>
                  {errors.bookingOptionId && <p className="text-red-500">{errors.bookingOptionId.message}</p>}
                </div>

                {/* Dates */}
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-sm font-medium mb-1">Check-in</label>
                    <Controller
                      name="checkIn"
                      control={control}
                      render={({ field }) => (
                        <DatePicker
                          selected={field.value ? new Date(field.value) : null}
                          onChange={(date) => field.onChange(date ? date.toISOString() : "")}
                          className="w-full rounded-md border border-gray-300 p-2"
                          placeholderText="Select date"
                        />
                      )}
                    />
                    {errors.checkIn && <p className="text-red-500">{errors.checkIn.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Check-out</label>
                    <Controller
                      name="checkOut"
                      control={control}
                      render={({ field }) => (
                        <DatePicker
                          selected={field.value ? new Date(field.value) : null}
                          onChange={(date) => field.onChange(date ? date.toISOString() : "")}
                          className="w-full rounded-md border border-gray-300 p-2"
                          placeholderText="Select date"
                        />
                      )}
                    />
                    {errors.checkOut && <p className="text-red-500">{errors.checkOut.message}</p>}
                  </div>
                </div>

                {/* Guests */}
                <div>
                  <label className="block text-sm font-medium mb-1">Guests</label>
                  <input
                    type="number"
                    min={1}
                    {...register("guests")}
                    className="w-full rounded-md border border-gray-300 p-2"
                  />
                  {errors.guests && <p className="text-red-500">{errors.guests.message}</p>}
                </div>

                {/* Footer */}
                <div className="flex flex-col gap-2">
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-blue-600 text-white py-2 font-semibold hover:bg-blue-700 transition"
                    disabled={isSubmitting}
                  >
                    Search now
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      window.location.href = "/booking";
                    }}
                    className="w-full text-sm text-blue-600 hover:underline"
                  >
                    Advanced search
                  </button>
                </div>
              </form>
            </motion.div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}

export default BookingModal;
