// Les selecteurs jQuery
// Format : $('selecteur');

$(() => { 

    l = e => console.log(e);
    //si je souhaite selectioner toutes les balises span:

    // Par le tag
    l($('span'));
    
    // Par le ID
    l($('#menu'));
    
    // Par le Classe
    l($('.MaClasse'));
    
    // Par attribut
    l($('[href="https://google.fr"]'));
    
});