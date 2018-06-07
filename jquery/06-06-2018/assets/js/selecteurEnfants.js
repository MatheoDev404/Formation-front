// LES SELECTEURS D'ENFANTS

$(() => { 

    l = e => console.log(e);

    // ---- Je souhaite séléctioner toutes les div de ma page
    l( $('div') );
    
    // ---- Je souhaite séléctioner la balise nav de ma page
    l( $('#menu') );
    //ou
    // l($('nav'));

    // ---- Je souhaite séléctioner tous les descandant direct qui sont dans #menu
    l( $('#menu').children() );
    
    
    // ---- parmis c'est descendants je veux uniquement l'élément ul
    l( $('#menu').children('ul') );
    
    // ---- Je souhaite séléctioner tous les éléments li de mon ul
    l( $('#menu').find('li') );
    l( $('#menu').children('ul').children('li') );
    
    // ---- Je souhaite séléctioner uniquement le deuxième éléments li de mon ul
    l( $('#menu').find('li').eq(1) );
    
    // ---- Je souhaite séléctioner le voisin direct de mon ul
    l( $('#menu').next() );
    l( $('#menu').next().next() ); // -- le voisin du voisin
    l( $('#menu').prev() ); // -- le voisin d'avant 
    
    // ---- LES PARENTS
    l( $('#menu').parent() );

});