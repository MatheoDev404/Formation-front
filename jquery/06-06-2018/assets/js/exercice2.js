        /* -------------------------------------------------
        |             ~~~   LA CONSIGNE     ~~~            |
        |                                                  |
        | A partir du Formulaire de Contact ci-dessus :    |
        |                                                  |
        |   1. Afficher à l'utilisateur un Récapitulatif   |
        |   de sa demande de contact.                      |
        |                                                  |
        ------------------------------------------------- */

        

$(() => { 

    $('#MonFormulaire').submit(function (e){

        e.preventDefault();
        var $fullname   = $('#fullname').val(),
            $email      = $('#email').val(),
            $tel        = $('#tel').val(),
            $sujet       = $('#sujet').val(),
            $message    = $('#message').val();
        $(this).replaceWith(
            'Récapitulatif :</ br>' +
            '<p>Nom :</br> ' + $fullname +'</p>' +
            '<p>Email :</br> ' + $email +'</p>' +
            '<p>Tel :</br> ' + $tel +'</p>' +
            '<p>Sujet :</br> ' + $sujet +'</p>' +
            '<p>Message :</br> ' + $message +'</p>'
        );
    });
    
});