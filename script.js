/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero o della passeggera.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
    - il prezzo del biglietto è definito in base ai km (0.21 € al km)
    - va applicato uno sconto del 20% per i minorenni
    - va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va emesso (presentato all'utente) in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
*/

let age = prompt ("Ciao, per favore inserisci quanti anni hai !");
console.log(age);

let kilometers = parseInt ( prompt ("Quanti chilometri vuoi percorrere ?"));
console.log(kilometers);

let ticket;
let priceKm = 0.21;

ticket = kilometers * priceKm ;
console.log(ticket)
