import Layout from '/components/Layout';
import Paragraph from 'components/Paragraph';
import LandingHero from '/components/LandingHero2'
import Products from "/components/Products";
import Carousel from '/components/Carousel'
import Maps from '/components/Maps';
import Grid from '@mui/material';

export default function Home() {
    return (
        <Layout>
            <LandingHero
                opacity={0.2}
                title="Pacchetto Sogno"
                description=""
                imageUrl="https://www.focus.it/site_stored/imgs/0006/029/sognare_shutterstock_625010075.1020x680.jpg"
                lingua="English Traslation"
                link="/sogno-ing"
          />
            <Paragraph
                title="Fai avverare i tuoi sogni! "
                subtitle=""
                backgroundImageUrl=""
                backgroundColor="#FFFFFF"
                opacity={0.1}
                blur="0.3rem"
                color="Black"
                columnCount={1}
                maxWidth="lg"
                sx={{}}
            >
                Il "Pacchetto Sogno" è un'esperienza unica nel suo genere che ti permetterà di entrare nel mondo dei sogni più profondi e rivelatori. Creato da uno staff altamente allenato e attento ad ogni tua esigenza, questo servizio ti porterà da un lato all'altro di un'isola intera, esclusivamente dedicata a te.

                La tua avventura inizia con un emozionante viaggio in elicottero, dove potrai osservare dall'alto paesaggi mozzafiato e avere un assaggio di ciò che ti aspetta. Una volta arrivato nell'isola, sarai accolto dallo staff che si prenderà cura di ogni tuo desiderio, pronto a trasformare i tuoi sogni in realtà.

                Fare un'escursione nella giungla o ammirare le meravigliose spiagge di sabbia bianca, questo è solo l'inizio della tua avventura da sogno. Lo staff sarà a disposizione 24 ore su 24 per esaudire ogni tua richiesta. Con l'ausilio di tecnologie all'avanguardia, sarai in grado di sperimentare il monitoraggio della tua attività cerebrale durante il sonno per analizzare i tuoi sogni e scoprire informazioni preziose sul tuo stato psicologico e sulle tue emozioni.

                Il Pacchetto Sogno è progettato per offrirti un'esperienza sensoriale completa, con un cibo squisito, profumi esotici e suoni rilassanti. Lo staff sarà sempre a tua disposizione per assicurarsi che tutto si svolga al meglio, e saranno pronti a soddisfare ogni tuo desiderio, anche il più stravagante.

                In breve, il Pacchetto Sogno è un'esperienza indimenticabile per chi cerca di esplorare il suo subconscio, immergendosi in mondi onirici e sperimentando l'emozione di sognare ad occhi aperti. Lascierai andare alla fantasia e godrai della pace e della serenità di un luogo creato appositamente per te, con un personale attento a darti tutto ciò di cui potresti mai avere bisogno.
            </Paragraph>
        </Layout>
    )
}

