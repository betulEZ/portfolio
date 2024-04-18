import {Card, CardContent, Typography} from "@mui/material";
import './Education.css'
export default function Education(){
    return(
        <>
            <div className="education">
                <h2>Bildungs Informationen</h2>
            </div>
            <div className="card-container">


            <Card className="card">
                <CardContent>
                    <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                        Word of the Day
                    </Typography>

                    <Typography sx={{mb: 1.5}} color="text.secondary">
                        adjective
                    </Typography>

                </CardContent>
            </Card>
            <Card className="card">
                <CardContent>
                    <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                        Word of the Day
                    </Typography>

                    <Typography sx={{mb: 1.5}} color="text.secondary">
                        adjective
                    </Typography>

                </CardContent>
            </Card>
            </div>
        </>
    );
}