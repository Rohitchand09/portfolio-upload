import React from 'react';
import "./qualification.css";

const Qualification = () => {
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My peronel journey </span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className= "qualification__button qualification__active button--flex">
            <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
            Education
          </div>
        </div>

        <div className="qualification__sections">
          <div className="qualification__content qualification__content-active">
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Fullstack Development </h3>
                <span className="qualification__subtitle">Dice - Academy</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2024 - Present
                </div>
              </div>

      <div>
        <span className="qualification__rounder"></span>
        <span className="qualification__line"></span>
      </div>
      <div/>

      </div>


      <div className="qualification__data">
        <div></div>

         <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
              </div>


              <div>
                <h3 className="qualification__title">Bachelor's of Arts </h3>
                <span className="qualification__subtitle">Delhi University</span>
                <div className="qualification__calender">
                <i className="uil uil-calendar-alt"></i>2018 - 2022
                </div>
              </div>
              <div/>

      </div>

      <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Intermediate (XII) </h3>
                <span className="qualification__subtitle">Govt. sarv. sr. sec School</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2017 - 2018
                </div>
              </div>

      <div>
        <span className="qualification__rounder"></span>
        <span className="qualification__line"></span>
      </div>
      <div/>

      </div>


      <div className="qualification__data">
        <div></div>

         <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
              </div>


              <div>
                <h3 className="qualification__title">High School (X) </h3>
                <span className="qualification__subtitle">Govt. sarv. sr. sec School</span>
                <div className="qualification__calender">
                <i className="uil uil-calendar-alt"></i>2015 - 2016
                </div>
              </div>
              <div/>

      </div>
      </div>
      </div>
      </div>
    </section>
 
  )
}

export default Qualification;
