import GitHubIcon from '@mui/icons-material/GitHub';
import {Button, Card, CardContent, Typography} from "@mui/material";
import './ProjectList.css';

export default function ProjectList(){
    const items = [
    'Java Spring Boot',
    'TypeScript',
    'HTML/CSS',
    'JUnit/Integrationstests',
    'Docker',
    'MongoDB',
    'React',
    'Agile Methoden'
];
    const postApp_Item = [
        'Java Spring Boot',
        'Angular',
        'MySQL'
    ];
    const rudeSpriel_Item = [
        'Java Swing GUI',
        'Netbeans IDE'
    ];
    const fahrzeug_Item = [
        'Java',
        'Netbeans IDE'
    ];
    return(
        <>
         <div className="title">
            <h2>Projekt List</h2>
            </div>
            <div className="list">
                <Card className="card-new">
                    <CardContent className="card-content">
                        <Typography sx={{fontSize: 14}}>
                            Student Management Sytem
                        </Typography>
                        <Typography sx={{fontSize: 11, mb: 3}} color="text.secondary">
                            Capstone Projekt für Weiterbildung
                        </Typography>
                        <Typography sx={{fontSize: 14, mb: 1.5, textAlign: 'left'}} variant="body2">
                            Wenn der Lehrer/in angemeldet ist, kann er/sie die Schülerliste erstellen,
                            aktualisieren, löschen und kann eine Ankündigung oder Aufgabe veröffentlichen.
                            Der/die Studierende kann diese Ankündigungen und Aufgaben auf seiner/ihrer eigenen
                            Seite sehen. So können Sie Kurse hinzufügen oder löschen. Je nach Kurs können
                            Studierende untereinander chatten.
                        </Typography>
                        <div style={{marginBottom: '2px', textAlign: 'left'}}>
                            {items.map((item, index) => (
                                <Button
                                    key={index}
                                    variant="contained"
                                    sx={{
                                        backgroundColor: 'rgba(0, 0, 0, 0.3)',
                                        pointerEvents: 'none',
                                        marginRight: '10px',
                                        marginBottom: '10px',
                                        padding: '2px 2px', // Buton içeriğinin etrafındaki boşluk (üst ve alt 5px, sağ ve sol 10px)
                                        typography: {
                                            fontSize: '10px' // Yazı tipi boyutu
                                        }

                                    }}
                                >
                                    {item}
                                </Button>
                            ))}
                        </div>
                        <div style={{
                            position: 'absolute',
                            bottom: '0',
                            right: '0',
                            marginBottom: '15px',
                            marginRight: '30px'
                        }}>
                            <a href="https://github.com/betulEZ/StudentManagementSystem"
                               style={{alignSelf: 'flex-end'}}>
                                <GitHubIcon sx={{fontSize: '40px', color: 'coral'}}/>
                            </a>
                        </div>

                    </CardContent>
                </Card>
                <Card className="card-new" style={{position: 'relative'}}>
                    <CardContent className="card-content">
                        <Typography sx={{fontSize: 14, mb: 1.5}}>
                            Post App
                        </Typography>
                        <Typography sx={{fontSize: 14, mb: 1.5, textAlign: 'left'}} variant="body2">
                            Der Benutzer, der sich erfolgreich anmelden oder registrieren kann, wird zur Hauptseite
                            des Projekts weitergeleitet.
                            Sie können Post teilen, indem Sie Text oder Titel im Projekt angeben. Der geteilte Post
                            kann kommentiert werden
                            oder der Benutzer kann Post löschen.
                        </Typography>
                        <div style={{marginBottom: '2px', textAlign: 'left'}}>
                            {postApp_Item.map((item, index) => (
                                <Button
                                    key={index}
                                    variant="contained"
                                    sx={{
                                        backgroundColor: 'rgba(0, 0, 0, 0.3)',
                                        pointerEvents: 'none',
                                        marginRight: '10px',
                                        marginBottom: '10px',
                                        padding: '2px 2px', // Buton içeriğinin etrafındaki boşluk (üst ve alt 5px, sağ ve sol 10px)
                                        typography: {
                                            fontSize: '10px' // Yazı tipi boyutu
                                        }

                                    }}
                                >
                                    {item}
                                </Button>
                            ))}
                        </div>
                        <div style={{
                            position: 'absolute',
                            bottom: '0',
                            right: '0',
                            marginBottom: '30px',
                            marginRight: '20px'
                        }}>
                            <div style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                                <a href="https://github.com/betulEZ/post-app"
                                   style={{marginRight: '20px',textDecoration: 'none'}}>
                                    <GitHubIcon sx={{fontSize: '40px', color: 'coral'}}/>
                                    <Typography sx={{fontSize: 12}} color="text.secondary">
                                        Backend
                                    </Typography>
                                </a>
                                <a href="https://github.com/betulEZ/appFrontend"
                                   style={{marginRight: '20px',textDecoration: 'none'}}>
                                    <GitHubIcon sx={{fontSize: '40px', color: 'coral'}}/>
                                    <Typography sx={{fontSize: 12}} color="text.secondary">
                                        Frontend
                                    </Typography>
                                </a>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card className="card-new">
                    <CardContent className="card-content">
                        <Typography sx={{fontSize: 14, mb: 1.5}}>
                            Client-Server Kommunikation Rudespiel
                        </Typography>
                        <Typography sx={{fontSize: 14, mb: 1.5, textAlign: 'left'}} variant="body2">
                            Bei diesem Projekt wurde das Spiel so konstruiert, dass der Server Clienten
                            dienen und ihre Kommunikation gewähren kann. Beide Bildschirme arbeiten
                            synchronisiert durch die Server-Client Funktion. Zu Beginn des Spiels, wird
                            jedem der beiden Spieler 9 rote oder blaue Steine gegeben. Die Steine können
                            sich gegenseitig seitwärts oder horizontal eliminieren. Die Steine können auf
                            die leeren Felder neben ihnen springen. Beim Spiel wurden Knöpfe anstelle von
                            Steinen benutzt und diese Knöpfe wurden auf der Matrix gehalten. Das Vorwärtsgehen
                            der Steine wurden seitlich oder horizontal durch Farben geregelt. Der Spieler,
                            der 3 Steine übrighat, verliert das Spiel.
                        </Typography>
                        <div style={{marginBottom: '2px', textAlign: 'left'}}>
                            {rudeSpriel_Item.map((item, index) => (
                                <Button
                                    key={index}
                                    variant="contained"
                                    sx={{
                                        backgroundColor: 'rgba(0, 0, 0, 0.3)',
                                        pointerEvents: 'none',
                                        marginRight: '10px',
                                        marginBottom: '10px',
                                        padding: '2px 2px', // Buton içeriğinin etrafındaki boşluk (üst ve alt 5px, sağ ve sol 10px)
                                        typography: {
                                            fontSize: '10px' // Yazı tipi boyutu
                                        }

                                    }}
                                >
                                    {item}
                                </Button>
                            ))}
                        </div>

                    </CardContent>
                </Card>
                <Card className="card-new">
                    <CardContent className="card-content">
                        <Typography sx={{fontSize: 14}}>
                            Cyberkriminalität und Die Sicherheit Der Institutionen
                        </Typography>
                        <Typography sx={{fontSize: 11, mb: 3}} color="text.secondary">
                            Abschlussprojekt der Universität
                        </Typography>
                        <Typography sx={{fontSize: 14, mb: 1.5, textAlign: 'left'}} variant="body2">
                            Das Ziel dieses Projektes ist es, Penetrationstests durchzuführen und gemäß den
                            Testergebnissen Lösungsvorschläge für festgestellte Sicherheitslücken vorzuschlagen. Die
                            durchgeführten Cyberattacken:
                            <ul style={{listStyleType: 'none', paddingLeft: '4px', margin: 0}}>
                                <li>&#10003; Angriffe mit Metasploit Framework</li>
                                <li>&#10003; Angriff durch Erstellung eines Trojaners</li>
                                <li>&#10003; Erstellen von gefährlichen Exe Dokumenten durch die Nutzung von Veil
                                    Framework
                                </li>
                                <li>&#10003; Angriff mit Reverse Shell</li>
                            </ul>
                            Als Resultat wurden die notwendigen Vorschläge bezüglich „Schutzmethoden gegen Reverse Shell
                            Angriffe“ evaluiert und präsentiert.
                        </Typography>
                    </CardContent>
                </Card>
                <Card className="card-new">
                    <CardContent className="card-content">
                        <Typography sx={{fontSize: 14}}>
                            Ferngesteuertes Fahrzeug
                        </Typography>
                        <Typography sx={{fontSize: 11, mb: 3}} color="text.secondary">
                            Abschlussprojekt der Universität
                        </Typography>
                        <Typography sx={{fontSize: 14, mb: 1.5, textAlign: 'left'}} variant="body2">
                            &#10003; Das Fahrzeug wird aus der Ferne mit Bluetooth kontrolliert.<br/>
                            &#10003; Das Fahrzeug kann von der Ferne mit einer mobilen Schnittstelle bedient
                            werden.<br/>
                            &#10003; 15 cm vor einem Hindernis schlägt es Alarm, stoppt und fährt nicht weiter
                            fort.<br/>
                            &#10003; Die Entfernung zum Hindernis kann aktuell durch die mobile Schnittstelle
                            überwacht werden.
                        </Typography>
                        <div style={{marginBottom: '2px', textAlign: 'left'}}>
                            {fahrzeug_Item.map((item, index) => (
                                <Button
                                    key={index}
                                    variant="contained"
                                    sx={{
                                        backgroundColor: 'rgba(0, 0, 0, 0.3)',
                                        pointerEvents: 'none',
                                        marginRight: '10px',
                                        marginBottom: '10px',
                                        padding: '2px 2px', // Buton içeriğinin etrafındaki boşluk (üst ve alt 5px, sağ ve sol 10px)
                                        typography: {
                                            fontSize: '10px' // Yazı tipi boyutu
                                        }
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
