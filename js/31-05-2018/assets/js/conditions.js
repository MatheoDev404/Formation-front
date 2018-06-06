// CONDITIONS

var majoriteLegaleFR = 18;

if (14 >= majoriteLegaleFR) {
    alert("bienvenue !");
}else{
    alert("vas voir chez google si ...");
}

// Exercice

function age(){

    var userAge = parseInt(prompt("veuillez entre votre age"));

    if(userAge >= majoriteLegaleFR){
        alert("bonjour ! ");
    }else{
        alert("vous n'etes pas majeur.");
        document.location.href="http://google.fr";
    }
}
// age();


/* -------------------------------
            EXERCICE :
J'arrive sur un Espace Sécurisé au moyen 
d'un email et d'un mot de passe.

Je doit saisir mon email et mon mot de passe afin d'être authentifié sur le site.

En cas d'échec une alert m'informe du problème.
Si tous se passe bien, un message de bienvenue m'accueil.
-------------------------------- */

// // -- BASE DE DONNEES
var email, mdp;

email = "wf3@hl-media.fr";
mdp = "wf3";

var emailUser = prompt("veuillez renseigner votre email");
if(emailUser === email){
    var mdpUser = prompt("veuillez renseigner votre mdp");
    if(mdpUser === mdp){
        alert('bienvenue');
    }else{
        alert('mauvais mots de passe');
    }
}else{
    alert('mauvais email');
}

//deuxieme soluce
var emailUser = prompt("veuillez renseigner votre email");
var mdpUser = prompt("veuillez renseigner votre mdp");

if(emailUser === email && mdpUser === mdp){
    alert('bienvenue');
}else{
    alert('email ou mdp invalide');
}

//Avec booléen

function verifEmail(emailUser){
    if(emailUser === email){
        return true;
    }else{
        return false;
    };
};

function verifMdp(mdpUser){
    if(emailUser === mdp){
        return true;
    }else{
        return false;
    };
};

if(verifEmail(emailUser)){
    if(verifMdp(mdpUser)){
        alert('bienvenue');
    }else{
        alert('mauvais mots de passe');
    }
}else{
    alert('mauvais email');
};