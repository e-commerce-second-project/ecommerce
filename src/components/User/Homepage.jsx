import React from "react";
import ProductCard from "./Products.jsx";
import Footer from "./Footer.jsx";
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
            <div style={{width:600,height:600}}>
            <Images/>
            </div>
        </section>
        <ProductCard/>
        <Footer/>
    </div>
)
}



export default HomePage