//  CONSIGNE : Avec l'aide de jQuery, vous devrez :
    
// 1. A la soumission du formulaire, cacher le formulaire puis :
// 2. Créer un élément <p>
// 3. Dans cet élément, afficher : Bonjour <nomcomplet> correspondant 
//    au nom saisie dans le formulaire.




$(() => { 

    l = e => console.log(e);

    $('#MonFormulaire').submit( (e)=> {

        e.preventDefault();
        let $value = $('#nomcomplet').val();
        l($value);
        $('#MonFormulaire').hide('slow');
        $('body').append('<p>Bonjour : ' + $value + '</p>');

    });
    

});