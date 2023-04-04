let elencoUtenti = [
  {
    nome : "Mariolino",
    cognome : "Mariolini",
    matricola : 70,
    voti : [
      Italiano = 4,
      Francese = 7,
      Spagnolo = 9,
      Inglese = 6,
    ],
  },

  {
    nome : "Paolo",
    cognome : "Paolini",
    matricola : 17,
    voti : [
      Italiano = 4,
      Francese = 5,
      Spagnolo = 8,
      Inglese = 8,
    ],
  },

  {
    nome : "Franco",
    cognome : "Franchini",
    matricola : 70,
    voti : [
      Italiano = 9,
      Francese = 7,
      Spagnolo = 9,
      Inglese = 6,
    ],
  },

  {
    nome : "Pierpaolo",
    cognome : "Lavanda",
    matricola : 15,
    voti : [
      Italiano = 4,
      Francese = 6,
      Spagnolo = 6,
      Inglese = 6,
    ],
  },

  {
    nome : "Giuseppe",
    cognome : "Ottomano",
    matricola : 68,
    voti : [
      Italiano = 9,
      Francese = 7,
      Spagnolo = 9,
      Inglese = 6,
    ],
  },

  {
    nome : "Asia",
    cognome : "Gialli",
    matricola : 66,
    voti : [
      Italiano = 10,
      Francese = 7,
      Spagnolo = 6,
      Inglese = 6,
    ],
  },
];

elencoUtenti.forEach(utente => {
  let somma = 0;
  utente.voti.forEach(voto => somma += voto);
  media = somma / elencoUtenti[5].voti.length;
});

const meideUtenti = elencoUtenti.map(utente => {
  return console.log(utente.nome + " " + utente.cognome + " " + media) 
  
})



