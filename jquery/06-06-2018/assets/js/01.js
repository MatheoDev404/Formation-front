// Disponibilité du DOM
// A partir du moment  ou le DOM, càd l'ensemble de l'arborescence de ma page HTML est completement chargée ; je peux commencer à utiliser jquery

// Je vais mettre l'ensemble de mon code dans une fonction, cette fonction serra appelée AUTOMATIQUEMENT !!! par jQuery lorsque le DOM sera entièrement défini.

// 3 façons de faire :

jQuery(document).ready(function (){
    // -- ici le DOM est entièremetn chargé, je peuxprocéder a mon code JS:
});

$(document).ready(function() { 
    // -- ici le DOM est entièremetn chargé, je peuxprocéder a mon code JS:
});

$(function() { 
    // -- ici le DOM est entièremetn chargé, je peuxprocéder a mon code JS:
});

 // ECMAScript6
$(() => { 
    // -- ici le DOM est entièremetn chargé, je peuxprocéder a mon code JS:
    
    // en JS :
    document.getElementById('textEnJquery').innerHTML = "Mon text en js";

    // en jQuery :
    $('#textEnJquery').html('mon text en jQuery');

});

