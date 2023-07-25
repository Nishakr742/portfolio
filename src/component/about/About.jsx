import React from 'react';
import AboutImg from '../../asset/ravi1.jpg';
import "./about.css";
import Info from './Info';
const About = () => {
    return (
        <section className='about section' id='about'>
        <h2 className='section_title'>About Me</h2>
        <span className='section_subtitle'>My introduction</span>
        <div className='about_container container grid'>
            <img src={AboutImg} alt='about-img' className='about_img' loading='lazy'/>
        
            <div className='about_data'>
                <Info />

                <p className='about_description'>
                    Hi, I am Ravi & i am passionate with fontend developer,I created web pages with UI/UX user interface,I have 2+ years of experience and many clients are happy with the projects carried out. 
                </p>

                <a href='#'  className='button nnn'>Download cv <span><i className="about_cv uil uil-file-info-alt"></i></span></a>
            </div>
        </div>
        </section>
    );
}

export default About;
