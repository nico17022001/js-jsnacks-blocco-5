const classe = [
  {
    id : 213,
    nome : "Marco della Rovere",
    voti : 78,
  },
  
  {
    id : 110,
    nome : "Paola Cortellessa",
    voti : 96,
  },

  {
    id : 250,
    nome : "Andrea Mantegna",
    voti : 48,
  },

  {
    id : 145,
    nome : "Gaia Borromini",
    voti : 74,
  },

  {
    id : 196,
    nome : "Luigi Grimaldello",
    voti : 68,
  },

  {
    id : 102,
    nome : "Piero della Francesca",
    voti : 50,
  },

  {
    id : 120,
    nome : "Francesca da Polenta",
    voti : 84,
  },
]

const nomiUtenti = classe.map((studente) => {
  return studente.nome.toLocaleUpperCase() 
})

/*
const utentiSup70 = classe.map((studente) => {
  if (studente.voti > 70) {
    return studente.nome 
  }
  
}) 

*/const utentiSup70 = classe.filter( elemento => elemento.voti > 70) 

  const prova = classe.filter(elemento => elemento.voti > 70 && elemento.id > 120) 

console.log(utentiSup70)

console.log(prova) 

