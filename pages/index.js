import * as React from 'react';


import Layout from '/components/Layout';
import Paragraph from 'components/Paragraph';
import LandingHero from '/components/LandingHero2'
import Products from "/components/Products";
import Carousel from '/components/Carousel'
import Maps from '/components/Maps';

import { Grid } from '@mui/material';
import { Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from '@mui/material';
import Testimonials from '/components/Testimonials';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

let menu = [
  { title: 'Ciao', url: 'https://www.parchionline.it/parchionline_images/parco-acquatico-images/acquapark-images/jpg/mirabilandia-beach-parco-acquatico-mirabilandia.jpg' },
  { title: '' }
];

let testimonials = [
  {
    name: "Fabiana Calabresi",
    channel: "@FABIANACALABRESI",
    text: "Ciao! Ho avuto il piacere di trascorrere la mia ultima vacanza in un acqua park di lusso situato in Spagna, e devo dire che è stata un'esperienza unica nel suo genere. Lo staff è stato eccezionale, sempre pronto a soddisfare ogni nostra richiesta e a farci sentire come veri ospiti di lusso. Abbiamo scelto il pacchetto medio e siamo rimasti molto soddisfatti della varietà delle attrazioni e delle attività disponibili. Ci siamo divertiti tantissimo scivolando lungo i tobogan, rilassandoci nelle piscine termali o sfidando le onde dell'oceano artificiale. Ma quello che più ci ha colpito è stata l'attenzione ai dettagli: dai lettini comodi e eleganti alle pietanze deliziosamente preparate da chef stellati, tutto ciò che ci circondava trasmetteva una sensazione di lusso e raffinatezza. In definitiva, consiglio assolutamente di vivere questa esperienza unica e scegliere uno dei pacchetti offerti in base alle proprie esigenze. Non resterete delusi!",
    imageUrl: "https://www.superprof.it/immagini/annunci/insegnante-home-sono-una-ragazza-spagnola-lezioni-private-spagnolo-torino-citta-provincia.jpg"
  },
  {
    name: "Lucía García",
    channel: "@LUCIAGARCIA",
    text: "Este parque acuático ofrece una experiencia única, con un personal que te hace vivir tu sueño. Puedes elegir entre los paquetes básico, medio y avanzado. ¡Fue una experiencia increíble! Desde el momento en que llegamos, el personal nos hizo sentir como en casa. El parque acuático está impecablemente limpio y bien mantenido. Tomamos el paquete avanzado y fue la mejor decisión que pudimos haber tomado. Teníamos acceso ilimitado a todas las atracciones y toboganes emocionantes. La comida en los restaurantes del parque era deliciosa y el personal siempre estaba dispuesto a ayudarnos con cualquier cosa que necesitábamos. Con la música de fondo y la emoción en el aire, nunca nos faltó nada que hacer. En general, fue una experiencia increíblemente impresionante. Si estás buscando unas vacaciones emocionantes y llenas de diversión, definitivamente deberías considerar este parque acuático de lujo en España. ¡No te arrepentirás!",
    imageUrl: "https://s3-eu-west-1.amazonaws.com/miodottore.it/doctor/8b856f/8b856fc24944f922105a167e644aea75_large.jpg",
  },
  {
    name: "Corey Chandler",
    channel: "@COREYCHANDLER",
    text: "I recently had the pleasure of experiencing a luxurious water park vacation in Spain, and it was truly an unforgettable adventure. The staff went above and beyond to make my dreams come true, delivering an unparalleled level of service and attention to detail. With a range of packages available, I was able to choose the perfect option for my needs and preferences. Whether you're looking for a basic experience or something more advanced, this water park has something for everyone. One of the highlights of my trip was arriving on the island via helicopter - it was a truly unique and unforgettable experience. From start to finish, this water park vacation was an absolute dream come true, and I'm already looking forward to my next visit. Highly recommended!",
    imageUrl: "https://assets.afcdn.com/album/D20170621/phalbm25190983_w320.webp",
  },
]



let prodotti = [
  {
    title: "Pacchetto base ",
    category: "100€",
    description: "Con questo piano hai a disposizione: 1 ombrellone e 2 sdraio situate in una zona solitamente affolata lontana da piscina,scivoli e bar. ",
    immagineUrl: "https://www.salonemilano.it/sites/default/files/styles/libero/public/2022-05/CASTORE_COPERTINA.jpg.webp?itok=lSaTbr25",
    url: "/pacchetto-base",
  },
  {
    title: "Pacchetto medio ",
    category: "250€",
    description: "Questo piano a differenza di quello base offre 2 ombrelloni e 4 sdraio, essi sono situati vicino alla piscina principale e al bar.   ",
    immagineUrl: "https://www.giardinaggio.net/arredamento-giardino/piscine/lettini-da-piscina_NG4.jpg ",
    url: "/pacchetto-medio",
  },
  {
    title: "Pacchetto Avanzato",
    category: "500€",
    description:
      "Questo piano offre la possibilità di richiedere fino a 5 ombrelloni e 5 sdraio da situare nella parte dell'isola che si vuole, in oltre vengono dati 2 armadietti dove lasciare i propi oggetti mentre ci si riposa nella lusuosa spa, c'è anche la possibilità di saltare le code per gli scivoli. ",
    immagineUrl: "https://www.grazia.it/content/uploads/2019/12/migliori-spa-roma-2022-02.jpg ",
    url: "/pacchetto-avanzato",
  },
  {
    title: "Pacchetto Sogno",
    category: "5000€",
    description:
      "A lucid dream is an unforgettable experience for those who seek to explore their subconscious, immersing themselves in dream worlds and experiencing the thrill of daydreaming. Let your imagination run wild and enjoy the peace and serenity of a place made just for you, with attentive staff providing everything you could ever need.",
    immagineUrl: "https://romoletto.altervista.org/wp-content/uploads/2019/10/Isola-isole-Interpretazione-dei-sogni.jpg ",
    url: "/sogno",
  },
];

let slides = [
  {
    titolo: "",
    descrizione:
      "",
    immagine:
      "https://www.quellenhof.it/%28cms%29/media/resize/size=1920x1080%2Cscale=crop%2Cinterlace=1%2Cquality=70/1719722",
    colore: "",
    opacity: 3,
    blur: "0.1rem",
  },
  {
    titolo: "",
    descrizione:
      "",
    immagine:
      "https://images.alphacoders.com/475/thumb-1920-475967.jpg",
    colore: "",
    opacity: 3,
    blur: "0.1rem",
  },
  {
    titolo: "",
    descrizione:
      "",
    immagine:
      "https://neonhub.com.au/wp-content/uploads/2021/09/Cocktails-Dreams.jpg",
    colore: "",
    opacity: 3,
    blur: "0.1rem",
  },
  {
    titolo: "",
    descrizione:
      "",
    immagine:
      "https://www.immobilisantandrea.it/media2/news/IT/piscine_di_lusso_interne_esterne.jpg",
    colore: "",
    opacity: 3,
    blur: "0.1rem",

  },
  {
    titolo: "",
    descrizione:
      "",
    immagine:
      "https://www.aquathermeroma.it/files-sbbasic/sr_aquathermeroma_it/logo/aquatherme_the_building_spa_romespa_033.jpg",
    colore: "",
    opacity: 3,
    blur: "0.1rem",
  },
];

export default function Home() {
  return (
    <Layout>
      <LandingHero

        opacity={0.2}
        title="Dreams Island - La Sueños Locos S.A."
        description="
        "
        imageUrl="https://static.secureholiday.net/static/CMS/photos/000/023/000023989.jpg?format=webp"
        lingua="English Traslation"
        link="/home-ing"
      />

      <Products
        title="Costo Entrata "
        description="Qui troverai tutti i costi per entrate nel nostro parco acquatico!"
        cardWidth={6}
        products={prodotti}
      />


      <Carousel slides={slides} />
      <Grid container spacing={1} columns={16} >
        <Grid item xs={8}>
          <Item elevation={0}>
            <Paragraph
              backgroundImageUrl="https://live-production.wcms.abc-cdn.net.au/eacbe85d5607e7742b6894e778063328.jpg?src"
              backgroundColor="cyan"
              opacity={0.1}
              blur="0.3rem"
              color="white"
              title="Pool Party "
              subtitle="Dal 20 Giugno fino al 15 Agosto!"
              columnCount={1}
            >
              Vi presentiamo il nostro Pool Party per giovani, una festa indimenticabile per ballare, rilassarsi e divertirsi in compagnia!

              Immergetevi nella nostra piscina con l'acqua cristallina e lasciatevi coccolare dal caldo sole estivo. Musica, animazione e giochi renderanno la vostra giornata unica e irripetibile. Sfoggiate i vostri costumi più divertenti e originali e divertitevi con le mille attività che abbiamo preparato per voi!

              Non mancheranno le bevande fresche e i bocconi sfiziosi per tenervi carichi di energia e farvi ballare fino al tramonto. Non perdete l'opportunità di fare nuove amicizie e vivere insieme una giornata all'insegna del divertimento.<br /><br /><br /><br />
            </Paragraph>
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Item elevation={0}>
            <Paragraph
              backgroundImageUrl="https://www.unicoebello.it/wp-content/uploads/2020/08/super-yacht-sub-3-picking-up-champagne-c-rob-aarsen-2016.jpg"
              backgroundColor="cyan"
              opacity={0.1}
              blur="0.3rem"
              color="white"
              title="Scopri il mondo sottomarino con i nostri mini sommergibili!"
              subtitle="Su prenotazione tutta l'estate!"
              columnCount={1}
            >
              Vieni a scoprire un'esperienza indimenticabile tra le meraviglie del mare! Con i nostri mini sommergibili, potrai esplorare le profondità marine e ammirare la bellezza delle creature sottomarine in modo comodo e sicuro. Che tu sia un appassionato del mare o semplicemente alla ricerca di una nuova avventura, questa attività estiva è perfetta per te! Non perdere l'occasione di vivere un'esperienza unica e indimenticabile.<br /> <br /> <br />
              <Link href="/sottomarino"><Button variant="contained" color="success">Scopri di più sui costi!</Button></Link>
            </Paragraph>
          </Item>
        </Grid>
      </Grid>




      <Maps
        maxWidth="100%"
        maxHeight="550px"
        url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2947.49874807035!2d-8.934576295269244!3d42.37452063785601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2f44a37979f453%3A0x8367e219f53f816d!2sPraia%20Area%20Dos%20Cans!5e0!3m2!1sit!2sit!4v1681976151677!5m2!1sit!2sit"
      />
      <Testimonials
        title="Recensioni Recenti"
        description=""
        imageUrl="https://images.alphacoders.com/475/thumb-1920-475967.jpg"
        opacity={0.7}
        testimonials={testimonials}
        cardWidth={4}
      />
    </Layout>
  )
}




