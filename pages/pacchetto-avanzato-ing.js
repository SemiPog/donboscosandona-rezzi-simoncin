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
                title="Advanced Plan"
                description=""
                imageUrl="https://www.fraseryachts.com/uploads/image/yachts/mini-k/Palumbo_yacht_for_charter_Mini-k_17594.jpg"
                lingua="Traduzione in Italiano"
                link="/pacchetto-avanzato"
                
            />
            <Paragraph
                title="Advanced Plan"
                subtitle="Con il pacchetto avanzato, verrete trasportati nella nostra isola su un eli"
                backgroundImageUrl="https://i.ytimg.com/vi/fc_yDzLjoMk/maxresdefault.jpg"
                backgroundColor="#FFFFFF"
                opacity={0.5}
                blur="0.2rem"
                color="black"
                columnCount={1}
                maxWidth="lg"
                sx={{}}
            >
                The advanced package for the water park is the perfect solution for adventure and thrill seekers.

                This package offers unlimited access to all slides and attractions at the water park, allowing visitors to experience the excitement of everything the park has to offer.

                Additionally, this package also includes exclusive benefits such as priority entrance to attractions, access to private changing cabins, and the ability to reserve tables at the park's restaurants.

                Visitors who choose the advanced package can also enjoy additional services such as massages, spa treatments, and recreational activities such as water fitness classes.

                In summary, the advanced package for the water park offers a complete, fun, and relaxing experience for anyone looking for an exciting adventure and a true escape from everyday life.
            </Paragraph>
        </Layout>
    )
}