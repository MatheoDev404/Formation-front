$(()=>{

    $('#MonFormulaire').submit(function(e){
        e.preventDefault();

        $.get('http://jsonip.com/', function(r){ 
            $.get('https://ipapi.co/' + r.ip + '/json/', function(data){ 
                $('body').append(`
                    <p>
                        Bonjour, votre adresse IP est : ${data.ip}, vous vous trouvez actuellement à ${data.city}.
                    </p>
                `);
            });
        });

    

        

    });
});