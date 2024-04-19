import {AppBar, Box, Button, Grid, Toolbar} from "@mui/material";
import './Navbar.css'
export default function Navbar() {

    return (
        <>
            <Box >
              <AppBar style={{ backgroundColor: 'coral' }}>
                <Toolbar>
                <Grid className="grid" container>
                    <Grid item>
                        <Button className="button-style" variant="contained">ÜBER MICH</Button>
                    </Grid>
                    <Grid item>
                        <Button className="button-style" variant="contained">BILDUNGS INFORMATIONEN</Button>
                    </Grid>
                    <Grid item>
                        <Button className="button-style" variant="contained">PROJEKT LISTE</Button>
                    </Grid>
                    <Grid item>
                        <Button className="button-style" variant="contained">KONTAKT</Button>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
        </Box>
        </>
    )
}
