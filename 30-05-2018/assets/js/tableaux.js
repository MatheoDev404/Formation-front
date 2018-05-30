// LES TABLEAUX

// TABLEAU INDEXE
var monTableau = [];
var myArray = new Array;

monTableau[0] = "hugo";
monTableau[1] = "Demmy";
monTableau[2] = "Charlotte";

console.log(monTableau);
console.log(monTableau[1]);
console.log(monTableau[2]);

var nosPrenom = [
    "Sylvain",
    "Wahib",
    "Marine",
    "Robin",
    "Julien",
    "Nicolas"
];
console.log(nosPrenom);

// DECLARATION/AFFECTATION DE VALEUR OBJET7
var coordonnees = {
    prenom : "Mathéo",
    nom : "Stunault",
    age : 22
};
console.log(coordonnees);
console.log(coordonnees['prenom']);
console.log(coordonnees.nom);

var annuaireDesApprennants = [
    ["hugo","liegeard",28], 
    "charlotte",
    "robin"
];

// Multi dimention array

var Contacts = [
    {
        prenom: "Hugo",
        nom: "LIEGEARD",
        coordonnees: {
            email: "wf3@hl-media.fr",
            adresse: {
                ville : "Ducos",
                cp: 97224,
                region: "Martinique",
                pays: {
                    code: "FR",
                    nom: "France"
                }
            },
            tel: {
                fixe: "+ 596 596 108 328",
                fax: "+596 596 108 632",
                port: "+33 783 97 15 15"
            }
        }
    },
    {
        prenom: "Rodrigue",
        nom: "NOUEL",
        coordonnees: {
            email: "wellcommunication@gmail.com",
            adresse: {
                ville : "Fort-de-France",
                cp: 97200,
                region: "Martinique",
                pays: {
                    code: "FR",
                    nom: "France"
                }
            },
            tel: {
                fixe: "+ 596 596 XX XX XX",
                fax: "",
                port: "+596 696 07 04 34"
            }
        }
    },
    {
        prenom: "Robin",
        nom: "TOURNIER",
        coordonnees: {
            email: "robin.tournier@gmail.com",
            adresse: {
                ville : "Paris",
                cp: 75016,
                region: "Ile-de-France",
                pays: {
                    code: "FR",
                    nom: "France"
                }
            },
            tel: {
                fixe: "",
                fax: "",
                port: "+33 XX XX XX XX"
            }
        }
    },
];

console.log(Contacts);
console.log(Contacts[0].coordonnees.adresse.pays.nom);