
  
//         CONSIGNE : 

// Considérons un Formulaire HTML avec les champs pseudo, age, email et mdp.
// Considérons un Tableau JS contenant une liste de membre.

// ---------

// ETAPE 1 : Lors de la saisie d'un Pseudo, vérifiez en temps réel grâce aux évènements que celui-ci n'existe pas dans le tableau de membre.

// Si le Pseudo existe dans le tableau Membre, la notification pseudoError doit s'afficher et le bouton "submit" être désactivé.

// A l'inverse, si le Pseudo n'existe pas dans le tableau Membre, ou que l'utilisateur à corriger son Pseudo, alors, le bouton est actif et la notification pseudoError ne s'affiche pas / plus.

// ---------

// ETAPE 2 : L'inscription n'est possible qu'aux personnes majeurs de 18 ans.
// Vous devez donc vérifier que l'age saisi est bien supérieur ou égale à 18 ans.

// Si cette condition n'est pas valide, alors la notification ageError doit s'afficher et le bouton "submit" être désactivé.

// Quand l'utilisateur corrige son age, la situation revient à la normal. La notification ageError ne s'affiche plus et le bouton submit est de nouveau disponible.

// ---------

// ETAPE 3 : 
   
// Lors de la saisie du Pseudo, vous devrez afficher en temps réel dans le titre id "Bienvenue" : Bonjour [Pseudo] : Pseudo étant la saisie en cours de l'utilisateur.
  
// ---------
  
//   ETAPE 4 : Si toutes les conditions sont validées, l'utilisateur va pouvoir procéder à son inscription.
  
//   En cliquant sur le bouton "M'inscrire", vous devrez enclencher une action permettant :
  
//       A. L'ajout de l'utilisateur dans le tableau.
//       B. L'affichage pour l'utilisateur sur la page d'un message de bienvenue, ainsi que la liste des membres inscrit dans une liste non-ordonnée.
      
//       Ex. Merci Hugo ! Tu es maintenant inscrit.
//       Voici la liste de nos Membres :
      
//           Hugo : 26ans
//           Rodrigue : 56ans
//           ...
          
//       NB : Devra bien entendu s'afficher le membre qui vient de s'inscrire.

var membres = [
    {
        'pseudo':'Hugo',
        'age':26,
        'email':'wf3@hl-media.fr',
        'mdp':'wf3'
    },
    {
        'pseudo':'Rodrigue',
        'age':56,
        'email':'rodrigue@hl-media.fr',
        'mdp':'roro'
    },
    {
        'pseudo':'James',
        'age':78,
        'email':'james@hl-media.fr',
        'mdp':'james8862'
    },
    {
        'pseudo':'Emilio',
        'age':18,
        'email':'milio@hl-media.fr',
        'mdp':'milioDu62'
    }
];

// flemard.js

l = e => console.log(e);
w = e => document.write(e);

// FONCTIONS ------------------



// function pseudoErrorRender(){
//     pseudoError[0].style.display = "block";
//     submit.style.display = "none";
// };

// function ageErrorRender(){
//     ageError[0].style.display = "block";
//     submit.style.display = "none";
// };

function verifPseudo(){
    for (let i = 0; i < membres.length ; i++) {
        if (membres[i].pseudo === pseudo.value) {   
            pseudoError[0].style.display = "block";
            submit.style.display = "none";
            error = true;
        }else if((membres[i].pseudo !== pseudo.value) && (age.value >= majorite)){
            submit.style.display = "block";
            pseudoError[0].style.display = "none"; 
            error = false;
        }
    };
    return error;
};

function verifAge(){
    if (age.value < majorite) {
        ageError[0].style.display = "block";
        submit.style.display = "none";
    }else if((error === false) && ( age.value >= majorite )){
        ageError[0].style.display = "none";
        submit.style.display = "block"; 
    }else{
        ageError[0].style.display = "none";
    }
};

function pseudoRender(){
    bienvenue.textContent = "";
    bienvenue.textContent = ( "Bonjour : " + pseudo.value );
};

function addUser(){
    membres.push({
        'pseudo' : pseudo.value,
        'age' : age.value,
        'email' : email.value,
        'mdp' : mdp.value
    })
    console.log(membres);
};

function welcomeNewUser(){
    w('<h2>Merci ' + pseudo.value + " ! Tu es maintenant inscrit.</h2></ br>voici la liste des membres : <ul>");

    for (let i = 0; i < membres.length; i++) {
        w('<li>' + membres[i].pseudo + ' : ' + membres[i].age + 'ans.</li></ br>');
    }

    w('</ul>')
}

// Récupération des éléments --

var pseudo              = document.getElementById('pseudo');
var age                 = document.getElementById('age');
var email               = document.getElementById('email');
var mdp                 = document.getElementById('mdp');
var submit              = document.getElementById('submit');
var bienvenue           = document.getElementById('bienvenue');
var pseudoError         = document.getElementsByClassName('pseudoError');
var ageError            = document.getElementsByClassName('ageError');

// initialisation des variables globales

let currentUser;
let majorite = 18;
let error;

// -- ETAPE 1

pseudo.addEventListener('input', verifPseudo);

// -- ETAPE 2

age.addEventListener('input', verifAge);

// -- ETAPE 3

pseudo.addEventListener('change', pseudoRender);

// -- Etape 4A

submit.addEventListener('click', addUser);

// -- Etape 4B

submit.addEventListener('click', welcomeNewUser);
