// LES EVENEMENTS 

// les évenements vont me permettre de déclancher une fonction, càd une serrie d'instructions suite à une action de mon utilisateur.
// OBJECTIF : Etre en mesure de capturer ces évenement afin d'executer une fonction.

// les évenements : MOUSE ( Souris )
        //=> click : au clic sur  un élément .
        //=> mouseenter : au survol de la zone d'un élément .
        //=> mouseleave : a la sorite de la zone d'un élément .

// les évenements : KEYBOARD ( Clavier )
        //=> keyup : relachement d'une touche.
        //=> kedown : enfoncemant d'une touche.

// les évenements : WINDOW ( fenetre du navigateur )
        //=> scoll : défilement de la fenetre.
        //=> resize : redimentionnement de la fenetre.

// les évenements : FORM ( formulaires )
        //=> change : pour les elements input, select et text area.
        //=> submit : a l'envois du formulaire.
        //=> input : capter la saisi d'un utilisateur sur un champ input.

// lES ECOUTEUR D'EVENEMENT
// POur attacher un évènement à un élément, ou autrement dit,
// pour éclarer un écouteur d'évènementqui se chargera de déclancher une fonction; je vais utiliser la syntaxe suivante :  

var p = document.getElementById('monParagraphe');

changerLaCouleurEnRouge = () => p.style.color = "red" ;

p.addEventListener('click',changerLaCouleurEnRouge);
