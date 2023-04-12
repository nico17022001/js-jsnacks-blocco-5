const squadre = [
  {
    nome : "Gialli",
    gol : 0,
    subiti : 0,
  },

  {
    nome : "Rosso",
    gol : 0,
    subiti : 0,
  },

  {
    nome : "Nero",
    gol : 0,
    subiti : 0,
  },

  {
    nome : "Verde",
    gol : 0,
    subiti : 0,
  },

  {
    nome : "Blu",
    gol : 0,
    subiti : 0,
  },
]

function random() {
  return  Math.floor(Math.random() * 10);
}

const squadraNew = squadre.map((squadra) => {
  squadra.gol = random()
  squadra.subiti = random()
  return squadra
})

console.log(squadraNew)

const squadre2 = squadre.map((squadra) =>{
  const {nome,subiti} = squadra
  const prova = {nome, subiti}
  return prova
})


console.log(squadre2)


