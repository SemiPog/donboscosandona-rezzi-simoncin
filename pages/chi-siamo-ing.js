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
                title="Dreams Island - La Sueños Locos S.A. "
                description=""
                imageUrl="https://bfwellness.it/wp-content/uploads/2023/03/chisiamo.jpg"
                lingua="Traduzione in Italiano"
                link="/chi-siamo"
            />
            <Paragraph
                title="La Sueños Locos S.A. "
                subtitle=""
                backgroundImageUrl=""
                backgroundColor="#FFFFFF"
                opacity={0.1}
                blur="0.3rem"
                color="Black"
                columnCount={1}
                maxWidth="lg"
                sx={{}}
            >
                Our company focuses on offering innovative products and services. We are a young but dynamic company, founded on the reflections of a team of experts who have a passion for innovation and technology.

                Our mission is to provide services that can improve people's lives and bring a sense of well-being and happiness. We focus on experimentation and innovation to develop services that have a positive impact on people's lives and society.

                Furthermore, we are committed to ensuring the highest quality of services through constant research and development, which allows us to meet the most demanding market demands.

                We are proud of our corporate culture, which prioritizes collaboration and creativity. We believe that diversity is a valuable resource and respect its value in our daily business.

                Finally, we are committed to being aware of our social and environmental responsibility, which is why we actively support projects and initiatives that promote sustainability and social justice.

                Thank you for your attention and for the opportunity to introduce our company. We are always available to answer all your questions and provide you with detailed information about our services and products. Contact us!
            </Paragraph>
        </Layout>
    )
}