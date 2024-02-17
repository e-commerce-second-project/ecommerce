import React from "react";
import FooterSec from "./FooterSec.jsx";
import Navbar from "./Navbar.jsx";
import Welcome from "./Categories.jsx";
import Images from "./Welcome/welcomeimages.jsx";


const HomePage=()=>{
return (
    <div>
        <Navbar/>
        <section style={{display:"flex"}}>
            <div>
            <Welcome/>
            </div>
            <div style={{width:450,height:400}}>
            <Images/>
            </div>
        </section>
        <FooterSec/>
    </div>
)
}

export default HomePage