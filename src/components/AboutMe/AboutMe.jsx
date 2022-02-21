import React from 'react';
import { Link } from 'react-router-dom';
import './AboutMe.css';

function AboutMe() {
  return (
    <div>
        <div className='about'>
            <div className='me-left'>
                <div className='left-wrapper'>
                    <h1>Cecilia Cuello</h1>
                    <h4 className="">Full Stack Web Developer</h4>
                </div>
                <i class="bi bi-chevron-double-down"></i>
            </div>
            <div className='me-right'>
                <div>
                    <h2 className='about-me'>👩🏽 Sobre mi</h2>
                    <h4>
                    Soy una persona poactiva con muchas ganas de aprender nuevas tecnologías
                    y adquirir experiencia en el mundo IT, abierta a cualquier desafío que se me presente.
                    </h4>
                </div>
            </div>
        </div>
        <hr />
        <footer>
            <a href="https://www.linkedin.com/in/ceciliacuello/">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-linkedin" width="25" height="25" viewBox="0 0 24 24" stroke-width="1.5" stroke="#0B2038" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <rect x="4" y="4" width="16" height="16" rx="2" />
                    <line x1="8" y1="11" x2="8" y2="16" />
                    <line x1="8" y1="8" x2="8" y2="8.01" />
                    <line x1="12" y1="16" x2="12" y2="11" />
                    <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                </svg>
            </a>
            <a href="https://github.com/cecirandb">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github" width="25" height="25" viewBox="0 0 24 24" stroke-width="1.5" stroke="#0B2038" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                </svg>
            </a>
            <a href="mailto:cecicuellorandb@hotmail.com">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail" width="25" height="25" viewBox="0 0 24 24" stroke-width="1.5" stroke="#0B2038" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <polyline points="3 7 12 13 21 7" />
                </svg>
            </a>
            <Link to='/projects'>
                <button className='project'>Proyectos</button>
            </Link>
        </footer>
    </div>
  )
}

export default AboutMe;