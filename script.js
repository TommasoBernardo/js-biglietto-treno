/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero o della passeggera.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
    - il prezzo del biglietto è definito in base ai km (0.21 € al km)
    - va applicato uno sconto del 20% per i minorenni
    - va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va emesso (presentato all'utente) in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
*/


//Dichiaro quanti anni ho
let age = prompt ("Ciao, per favore inserisci quanti anni hai !");
console.log(age);

//dichiaro quanti kilometri voglio percorrere
let kilometers = parseInt ( prompt ("Quanti chilometri vuoi percorrere ?"));
console.log(kilometers);

//variabili per il prezzo del biglietto
let ticket;
let priceKm = 0.21;

//calcolo il prezzo del biglietto
ticket = kilometers * priceKm ;
console.log(ticket);

//variabili sconto 20% per i minorenni e 40% per gli over 65
let discountMinors = 20 * ticket / 100;
let discountOver = 40 * ticket /100 

let priceDiscount;

if ( age < 18 ){
    priceDiscount = ticket - discountMinors;
    console.log(priceDiscount)
}


