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
                title="Pacchetto Medio"
                description=""
                imageUrl="https://www.fraseryachts.com/uploads/image/yachts/mini-k/Palumbo_yacht_for_charter_Mini-k_17594.jpg"
                lingua="English Traslation"
                link="/pacchetto-medio-ing"
            />
            <Paragraph
                title="Pacchetto Medio"
                subtitle="Con il pacchetto medio, verrete trasportati nella nostra isola su uno yacht o con un Pilatus PC-6."
                backgroundImageUrl="https://i.ytimg.com/vi/fc_yDzLjoMk/maxresdefault.jpg"
                backgroundColor="#FFFFFF"
                opacity={0.5}
                blur="0.2rem"
                color="black"
                columnCount={1}
                maxWidth="lg"
                sx={{}}
            >
                Il pacchetto medio per l'acquapark ti offre un'esperienza indimenticabile, piena di divertimento e relax allo stesso tempo. L'offerta prevede 2 ombrelloni e 4 sdraio per il massimo confort, situati vicino alle piscine e al bar, dove potrai sorseggiare un drink fresco e deliziarti con prelibatezze estive.
                Uno dei vantaggi più apprezzati è la possibilità di saltare la fila e goderti subito i divertimenti, con attrazioni adatte a tutte le età. L'acquapark non é solo divertimento, ma offre anche relax e benessere, grazie alla presenza di ristoranti lussuosi, spa e centri relax, dove potrai rigenerare corpo e anima.
                Se vuoi arrivare sull'isola in grande stile, ti sarà possibile farlo a bordo di uno yacht o su un Pilatus PC-6. Questo renderà il tuo viaggio ancor più esclusivo e indimenticabile.
                In poche parole, il pacchetto medio per l'acquapark è un'esperienza completa, che ti farà dimenticare lo stress quotidiano, regalandoti momenti di assoluto divertimento e relax.
            </Paragraph>
        </Layout>
    )
}