import React, { useRef, useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

import '../Projects.css'
import '../App.css'


const Contact = () => {
    const dMode = useLocation().state;

    return(
        <div className="contact">
            <span className={`${dMode ? "darkmode" : "lightmode"} contact-span`}>
                <div className="contact-span-sub">
                    <div className="contact-title-cont">
                        <h1>Contact</h1>
                        <h4 className='font-scode'>You can find me on the following platforms. I am always open to work on small- and large-scale projects that aim to provide access to education and information.</h4>
                    </div>
                    <div className="contact-table-cont font-scode">
                        <Link to="/" className='contact-table-item'>Website</Link>
                        <a className='contact-table-item' href="https://www.linkedin.com/in/abenezer-amanuel/">LinkedIn</a>
                        <a className='contact-table-item' href="https://github.com/AbenezerA">GitHub</a>
                        <a className='contact-table-item' href="https://mail.google.com/mail/?view=cm&source=mailto&to=abitad2015@gmail.com">Email</a>
                        <a className='contact-table-item' href="https://www.facebook.com/AbeniDC/">Facebook</a>
                    </div>
                </div>
            </span>
        </div>
    )
}

export default Contact;