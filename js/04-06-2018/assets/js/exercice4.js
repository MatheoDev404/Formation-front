/* -------------------------------
            EXERCICE
En partant du travail déjà réalisé sur la page.
Créez directement dans la page une balise <h1></h1> ayant comme contenu : 
"Titre de mon Article".

Dans cette balise, vous créerez un lien vers une url de votre choix.
BONUS : Ce lien sera de couleur Rouge et non souligné.
-------------------------------- */


var h1 = document.createElement('h1');

var a = document.createElement('a');
    a.textContent = "Titre de mon article";
    a.href = "http://google.fr/";
    a.style.color = "red";
    a.style.textDecoration = "none";

h1.appendChild(a);
document.body.appendChild(h1);



