$(document).ready(function(){
    var destinatarioUser = window.localStorage.getItem("destinatario");
    
       
    var template = "<div class='row'>"+
          "<div class='col s12 center-align lemarg'>"+
            "<h3 id='usuario'>{{nombre}}</h3>"+
          "</div>"+
        "</div>";
    
    var database = firebase.database();
    
    var data = firebase.database().ref('users/'+destinatarioUser);
    
    var user;
    
    var contenedorData = "";
    data.on('value', function(response) {
        user = response.val();
    
    var usuario = $("#usuario");
    contenedorData += template
                     .replace("{{nombre}}", user.name);                   
        usuario.html(contenedorData);
    }); 
    
    
    $("#btnrequest").click(function(){
        var amount = $("#monto").val();
        var message = $("#mensaje").val();
        transfer(amount, message);
    });


 
});
    function transfer(amount, message){
        var postData = {
//            username: userName,
            monto: amount,
            mensaje: message
        };
        // Get a key for a new Post.
        var newPostKey = firebase.database().ref().child('users/destinatarioUser/').push().key;
        // Write the new post's data simultaneously in the posts list and the user's post list.
        var updates = {};
        updates['/logeados/uid/tranfers/' + newPostKey ] = postData;
       // updates['/transfer/' + "user + "/"  + newPostKey] = postData;
        return firebase.database().ref().update(updates);
//       
    }