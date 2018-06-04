// DOM Document Object Model

// Le DOM est une interface de developpent en JS, pour HTMl.
// Grace au DOM, je vais être en mesure d'acceder en encore modifier mon HTMl.
// L'objet Document est chargé dans chaque pages demon navigateur.
// Comment puis-je faire pour récuperer les differentes informations de ma page HTML?


// document.getElementById();
var bonjour = document.getElementById("bonjour");
console.log(bonjour);


// document.getElementsByClassName();
// Renvois un tableau JS avec mes elements HTML (Collection HTML).
var contenu = document.getElementsByClassName('contenu');
console.log(contenu);



// document.getElementsByTagName();
var tag = document.getElementsByTagName('span');
console.log(tag);