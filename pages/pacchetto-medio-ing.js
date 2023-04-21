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
                title="Medium Plan"
                description=""
                imageUrl="https://www.fraseryachts.com/uploads/image/yachts/mini-k/Palumbo_yacht_for_charter_Mini-k_17594.jpg"
                lingua="Traduzione in Italiano"
                link="/pacchetto-medio" 
            />
            <Paragraph
                title="Medium Plan"
                subtitle="With the medium package, you will be transported to our island on a yacht or with a Pilatus PC-6."
                backgroundImageUrl="https://i.ytimg.com/vi/fc_yDzLjoMk/maxresdefault.jpg"
                backgroundColor="#FFFFFF"
                opacity={0.5}
                blur="0.2rem"
                color="black"
                columnCount={1}
                maxWidth="lg"
                sx={{}}
            >
                The average package for the Water park offers an unforgettable experience filled with fun and relaxation at the same time. The offer includes 2 umbrellas and 4 sun loungers for maximum comfort located near the pools and bar, where you can sip on a refreshing drink and delight in summer delicacies.

                One of the most appreciated advantages is the possibility to skip the line and immediately enjoy the attractions, with something suitable for all ages. The water park is not just about fun but also offers relaxation and wellness, thanks to the presence of luxurious restaurants, spas, and relaxation centers, where you can rejuvenate your body and soul.

                If you want to arrive on the island in style, you can also do so aboard a yacht or a Pilatus PC-6, making your journey even more exclusive and unforgettable.

                In short, the average package for the Water park is a complete experience that will make you forget your daily stress, offering moments of absolute fun and relaxation.
            </Paragraph>
        </Layout>
    )
}