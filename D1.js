/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* Esistono diversi datatype in JavaScript, ovvero:
-Di tipo STRINGA: Sono dati che hannno principalmente lettere come dati e per essere distinti da altri tipi vanno messi dentro le virgolette "". Esempio: let nome = "Daniel";
-Di tipo NUMERICO: Sono dati che hanno invece numeri come dati e non vanno messi nelle virgolette. Esempio: let anni = 21;
-Di tipo BOOLEANO: Il dato booleano può avere solo due stati (true o false). Esempio: let hasBlackHair = true;
-UNDEFINED e NULL: Sono molto simili, vogliono dire che al momento il valore è assente, UNDEFINED è generato automaticamente se si lascia vuoto il campo, mentre NULL è messo dal sviluppatore
intenzionalmente per far capire che per il momento è vuoto.
*/

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let name = "Daniel";

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
console.log(12 + 20);


/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

name = "Rrapi";

const anni = 21;
console.log(anni); 
// anni = 30;       In questo modo si potrebbe creare un errore, dato che const è una costante che non può cambiare il valoro al suo interno 

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

console.log(4 - x);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = "john"
let name2 = "John"
console.log(name1 === name2);

// EXTRA 
name2 = "john"
console.log(name1 === name2);

