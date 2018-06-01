/*
 I. Créer un Tableau 3D "PremierTrimestre" contenant la moyenne d'un étudiant pour plusieurs matières.

    Nous auront donc pour un étudiant, sa moyenne à plusieurs matières.
    
    Par exemple : Hugo LIEGEARD : [ Francais : 12, Math : 19, Physique 4], ... etc
    
    **** Vous allez créez au minimum 5 étudiants ****

II. Afficher sur la page (à l'aide de document.write) pour chaque étudiant, la liste (ul et li) 
de sa moyenne à chaque matière, puis sa moyenne générale. 
*/

// -- Les Flemards.js
function l(e) {
    console.log(e);
}
function w(e) {
    document.write(e);
}


let PremierTrimestre =[
    {   
        prenom : "Mathéo",
        nom : "STUNAULT",
        matieres : {
            francais : 12,
            anglais : 10,
            espagnol : 9,
            maths : 7
        }    
    },
    { 
        prenom : "Hugo",
        nom : "LIEGEARD",
        matieres : {
            francais : 16,
            anglais : 17,
            espagnol : 12,
            maths : 7,
            eps : 16     
        }
    },
    { 
        prenom : "Rodrigue",
        nom : "MIGUEL",
        matieres : {
            francais : 15,
            anglais : 18,
            espagnol : 12,
            physique : 19,
            chimie : 4,
            eps : 11 
        }
    },
    { 
        prenom : "Fernand",
        nom : "MARTIN",
        matieres : {
            francais : 9,
            histoire : 12,
            espagnol : 14,
            maths : 3,
            eps : 5
        }
    },
    {   
        prenom : "Agnèse",
        nom : "LEBRON",
        matieres : {
            francais : 14,
            italien : 9,
            physique : 13,
            eps : 8
        }    
    }
];


w("<ol>")

let total = 0;
let matiereEleve;
for (let i = 0; i < PremierTrimestre.length; i++) {

    matiereEleve = Object.entries(PremierTrimestre[i].matieres);
    w("<li><strong>" + PremierTrimestre[i].prenom + " " + PremierTrimestre[i].nom + "</strong><ul>")

    for (let j = 0; j < matiereEleve.length; j++) {
        total = (total + matiereEleve[j][1]); 
        w("<li> " + matiereEleve[j][0] + " : " + matiereEleve[j][1] + "</li>");
        
    };

    let moy = ( total / matiereEleve.length);
    w("moyenne de " + PremierTrimestre[i].prenom + " : " + moy.toFixed(2)); 
    total = 0;
    w("</ul></li>");
}

w("</ol>")