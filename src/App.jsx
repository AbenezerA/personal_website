import React, { useRef, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import './App.css'
import personalPhoto from './assets/personal-photo.jpg';
import codingPhoto from './assets/coding-photo.jpg';

import { Outlet, Link } from "react-router-dom";

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  // const [dMode, setDMode] = useState(useLocation().state);

  const dMode = useLocation().state;
  // const location = useLocation();
  // setDMode(location.state);
  // console.log("dMode: ", dMode);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // const scrollToTop = () => {
  //   // console.log("dmode in app: ", dMode);
  //   window.scrollTo({
  //     top: 0,
  //     behavior: 'smooth',
  //   });
  // };

  const scrollToBio = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div className='App'>
        <span className={`${dMode ? "darkmode" : "lightmode"} intro-span`}>
          <div className="intro-span-sub">
            <div className="intro-name-cont">
              <h4 className="font-scode">Hi! My name is </h4>
              <h1>Abenezer Amanuel.</h1>
              <h4 className="font-scode">I'm an aspiring Software Engineer and Fullstack Developer studying Computer Science at Columbia University in New York City.</h4>
            </div>
            <div className="intro-photo-cont">
              <img className="intro-photo" src={personalPhoto} alt="Professional headshot photo of Abenezer"></img>
            </div>
          </div>
          <div className="scroll-cont">
            <div className={`scroll ${dMode ? "darkmode" : "lightmode"}`} onClick={scrollToBio}></div>
          </div>
        </span>
        <span id="bio-span" style={{backgroundImage: `url(${codingPhoto})`, opacity: scrollPosition / 500, backgroundSize: 'cover', backgroundPosition: 'center'}}>
          <div className="bio-cont">
            <div className="bio-text-cont">
              <h6 className="font-scode">I was born and raised in Addis Ababa, Ethiopia. I later moved to New York City to pursue my BA in Computer Science at Columbia University.</h6>
            </div>
            <div className="bio-text-cont">
              <h6 className="font-scode">Having just completed my second year of college, I am eager to apply my knowledge from class into solving real problems in real working conditions.</h6>
            </div>
            <div className="bio-text-cont">
              <h6 className="font-scode">I am particularly interested in <u>Software Engineering</u>, <u>Fullstack Web Development</u>, and <u>Computer Vision</u>.</h6>
            </div>
            <div className="bio-text-cont">
              <h6 className="font-scode">My short-term goal is to gain foundational skills in software engineering. In the long-term, I plan to work to increase education access to disadvantaged communities by building software solutions.</h6>
            </div>
          </div>
          {/* <div className='scroll-up-cont'>
            {isVisible && (
              <button className="scroll-up-button" onClick={scrollToTop}>
                <h6 className="font-scode">Back to top.</h6>
              </button>
            )}
          </div> */}
        </span>
    </div>
  )
}

export default App
