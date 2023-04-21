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
                title="Base Plan"
                description=""
                imageUrl="https://www.fraseryachts.com/uploads/image/yachts/mini-k/Palumbo_yacht_for_charter_Mini-k_17594.jpg"
                lingua="Traduzione in Italiano"
                link="/pacchetto-base"
            />
            <Paragraph
                title="Base Plan"
                subtitle="With the basic package, you will be transported to our island on a mini yacht."
                backgroundImageUrl="https://i.ytimg.com/vi/fc_yDzLjoMk/maxresdefault.jpg"
                backgroundColor="#FFFFFF"
                opacity={0.5}
                blur="0.2rem"
                color="black"
                columnCount={1}
                maxWidth="lg"
                sx={{}}
            >
                The Basic Package allows you to unlock all the less expensive options, but we still provide you with everything you need to enjoy the water park. With the Basic Package, you'll be able to access all the water park attractions, from the most relaxing to the most exciting. You'll enjoy a wide range of pools, water slides, and many water games! Additionally, our staff will always be happy to help you. With this package, you <strong>CANNOT</strong> skip the line, so you'll have to wait for your turn.
            </Paragraph>
        </Layout>
    )
}