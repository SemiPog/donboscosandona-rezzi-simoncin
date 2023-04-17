import Layout from '/components/Layout';
import Paragraph from 'components/Paragraph';
import LandingHero from '/components/LandingHero2'
import Products from "/components/Products";
import Carousel from '/components/Carousel'

let menu = [
    { title: 'Ciao', url: 'https://www.parchionline.it/parchionline_images/parco-acquatico-images/acquapark-images/jpg/mirabilandia-beach-parco-acquatico-mirabilandia.jpg'},
    { title: ''}
]

let prodotti = [
    {
        title: "Costo base ",
        category: "50€",
        description: "Con questo piano hai a disposizione: 1 ombrellone e 2 sdraio situate in una zona solitamente affolata lontana da piscina,scivoli e bar. ",
        immagineUrl: "https://www.italiaatavola.net/images/contenutiarticoli/ombrellone-spiaggia_1_2.jpg",
        url: "",
    },
    {
        title: "Costo medio ",
        category: "100€",
        description:"Questo piano a differenza di quello base offre 2 ombrelloni e 4 sdraio, essi sono situati vicino alla piscina principale e al bar   ",
        immagineUrl:"https://www.talentispa.com/wp-content/uploads/2022/10/cruise-teak-grafite-4-1014x600.jpg ",
        url: "",
    },
    {
        title: "Informatico",
        category: "DIPLOMA DI TECNICO INFORMATICO",
        description:
            "Installa e configura hardware e software, esegue la manutenzione di sistemi, reti e terminali utente, fornisce assistenza tecnica, effettua l'elaborazione e la manutenzione di dati su archivi digitali. Con il quarto anno in Sistema Duale diventa tecnico sviluppatore di Soluzioni Software.",
        immagineUrl: "",
        url: "/informatico",
    },
];

let slides = [
    {
      titolo: "Fatti un bel giro",
      descrizione:
        "Scopri tutti i segreti del nostro Centro con il tour virtuale!",
      immagine:
        "https://www.wallpapermania.eu/images/lthumbs/2013-01/4170_Love-between-animals-true-love.jpg",
      colore: "#ED4C67",
      opacity: 0.5,
      blur: "0.5rem",
      buttonText: "Scopri di più!",
      buttonUrl: "https:...",
    },
    {
      titolo: "Concorso nazionale settore elettrico",
      descrizione:
        "A maggio il nostro Centro avrà l'onore di ospitare il Concorso Nazionale del Settore Elettrico: tutti i Centri di Formazione Professionale salesiani d'Italia invieranno i loro campioni per una settimana di sfida e condivisione professionale...",
      colore: "#22aa22",
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
            <Carousel></Carousel>
        </Layout>
    )
}




