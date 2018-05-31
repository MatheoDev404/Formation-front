// FONCTIONS

// Declaration d'une fonction
function bonjour(){
    alert('bonjour');
};

// On appel la fonction.
// bonjour();

// Declaration d'une fonction avec parametres

var nom     = "Stunault",
    prenom  = "Mathéo";

function ditBonjour(Nom,Prenom) {
    document.write('<p> Bonjour <strong>' +  Prenom + " " + Nom + "</strong> !</p>");
};

ditBonjour(nom,prenom);


// Exercice
function addition(nb1,nb2) {
   return nb1 + nb2;
};

document.write( "<p>" + addition(1, 5) + "</p>");