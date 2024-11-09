import React from 'react'
import './footer.css'

const Footer = () => {
  return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Farag</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer__link">Projects</a>
                    </li>

                    <li>
                        <a href="#skills" className="footer__link">Skills</a>
                    </li>
                </ul>

                <div className="footer__social">
                <a href="https://www.instagram.com/karim.michelf/" className="footer__social-link" target='_blank'>
            <i class="bx bxl-instagram"></i>
            </a>

            <a href="https://www.linkedin.com/in/karim-michel-farag/" className="footer__social-link" target='_blank'>
            <i class='bx bxl-linkedin' ></i>
            </a>

            <a href="https://github.com/KarimFarag0" className="footer__social-link" target='_blank'>
            <i class="uil uil-github-alt"></i>
            </a>

                </div>

            </div>
        </footer>
  )
}

export default Footer