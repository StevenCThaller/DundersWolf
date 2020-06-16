import React from 'react';
import resume from '../resources/CodyThaller.pdf';
import HoverLink from './HoverLink';

const Footer = props => {
    return (
        <footer className="moreInfo">
            <ul className="fDeets">
                <li className="mDeets"><img className="mdLogo" src={props.linkedin} alt="LinkedIn"/>
                <HoverLink link="https://www.linkedin.com/in/steven-thaller" text="LinkedIn" />
                </li>|
                <li className="mDeets"><img className="mdLogo" src={props.github} alt="GitHub"/>
                {/* <a href="https://www.github.com/StevenCThaller">GitHub</a> */}
                <HoverLink link="https://www.github.com/StevenCThaller" text="GitHub" />
                </li>|
                <li className="mDeets"><img className="mdLogo" src={props.resume} alt="Resume Download"/>
                {/* <a href={ resume } download>Resume</a> */}
                <HoverLink link={ resume } text="Resume" />

                </li>
            </ul>
        </footer>
    )
}

export default Footer
