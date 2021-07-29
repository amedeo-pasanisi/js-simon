// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// creo un'array con all'interno 5 numeri casuali e lo visualizzo in console e con un alert
let numeri = [];
for (let i = 0; i < 5; i++) {
    numeri.push(getRndInteger(1, 100))
}
console.log(numeri)
alert(numeri);

// creo un'array e, dopo 3 secondi, ci pusho per 5 volte il numero inserito dall'utente nel prompt e lo visualizzo in console
let listaNumeriUtente = [];
setTimeout(function() {
    for (let i = 0; i < 5; i++) {
        let numeroUtente = parseInt(prompt("inserisci uno dei numeri visti in precedenza"));
        listaNumeriUtente.push(numeroUtente);
    }
    console.log(listaNumeriUtente);
}, 3 * 1000);


// FUNZIONI
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}