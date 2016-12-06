$(document).ready(function(){
    var userName = $("#nameUser");
    var monto = $("#monto");
    var mensaje = $("mensaje");
    
    console.log(transfer(nameUser, monto, mensaje));
 
    function transfer(username, monto, mensaje) {
    // A post entry.
    var postData = {
        username: username,
        monto: monto,
        mensaje: mensaje
    };

    // Get a key for a new Post.
    var newPostKey = firebase.database().ref().child('tranfers').push().key;

    // Write the new post's data simultaneously in the posts list and the user's post list.
    var updates = {};
    updates['/tranfers/' + newPostKey] = postData;
    updates['/transfer/' + uid + '/' + newPostKey] = postData;

    return firebase.database().ref().update(updates);
    } 
}