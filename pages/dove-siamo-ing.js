import Layout from '/components/Layout';
import Paragraph from 'components/Paragraph';
import LandingHero from '/components/LandingHero2'
import Products from "/components/Products";
import Carousel from '/components/Carousel'
import Maps from '/components/Maps';
import Logos from '/components/Logos'
import Footer from '/components/Footer'




export default function Home() {

  return (
    <Layout>

      <Paragraph
        title="Reach us by helicopter!"
        subtitle=""
        leftImageUrl="https://robbreport.it/wp-content/uploads/2022/01/HX50_2.jpg"
      >
        The island is a highly coveted tourist destination for both its natural beauty and its mild, sunny climate that characterizes most of the year. To reach the island, various means of transportation can be used, including air travel.

        First and foremost, it is important to choose a departure airport that has direct flights to the airport on the island, or to make stops at other airports. Additionally, it is necessary to purchase the air ticket in advance in order to have a better chance of finding convenient fares.

        Upon arrival at the airport, some operations will need to be carried out, including identity document control, baggage delivery at check-in, and passage through security checks. It is recommended to arrive at the airport with plenty of time in order to avoid delays and stress.

        Once on board the plane, passengers can enjoy onboard services such as watching movies or listening to music, as well as tasting a meal or a snack. During the flight, they can admire postcard-perfect views, such as the archipelago of nearby islands or the crystal-clear sea that can be observed from above.
      </Paragraph>
      <Paragraph
        title="Reach us by boat!"
        subtitle=""
        rightImageUrl="https://www.nauticaideaverde.it/wp-content/uploads/2021/02/barca-cabinata.jpg"
      >
        If you are planning a relaxing vacation on a remote island, the best way to get there may be by boat. Not only will you have the opportunity to admire magnificent views along the way, but also to enjoy the crystal-clear water and the sun.

        The first step to reaching the island by boat is to survey the ports and moorings near the destination. Once you have identified the closest moorings, you can then evaluate the distance between the starting port and the island based on your time and budget needs.

        After identifying the rental company, make sure to check safety equipment such as life jackets and first aid kits to ensure your adventure on board is always safe.

        Once on board, make sure to follow the boat crew's safety protocols and map to reach the destination. During navigation, it is important to remain vigilant and observe the sea to avoid potential dangers.

        At the end of the journey, you can enjoy the beauty of the remote island and celebrate your arrival on land. The boat can be an ideal choice for those who want to experience a new way of travelling and enjoy wonderful places differently. Always remember to respect nature and the surrounding environment during your stay on the island.

      </Paragraph>
      <Paragraph
        topImageUrl="https://www.donnamoderna.com/content/uploads/2020/05/ecoterapia.jpg"
        columnCount={2}
      >
      </Paragraph>

    </Layout>
  )
}

