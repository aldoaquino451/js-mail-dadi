
/*
1. Salva un lista di email
2. Salva l' email dell'utente
3. Salva una flag con validazione false 
4.a. Confronta l'email dell'utente con ogni elemento della lista
  b. Continua il confronto finchè non trovi una mail valida
  c. Se è uguale, rendi la validazione true e stampa un messaggio di riuscita
  d. Stampa un messaggio di errore in tutti gli altri casi 
5. Crea un elemento html in javascript
6. Stampa un il messaggio di errore/riuscita nell'html
*/


// 1.
const emailList = [
  'AldoAquino@gmail.com',
  'MassimoAzzini@gmail.com',
  'VahidBan@gmail.com',
  'GiacomoBechini@gmail.com',
  'ThomasBortolotti@gmail.com',
  'CarmeloCammalleri@gmail.com',
  'AlessandroCingolani@gmail.com',
];

// 2. 
const userEmail = prompt('Inserisci la tua email:')

// 3.
let validation = false;

let message;

// 4a.
for ( let i = 0; i < emailList.length; i++ ) {
  
  // 4b.
  if ( !validation ) {

    // console
    console.log(emailList[i]);

    // 4c.
    if (userEmail === emailList[i]) {

      // console 
      console.log('---- validazione in corso ----');

      message = 'La mail ' + emailList[i] + ' è presente nella lista';
      validation = true;
    } 
    // 4d.
    else {

      message = 'La mail NON è presente nella lista';
    }  
  } 
}

// console 
console.log(message);

// 5.
const outputContainer = document.querySelector('.my-section');
const outputContent = document.createElement('h1');
outputContainer.append(outputContent);

// 6.
outputContent.append(message);


    


