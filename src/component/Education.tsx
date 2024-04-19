import {Button, Card, CardContent, Typography} from "@mui/material";
import './Education.css'
export default function Education(){
    const items = [
        'Backend',
        'Java',
        'JavaScript',
        'HTML',
        'CSS',
        'OOP',
        'Docker',
        'MongoDB',
        'Git',
        'Spring Boot',
        'React',
        'Scrum',
        'Kanban',
        'Agile Methoden'
    ];
    const uniItems = [
        'Java',
        'Swing GUI',
        'C/C++',
        'MySQL',
        'Software Entwicklung',
        'Algorithmusanalyse und -design',
        'Assembly',
        'Datenstrukturen',
        'Software-Projekt Management',
        'Computer Netze',
        'Künstliche Intelligenz',
        'Data Mining',

    ];
    return(
        <>
            <div className="education">
                <h2>Bildungs Informationen</h2>
            </div>
            <div className="card-container">
                <Card className="card-new" sx={{  backgroundColor: 'rgba(255, 218, 185, 0.5)', padding: '20px', borderRadius: '40px' }} >
                    <CardContent className="card-content" >
                        <Typography sx={{fontSize: 14}}>
                            Java Development Bootcamp
                        </Typography>
                        <Typography sx={{fontSize: 11}} color="text.secondary">
                            (720 Unterrichtseinheiten)
                        </Typography>
                        <Typography sx={{fontSize: 14, mb: 1.5,}}>
                            neuefische GmbH, Deutschland
                        </Typography>
                        <Typography sx={{fontSize: 14, mb: 1.5, textAlign: 'left'}} variant="body2">
                            Dank dieses Bootcamps wurden vertiefte Kenntnisse
                            zur Entwicklung von Webanwendungen vermittelt.
                        </Typography>

                        <div style={{marginBottom: '10px',textAlign: 'left'}}>
                            {items.map((item, index) => (
                                <Button
                                    key={index}
                                    variant="contained"
                                    sx={{
                                        backgroundColor: 'rgba(0, 0, 0, 0.3)',
                                        pointerEvents: 'none',
                                        marginRight: '10px',
                                        marginBottom: '10px'
                                    }}
                                >
                                    {item}
                                </Button>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                <Card className="card-new" sx={{  backgroundColor: 'rgba(255, 218, 185, 0.5)', padding: '20px', borderRadius: '40px' }}>
                    <CardContent className="card-content">
                        <Typography sx={{fontSize: 14}}>
                            Computer Ingenieurswesen
                        </Typography>
                        <Typography sx={{fontSize: 14}}>
                            Universität Fatih Sultan Mehmet Stiftung, Türkei
                        </Typography>
                        <Typography sx={{fontSize: 14}}>
                            Fakultät für Ingenieurswesen
                        </Typography>

                        <Typography sx={{fontSize: 14, textAlign: 'left'}} color="text.secondary" gutterBottom>

                        </Typography>
                        <div style={{marginBottom: '10px', textAlign: 'left'}}>
                            {uniItems.map((item, index) => (
                                <Button
                                    key={index}
                                    variant="contained"
                                    sx={{
                                        backgroundColor: 'rgba(0, 0, 0, 0.3)',
                                        pointerEvents: 'none',
                                        marginRight: '10px',
                                        marginBottom: '10px'
                                    }}
                                >
                                    {item}
                                </Button>
                            ))}
                        </div>

                    </CardContent>
                </Card>
            </div>
        </>
    );
}