$(()=>{

    $('#MonFormulaire').submit(function(e){
        e.preventDefault();

        $.get('http://jsonip.com/', function(r){ 
            $.get('https://ipapi.co/' + r.ip + '/json/', function(d){ 
                $('body').append(`
                    <p>
                        Bonjour, votre adresse IP est : ${d.ip}, vous vous trouvez actuellement à ${d.city}.
                    </p>
                `);
            });
        });
    });
});