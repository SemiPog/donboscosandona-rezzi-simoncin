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
        title="Raggiungici in elicottero!"
        subtitle=""
        leftImageUrl="https://robbreport.it/wp-content/uploads/2022/01/HX50_2.jpg"
      >
        L'isola è una meta turistica molto ambita sia per le sue bellezze naturali che per il clima mite e soleggiato che caratterizza la maggior parte dell'anno. Per raggiungere l'isola, è possibile utilizzare diversi mezzi di trasporto, tra cui l'aereo.

        Prima di tutto, è importante scegliere un aeroporto di partenza che abbia voli diretti verso l'aeroporto dell'isola, oppure effettuare scali presso altri aeroporti. Inoltre, è necessario acquistare il biglietto aereo in anticipo, in modo da avere maggiori possibilità di trovare tariffe convenienti.

        All'arrivo in aeroporto, si dovranno effettuare alcune operazioni, tra cui il controllo dei documenti d'identità, la consegna dei bagagli al check-in e il passaggio ai controlli di sicurezza. Si consiglia di presentarsi all'aeroporto con largo anticipo, in modo da evitare ritardi e nervosismo.

        Una volta imbarcati sull'aereo, si potranno gustare servizi di bordo come la visione di film o l'ascolto di musica, oltre a gustare un pasto o uno spuntino. Durante il volo, si potranno ammirare panorami da cartolina, come l'arcipelago delle isole vicine o il mare cristallino che si osserva dall'alto.
      </Paragraph>
      <Paragraph
        title="Raggiungici in Barca"
        subtitle=""
        rightImageUrl="https://www.nauticaideaverde.it/wp-content/uploads/2021/02/barca-cabinata.jpg"
      >
        If you are planning a relaxing vacation on a remote island, the best way to get there may be by boat. Not only will you have the opportunity to admire magnificent views along the way, but also enjoy crystal clear water and sunshine.

        The first step in getting to the island by boat is to survey the ports and moorings near the destination. Once you have identified the nearest moorings, you can then evaluate the distance between the starting port and the island, based on your time and budget requirements.

        After identifying the rental company, make sure to check the safety equipment, such as life jackets and first aid kits, to ensure that your adventure on board is always safe.

        Once on board, make sure to follow the instructions of the boat personnel regarding safety protocols and the map to reach the destination. During navigation, it is important to remain vigilant and observe the sea to avoid any potential dangers.

        At the end of the journey, you can enjoy the beauty of the remote island and celebrate your arrival on land. The boat can be an ideal choice for those who want to experience a new way of traveling and enjoy wonderful places in a different way. Always remember to respect nature and the environment during your stay on the island.

      </Paragraph>
      <Paragraph
        topImageUrl="https://www.donnamoderna.com/content/uploads/2020/05/ecoterapia.jpg"
        columnCount={2}
      >
      </Paragraph>

    </Layout>
  )
}

