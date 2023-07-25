import React from 'react';
import "./skill.css";
import Fontend from './Fontend';
import Backend from './Backend';
const Skill = () => {
    return (
        <section className='section skills' id='skill'>
            <h2 className='section_title'>Skills</h2>
            <span className='section_subtitle'>My technical skills</span>
         
            <div className='skills_container container grid'>
                <Fontend />

                <Backend />
            </div>
        </section>
    );
}

export default Skill;
