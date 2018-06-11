$(()=>{

    $('#MonFormulaire').submit(function(e){
        e.preventDefault();

        $.get('https://ipapi.co/json/', function(d){ 
            $('body').append(`
                <p>
                    Bonjour, votre adresse IP est : ${d.ip}, vous vous trouvez actuellement à ${d.city}.
                </p>
            `);
        },"json");
    });
});