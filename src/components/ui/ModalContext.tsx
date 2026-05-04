import React, { createContext, useContext, useState } from "react";
import { BookingModal } from "./BookingModal";

interface ModalContextType {
  openBookingModal: () => void;
  closeBookingModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const openBookingModal = () => setIsBookingOpen(true);
  const closeBookingModal = () => setIsBookingOpen(false);

  return (
    <ModalContext.Provider value={{ openBookingModal, closeBookingModal }}>
      {children}
      <BookingModal isOpen={isBookingOpen} onClose={closeBookingModal} />
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};