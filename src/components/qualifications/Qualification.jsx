import React, { useState } from 'react'
import "./qualification.css";


const Qualification = () => {
  const[toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

  return (
    <section className="qualification section">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My peronal journey</span>


        <div className="qualification__container container">
          <div className="qualification__tabs">

            <div className={toggleState === 1 ? "qualification__button button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(1)}>
              <i className="uil uil-graduation-cap
               qualification__icon"></i>Education
            </div>

            <div className={toggleState === 2 ? "qualification__button button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(2)}>
              <i className="uil uil-briefcase-alt
              qualification__icon"></i>Experience
            </div>

          </div>

          <div className="qualification__sections">
            <div className={toggleState === 1 ? "qualification__content qualification__content-active"  
              :"qualification__content"
            }>
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Felix Leclerc</h3>
                  <span 
                  className="qualification__subtitle">HighSchool</span>
                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt">
                      Graduate 2020
                    </i>
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>


              <div className="qualification__data">
                <div></div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>

                <div>
                  <h3 className="qualification__title">Lasalle College</h3>
                  <span 
                  className="qualification__subtitle">College</span>
                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt">
                      2022 - 2025
                    </i>
                  </div>
                </div>

                
              </div>




            </div>

            <div className={toggleState === 2 ? "qualification__content qualification__content-active"  
              :"qualification__content"
            }>
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Online Customer Support</h3>
                  <span 
                  className="qualification__subtitle">Gets Commerce</span>
                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt">
                      2019 - 2022
                    </i>
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>


              <div className="qualification__data">
                <div></div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>

                <div>
                  <h3 className="qualification__title">Developer</h3>
                  <span 
                  className="qualification__subtitle">Elite Club - Lasalle</span>
                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt">
                      2024 - Present
                    </i>
                  </div>
                </div>

                
              </div>


            </div>
          </div>

        </div>

    </section>
  )
}

export default Qualification