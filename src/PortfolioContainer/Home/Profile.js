/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Profile.css';
import MyPDF from '../Home/SameerResume.pdf'
import Typewriter from 'typewriter-effect';

function Profile() {
  return (
    <div className=' Home HomePage col-12 container'  >

      <div className='Profile-details-role'>
        <span className='hellocontend'>
          Hello, I'M
        </span>
        <span className='nameContent '>Sameer</span>
      </div>
      <div className="Typewriter">
        <span className='primary-text'>
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 80,
              strings: [
                "Front End Developer",
                "Odoo Development",
              ],
            }}
          />
        </span>
      </div>
      <div className='profileContent'>
        <span style={{ textAlign: "center" }}>Ambitious professional seeking an opportunity as a Full Stack developer.</span>
      </div>
      <div className='profile-options'>
        {/* <a href='sameer.pdf' download="sameer sameer.pdf">
            <button className='blob-btn'>
              Get Resume
            </button>
          </a> */}
        <a href={MyPDF} download>
          <button className="blob-btn">
            Get Resume
            <span className="blob-btn__inner">
              <span className="blob-btn__blobs">
                <span className="blob-btn__blob"></span>
                <span className="blob-btn__blob"></span>
                <span className="blob-btn__blob"></span>
                <span className="blob-btn__blob"></span>
              </span>
            </span>
          </button>
        </a>
      </div>
      <div style={{ height: "0px" }}>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo"></feColorMatrix>
              <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  )
}



export default Profile;