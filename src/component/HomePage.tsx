import Navbar from "./Navbar.tsx";
import AboutMe from "./AboutMe.tsx";
import './HomePage.css'
import ProjectList from "./ProjectList.tsx";
import Education from "./Education.tsx";
export default function HomePage() {
    return (
        <>
            <Navbar/>
            <AboutMe/>
            <Education/>
            <ProjectList/>

        </>
    );
}