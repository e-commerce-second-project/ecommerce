import React from "react";
import ProductCard from "../User/Products.jsx"
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
            <div style={{width:450,height:400}}>
            <Images/>
            </div>
        </section>
        
        <ProductCard/>
        <Footer/>
    </div>
)
}

export default HomePage