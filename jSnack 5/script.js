const biciclette = [
  {
    nome : "Rossa",
    peso : 20,
  },

  {
    nome : "Gialla",
    peso : 13,
  },

  {
    nome : "Blu",
    peso : 12,
  },

  {
    nome : "Verde",
    peso : 11,
  },

  {
    nome : "Nera",
    peso : 10,
  }
]


const biciPiuLeggera = biciclette.reduce((biciPrecedente,biciSuccessiva) => biciPrecedente.peso < biciSuccessiva.peso ? biciPrecedente : biciSuccessiva)


const div = document.querySelector("div")

const {nome, peso} = biciPiuLeggera

div.innerHTML = `<h1>La bici più leggera è ${nome} ${peso}</h1>`

/*{
  if (biciPrecedente.peso < biciSuccessiva.peso) {
  return biciPrecedente
  }else {
    return biciSuccessiva
  }
})*/



