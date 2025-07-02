import React from "react";
import gsap from "gsap";
import Navbar from "./components/Navbar";
import { ScrollTrigger,SplitText } from "gsap/all";
import Hero from "./components/Hero";
import Cocktails from "./components/Cocktails";
import About from "./components/About";
gsap.registerPlugin(ScrollTrigger, SplitText);
const App = () =>{
    return(
       <main>
        <Navbar />
        <Hero/>
        <Cocktails/>
        <About/>
       </main>
    )
}
export default App;