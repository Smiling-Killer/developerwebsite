import React from 'react';
import './About.css';
import Sameer from '../../Image/sameer.jpg';

function About() {
  return (
    <div className='container AboutSection'>
      <div className='spaceTop'></div>
      <div className='AboutTitle aboutHeader' data-aos="fade-right">
        About Me
      </div>
      <div className='aboutprofile' data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
        <div className='imgsize'>
          <img src={Sameer} alt="aboutimag" className='aboutimg' />
        </div>
      </div>
      <div className='aboutContent col-12' data-aos="fade-down">
        Seeking a challenging position with an opportunity to use and
        enhance my knowledge on the current skill set to further my skills
        and professional development.
      </div>
    </div>
  );
}

export default About;
