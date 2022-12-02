import React from 'react'

import './skills.css';
import js from '../../Image/js.jpg';
import react from '../../Image/Reactjs.png';
import html from '../../Image/HTML.png';
import css from '../../Image/CSS3.png';
import bootstrap from '../../Image/Boootstrap.webp'
function Skills() {
    return (
        <div >

            <div style={{ height: "50px" }}>

            </div>
            <div className='spaceSkills Skills'>

                </div>
            <svg className='portFoliodiv ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#302f2f" fillOpacity="1" d="M0,32L48,58.7C96,85,192,139,288,154.7C384,171,480,149,576,122.7C672,96,768,64,864,85.3C960,107,1056,181,1152,208C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>

            <div className='mainContainer1 '>
               
                <p className='titleforskills'>
                    Skills
                </p>

                <div className='col-11 mainContainer'>
                    <div className='BoxSize name'>
                        <img src={html} alt="js" style={{ height: "155px", marginTop: "10px", width: "140px" }}></img>
                        <p className='name' style={{ padiingTop: "8px" }}>
                            HTML 5
                        </p>
                    </div>
                    <div className='BoxSize'>
                        <img src={css} alt="js" style={{ height: "120px", marginTop: "20px", width: "120px" }} className='IMG'></img>
                        <p className='name' style={{ paddingTop: "15px" }}>
                            CSS 3
                        </p>
                    </div>
                    <div className='BoxSize'>
                        <img src={bootstrap} alt="js" style={{ height: "120px", width: "130px", marginTop: "20px" }} className='IMG'></img>
                        <p className='name' style={{ marginTop: "20px" }}>
                            Bootstrap 5
                        </p>
                    </div>
                    <div className='BoxSize'>
                        <img src={js} alt="js" style={{ height: "120px", width: "120px", marginTop: "20px" }} className='IMG'></img>
                        <p className='name' style={{ paddingTop: "20px" }}>
                            JavaScript
                        </p>
                    </div>
                    <div className='BoxSize'>
                        <img src={react} alt="js" style={{ height: "140px",marginTop:"25px", width: "140px" }} className='IMG'></img>
                        <p className='name' >
                            React.js
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );

}
export default Skills;