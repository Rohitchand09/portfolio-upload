import React, { useState } from 'react';
import "./servicess.css";

const Servicess = () => {
    const [toggleState, setToggleState]=useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }
  return (
   <section className="services section" id="services">
    <h2 className="section__title">Services</h2>
    <span className="section__subtitle">What I Offer</span>

    <div className="services__container container grid">
        <div className="services__content">
            <div>
                <i className="uil uil-web-grid services__icon"></i>
                <h3 className="services__title">
                    Website <br/> Developer
                </h3>
            </div>

            <span className="services__button" onClick={() => toggleTab(1)}>
                View More 
                <i className="uil uil-arrow-right
             services__button-icon"></i></span>

             <div className={toggleState === 1 ? "services__modal active-modal" 
                : "services__modal"
             }>
                <div className="services__modal-content">
                    <i onClick ={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                    <h3 className="services__modal-title">Web Developer</h3>
                    <p className="services__modal-description">Providing quality work to clients
                     and companies.</p>

                     <ul className="services__modal-services grid">
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                I develop the user interface.
                            </p>
                        </li>


                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                               Web page development.
                            </p>
                        </li>


                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                            working on server-side software.
                            </p>
                        </li>
                        </ul>
                </div>
             </div>
        </div>


        <div className="services__content">
            <div>
                <i className="uil uil-arrow services__icon"></i>
                <h3 className="services__title">Frontend <br/> developer</h3>
            </div>

            <span onClick={() => toggleTab(2)} className="services__button">
                View More 
                <i className="uil uil-arrow-right
             services__button-icon"></i></span>

             <div className={toggleState === 2 ? "services__modal active-modal" 
                : "services__modal"
             }>
                <div className="services__modal-content">
                    <i onClick ={() => toggleTab(0)}className="uil uil-times services__modal-close"></i>

                    <h3 className="services__modal-title">Frontend Developer</h3>
                    <p className="services__modal-description">Providing quality work to clients
                     and companies.</p>

                     <ul className="services__modal-services grid">
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                I develop the user interface.
                            </p>
                        </li>


                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                               Web page development.
                            </p>
                        </li>


                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                            working on server-side software.
                            </p>
                        </li>
                        </ul>
                </div>
             </div>
        </div>


        <div className="services__content">
            <div>
                <i className="uil uil-edit services__icon"></i>
                <h3 className="services__title">Backend <br/> developer</h3>
            </div>

            <span onClick={() => toggleTab(3)}className="services__button">
                View More 
                <i className="uil uil-arrow-right
             services__button-icon"></i></span>

             <div className={toggleState === 3 ? "services__modal active-modal" 
                : "services__modal"}>
                <div className="services__modal-content">
                    <i onClick ={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                    <h3 className="services__modal-title">Backend Developer</h3>
                    <p className="services__modal-description">Providing quality work to clients
                     and companies.</p>

                     <ul className="services__modal-services grid">
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                            Developed custom NoSQL database.
                            </p>
                        </li>


                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                            Developed data-driven web projects including, API development and font-end integration.
                            </p>
                        </li>


                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                            working on server-side software.
                            </p>
                        </li>
                        </ul>
                </div>
             </div>
        </div>
    </div>
   </section>
  )
}

export default Servicess;
