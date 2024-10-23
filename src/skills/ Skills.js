import React from 'react'
import "./Skills.css";
import Developer from "./Developer";
import Devops from "./Devops";
const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My technical level</span>
            <div className="skills_container container grid">
                <Developer /> 
                <Devops />
            </div>
        </section>
    )
}

export default Skills

