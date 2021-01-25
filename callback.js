// Je veux une fonction getPosts qui 
//Récupere le premier utilisateur depuis https://jsonplaceholder.typicode.com/users
//Récupère les articles du premier utilisaeur https://jsonplaceholder.typicode.com/comments?userId={ID}
//Renvois les articles au format JSON

//Variable GET qui est un function qui prend en parametre une url
var get = function (url, success, error) {
    //Objet type XML pour preparer une requete AJAX
    var xhr = new window.XMLHttpRequest()
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                //console.log('Requête terminé', xhr)
                success(xhr.responseText)
            }else{
                error(xhr)
            }


        }

    }
    xhr.open('GET', url, true)
    xhr.send()
}

var getPosts = function (success, error) {
    get('https://jsonplaceholder.typicode.com/users', function (response) {
        //on effectue notre premiere requete pour recevoir les datas USER via le parametre response
        //console.log(response)
        var users = JSON.parse(response)
        //Une fois les données de USERS récupérés, nous pouvons effectué la deuxième requete en utilsant notre fonction get()
        get('https://jsonplaceholder.typicode.com/comments?postId=' + users[0].id, function(response){
            var posts = JSON.parse(response)
            success(posts)
        }, function(e){
            error('Erreur AJAX', e)
        })

        //console.log(users[0])
    }, function (e) {
        error('Erreur AJAX', e)

    })
}

getPosts(function(posts){
    console.log('le premier article : ', posts[0].body)
},function(error){
    console.error(error)
})