import React, { useRef, useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

import '../Projects.css'
import '../App.css'

const ProjectCard = (props) => {
    const dMode = useLocation().state;

    return(
        <div className={`${dMode ? "darkmode" : "lightmode"} card project-card`}>
            <Link to={"/projects/" + props.data.id}>  
                <img className="card-img-top project-media" src={props.data.mediaPreviewSrc} alt={props.data.mediaAlt}></img>
                <div className='card-body'>
                    <h4 className='font-roboto'>{props.data.category}</h4>
                    <h2 className="font-scode">{props.data.name}</h2>
                    <h5 className="font-scode">{props.data.descShort}</h5>
                    <div className='project-tech-cont'>
                        <h5 className="font-scode">Technology used: </h5>
                        <ul className="project-tech-list">
                            {props.data.tech.map((tech, key) => 
                                <li className="project-tech-item font-scode" key={key}>{tech}</li>          
                            )}
                        </ul>
                    </div>
                    
                </div>
            </Link> 
            <div className='project-btns-cont font-scode'>                 
                <Link to={"/projects/" + props.data.id} className="project-btn">More</Link>                 
                <div className='project-btns-cont-sub'>
                    {(props.data.linkSrc.length != 0) &&
                        <a className="project-btn" href={props.data.linkSrc}>Link</a>
                    } 
                    <a className="project-btn" href={props.data.repoSrc}>Repo</a>
                </div>
            </div> 
        </div>
    )
}

export default ProjectCard;
