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
        title="Raggiungici in Aereo!"
        subtitle=""
        leftImageUrl="https://hd2.tudocdn.net/1005296?w=1200&h=900"
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
        Se state pianificando una vacanza rilassante su un'isola remota, il modo migliore per arrivarci potrebbe essere la barca. Non solo avrete la possibilità di ammirare magnifici panorami lungo il tragitto, ma anche di godere dell'acqua cristallina e del sole.

        Il primo passo per arrivare all'isola con la barca è fare una ricognizione dei porti e degli ormeggi vicino alla destinazione. Una volta individuati gli ormeggi più vicini, potrete poi valutare la distanza tra il porto di partenza e l'isola, in base alle vostre esigenze di tempo e budget.

        Dopo aver individuato la compagnia di noleggio, assicuratevi di controllare le attrezzature di sicurezza, come giubbotti salvagente e kit di primo soccorso, per garantire che la vostra avventura a bordo sia sempre sicura.

        Una volta saliti a bordo, assicuratevi di seguire le istruzioni del personale addetto alla barca sui protocolli di sicurezza e sulla mappa per raggiungere la destinazione. Durante la navigazione, è importante restare vigili e osservare il mare per evitare eventuali pericoli.

        Alla fine del viaggio, potrete godere della bellezza dell'isola remota e celebrare l'arrivo a terraferma. La barca può essere una scelta ideale per coloro che vogliono sperimentare un nuovo modo di viaggiare e godere di posti meravigliosi in modo diverso. Ricordate sempre di rispettare la natura e l'ambiente circostante durante il vostro soggiorno sull'isola.

        ù
      </Paragraph>
      <Paragraph
        topImageUrl="https://www.donnamoderna.com/content/uploads/2020/05/ecoterapia.jpg"
        title="Perché il tempo spensierato non sia tempo perso"
        subtitle="Saluto del Direttore"
        columnCount={2}
      >
        Quando finalmente suona l’ultima campanella dell’anno scolastico inizia
        quel periodo tanto atteso dove finalmente si può fare ciò che si vuole,
        senza troppi vincoli o regole, sveglie troppo mattiniere, insegnanti
        esigenti e compiti che preoccupano. Spensieratezza! Questa l’attesa più
        grande durante l’ultima parte dell’anno scolastico. Purtroppo tanto è
        grande l’attesa delle vacanze, tanto è veloce il tempo in cui la
        spensieratezza diventa noia, la libertà diventa ozio e pigrizia e il
        tempo libero rischia di diventare tempo perso.
      </Paragraph>
      <Paragraph
        backgroundImageUrl="https://www.donnamoderna.com/content/uploads/2020/05/ecoterapia.jpg"
        backgroundColor="orange"
        opacity={0.8}
        blur="0.2rem"
        color="white"
        title="Perché il tempo spensierato non sia tempo perso"
        subtitle="Saluto del Direttore"
      >
        Quando finalmente suona l’ultima campanella dell’anno scolastico inizia
        quel periodo tanto atteso dove finalmente si può fare ciò che si vuole,
        senza troppi vincoli o regole, sveglie troppo mattiniere, insegnanti
        esigenti e compiti che preoccupano. Spensieratezza! Questa l’attesa più
        grande durante l’ultima parte dell’anno scolastico. Purtroppo tanto è
        grande l’attesa delle vacanze, tanto è veloce il tempo in cui la
        spensieratezza diventa noia, la libertà diventa ozio e pigrizia e il
        tempo libero rischia di diventare tempo perso.
      </Paragraph>

    </Layout>
  )
}

