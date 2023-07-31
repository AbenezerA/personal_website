import { Outlet, Link, useNavigate, useLocation  } from "react-router-dom";
import React, { useRef, useState, useEffect } from 'react';
import { Link as ScrollLink, animateScroll } from 'react-scroll';

import darkImg from '../assets/dark.png';
import lightImg from '../assets/light.png';
import resume from '../assets/resume.pdf';

const Layout = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const [dMode, setDMode] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            const isScrollingDown = currentScrollPos > prevScrollPos;

            setVisible(isScrollingDown ? false : true);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    const scrollToSpecificElement = () => {
        animateScroll.scrollTo(1000);
        // navigate('/');
        // const element = document.getElementById('bio-span');
        // console.log("element: ", element);
        // ref.current.scrollIntoView({behavior: 'smooth'});
    };

    const setMode = () => {
        if (dMode === false) {
            setDMode(true);
        } else {
            setDMode(false);
        }
        console.log("dmode after: ", dMode);
        console.log("location: ", location)
        navigate(location.pathname, {state : dMode});
        // navigate("/projects", {state : dMode});
    }

    return (
        <div className="layout">
            <nav className={`${visible ? 'visible' : 'hidden'} top-nav navbar fixed-top navbar-expand-lg text-reset`}>
                <div className="container-fluid">
                    <button className="navbar-toggler text-bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-around navbar-left" id="navbarSupportedContent">
                        <div className="navbar-sub-left">
                            <Link to="/"> <h3 className="font-scode nav-item text-white mb-0 w-200">Abenezer</h3> </Link>
                        </div>
                        

                        <ul className="navbar-nav justify-content-around">
                            <li className="nav-item m-3">
                                <Link 
                                    to="/"
                                    smooth="true"
                                    duration={100}
                                    onClick={scrollToSpecificElement}> 
                                    <h5 className="font-scode text-white mb-0">About</h5> 
                                </Link>  
                            </li>
                            <li className="nav-item m-3">
                                <Link to="/projects" > <h5 className=" font-scode text-white mb-0">Projects</h5> </Link>
                            </li>
                            <li className="nav-item m-3">
                                <Link to="/contact" > <h5 className=" font-scode text-white mb-0">Contact</h5> </Link>
                            </li>
                            <li className="nav-item m-3">
                                <a href={resume> <h5 className=" font-scode text-white mb-0">Resume</h5> </a>
                            </li>
                            <li className="nav-item m-3">
                                <Link to="https://www.linkedin.com/in/abenezer-amanuel/"> <h5 className=" font-scode text-white mb-0">LinkedIn</h5> </Link>
                            </li>
                            <li className="nav-item m-3">
                                <Link to="https://github.com/AbenezerA"> <h5 className=" font-scode text-white mb-0">GitHub</h5> </Link>
                            </li>
                            <li className="nav-item m-3 dmode-btn-cont">
                                <img src={(dMode==false) ? darkImg : lightImg} onClick={setMode}></img>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <Outlet />
        </div>
    );
};

export default Layout;
