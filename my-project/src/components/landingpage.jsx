import Explore from "./explore";
import FAQ from "./Faq";


import Hero from "./hero";
import List from "./list";
import Navbar from "./navbar";
import Security from "./security";
import Yt from "./yt";

export default function LandingPage() {
    return(
        <>
        <Navbar/>
        <Hero/>
        <List/>
        <Security/>
        <Yt/>
        <Explore/> 
        <FAQ/> 
        {/* <FooterPage/> */}
        
        </>
    )
}
    