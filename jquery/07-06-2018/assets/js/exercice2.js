$(() => { 

    // Déclaration des variables
    let $nom        = $('#nom'),
        $nomVal     = $('#nom').val(),
        $prenom     = $('#prenom'),
        $prenomVal  = $('#prenom').val(),
        $email      = $('#email'),
        $emailVal   = $('#email').val(),
        $tel        = $('#tel'),
        $telVal     = $('#tel').val(),
        verif       = true;
        $membres     = [],
        $regexEmail = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/,
        $regexTel   = /^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/; 

    $('#contact').submit(function(e){
            // blocage du submit
            e.preventDefault();

            


            // declaration des fonction
            function verifEmailUser($membres,emailUser){
                console.log($membres.length);
                if($membres.length === 0){
                    verif = true;
                    console.log('test')
                }else{
                    for (let i = 0; i < $membres.length; i++) {
                        // console.log($('#email').val());
                        // console.log($membres[i].email);
                        if (($('#email').val() === $membres[i].email) && ($('#email').val() !== "") ) {
                            $('.alert-email').css('display','block')
                            verif = false
                            break;
                        }else{
                            verif = true;
                        }
                    }
                }
                return verif;
            }
        
           function addUserToMembres($membres,emailUser,verif){
                if (verif) {
                    $('.alert-contact').css('display','block').delay(2000).hide(400);
                    $membres.push({
                        nom : $('#nom').val(),
                        prenom : $('#prenom').val(),
                        email : $('#email').val(),
                        tel : $('#tel').val(),
                    });
                }
            }
        
           function affichageMembres($membres){
               $('.aucuncontact').remove();
               $('.contactInfos').remove();
        
                for (let i = 0; i < $membres.length; i++) {
                    $('#listeContacts').append(`
                        <tr class="contactInfos">
                            <th>${$membres[i].nom}</th>
                            <th>${$membres[i].prenom}</th>
                            <th>${$membres[i].email}</th>
                            <th>${$membres[i].tel}</th>
                        </tr>
                    `);
                }
            }


            $('#contact .is-invalid').removeClass('is-invalid');
            $('#contact .alert-danger').remove();

            if ( $nomVal.length === 0 ) {
                    $nom.addClass('is-invalid');
            }
            
            if ( $prenomVal.length === 0 ) {
                    $prenom.addClass('is-invalid');
            }

            if ( $regexEmail.test($emailVal.toLowerCase()) === false) {
                    $email.addClass('is-invalid');
            }

            if ( $regexTel.test($telVal.toLowerCase()) === false ) {
                    $tel.addClass('is-invalid');
            }

            verifEmailUser($emailVal,$membres);
            addUserToMembres($membres,$emailVal, verif);
            affichageMembres($membres);
    });
});