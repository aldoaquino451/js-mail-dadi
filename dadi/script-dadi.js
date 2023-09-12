
/*
1. Genera un numero random per l'utente 
2. Genera un numero random per il computer
3. Confronta i due valori, possiamo ottenere:  a < b  |  a = b  |  a > b
4. Nel primo caso vince il computer quindi stampa il messaggio di vittoria
5. Nel terzo caso vince l'utente quindi stampa il messaggio di vittoria
6. Nel caso dell'uguaglianza stampa un messaggio in cui chiedi di ripetere l'operazione 
7. Ripeti l'operazione
*/  

const randomUser = Math.ceil(Math.random() * 10);
const randomPc = Math.ceil(Math.random() * 10);

console.log(randomUser);
console.log(randomPc);


if ( randomUser < randomPc) {
  console.log('The winner is PC');
}
else if ( randomUser > randomPc) {
  console.log('The winner is USER');
}
else {
  console.log('Draw');
}
