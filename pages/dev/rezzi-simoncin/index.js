import Team from 'dev/rezzi-simoncin/Team'

let members = [
  {
    name: "Alec Thompson",
    role: "CEO / CO-FOUNDER",
    description: "And I love you like...",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/2018-05-12-_Cannes-L%27acteur_Michael_B._Jordan-2721_%2842075892224%29.jpg/1200px-2018-05-12-_Cannes-L%27acteur_Michael_B._Jordan-2721_%2842075892224%29.jpg",
    linkedinUrl: "https://www.linkedin.com/in/greta-simoncin-20b561240/?originalSubdomain=it",
    facebookUr: "https...",
    instagramUrl: "https...",
  },
  {
    name: "Alec Thompson",
    role: "CEO / CO-FOUNDER",
    description: "And I love you like...",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/21/Johnny_Depp_2020.jpg",
    linkedinUrl: "https://www.linkedin.com/in/roberta-rizzi-6001644/?originalSubdomain=it",
    facebookUr: "https://it-it.facebook.com/giuseppe.rezzi.5",
    instagramUrl: "https...",
  },
  {
    name: "Alec Thompson",
    role: "CEO / CO-FOUNDER",
    description: "And I love you like...",
    imageUrl: "https://cdn.tuttosport.com/images/2022/08/17/144221498-04b2075d-4571-48b9-8748-57e31205976d.jpg",
    linkedinUrl: "https://www.linkedin.com/in/steve-jobs-3b546b88/",
    facebookUr: "httphttps://it-it.facebook.com/eros.simoncins",
    instagramUrl: "https...",
  },
  {
    name: "Alec Thompson",
    role: "CEO / CO-FOUNDER",
    description: "And I love you like...",
    imageUrl: "https://www.youbee.it/wp-content/uploads/2023/03/Paolo-Bonolis-Youbee.it_.jpg",
    linkedinUrl: "https://www.linkedin.com/in/johnny-depp-36a449115/",
    facebookUr: "https://it-it.facebook.com/david.gofman.31",
    instagramUrl: "https...",
  }
]

export default function Home() {
  return (
    <Team
      title="Our Awesome Team"
      description="This is the paragraph......."
      members={members}
      cardWidth={3}
    />
  )
}