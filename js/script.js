
/*
1. Genera un numero random per l'utente 
2. Genera un numero random per il computer
3. Confronta i due valori, possiamo ottenere:  a < b  |  a = b  |  a > b
4. Nel primo caso vince il computer quindi stampa il messaggio di vittoria
5. Nel terzo caso vince l'utente quindi stampa il messaggio di vittoria
6. Nel caso dell'uguaglianza stampa un messaggio in cui chiedi di ripetere l'operazione 
7. Ripeti l'operazione
*/

/*
1. Dai la possibilità all'utente di inserire la propria email
2. Crea una lista con tutte le mail da confrontare 
3. Confronta l'email utente con tutti gli elementi della lista ( ciclo for )
4. Scrivi un testo che conferma l'esito
*/


// 1. 
const userEmail = prompt('Scrivi la tua e-mail:');

// 2.
const emailList = [
  'AldoAquino@gmail.com',
  'MassimoAzzini@gmail.com',
  'VahidBan@gmail.com',
  'GiacomoBechini@gmail.com',
  'ThomasBortolotti@gmail.com',
  'CarmeloCammalleri@gmail.com',
  'AlessandroCingolani@gmail.com',
];

// 3.
for ( let i = 0; i < emailList.length; i++ ) {

  console.log(emailList[i]);
  
}


if ( userEmail === emailList[0] ) {
 console.log('ok');
} else {
  console.log('error');
}