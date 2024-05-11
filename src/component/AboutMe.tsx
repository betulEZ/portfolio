import {Typography} from "@mui/material";
import './AboutMe.css'
import developerImage from "../developer.jpg";
interface AboutMeProps {
    forwardedRef: React.Ref<HTMLDivElement>;
}
export default function AboutMe({ forwardedRef }:AboutMeProps){
    return(
        <>

            <div className="about-me" id="aboutMe" ref={forwardedRef} >
                <div className="container">
                    <h1>Hallo, ich bin Betül</h1>
                    <img src={developerImage} alt="login"/>
                </div>
                <h4>Computer Ingenieurin (BSc.) / Java / Full Stack Entwicklerin</h4>

                <h2>Über Mich</h2>
                <Typography>
                    Mein Studium ist in Deutschland anerkannt und gleicht dem Studium der Informatik.
                    Wir arbeiteten sehr praxisbezogen und konnten die erlernten Inhalte in anwendungsbezogenen Projekten direkt umsetzen.
                    Dabei bemerke ich, dass mich vor allem Java interessiert.
                    In meiner Ausbildung habe ich mein Wissen über objektorientierte Programmierung und Web-Applikation vertieft.
                    Ich habe gelernt, wie man sauberen und erweiterbaren Java-Code schreibt und wie man ein Projekt
                    von Backend bis Frontend in einer Webanwendung entwickelt.
                    Meine Motivation ist immer, mein Kenntnisse auf die nächste Stufe zu bringen.
                </Typography>
            </div>
        </>
    );
}