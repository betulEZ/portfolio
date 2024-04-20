import Navbar from "./Navbar.tsx";
import AboutMe from "./AboutMe.tsx";
import './HomePage.css'
import ProjectList from "./ProjectList.tsx";
import Education from "./Education.tsx";
import {useRef} from "react";
export default function HomePage() {
    const aboutMeRef = useRef<HTMLDivElement>(null);
    const educationRef = useRef<HTMLDivElement>(null);

    const handleAboutMeClick = () => {
        if (aboutMeRef.current) {
            aboutMeRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleEducationClick = () => {
        if (educationRef.current) {
            educationRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <Navbar handleAboutMeClick={handleAboutMeClick} handleEducationClick={handleEducationClick} />
            <AboutMe  forwardedRef={aboutMeRef}/>
            <Education forwardedRef={educationRef}/>
            <ProjectList/>
        </>
    );
}