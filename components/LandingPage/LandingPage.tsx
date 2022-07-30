import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

function Landing() {
    return (
        <>
        <div className="h-screen w-full bg-black">
        
        <Header />
        <Main />
        <Footer />
        </div>
        </>
    )
}

export default Landing;