import React, { useState } from 'react'
import "./services.css";

const Services = () => {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (id) => setActiveModal(id);
  const closeModal = () => setActiveModal(null);

  const services = [
    {
      id: 1,
      icon: "uil uil-web-grid",
      title: "Business",
      titleLine2: "Websites",
      modalTitle: "Business Websites",
      description: "I design and build modern, mobile-friendly websites that help your business get found on Google. Whether you need a brand new site or a redesign of your current one, I create fast, professional pages that turn visitors into customers. Every site is built responsive — meaning it looks great on phones, tablets, and desktops."
    },
    {
      id: 2,
      icon: "uil uil-edit",
      title: "Web Apps",
      titleLine2: "& Dashboards",
      modalTitle: "Web Apps & Dashboards",
      description: "Need more than a static website? I build full web applications — booking systems, client portals, admin dashboards, inventory trackers, and custom tools that automate your workflow. Built with React and Node.js for speed and reliability."
    },
    {
      id: 3,
      icon: "uil uil-arrow",
      title: "SEO &",
      titleLine2: "Google",
      modalTitle: "SEO & Google Presence",
      description: "A beautiful website means nothing if nobody can find it. I optimize every site for search engines so your business shows up when people search for your services in your area. Fast load times, proper structure, mobile optimization, and Google Business integration — everything you need to get found online."
    }
  ];

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I can do for you</span>

      <div className="services__container container grid">
        {services.map((service) => (
          <div className="services__card" key={service.id}>
            <i className={`${service.icon} services__card-icon`}></i>
            <h3 className="services__card-title">
              {service.title}<br />{service.titleLine2}
            </h3>
            <span className="services__card-button" onClick={() => openModal(service.id)}>
              View More <i className="uil uil-arrow-right services__card-arrow"></i>
            </span>
          </div>
        ))}
      </div>

      {activeModal && (
        <div className="services__overlay" onClick={closeModal}>
          <div className="services__modal" onClick={(e) => e.stopPropagation()}>
            <i className="uil uil-times services__modal-close" onClick={closeModal}></i>
            <h3 className="services__modal-title">
              {services.find(s => s.id === activeModal)?.modalTitle}
            </h3>
            <p className="services__modal-desc">
              {services.find(s => s.id === activeModal)?.description}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services