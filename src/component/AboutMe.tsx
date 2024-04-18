import {Typography} from "@mui/material";
import './AboutMe.css'
import developerImage from "../developer.jpg";
export default function AboutMe(){
    return(
        <>

            <div className="about-me">
                <div className="container">
                    <h1>Hello, ich bin Betül</h1>
                    <img src={developerImage} alt="login"/>
                </div>
                <h4>Computer Ingenieurin / Backend / Full Stack Entwicklerin</h4>

                <h2>Über Mich</h2>
                <Typography>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et
                    dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
                    rebum. Stet
                    clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
                    amet,
                    consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat,
                    sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
                    gubergren, no sea
                    takimata sanctus est Lorem ipsum dolor sit amet.
                </Typography>
            </div>
        </>
    );
}