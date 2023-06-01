import React, { useRef, useState, useEffect } from 'react';
import { useLocation, Link, useParams } from 'react-router-dom';

import projectsJson from '../assets/projects.js';
import '../Projects.css'
import '../App.css'

const ProjectPage = (props) => {
    const dMode = useLocation().state;

    const {id} = useParams();
    const [proj, setProj] = useState(projectsJson[id]);

    const [visible, setVisible] = useState(true);
    useEffect(() => {        
        const handleScroll = () => {
            const position = window.pageYOffset;
            (position < 100) ? setVisible(true) : setVisible(false);
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

    return(
        <div className={`${dMode ? "darkmode" : "lightmode"} project-page`}>
            <div className={`${dMode ? "darkmode" : "lightmode"} project-page-cont card`}>
                <h4 className='font-roboto'>{proj.category}</h4>
                <h2 className="font-scode">{proj.name}</h2>

                <h5 className="font-scode section-header"><b>What I built</b></h5>
                <p className="font-scode section-para">{proj.descLong[0]}</p>

                <h5 className="font-scode section-header">Media Preview</h5>
                <img className="project-media" src={proj.mediaPreviewSrc} alt={proj.mediaAlt}></img>
                
                <h5 className="font-scode section-header">How I built it</h5>
                <p className="font-scode section-para">{proj.descLong[1]}</p>
                <p className="font-scode section-para">{proj.descLong[2]}</p>
                <div className='project-tech-cont'>
                    <h6 className="font-scode section-header">Technology used: </h6>
                    <ul className="project-tech-list">
                        {proj.tech.map((tech, key) => 
                            <li className="project-tech-item font-scode" key={key}>{tech}</li>          
                        )}
                    </ul>
                </div>
            </div>
            <button onClick={scrollToTop} className={`${visible ? 'hidden' : 'visible'} to-top-btn project-btn font-scode`}>Top&uarr;</button>
        </div>
    )
}

export default ProjectPage;