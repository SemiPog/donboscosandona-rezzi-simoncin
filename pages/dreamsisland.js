import Layout from '/components/Layout'
import LandingHero from '/components/LandingHero2.js'
import Paragraph from 'components/Paragraph'
import Products from "/components/Products";
export default function Home() {
    return(
        <Layout>
             <Products
        title="Costo Entrata "
        description="Qui troverai tutti i costi per entrate nel nostro parco acquatico!"
        cardWidth={4}
        products={prodotti}
      />
        <LandingeHero
        opacity={0.2}
        title="Dreams Island"
        description="">
            
        </LandingeHero>
        </Layout>
    )
}
let prodotti = [
    {
      title: "Costo base ",
      category: "",
      description:"con questo piano hai a disposizione: 1 ombrellone e 2 sdraio",
      immagineUrl: "",
      url: "",
    },
    {
      title: "Energia",
      category: "QUALIFICA DI OPERATORE DI IMPIANTI TERMO-IDRAULICI",
      description:
        "Interviene nell'installazione, collaudo e manutenzione di impianti termici, idraulici, di condizionamento e fotovoltaici, con una particolare attenzione al risparmio energetico, anche grazie alla building automation.",
      immagineUrl:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      url: "/energia",
    },
    {
      title: "Informatico",
      category: "DIPLOMA DI TECNICO INFORMATICO",
      description:
        "Installa e configura hardware e software, esegue la manutenzione di sistemi, reti e terminali utente, fornisce assistenza tecnica, effettua l'elaborazione e la manutenzione di dati su archivi digitali. Con il quarto anno in Sistema Duale diventa tecnico sviluppatore di Soluzioni Software.",
      immagineUrl:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      url: "/informatico",
    },
  ];




