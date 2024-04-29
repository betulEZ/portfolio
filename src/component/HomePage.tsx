import Navbar from "./Navbar.tsx";
import AboutMe from "./AboutMe.tsx";
import './HomePage.css'
import ProjectList from "./ProjectList.tsx";
import Education from "./Education.tsx";
import {useRef} from "react";
import Contact from "./Contact.tsx";
export default function HomePage() {
    const aboutMeRef = useRef<HTMLDivElement>(null);
    const educationRef = useRef<HTMLDivElement>(null);
    const projectRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);
    const handleAboutMeClick = () => {
        if (aboutMeRef.current) {
            const aboutMePosition = aboutMeRef.current.getBoundingClientRect().top;
            window.scrollBy({ top: aboutMePosition - 80, behavior: 'smooth' });
        }
    };

    const handleEducationClick = () => {
        if (educationRef.current) {
            const educationPosition = educationRef.current.getBoundingClientRect().top;
            window.scrollBy({ top: educationPosition - 80, behavior: 'smooth' });
        }
    };
    const handleProjectClick = () => {
        if (projectRef.current) {
            const projectPosition = projectRef.current.getBoundingClientRect().top;
            window.scrollBy({ top: projectPosition - 80, behavior: 'smooth' });
        }
    };
    const handleContactClick = () => {
        if (contactRef.current) {
            const contactPosition = contactRef.current.getBoundingClientRect().top;
            window.scrollBy({ top: contactPosition - 80, behavior: 'smooth' });
        }
    };

    return (
        <>
            <Navbar handleAboutMeClick={handleAboutMeClick} handleEducationClick={handleEducationClick}
                    handleProjectClick={handleProjectClick}
                    handleContactClick={handleContactClick} />
            <AboutMe  forwardedRef={aboutMeRef}/>
            <Education forwardedRef={educationRef}/>
            <ProjectList forwardedRef={projectRef}/>
            <Contact forwardedRef={contactRef}/>
        </>
    );
}