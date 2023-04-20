import Layout from '/components/Layout';
import Paragraph from 'components/Paragraph';
import LandingHero from '/components/LandingHero2'
import Products from "/components/Products";
import Carousel from '/components/Carousel'
import Maps from '/components/Maps';
import Grid from '@mui/material';

let menu = [
  { title: 'Ciao', url: 'https://www.parchionline.it/parchionline_images/parco-acquatico-images/acquapark-images/jpg/mirabilandia-beach-parco-acquatico-mirabilandia.jpg' },
  { title: '' }
]



let prodotti = [
  {
    title: "Pacchetto base ",
    category: "50€",
    description: "Con questo piano hai a disposizione: 1 ombrellone e 2 sdraio situate in una zona solitamente affolata lontana da piscina,scivoli e bar. ",
    immagineUrl: "https://www.salonemilano.it/sites/default/files/styles/libero/public/2022-05/CASTORE_COPERTINA.jpg.webp?itok=lSaTbr25",
    url: "",
  },
  {
    title: "Pacchetto medio ",
    category: "100€",
    description: "Questo piano a differenza di quello base offre 2 ombrelloni e 4 sdraio, essi sono situati vicino alla piscina principale e al bar.   ",
    immagineUrl: "https://www.giardinaggio.net/arredamento-giardino/piscine/lettini-da-piscina_NG4.jpg ",
    url: "",
  },
  {
    title: "Pacchetto Avanzato",
    category: "200€",
    description:
      "Questo piano offre la possibilità di richiedere fino a 5 ombrelloni e 5 sdraio da situare nella parte dell'isola che si vuole, in oltre vengono dati 2 armadietti dove lasciare i propi oggetti mentre ci si riposa nella lusuosa spa, c'è anche la possibilità di saltare le code per gli scivoli. ",
    immagineUrl: "https://www.grazia.it/content/uploads/2019/12/migliori-spa-roma-2022-02.jpg ",
    url: "",
  },
];

let slides = [
  {
    titolo: "Goditi i nostri scivoli al chiuso",
    descrizione:
      "Vieni a scoprire i nostri scivoli al chiuso, disponibili solo con il pacchetto medio!",
    immagine:
      "https://www.quellenhof.it/%28cms%29/media/resize/size=1920x1080%2Cscale=crop%2Cinterlace=1%2Cquality=70/1719722",
    colore: "",
    opacity: 3,
    blur: "0.1rem",
  },
  {
    titolo: "Fatti un bel giro",
    descrizione:
      "Scopri tutti i segreti del nostro Centro con il tour virtuale!",
    immagine:
      "https://images.alphacoders.com/475/thumb-1920-475967.jpg",
    colore: "",
    opacity: 3,
    blur: "0.1rem",
  },
  {
    titolo: "Fatti un bel giro",
    descrizione:
      "Scopri tutti i segreti del nostro Centro con il tour virtuale!",
    immagine:
      "https://www.parco-divertimenti-roma.it/wp-content/uploads/2020/11/parchi-acquatici.jpg",
    colore: "",
    opacity: 3,
    blur: "0.1rem",
  },
  {
    titolo: "Fatti un bel giro",
    descrizione:
      "Scopri tutti i segreti del nostro Centro con il tour virtuale!",
    immagine:
      "https://3.bp.blogspot.com/-F1Xng2wc_ek/VqpNL_WpHUI/AAAAAAAANI8/Q2hlz9iqXhk/s1600/erding1.jpg",
    colore: "",
    opacity: 3,
    blur: "0.1rem",

  },
  {
    titolo: "Fatti un bel giro",
    descrizione:
      "Scopri tutti i segreti del nostro Centro con il tour virtuale!",
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
        title="I nostri pomeriggi"
        description="Ore 15.00: momento di tranquillità (si fa per dire) all’ombra, dove gli animatori si “inventeranno” sempre qualcosa di simpatico e coinvolgente!!!
        "
        imageUrl="https://static.secureholiday.net/static/CMS/photos/000/023/000023989.jpg?format=webp"
      />

      <Products
        title="Costo Entrata "
        description="Qui troverai tutti i costi per entrate nel nostro parco acquatico!"
        cardWidth={4}
        products={prodotti}
      />


      <Carousel slides={slides}  />
      
      <Paragraph
        backgroundImageUrl="https://live-production.wcms.abc-cdn.net.au/eacbe85d5607e7742b6894e778063328.jpg?src"
        backgroundColor="cyan"
        opacity={0.3}
        blur="0.3rem"
        color="white"
        title="Pool Party "
        subtitle="dal 20 Giugno fino al 15 Agosto!"
      >
        Vi presentiamo il nostro Pool Party per giovani, una festa indimenticabile per ballare, rilassarsi e divertirsi in compagnia!

        Immergetevi nella nostra piscina con l'acqua cristallina e lasciatevi coccolare dal caldo sole estivo. Musica, animazione e giochi renderanno la vostra giornata unica e irripetibile. Sfoggiate i vostri costumi più divertenti e originali e divertitevi con le mille attività che abbiamo preparato per voi!

        Non mancheranno le bevande fresche e i bocconi sfiziosi per tenervi carichi di energia e farvi ballare fino al tramonto. Non perdete l'opportunità di fare nuove amicizie e vivere insieme una giornata all'insegna del divertimento.
      </Paragraph>

      <Maps
        maxWidth="100%"
        maxHeight="550px"
        url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2947.49874807035!2d-8.934576295269244!3d42.37452063785601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2f44a37979f453%3A0x8367e219f53f816d!2sPraia%20Area%20Dos%20Cans!5e0!3m2!1sit!2sit!4v1681976151677!5m2!1sit!2sit"
      />
    </Layout>
  )
}




