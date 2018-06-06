// Le chainage de méthodes

$(() => { 

    l = e => console.log(e);

    $('div').hide('slow', () => {
        
        // Une fois que la methode hide() est terminé , mon alert peut s'executer 
        // NB : La fonction s'executera pour l'ensemble des éléments selecteurs
        
        $('div').css('background','yellow');
        $('div').css('color','red');
        $('div').show('slow');

    });
    $('p').hide(1000).css({ 
        'background':'orange',
        'font-size':'20px'
    }).delay(2000).show(500);

    
    
});