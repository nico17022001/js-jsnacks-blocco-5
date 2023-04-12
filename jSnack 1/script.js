/*
PASSAGGI 
1-Creo un array con tutti gli utenti 
2-Creo una costante per filtrare gli utenti minorenni
3-Creo una costante per filtrare gli utenti maggiorenni
4-creo un console.log(minorenni)
4-creo un console.log(maggiorenni)

*/


let elencoUtenti = [
  {
    nome : "Mariolino",
    cognome : "Mariolini",
    eta : 70,
  },
  {
    nome : "Paolo",
    cognome : "Paolini",
    eta : 17,
  },
  {
    nome : "Franco",
    cognome : "Franchini",
    eta : 70,
  },
  {
    nome : "Pierpaolo",
    cognome : "Lavanda",
    eta : 15,
  },
  {
    nome : "Giuseppe",
    cognome : "Ottomano",
    eta : 68,
  },
  {
    nome : "Asia",
    cognome : "Gialli",
    eta : 66,
  },
]

const minorenni = elencoUtenti.filter(utente => utente.eta < 18);
const maggiorenni = elencoUtenti.filter(utente => utente.eta > 65);

console.log(maggiorenni)
console.log(minorenni)

