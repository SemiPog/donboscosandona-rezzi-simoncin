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
                title="Scopri il mondo sottomarino con i nostri mini sommergibili!"
                description=""
                imageUrl="https://www.unicoebello.it/wp-content/uploads/2020/08/Pedal-Powered-Designs-2.jpg"
            />
            <Paragraph
                title="Listino prezzi"
                subtitle=""
                backgroundImageUrl="https://www.unicoebello.it/wp-content/uploads/2020/08/crop-1.jpg"
                backgroundColor="#FFFFFF"
                opacity={0.1}
                blur="0.3rem"
                color="white"
                columnCount={1}
                maxWidth="lg"
                sx={{}}
            >
                    - Escursione di 30 minuti: circa 55-60 euro a persona<br/>
                    - Escursione di 1 ora: circa 85-70 euro a persona<br/>
                    - Pacchetto famiglia (2 adulti + 2 bambini) di 30 minuti: circa 50-55 euro<br/>
                    - Pacchetto romantico di 1 ora per due persone con aperitivo in barca: circa 100-120 euro<br/>
                    - Escursione notturna con immersione sotto le stelle per 1 ora: circa 130-40 euro a persona.<br/>
                Naturalmente, i prezzi possono variare a seconda della destinazione, della durata dell'escursione e dei servizi aggiuntivi offerti. Sono da considerare anche le esigenze di manutenzione e di custodia dei sottomarini, che possono influire sui costi dell'attività.<br />
                Si può pagare una somma di denaro per spostarsi di posto nella lista prenotazione, il prezzo varia in base a quanto ci si vuole spostare
            </Paragraph>
        </Layout>
    )
}