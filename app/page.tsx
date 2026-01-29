'use client'
import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import Modal from "@/components/Modal/Modal";
import Navbar from "@/components/Navbar";

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [showFloatingCTA, setShowFloatingCTA] = useState<boolean>(false);

  const openModal = (): void => {
    setIsModalOpen(true);
  };

  const closeModal = (): void => {
    setIsModalOpen(false);
  };

  /* =======================
     Floating CTA on Scroll
  ======================= */
  useEffect(() => {
    const handleScroll = (): void => {
      setShowFloatingCTA(window.scrollY > window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* =======================
     FAQ Toggle Logic
  ======================= */
  useEffect(() => {
    const faqItems = document.querySelectorAll<HTMLElement>(".faq-item");

    faqItems.forEach((item) => {
      const question = item.querySelector<HTMLElement>(".faq-question");

      if (!question) return;

      const handleClick = (): void => {
        const isActive = item.classList.contains("active");

        document
          .querySelectorAll<HTMLElement>(".faq-item")
          .forEach((i) => i.classList.remove("active"));

        if (!isActive) {
          item.classList.add("active");
        }
      };

      question.addEventListener("click", handleClick);

      // cleanup per element
      return () => {
        question.removeEventListener("click", handleClick);
      };
    });
  }, []);

  /* =======================
     Fade-in Animation
  ======================= */
  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    const fadeInElements =
      document.querySelectorAll<HTMLElement>(".fade-in");

    fadeInElements.forEach((el) => observer.observe(el));

    return () => {
      fadeInElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="App">
      <Navbar onOpenModal={openModal} />

      <div className={`sticky-footer ${showFloatingCTA ? "visible" : ""}`}>
        <div className="sticky-footer-content">
          <p className="sticky-footer-text">
            Join the Idea 2 Impact Buildathon
          </p>
          <button className="sticky-footer-btn" onClick={openModal}>
            Register for Free
          </button>
        </div>
      </div>

      <Hero onOpenModal={openModal} />

      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default App;
