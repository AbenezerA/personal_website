import React, { useRef, useState, useEffect } from 'react';
import { useLocation, Link, useParams } from 'react-router-dom';

import projectsJson from '../assets/projects.js';
import '../Projects.css'
import '../App.css'

const ProjectPage = () => {
    const dMode = useLocation().state;

    const {id} = useParams();
    const [proj, setProj] = useState(projectsJson[id]);

    // console.log("linksrc length: ", proj.linkSrc.length);

    const [visible, setVisible] = useState(true);
    useEffect(() => {  
        // console.log("hey: ", proj.descLong.what)      
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
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return(
        <div className={`${dMode ? "darkmode" : "lightmode"} project-page`}>
            <div className={`${dMode ? "darkmode" : "lightmode"} project-page-cont card`}>
                <h2 className="font-scode">{proj.name}</h2>
                <hr></hr>
                
                <h4 className="font-scode section-header">What I built</h4>
                {
                    proj.descLong.what.map((para) => 
                        <p className='font-scode section-para'>{para}</p>
                    )
                }
                {/* <p className="font-scode section-para">{proj.descLong.what[1]}</p> */}

                <h4 className="font-scode section-header">Technology Used</h4>
                <ul className="project-tech-list">
                    {proj.tech.map((tech, key) => 
                        <li className="project-tech-item font-scode" key={key}>{tech}</li>          
                    )}
                </ul>

                <h4 className="font-scode section-header">Media Preview</h4>
                <img className="project-media" src={proj.mediaPreviewSrc} alt={proj.mediaAlt}></img>
                
                <h4 className="font-scode section-header">How I built it</h4>
                {
                    proj.descLong.how.map((para) => 
                        <p className='font-scode section-para'>{para}</p>
                    )
                }
                {/* <p className="font-scode section-para">{proj.descLong[1]}</p> */}

                <h4 className="font-scode section-header">Notes and Challenges</h4>
                {
                    proj.descLong.notes.map((para) => 
                        <p className='font-scode section-para'>{para}</p>
                    )
                }
                {/* <p className="font-scode section-para">{proj.descLong[2]}</p> */}

                <h4 className="font-scode section-header">Where you can find it</h4>
                <div className="font-scode section-cont">
                    {(proj.linkSrc.length != 0) &&
                        <a className="project-btn" href={proj.linkSrc}>Link</a>
                    }               
                    <a className="project-btn" href={proj.repoSrc}>Repo</a>
                </div>

            </div>
            <button onClick={scrollToTop} className={`${visible ? 'hidden' : 'visible'} to-top-btn project-btn font-scode`}>Top&uarr;</button>
        </div>
    )
}

export default ProjectPage;