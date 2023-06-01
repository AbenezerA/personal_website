import React, { useRef, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import projectsJson from '../assets/projects.js';
import ProjectCard from '../Components/ProjectCard';

import '../Projects.css'
import '../App.css'

const Projects = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [visible, setVisible] = useState(true);
    const dMode = useLocation().state;

    useEffect(() => {
        const parallaxConts = document.querySelectorAll(".project-card");
        
        const handleScroll = () => {
            // console.log(parallaxConts);
            const position = window.pageYOffset;
            setScrollPosition(position);

            (position < 100) ? setVisible(true) : setVisible(false);
            // console.log(position, visible);
            Array.from(parallaxConts).map((cont) => {
                cont.style.transform = `translate(0%, -${position * 0.05}%)`;
            })
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    const scrollToTop = () => {
        // console.log("dmode in app: ", dMode);
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const scrollToProjOne = () => {
        window.scrollTo({
          top: 400,
          behavior: 'smooth',
        });
      };

    return (
        <div className="projects">
            <span className={`${dMode ? "darkmode" : "lightmode"} projects-span`}>
                <div className="projects-span-sub">
                    <div className="projects-title-cont">
                        <h1>My Projects</h1>
                        <h4 className="font-scode">I've worked on projects utilizing a wide range of tools and languages from Java and Python to C and Sockets API to Flask and React.</h4>
                    </div>
                    <div className="projects-photo-cont">
                        <img className="projects-photo" src="https://www.opensourceforu.com/wp-content/uploads/2017/12/Web-Development.jpg" alt="Collage of development and project tools"></img>
                    </div>
                </div>
                <div className="scroll-cont">
                    <div className={`scroll ${dMode ? "darkmode" : "lightmode"} ${visible ? 'visible' : 'hidden'}`} onClick={scrollToProjOne}></div>
                </div>
            </span>
            
            <span className={`${dMode ? "darkmode" : "lightmode"} projects-cont-span`}>
                <div className='projects-cont'>
                    {
                        projectsJson.map((project, key) => 
                            <ProjectCard data={project} key={key} />
                        )
                    }
                </div>
            </span>
            <button onClick={scrollToTop} className={`${visible ? 'hidden' : 'visible'} to-top-btn project-btn font-scode`}>Top&uarr;</button>
        </div>
    )
}

export default Projects;