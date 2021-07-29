// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// creo un'array con all'interno 5 numeri casuali e lo visualizzo in console e con un alert
let numeri = [];
for (let i = 0; i < 5; i++) {
    numeri.push(getRndInteger(1, 100))
}
alert(numeri);

// creo un'array vuoto per i numeri inseriti dall'utente, uno per quelli eventualmente azzeccati e setto a 0 il numero di quelli azzeccati
let listaNumeriUtente = [];
let listaAzzeccati = [];
let azzeccati = 0;
setTimeout(function() { // dopo 3 secondi:
    // pusho 5 volte i numeri inseriti dall'utente e li stampo in console
    for (let i = 0; i < 5; i++) {
        let numeroUtente = parseInt(prompt("inserisci uno dei numeri visti in precedenza compresi tra 1 e 100"));
        listaNumeriUtente.push(numeroUtente);
    }
    console.log("hai inserito: " + listaNumeriUtente);
    console.log("numeri da ricordare: " + numeri)

    // ciclo per il numero di elementi inseriti (in questo caso 5)
    for (let i = 0; i < listaNumeriUtente.length; i++) {
        if (numeri.includes(listaNumeriUtente[i])) {
            // aumento di 1 la let "azzeccati" e pusho i numeri azzeccati
            azzeccati++
            listaAzzeccati.push (listaNumeriUtente[i])
        }
    }
    // stampo il risultato in console
    console.log("hai azzeccato " + azzeccati + " numeri: " + listaAzzeccati);
}, 3 * 1000);


// FUNZIONI
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}