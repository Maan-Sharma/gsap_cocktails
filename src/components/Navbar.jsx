import React from "react";
import {navLinks} from '../../constants/index.js'
import logo from "/public/images/logo.png"; // Adjust path if needed
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navbar =() =>{

    useGSAP(()=>{
        const navTweens = gsap.timeline({
            scrollTrigger : {
                trigger: 'nav',
                start: 'bottom top',
                end: 'top top',
                pin: true,
                scrub: true,
                toggleActions: "play none none reverse"
            }
         });
         navTweens.fromTo('nav', {backgroundColor:'transparent'},{
            backgroundColor: '#0000050',
            backgroundfilter: 'blur(10px)',
            duration: 1,
            ease: 'power2.inOut'
         });
    })
return(
    <nav>
        <div>
            <a href="#home" className="flex item-center gap-2">
                <img src={logo} alt="Logo" />
                <p>Velvet Pour</p>
            </a>

            <ul>
{navLinks.map((link)=>(
    <li key={link.id}>
        <a href= {`#${link.id}`}>{link.title}</a>

    </li>
))}
            </ul>
        </div>
    </nav>
)
}
export default Navbar;