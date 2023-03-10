import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

import Head from 'next/head'
import Layout from '/components/Layout'
import Carousel from '/components/Carousel'
import Settori from '/components/Settori'
import Articoli from '/components/Articoli'
import Esplora from '/components/Esplora'
import Eventi from '/components/Eventi'
import PostInEvidenza from '/components/PostInEvidenza'
import Post from '/components/Post'

import { getDatiArticoli } from '/lib/articoli'



export default function Home({ datiArticoli }) {
  return (
    <Layout>
      <Head />
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {
          }
        </Grid>
      </Container>
      <Settori />
      <Esplora />
      <Eventi />
      <Articoli dati={datiArticoli} />
    </Layout>
  )
}

export async function getStaticProps() {
  const datiArticoli = getDatiArticoli()
  return {
    props: {
      datiArticoli,
    },
  }
}
