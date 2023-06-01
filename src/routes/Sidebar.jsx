import React, { useRef, useState, useEffect } from 'react';
import { Outlet, useLocation, Link, useParams, useNavigate  } from 'react-router-dom';

import projectsJson from '../assets/projects.js';
import '../Projects.css'
import '../App.css'

const Sidebar = () => {
    const dMode = useLocation().state;
    const proj_id = useLocation().pathname.slice(10);
    const navigate = useNavigate()

    const refresh = () => {
        navigate(0);
    }

    return(
        <div className={`${dMode ? "darkmode" : "lightmode"} sidebar-layout`}>
            <nav className="sidebar">
                <div className="sidebar-sub">
                    <h3 className='font-scode'>Projects</h3>
                    <ul className='sidebar-list list-group'>
                        {projectsJson.map((proj, key) =>
                            <li key={key} onClick={refresh} className={`sidebar-item list-group-item ${(key == proj_id) ? "active" : ""}`}><Link to={`/projects/${proj.id}`}>{proj.name}</Link></li>
                        )}
                    </ul>
                </div>
            </nav>

            <Outlet />
        </div>
    )
}

export default Sidebar