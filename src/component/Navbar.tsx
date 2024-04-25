import {AppBar, Box, Button, Grid, Toolbar} from "@mui/material";
import './Navbar.css'
interface NavbarProps {
    handleEducationClick: () => void;
    handleAboutMeClick: () => void;
    handleProjectClick: () => void;
}
export default function Navbar({ handleAboutMeClick, handleEducationClick,handleProjectClick }: NavbarProps) {

    return (
        <>
            <Box>
                <AppBar style={{ backgroundColor: 'coral' }}>
                    <Toolbar>
                        <Grid className="grid" container>
                            <Grid item>
                                <Button className="button-style" variant="contained" onClick={handleAboutMeClick} >ÜBER MICH</Button>
                            </Grid>
                            <Grid item>
                                <Button className="button-style" variant="contained" onClick={handleEducationClick}>BILDUNGS INFORMATIONEN</Button>
                            </Grid>
                            <Grid item>
                                <Button className="button-style" variant="contained" onClick={handleProjectClick}>PROJEKT LISTE</Button>
                            </Grid>
                            <Grid item>
                                <Button className="button-style" variant="contained">KONTAKT</Button>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );

}
