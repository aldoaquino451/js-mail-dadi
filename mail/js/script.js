
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
4. Crea un elemento html in js 
5. Stampa un testo che conferma l'esito dentro l'elemento creato
*/


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


// 1. 
const userEmail = prompt('Scrivi la tua e-mail:');
// const userEmail = 'MassimoAzzini@gmail.com';

// 4.
const section = document.querySelector('section');
const h1 = document.createElement('h1');

const error = 'error';


let emailValidation = false;

// 3.
for ( let i = 0; i < emailList.length; i++ ) {
  
  let message;
  
  if ( userEmail !== emailList[i] ) {
    message = emailList[i];

    console.log(error)
    
    // emailValidation = true
  } 
  
  // console.log(emailValidation)
  
  // console.log(message)    
  // h1.append(message);


}

// if ( emailValidation = false ) {
//   console.log('error')
// }


