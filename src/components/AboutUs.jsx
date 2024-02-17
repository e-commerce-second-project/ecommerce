import React from "react";
import Navbar from "./Navbar";
import Footer from "./footer.jsx";

const About = () => {
return (
    <>
        <div>
        <Navbar />
        <div className="bg-white flex flex-row justify-center w-full">
            <div className="bg-bg" style={{ width: "1437px", height: "596px", position: "relative" }}>
            <div className="gap-40px" style={{ top: "150px", left: "87px", display: "inline-flex", flexDirection: "column", alignItems: "start" }}>
                <div className="font-heading-54px-semibold" style={{ fontSize: "54px", fontWeight: "bold", color: "black", textAlign: "justify", letterSpacing: "normal", lineHeight: "normal", whiteSpace: "nowrap" }}>
                Our Story
                </div>
                <div className="gap-24px" style={{ display: "inline-flex", flexDirection: "column", alignItems: "start" }}>
                <p style={{ width: "525px", fontFamily: "Poppins-Regular, Helvetica", fontSize: "16px", lineHeight: "26px" }}>
                    Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region.
                </p>
                <p style={{ width: "505px", fontFamily: "Poppins-Regular, Helvetica", fontSize: "16px", lineHeight: "26px" }}>
                    Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging from consumer.
                </p>
                </div>
            </div>
            <div className="bg-eb7ea8 rounded-4px_0px_0px_4px" style={{ width: "705px", height: "500px", position: "absolute", top: "50px", left: "686px", overflow: "hidden" }}>
                <img
                className="w-705px h-500px"
                alt="affrican"
                src="https://shorturl.at/vDEN3"
                />
            </div>
            </div>
        </div>
        <Footer />
        </div>
    </>
    );
};

export default About;
