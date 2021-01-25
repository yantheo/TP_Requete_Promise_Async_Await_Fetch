//**********REQUETE AJAX AVEC LOBJET FETCH SUR UNE METHODE GET************

/*const getUsers = async function(){
    //POUR GERER LES ERREURS
    try{
        //Si reponse avec du text/on parse le code
        let response = await fetch('https://jsonplaceholder.typicode.com/users')
        if(response.ok){
           let data = await response.json()
           console.log(data)
        }
        //Si erreur on affiche le status de l'erreur
        else{
            console.log('Retour du serveur : ', response.status)
        }
    }
    //Si la requete n'est pas bonne, on affiche l'erreur qui concerne la requete
    catch (e) {
        console.log(e)
    }
 
}
//Appelle de la fonction pour afficher getUsers()
getUsers()*/

//**********REQUETE AJAX AVEC LOBJET FETCH SUR UNE METHODE POST************
const insertPost = async function(data){
    let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {"Content-Type" : "application/json; charset=UTF-8"}
    })
    if (response.ok){
        let respdata = await response.json()
        console.log(respdata)
    }
    
}

insertPost({
    title: 'Yanick',
    body: 'test'
})