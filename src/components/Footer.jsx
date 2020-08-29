import React from "react";
import {
 faHandPointUp
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Footer = () =>
{
    let currentYear = new Date;
    return (
        <footer className="footer">
            <h1>Alex Cruz &copy;
           <a>{currentYear.getFullYear()}</a>  
            </h1>
            <a href="home"><FontAwesomeIcon color="black"icon={faHandPointUp} size="2x" />to top</a>
            <p>Created with React Js</p>
        </footer>
    )
}
export default Footer;