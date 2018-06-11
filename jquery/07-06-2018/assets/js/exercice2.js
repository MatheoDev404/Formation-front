$(() => { 

    // Déclaration des variables
    let $nom        = $('#nom'),
        $prenom     = $('#prenom'),
        $email      = $('#email'),
        $tel        = $('#tel'),
        verif,
        $membres     = [],
        $regexEmail = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/,
        $regexTel   = /^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/; 

    $('#contact').submit(function(e){
        
        e.preventDefault();

        let $nomVal     = $('#nom').val(),
            $prenomVal  = $('#prenom').val(),
            $telVal     = $('#tel').val(),        
            $emailVal   = $('#email').val();

        
        $('#contact .is-invalid').removeClass('is-invalid');

        // declaration des fonctions
        function verifEmailUser($membres,emailUser){
            console.log($membres);
            if($membres.length === 0){
                $('.alert-email').css('display','none');
                verif = true;
            }else{
                for (let i = 0; i < $membres.length; i++) {
                    if ( emailUser === $membres[i].email ) {
                        $('.alert-email').css('display','block');
                        console.log(emailUser);
                        console.log($membres[i].email);
                        verif = false
                        break;
                    } else{
                        console.log($membres[i].email);
                        $('.alert-email').css('display','none');
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
        
        if ( $regexEmail.test($emailVal.toLowerCase()) === false ) {
            $email.addClass('is-invalid');
        }
        
        if ( $regexTel.test($telVal.toLowerCase()) === false ) {
            $tel.addClass('is-invalid');
        }
        
        verifEmailUser($membres,$emailVal);
        addUserToMembres($membres,$emailVal, verif);
        affichageMembres($membres);
    });
            
});