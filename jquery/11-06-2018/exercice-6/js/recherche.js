/*

OBJECTIF : A partir d'une liste de contacts, être en mesure de récupérer un contact et d'afficher le détail de ses informations.

CONSIGNE :

	// Un internaute doit pouvoir rechercher un contact sur la base de son Username, Email, Phone ou Name
	// Le résultat des membres correspondant s'affiche ensuite dans une liste en dessous du champ de recherche.

    ETAPE 1. Mettre en Place le HTML et le CSS nécessaire pour rechercher un contact.
        Ex. Un champ input-text, et/ou un bouton pour lancer la recherche.
        
    ETAPE 2. Récupérer le Flux JSON : https://jsonplaceholder.typicode.com/users et être en mesure de récupérer la fiche d'un utilisateur par rapport a son username.
    
    ETAPE 3. Afficher en HTML et CSS uniquement les informations de base : Nom, Prénom, Email, Téléphone.
    
    
*/

$(()=>{

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => {
            console.log(json);
            // for (let i = 0; i < json.length; i++) {
                
            //     $('.resultat').append(`
            //     <div class="membre">
            //         <div class="membre_informations">
            //             <p>Nom Complet :${json[i].name}</p>
            //             <p>Username :${json[i].username}</p>
            //             <p>Email :${json[i].email}</p>
            //             <p>Téléphone :${json[i].phone}</p>
            //         </div>
            //     </div>
            //     `)
            // }

            $("input[name='search']").on('input', search =>{

                let recherche   = $('#search').val();
                let regexNom    = "#^[a-z]+[ \-']?[[a-z]+[ \-']?]*[a-z]+$#";
    
                for (let i = 0; i < json.length; i++) {
                    if ( (recherche == json[i].name) || (recherche == json[i].username) || (recherche == json[i].email) || (recherche == json[i].phone) ) {
                        $('.resultat').append(`
                        <div class="membre">
                            <div class="membre_informations">
                                <p>Nom Complet :${json[i].name}</p>
                                <p>Username :${json[i].username}</p>
                                <p>Email :${json[i].email}</p>
                                <p>Téléphone :${json[i].phone}</p>
                            </div>
                        </div>
                        `)
                    }
                }
            });
           
        });

});