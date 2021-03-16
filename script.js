/*Un alert() espone 5 numeri generati casualmente.
Da li parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.*/

//1. Alert che espone 5 numeri generati casualmente
var numeri = [];

while (numeri.length < 5) {
  var numero = Math.floor(Math.random() * 100) + 1;
  if (numeri.includes(numero) == false) {
    numeri.push(numero);
  }
};

alert("I numeri sono: " + numeri);

//2. Far partire un timer di 30 secondi
//3. L'utente deve inserire i numeri che ha visto precedentemente
var timer = 0;
var input = [];
var numeriTrovati = [];

var timerTrenta = setInterval(function () {
  timer += 1;
  if (timer == 30) {
    clearInterval(timerTrenta);
    for (var i = 0; i < 5; i++) {
      inputUtente = parseInt(prompt("Inserisci un numero alla volta"));
      input.push(inputUtente);
    };
    //4. Il software dice quanti e quali numeri sono stati indovinati
    for (var i = 0; i < numeri.length; i++) {
      if (numeri[i] == input[i]) {
        numeriTrovati.push(numeri[i]);
        console.log("Hai indovinato il: " + numeri[i]);
      } else {
        console.log("I numeri non indovinati sono: " + numeri[i]);
      }
    };
    console.log("Congratulazioni, hai indovinato " + numeriTrovati.length + " volte");
  };
}, 1000);
