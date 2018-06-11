// <!-- CONSIGNE : Avec l'aide de jQuery, vous devrez :
    
// 1. Définir une structure HTML5 & CSS3 pour afficher des articles.

// 2. Afficher une liste d'articles à partir de l'API :  https://jsonplaceholder.typicode.com/posts

// 3. BONUS : Afficher uniquement les 10 premiers articles.

// 4. BONUS : Mettre en Place Markjs.io afin de surligner des mots dans les différents articles à l'aide d'un champ input.

// -->

$(()=>{
    for (let i = 0; i < 11; i++) {
        
        fetch('https://jsonplaceholder.typicode.com/posts/' + i)
        .then(response => response.json())
        .then(json => {
            console.log(json);
            $('main').append(`
            <article class="context">
            <h3> ${json.title} </h3>
            <p>${json.body}</p>
            </article>
            `)
        })
    }

    $('#input').on('input',function(e){
        
        e.preventDefault();
        
        var keyword = $("input[name='keyword']").val();

        $(".context").unmark({
            done: function() {
              $(".context").mark(keyword);
            }
          });
    })

    
});