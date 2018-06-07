        /* -------------------------------------------------
        |             ~~~   LA CONSIGNE     ~~~            |
        |                                                  |
        | Créez un Formulaire HTML Bootstrap avec les      |
        | champs suivants :                                |
        |                                                  |
        |   1. Nom, Prénom, Email, Tel                     |
        |   2. Réaliser la validation JS du Formulaire     |
        |                                                  |
        ------------------------------------------------- */

$(() => { 

        $('#formulaire').submit(function(e){

                e.preventDefault();

                $('#formulaire .is-invalid').removeClass('is-invalid');
                $('#formulaire .alert-danger').remove();

                var $nom        = $('#nom'),
                    $prenom     = $('#prenom'),
                    $email      = $('#email'),
                    $tel        = $('#tel'),
                    $regexEmail = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/,
                    $regexTel   = /^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/; 

                if ( $nom.val().length === 0 ) {
                        $nom.addClass('is-invalid');
                }
                
                if ( $prenom.val().length === 0 ) {
                        $prenom.addClass('is-invalid');
                }

                if ( $regexEmail.test($email.val().toLowerCase()) === false ) {
                        $email.addClass('is-invalid');
                }

                if ( $regexTel.test($tel.val().toLowerCase()) === false ) {
                        $tel.addClass('is-invalid');
                }

                if($(this).find('.is-invalid').length === 0){
                        $(this).replaceWith(`
                        <div class="alert alert-success" role="alert">
                                <strong>Well done!</strong> You successfully read <a href="#" class="alert-link">this important alert message</a>.
                        </div>
                        `); 
                } else{
                        $(this).prepend(`
                        <div class="alert alert-danger" role="alert">
                                <strong>Well done!</strong> You successfully read <a href="#" class="alert-link">this important alert message</a>.
                        </div>
                        `); 
                }
        });
});