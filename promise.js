// Je veux une fonction getPosts qui 
//Récupere le premier utilisateur depuis https://jsonplaceholder.typicode.com/users
//Récupère les articles du premier utilisaeur https://jsonplaceholder.typicode.com/comments?userId={ID}
//Renvois les articles au format JSON

//Variable GET qui est un function qui prend en parametre une url
var get = function (url) {
    return new Promise(function (resolve, reject) {
        //Objet Promise pour preparer une requete AJAX avec en parametre resolve, reject
        var xhr = new window.XMLHttpRequest()
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    //console.log('Requête terminé', xhr)
                    resolve(xhr.responseText)
                } else {
                    reject(xhr)
                }
            }
        }
        xhr.open('GET', url, true)
        xhr.send()
    })
}

get('https://jsonplaceholder.typicode.com/users').then(function (response) {
    console.log(response)
}).catch(function (error) {
    console.log("Erreur de requête", error)
})

//fonction pour capturer l'erreur
var catchError = function (e) {
    console.error('Erreur AJAX', e)
}

var getPosts = function () {
    return get('https://jsonplaceholder.typicode.com/users').then(function (response) {
        //on effectue notre premiere requete pour recevoir les datas USER via le parametre response
        //console.log(response)
        var users = JSON.parse(response)
        //Une fois les données de USERS récupérés, nous pouvons effectué la deuxième requete en utilsant notre fonction get()
        return get('https://jsonplaceholder.typicode.com/comments?postId=' + users[0].id)
        .then(function (response) {
            var posts = JSON.parse(response)
            return posts})
        })
        //.catch(catchError)
        //console.log(users[0])
    }

getPosts().then(function(posts){console.log(posts[0].body)})
        .catch(function(e){console.log(e)})
        .then(function(){
            console.log('Fin de requêtes AJAX')
        })
