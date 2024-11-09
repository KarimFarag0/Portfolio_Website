import React, { useState } from 'react'
import "./services.css";

const Services = () => {
    const[toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    };

  return (
    <section className="services section" id="services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What i offer</span>

        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <i className="uil uil-web-grid services__icon"></i>
                    <h3 className="services__title">Backend <br/> Coding </h3>
                </div>

                <span className="services__button" onClick={() => toggleTab(1)}>
                    View More <i
                 className="uil uil-arrow-right
                  services__button-icon"></i></span>

                  <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times 
                        services__modal-close"></i>

                        <h3 className="services__modal-title">Backend Coding</h3>
                        <p className="services__modal-description">I have a solid foundation in backend development, with experience in Java, C#, and Python,
                             along with practical skills in database management and API integration. 
                            In projects like the SMTI Student-Project Management app and the ShelfLife Android app, 
                            I’ve used SQL Server, Firebase, and ASP.NET to create secure, efficient data systems. </p>

                    </div>
                  </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-edit services__icon"></i>
                    <h3 className="services__title">Ui/Ux <br/> Designer</h3>
                </div>

                <span onClick={() => toggleTab(2)} className="services__button" >View More <i
                 className="uil uil-arrow-right
                  services__button-icon"></i></span>

                  <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times 
                        services__modal-close"></i>

                        <h3 className="services__modal-title">Ui / Ux Designer</h3>
                        <p className="services__modal-description">specialize in Full-Stack Development, 
                            combining backend coding with frontend design to build complete, user-friendly applications. 
                            With experience in technologies like Java, C#, Python, React, HTML, and CSS, I develop secure,
                             efficient systems while ensuring a seamless user experience. </p>
                    </div>
                  </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-arrow services__icon"></i>
                    <h3 className="services__title">Full-Stack<br/> Dev</h3>
                </div>

                <span onClick={() => toggleTab(3)} className="services__button" >View More <i
                 className="uil uil-arrow-right
                  services__button-icon"></i></span>

                  <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times 
                        services__modal-close"></i>

                        <h3 className="services__modal-title">Full-Stack Development</h3>
                        <p className="services__modal-description">I
                             create visually appealing, user-centered designs that enhance
                              the overall user experience. Using tools like React, HTML, and CSS frameworks, 
                              I craft intuitive layouts and interfaces that are both functional and aesthetically pleasing. 
                              My goal is to blend creativity with usability, ensuring that every design is not only attractive 
                              but also easy to navigate and responsive across all devices. </p>

                           
                    </div>
                  </div>
            </div>
        </div>
    </section>
  )
}

export default Services