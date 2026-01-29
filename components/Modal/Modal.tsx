'use client'
import React, { useEffect, useCallback } from "react";
import { Icon } from "@iconify/react";
import RegistrationForm from "./RegistrationForm";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // Handle ESC key
  const handleEscapeKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleEscapeKey);
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isOpen, handleEscapeKey]);

  // Close on overlay click
  const handleOverlayClick = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className={`modal-overlay ${isOpen ? "active" : ""}`}
      onClick={handleOverlayClick}
    >
      <div className="modal-container">
        {children ?? (
          <>
            <div className="modal-header">
              <div className="modal-close" onClick={onClose}>
                <Icon icon="lucide:x" />
              </div>
              <h2 className="modal-title">Register for Idea2Impact</h2>
              <p className="modal-subtitle">
                Join the proving ground. Build real impact.
              </p>
            </div>

            <div className="modal-body">
              <RegistrationForm onClose={onClose} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;
