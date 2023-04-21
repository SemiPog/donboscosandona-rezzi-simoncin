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
                title="Dreams Island - La Sueños Locos S.A. "
                description=""
                imageUrl="https://bfwellness.it/wp-content/uploads/2023/03/chisiamo.jpg"
                lingua="English Traslation"
                link="/chi-siamo-ing"
            />
            <Paragraph
                title="La Sueños Locos S.A. "
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
                La nostra azienda si concentra sull'offrire prodotti e servizi innovativi. Siamo un'azienda giovane ma dinamica, fondata sulle riflessioni di un team di esperti che hanno la passione per l'innovazione e la tecnologia.

                La nostra missione è quella di offire servizi che possano migliorare la vita delle persone e portare una sensazione di benessere e felicità. Ci concentriamo sulla sperimentazione e l'innovazione per sviluppare servizi che hanno un impatto positivo sulla vita delle persone e sulla società.

                Inoltre, ci impegniamo per garantire la massima qualità dei  servizi attraverso una costante ricerca e sviluppo, che ci consente di soddisfare le richieste di mercato più esigenti.

                Siamo orgogliosi della nostra cultura aziendale, che mette al primo piano la collaborazione e la creatività. Crediamo che la diversità sia una risorsa preziosa e ne rispettiamo il valore nella nostra attività quotidiana.

                Infine, ci impegniamo a essere consapevoli della nostra responsabilità sociale e ambientale, ed è per questo che sosteniamo attivamente progetti e iniziative che promuovono la sostenibilità e la giustizia sociale.

                Vi ringraziamo per la vostra attenzione e per la possibilità di presentarvi la nostra azienda. Siamo sempre disponibili per rispondere a tutte le vostre domande e fornirvi informazioni dettagliate sui nostri servizi e prodotti. Contattateci!
            </Paragraph>
        </Layout>
    )
}