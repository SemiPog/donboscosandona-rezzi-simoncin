import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Paragraph from '@/components/Paragraph'

import Head from 'next/head'
import Image from 'next/image'
import Layout from '/components/Layout'
import LandingHero from '/components/LandingHero.js'
import Features from '/components/Features'
import Carousel from '/components/Carousel'
import PostInEvidenza from '/components/PostInEvidenza'
import Products from '/components/Products'
import Testimonials from '/components/Testimonials'
import Team from '/components/Team'
import Post from '/components/Post'
import { Button, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Link from 'next/link'

let menu = [
    { title: 'Chi siamo', url: '/chi-siamo' },
    { title: 'Contatti', url: '/contatti' },
    { title: 'Dove siamo', url: '/dove-siamo' },
    { title: 'Trasparenza', url: '/trasparenza' },
]



export default function Home({ datiArticoli }) {
    return (
        <Layout>
            <LandingHero
                opacity={0.6}
                siteName="CFP DON BOSCO"
                title="Didattica"
                description="Scopri qui le modalità didattiche al nostro CFP Don Bosco"
                buttonUrl={'https://youtu.be/jRDREPCdpCE'}
                buttonText="Guarda il video"
                imageUrl="/images/didattica/principale.jpg"
                menu={menu}
            />
            <Paragraph
                title="Il Progetto Ipad"
                subtitle="Formazione professionale, innovazione e futuro"
                imageUrl="/images/didattica/foto1.jpg"
                backgroundColor="white"
              
            >
                Il nostro Centro sta vivendo da alcuni anni un’esperienza di innovazione pedagogica e didattica che si basa su un modello attivo nel quale l’insegnante, da fornitore di conoscenze, diventa facilitatore di processi di ricerca e di interazione significativa.
                Il mondo, noi stessi e gli altri sono le fonti di un processo di apprendimento più ampio, che si concretizza con la ricerca e l'utilizzo di risorse disponibili , in funzione di mandati di lavoro complessi ed interdisciplinari.
                Ai nostri giovani vengono assegnati compiti reali, da svolgere in gruppo, e viene richiesta la produzione di oggetti multimediali che uniscono vari ambiti disciplinari.
                L’adozione del tablet nella didattica e un grande investimento tecnologico nella nostra infrastruttura di rete permettono ai nostri giovani di sperimentare modalità didattiche attive quali la flipped classroom, il cooperative learning, il peer to peer e altro ancora.
                L’utilizzo dell’iPad richiede il rispetto di alcune condizioni, sottoscritte a inizio anno da genitori e giovani.


            </Paragraph>
        </Layout>
    )
}
