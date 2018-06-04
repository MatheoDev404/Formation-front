// MANUPILATION DES CONTENUS

// Nouvelle Syntaxe EcmaScript 6
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Fonctions/Fonctions_fl%C3%A9ch%C3%A9es
l = e => console.log(e);

var google = document.getElementById('google');
l('google');

// On recupere les attribut href de l'objet google.
l(google.href);
l(google.id);
l(google.className);
l(google.textContent);

//Modification de mon contenu.
google.textContent ="Mon lien vers Google"

//AJOUTER UN ELEMENT DANS MA PAGE

// 1 : LA fonction document.creatElement() permet de générer un nouvel élément dans le DOM; que j pourrais modifier par la suite avec des méthodes.
//ce nouvel élément est plaé en mémoire

// 2 l'ajouter à la page

// definition de l'élément
var span = document.createElement('span');

// ajout des attributs
span.id = "monSpan";
span.textContent = " Mon beau text en Js ";

// Ajout de l'élément dans la page.
google.appendChild(span);