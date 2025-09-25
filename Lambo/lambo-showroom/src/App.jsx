 import React, { useRef, useState, useEffect } from "react";
import Navbar from "./Componenets/Navbar";
import Hero from "./Componenets/Hero";
import CarModel from "./Componenets/CarModel";
import CarGrid from "./Componenets/CarGrid";
import CarCard from "./Componenets/CarCard";
import cars from "./data/cars";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [openCar, setOpenCar] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const carsRef = useRef();

  useEffect(() => {
    // Hero background parallax
    gsap.to(".hero__bg", {
      yPercent: 20,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Car cards staggered reveal on scroll
    gsap.from(".card", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".cars .grid",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  const handleExplore = () => {
    const section = document.getElementById("cars");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  const openModal = (car) => {
    setOpenCar(car);
    setModalOpen(true);
    gsap.fromTo(
      ".modal__img",
      { scale: 0.9, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.4 }
    );
  };

  const closeModal = () => {
    setModalOpen(false);
    setTimeout(() => setOpenCar(null), 250);
  };

  return (
    <>
      <Navbar />
      <Hero onExplore={handleExplore} />
      <main ref={carsRef}>
        <CarGrid cars={cars} onOpen={openModal} />
        <section id="about" className="about">
          <div className="container">
            <h2 className="section__title">About Our Showroom</h2>
            <p className="muted">
              We curate premium cars from top manufacturers. Test drives and
              bookings available on request.
            </p>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="container">
            <h2 className="section__title">Contact</h2>
            <form
              className="contact__form"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thanks! We will contact you.");
              }}
            >
              <input placeholder="Your name" required />
              <input placeholder="Email" type="email" required />
              <textarea placeholder="Message" required />
              <button className="btn" type="submit">
                Send
              </button>
            </form>
          </div>
        </section>
      </main>

      <CarModel open={modalOpen} car={openCar} onClose={closeModal} />
      <footer className="footer">
        <div className="container">
          © {new Date().getFullYear()} CarShow — All rights reserved
        </div>
      </footer>
    </>
  );
}