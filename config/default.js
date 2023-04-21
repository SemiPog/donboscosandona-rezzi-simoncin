import Logos from '/components/Logos'
import Footer from '/components/Footer'

export const siteName = "Dreams Island"
export const siteTitle = "Dreams Island - La Sueños Locos S.A"
export const siteDescription = ""

export const menu = [
    { title: 'Home', url: '/' },
    { title: 'Chi siamo', url: '/chi-siamo' },
    { title: 'Who are we', url: '/chi-siamo-ing'},
    { title: 'Dove siamo', url: '/dove-siamo' },
    { title: 'Where are we', url: '/dove-siamo-ing'}
]

export const header = <Logos
    logoUrl="https://archive.donboscosandona.it/img/ck/96448406eee9201111c084f9f70330b052012ac5.png"
    sponsorUrl="https://archive.donboscosandona.it/img/ck/20b01b69c5c5586ea921a398e557a7767d004959.png"
    color="#FFFFFF"
    
/>

const menuFooter = [

]

const socials = [
    { title: 'Facebook', imageUrl: 'https://archive.donboscosandona.it/img/ck/1cffc9d197e15de1f72a89477cc75e56073980b0.png', url: 'https://www.facebook.com/donboscosandona/?fref=ts' },
    { title: 'Instagram', imageUrl: 'https:///archive.donboscosandona.it/img/ck/5c1c2a74750c62b3349df0d555ea9a26d1c6e8af.png', url: 'https://www.instagram.com/donboscosandona/' },
    { title: 'Youtube', imageUrl: 'https://archive.donboscosandona.it/img/ck/36189d32ee9d4be0a612c292a430106948c85bfc.png', url: 'https://www.youtube.com/channel/UCZ2sxe9w7Yf9lP4nl65oAvg' },
    { title: 'Linkedin', imageUrl: 'https://archive.donboscosandona.it/img/ck/55ed185e94be2aa2a1d854487273a4d139e5475f.png', url: 'https://www.linkedin.com/company/c-f-p-don-bosco/' },
]

let images = [
    { title: '', imageUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nun-spa-ph-spezia-13-1658350322.jpg?crop=1xw:0.75xh;center,top&resize=1200:*', },
    { title: '', imageUrl: 'https://cbcolido.com/site/assets/files/1029/beach-sunset.1200x600.jpg', },
    { title: '', imageUrl: 'https://www.lagodigardaeventi.it/wp-content/uploads/2021/03/aquapark-caneva.jpeg', },

]

export const footer = <Footer
    imageUrl="https://source.unsplash.com/random"
    color="#272727"
    opacitycolor="1"
    opacity={1}
    title1="About Us"
    description1="Il nostro parco acquatico di lusso ti accoglie per un'esperienza indimenticabile in un'oasi di divertimento. Rilassati in piscina su comodi cuscini e gustati un'insalata di frutta fresca al nostro bar, oppure affronta l'emozione delle nostre attrazioni adrenaliniche o avvera i tuoi sogni più remoti! Con il nostro servizio ineguagliabile, le tue vacanze non potranno che essere indimenticabili.
"
    title2="Social Feed"
    socials={socials}
    title3=""
    images={images}
    menu={menuFooter}
    copyright="Copyright (C) 2023 9dreams Agency."
/>