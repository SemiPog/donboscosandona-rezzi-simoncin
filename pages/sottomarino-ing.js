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
                title="Discover the underwater world with our mini submarines!"
                description=""
                imageUrl="https://www.unicoebello.it/wp-content/uploads/2020/08/Pedal-Powered-Designs-2.jpg"
                lingua="Traduzione in Italiano"
                link="/sottomarino"
          />
            <Paragraph
                title="Price list"
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
                    - 30-minute excursion: about 55-60 euros per person<br/>
                    - 1-hour excursion: about 85-70 euros per person<br/>
                    - Family package (2 adults + 2 children) for 30 minutes: about 50-55 euros<br/>
                    - Romantic package for 2 people with aperitif on board for 1 hour: about 100-120 euros<br/>
                    - Night excursion with starlit diving for 1 hour: about 130-140 euros per person<br/>
                    Of course, prices may vary depending on the destination, duration of the excursion, and additional services offered. Maintenance and storage costs of the submarines should also be taken into consideration, as they may impact the activity's costs.<br/> It is possible to pay a fee to move up in the reservation list, and the price varies depending on how much one wishes to move up.
            </Paragraph>
        </Layout>
    )
}