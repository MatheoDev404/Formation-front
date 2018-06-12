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

            for (let i = 0; i < json.length; i++) {
                
                $('.resultat').append(`
                <div data-filter-item data-filter-name="${json[i].name.toLowerCase()} ${json[i].username.toLowerCase()} ${json[i].email.toLowerCase()} ${json[i].phone.toLowerCase()}" class="membre">
                        <p>Nom Complet :${json[i].name}</p>
                        <p>Nom utilisateur :${json[i].username}</p>
                        <p>Email :${json[i].email}</p>
                        <p>Telephone :${json[i].phone}</p>
                </div>
                `)
            }
         

            $('[data-search]').on('input', function() {
                var searchVal = $(this).val();
                var filterItems = $('[data-filter-item]');
            
                if ( searchVal != '' ) {
                    filterItems.css('display','none');
                    $('[data-filter-item][data-filter-name*="' + searchVal + '"]').css('display','block');
                } else {
                    filterItems.css('display','block');
                }
            });
           
        });

});