// Exercice 1

/* --
    Votre mission, que vous devez accepter !
    Réaliser une fonction permettant à un internaute de :
        - Saisir son Prénom dans un Prompt
        - Retourner à l'Utilisateur : Bonjour [PRENOM], Quel age as-tu ?
        - Saisir son Age
        - Retourner à l'Utilisateur : Tu est donc né en [ANNEE DE NAISSANCE].
        - Afficher ensuite un récapitulatif dans la page.
        Bonjour [PRENOM], tu as [AGE] ! 
-- */


function affichage(){

    var prenom = window.prompt("Veuillez renseigner votre nom :");

    var age = parseInt(window.prompt("Bonjour "+ prenom + ", Quel age as-tu ?"));

    var date =(( new Date().getFullYear() - age ) - 1 );

    alert("Tu est donc né en " + date + ".");
 
    return document.write("Bonjour "+ prenom + ", tu as " + age + " ans .");
};

affichage(); 