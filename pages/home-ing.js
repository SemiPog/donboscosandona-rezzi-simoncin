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

let menuing = [
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
        title: "Base Plan",
        category: "100€",
        description: "With this plan, you have at your disposal: 1 umbrella and 2 sun loungers located in a usually crowded area far away from the pool, slides, and bar.",
        immagineUrl: "https://www.salonemilano.it/sites/default/files/styles/libero/public/2022-05/CASTORE_COPERTINA.jpg.webp?itok=lSaTbr25",
        url: "/pacchetto-base-ing",
    },
    {
        title: "Medium Plan",
        category: "250€",
        description: "This plan, unlike the basic one, includes 2 umbrellas and 4 sunbeds, located near the main pool and the bar.",
        immagineUrl: "https://www.giardinaggio.net/arredamento-giardino/piscine/lettini-da-piscina_NG4.jpg ",
        url: "/pacchetto-medio-ing",
    },
    {
        title: "Advanced Plan",
        category: "500€",
        description:
            "This plan offers the possibility to request up to 5 umbrellas and 5 deck chairs to be placed in the desired part of the island. In addition, 2 lockers are provided to leave personal belongings while resting in the luxurious spa. There is also the possibility to skip the queues for the slides.",
        immagineUrl: "https://www.grazia.it/content/uploads/2019/12/migliori-spa-roma-2022-02.jpg ",
        url: "/pacchetto-avanzato-ing",
    },
    {
        title: "Dream Plan",
        category: "5000€",
        description:
            "The Dream Package is an unforgettable experience for anyone seeking to delve into their subconscious, immersing themselves in dreamlike worlds and experiencing the thrill of daydreaming. You'll let your imagination run wild, enjoying the peace and serenity of a place created just for you, with attentive staff ready to provide everything you could ever need. ",
        immagineUrl: "https://romoletto.altervista.org/wp-content/uploads/2019/10/Isola-isole-Interpretazione-dei-sogni.jpg ",
        url: "/sogno-ing",
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
            "https://www.parco-divertimenti-roma.it/wp-content/uploads/2020/11/parchi-acquatici.jpg",
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
                lingua="Traduzione in Italiano"
                link="/"

            />

            <Products
                title="Entrance Fee"
                description="Here you will find all the costs for entering our water park!"
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
                            subtitle="From June 20th until August 15th!"
                            columnCount={1}
                        >
                            We present our Pool Party for young people, an unforgettable celebration to dance, relax and have fun together!

                            Immerse yourself in our crystal-clear pool and let the warm summer sun pamper you. Music, entertainment and games will make your day unique and unforgettable. Show off your funniest and most original swimsuits and enjoy the many activities we have prepared for you!

                            There will be plenty of fresh drinks and delicious bites to keep you energized and dancing until sunset. Don't miss the opportunity to make new friends and spend a day full of fun together.<br /><br /><br /><br />
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
                            title="Discover the underwater world with our mini submarines!"
                            subtitle="Bookings available all summer!"
                            columnCount={1}
                        >
                            Come and discover an unforgettable experience among the wonders of the sea! With our mini submarines, you can explore the depths of the ocean and admire the beauty of underwater creatures in a comfortable and safe way. Whether you are a sea enthusiast or simply looking for a new adventure, this summer activity is perfect for you! Don't miss the opportunity to live a unique and unforgettable experience.<br /> <br /> <br />
                            <Link href="/sottomarino-ing"><Button variant="contained" color="success">Learn more about the costs!</Button></Link>
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




