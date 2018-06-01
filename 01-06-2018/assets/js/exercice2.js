/* --
    CONSIGNE : A partir du tableau fourni, vous devez mettre en place un système d'authentification. Après avoir demandé à votre utilisateur son EMAIL et MOT DE PASSE, et après avoir vérifié ses informations, vous lui souhaiterez la bienvenue avec son nom et prénom (document.write);
            
    En cas d'échec, vous afficherez une ALERT pour l'informer de l'erreur.  
-- */

var BaseDeDonnees = [
    {
        'prenom':'Hugo',
        'nom':'LIEGEARD',
        'email':'wf3@hl-media.fr',
        'mdp':'wf3'
    },
    {
        'prenom':'Rodrigue',
        'nom':'NOUEL',
        'email':'rodrigue@hl-media.fr',
        'mdp':'wf3'
    },
    {
        'prenom':'Nathanael',
        'nom':'DORDONNE',
        'email':'nathanael.d@hl-media.fr',
        'mdp':'wf3'
    }
];




 // recuperer email et mdp
 let emailUser = prompt("veuillez renseigner votre email ");
 let mdpUser = prompt("veuillez renseigner votre mdp");

// //parcour du tableau
for (let i = 0; i < BaseDeDonnees.length ; i++) {
    
    //si la combinaison est bonne on affiche et on arrete la boucle
    if (BaseDeDonnees[i].email === emailUser && BaseDeDonnees[i].mdp === mdpUser ) {
        document.write('bienvenue ' + BaseDeDonnees[i].prenom + " " + BaseDeDonnees[i].nom + ".");
        break ;
    } 
        //si le tableau ne trouve pas de correspondance on affiche l'erreur et on arrete la boucle
    else if((BaseDeDonnees[i].email !== emailUser || BaseDeDonnees[i].mdp !== mdpUser ) && (i == BaseDeDonnees.length)) {
        alert('indentifiants incorrects');
        break ;
    }
        //sinon on continue de parcourir la boucle
    else{
        continue ;
    }
        
}
                
          
let emailUser = prompt("veuillez renseigner votre email ");
let mdpUser = prompt("veuillez renseigner votre mdp");

let currentUser;

function verif(){
    for (let i = 0; i < BaseDeDonnees.length ; i++) {
        if (BaseDeDonnees[i].email == emailUser && BaseDeDonnees[i].mdp == mdpUser ) {
            currentUser = BaseDeDonnees[i];
            break;
        }else{
            currentUser = false;
        }
    };
    return currentUser;
};

verif();

if(currentUser === false){
    alert('indentifiants incorrects');
}else{
     
}