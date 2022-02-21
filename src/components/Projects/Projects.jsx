import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';
import css from './img/css.png';
import html from './img/html.png';
import js from './img/js.png';
import nodejs from './img/nodejs.png';
import reactjs from './img/reactjs.png';
import redux from './img/redux.png';
import postgresql from './img/postgreSQL.png';
import git from './img/git.png';
import countryApp from './img/countryApp.png';
import weatherApp from './img/weatherApp.png';

function Projects() {
  return (
    <div>
      <div className='all'>
      <div className='content'>

        <div className='henry'>

        <h6 className='titles cambiar' style={{fontSize:"14px"}}>F <br />o <br />r <br />m <br />a <br />c <br />i <br />ó <br />n</h6>

        <div className="card border-info mb-3" style={{maxWidth: "30rem", height:"150px" }}>
          <div className="card-header" style={{ display:"flex", justifyContent:"center", color:"skyblue" }}>Platzi</div>
            <div className="card-body">
              <h5 className="card-title">Programación Básica</h5>
              <p className="card-text">Curso básico de programación teórico-práctico con Javascript.</p>
            </div>
        </div>

        <div className="card border-warning mb-3" style={{maxWidth: "30rem", height:"150px"}}>
          <div className="card-header" style={{ display:"flex", justifyContent:"center", color:"#E6D250" }}>Henry Bootcamp</div>
          <div className="card-body text-dark">
            <h5 className="card-title">Full Stack Web Developer</h5>
            <p className="card-text">700 horas de cursado teórico-práctico. <br />
            Formación en tecnologías front-end y back-end.</p>
          </div>
        </div>

        </div>

      <hr />
        <h3 className='titles'>📒 Proyectos</h3>
        <div className='cards'> 
          <div className="card mb-3 scroll" style={{maxWidth: "540px", maxHeight:"310px", overflow:"auto"}}>
                <img src={weatherApp} className="img-fluid rounded-start" alt="..."/>
              <div className="col-md-8">
                <div className="card-body" style={{width:"500px"}}>
                  <h5 className="card-title" style={{display:"inline-flex"}}>Weather App</h5>
                  <button type="button" class="btn btn-outline-dark btncode" style={{display:"inline-flex", float:"right"}}>
                    <a href="https://github.com/cecirandb/weather-app">
                      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-code" width="18" height="18" viewBox="0 0 24 24" stroke-width="1.5" stroke="#0B2038" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <polyline points="7 8 3 12 7 16" />
                        <polyline points="17 8 21 12 17 16" />
                        <line x1="14" y1="4" x2="10" y2="20" />
                      </svg>
                    </a>
                  </button>
                  <hr />
                  <p className="card-text" style={{width:"500px"}}>Desarrollo y diseño de una aplicación del clima realizada con datos
                  traídos de una API. Contiene input de búsqueda y opción de eliminar cards ya buscadas.</p>
                  <p className="card-text"><small className="text-muted" style={{display:"flex", justifyContent:"center"}}>ReactJS</small></p>
                </div>
              </div>
          </div>
          <div className="card mb-3 scroll count" style={{maxWidth: "540px", maxHeight:"310px", overflow:"auto"}}>
                <img src={countryApp} className="img-fluid rounded-start" alt="..."/>
              <div className="col-md-8">
                <div className="card-body" style={{width:"500px"}}>
                  <h5 className="card-title" style={{display:"inline-flex"}}>Country App</h5>
                  <button type="button" class="btn btn-outline-dark btncode" style={{display:"inline-flex", float:"right"}}>
                  <a href="https://github.com/cecirandb/PI-Countries">
                      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-code" width="18" height="18" viewBox="0 0 24 24" stroke-width="1.5" stroke="#0B2038" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <polyline points="7 8 3 12 7 16" />
                        <polyline points="17 8 21 12 17 16" />
                        <line x1="14" y1="4" x2="10" y2="20" />
                      </svg>
                    </a>     
                  </button>
                  <hr />
                  <p className="card-text" style={{width:"500px"}}>Proyecto Individual de desarrollo de una SPA de países traidos de una API.
                  Contiene paginado, input de búsqueda, opción de creación de actividades y filtrado por ordenamiento,
                  actividad, población y continente.</p>
                  <p className="card-text"><small className="text-muted" style={{display:"flex", justifyContent:"center"}}>React | Redux | Express | Sequelize | PostgreSQL</small></p>
                </div>
              </div>
          </div>
          </div>
        </div>
      <div className='tecs'>
        <img src={html} alt="HTML"/>
        <br />
        <img src={css} alt="CSS"/>
        <br />
        <img src={js} alt="JS"/>
        <br />
        <img src={nodejs} alt="Node.js"/>
        <br />
        <img src={reactjs} alt="React.js"/>
        <br />
        <img src={redux} alt="Redux"/>
        <br />
        <img src={postgresql} alt="PostgreSQL"/>
        <br />
        <img src={git} alt="Git"/>
      </div>
      </div>
      <hr className='foot' />
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
            <Link to='/'>
                <button className='project'>Sobre mi</button>
            </Link>
        </footer>
    </div>
  )
}

export default Projects;