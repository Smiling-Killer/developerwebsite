import React from 'react'

import './About.css';
import Sameer from "../../Image/sameer.jpg";
function About() {
  return (
    <div className='container  AboutSection'>
      <div className='spaceTop'>
       
      </div>
      <div className='AboutTitle aboutHeader'>About Me
      </div>

      <div className='aboutprofile '>
        <div className='imgsize '>
          <img src={Sameer} alt="aboutimag" className='aboutimg'  />
        </div>

      </div>
      <div className='aboutContent col-12 '>
        Seeking a challenging position with an opporunity to use and
        enhance my knowledge on current skill set to further my skills
        and professional development.
      </div>


    </div>
  )
}

export default About;