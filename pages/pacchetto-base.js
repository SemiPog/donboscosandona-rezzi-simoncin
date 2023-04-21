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
                title="Pacchetto Base"
                description=""
                imageUrl="https://www.fraseryachts.com/uploads/image/yachts/mini-k/Palumbo_yacht_for_charter_Mini-k_17594.jpg"
            />
            <Paragraph
                title="Pacchetto base"
                subtitle="Con il pacchetto base, verrete trasportati nella nostra isola con uno mini yacht."
                backgroundImageUrl="https://i.ytimg.com/vi/fc_yDzLjoMk/maxresdefault.jpg"
                backgroundColor="#FFFFFF"
                opacity={0.5}
                blur="0.2rem"
                color="black"
                columnCount={1}
                maxWidth="lg"
                sx={{}}
            >
                Il Pacchetto Base ti permette di sbloccare tutte le opzioni meno costose, ma comunque ti forniamo tutto il necessario per godere dell'acquapark. Con il Pacchetto Base, potrai accedere a tutte le attrazioni dell'acquapark, dalla più tranquilla alla più emozionante. Potrai godere di una vasta gamma di piscine, scivoli d'acqua e molti giochi acquatici! Inoltre ci sarà il nostro Staff che sarà sempre contento di aiutarvi. Con questo pacchetto <strong>NON</strong> si potrà saltare la coda, quindi si dovrà aspettare il proprio turno.
            </Paragraph>
        </Layout>
    )
}