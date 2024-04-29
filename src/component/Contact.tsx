import './Contact.css'
import GitHubIcon from "@mui/icons-material/GitHub";
import MailIcon from '@mui/icons-material/Mail';
import {Typography} from "@mui/material";
interface ContactProps {
    forwardedRef: React.Ref<HTMLDivElement>;
}
export default function Contact({ forwardedRef }:ContactProps){
    return(
        <>
            <footer ref={forwardedRef}>
                <h2>Kontakt</h2>
                <div  style={{marginLeft: "60px"}}>
                <Typography>Mein Posteingang ist für alle offen.</Typography>
                    <div  style={{marginTop: "15px", marginBottom:"10px"}}>
                <a href="https://github.com/betulEZ">
                    <GitHubIcon sx={{fontSize: '40px', color: 'coral' ,marginRight:"20px"}}/>
                </a>
                <a href="mailto:ezgubetul@gmail.com">
                    <MailIcon sx={{fontSize: '40px', color: 'coral'}}/>
                </a>
                    </div>
                </div>
                <div>
                    <Typography sx={{fontSize: 12, textAlign:"center"}} color="text.secondary">© Copyright 2024</Typography>
                </div>
            </footer>
        </>
    );
}