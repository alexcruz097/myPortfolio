import React from "react";
function Navbar()
{
    return (
        <nav class="navBar">

            <div class="logo">
                <a href="#home">
                    <h1>Alex <span>Cruz</span></h1>
                </a>
            </div>
            <div class="links-container">
                <ul class="links">
                    <li><a href="#home">Home <i class="fas fa-home"></i></a></li>
                    <i class="fas fa-times fa-2x"></i>
                    <li><a href="#home">About <i class="fas fa-user-astronaut"></i></a></li>
                    <li><a href="#projects">Projects <i class="fas fa-briefcase"></i></a></li>
                    <li><a href="#contactMe">Contact <i class="fas fa-phone"></i></a></li>
                </ul>
            </div>
            <div class="hamburger">
                <i class="fas fa-hamburger"></i>
            </div>
        </nav>
    )
}
export default Navbar; 