import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
        <i class='bx bx-award about__icon'></i>

            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">3 Years Computer Science </span>
        </div>

        <div className="about__box">
        <i class='bx bx-briefcase-alt about__icon'></i>

            <h3 className="about__title">Completed</h3>
            <span className="about__subtitle">5 projects and counting</span>
        </div>

        <div className="about__box">
        <i class='uil uil-brain about__icon'></i>

            <h3 className="about__title">Problem Solving</h3>
            <span className="about__subtitle"></span>
        </div>
    </div>
  )
}

export default Info