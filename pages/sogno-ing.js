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
                title="Dream Plan"
                description=""
                imageUrl="https://www.focus.it/site_stored/imgs/0006/029/sognare_shutterstock_625010075.1020x680.jpg"
                lingua="Traduzione in Italiano"
                link="/sogno"
            />
            <Paragraph
                title="Make your dreams become true!"
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
                The "Dream Package" is a unique experience that allows you to enter the world of your deepest and most revealing dreams. Created by a highly trained staff who is attentive to your every need, this service will take you from one end of an entire island exclusively dedicated to you.

                Your adventure begins with an exciting helicopter ride, where you can observe breathtaking landscapes from above and get a glimpse of what awaits you. Once you arrive on the island, you will be greeted by the staff who will take care of your every desire, ready to turn your dreams into reality.

                Going on a jungle hike or admiring beautiful white sand beaches is only the beginning of your dream adventure. The staff will be available 24 hours a day to fulfill your every request. With the help of cutting-edge technology, you will be able to experience monitoring of your brain activity during sleep to analyze your dreams and discover valuable information about your psychological state and emotions.

                The Dream Package is designed to offer you a complete sensory experience, with delicious food, exotic fragrances, and relaxing sounds. The staff will always be at your disposal to ensure that everything goes well, and they will be ready to satisfy your every desire, even the most extravagant.

                In short, the Dream Package is an unforgettable experience for those looking to explore their subconscious, immerse themselves in dream worlds, and experience the thrill of daydreaming. You will let go of your imagination and enjoy the peace and serenity of a place created specifically for you, with staff who are attentive to your every need.
            </Paragraph>
        </Layout>
    )
}

