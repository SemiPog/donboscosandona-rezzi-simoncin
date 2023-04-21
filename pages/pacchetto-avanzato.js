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
                title="Pacchetto Avanzato"
                description=""
                imageUrl="https://www.meetingecongressi.com/Public/news/634988184227194826.jpg?w=848&h=353&mode=crop"
                lingua="English Traslation"
                link="/pacchetto-avanzato-ing"
            />
            <Paragraph
                title="Pacchetto Avanzato"
                subtitle="Con il pacchetto avanzato, verrete trasportati nella nostra isola su un elicottero di lusso"
                backgroundImageUrl="https://www.denaro24.it/wp-content/uploads/2015/06/bell-525-interni-2.png"
                backgroundColor="#FFFFFF"
                opacity={0.5}
                blur="0.2rem"
                color="black"
                columnCount={1}
                maxWidth="lg"
                sx={{}}
            >
                Il pacchetto avanzato per l'acqua park è la soluzione perfetta per gli amanti dell'avventura e dell'emozione.

                Questo pacchetto offre l'accesso illimitato a tutti gli scivoli e alle attrazioni dell'acqua park, permettendo ai visitatori di sperimentare l'emozione di ogni cosa che il parco ha da offrire.

                Inoltre, questo pacchetto comprende anche vantaggi esclusivi come l'ingresso prioritario alle attrazioni, l'accesso alle cabine private per il cambio e la possibilità di prenotare tavoli riservati ai ristoranti del parco.

                I visitatori che scelgono il pacchetto avanzato potranno anche usufruire di servizi aggiuntivi come massaggi, trattamenti spa e attività ricreative come lezioni di fitness in acqua.

                In sintesi, il pacchetto avanzato per l'acqua park offre un'esperienza completa, divertente e rilassante per tutti coloro che cercano un'avventura emozionante e una vera e propria evasione dal quotidiano.
            </Paragraph>
        </Layout>
    )
}