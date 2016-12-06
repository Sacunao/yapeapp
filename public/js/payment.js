$(document).ready(function(){
    var userName = $("#nameUser").val();
    var amount = $("#monto").val();
    var message = $("#mensaje").val();
//    var btnrequest = $("#btnrequest");
    
    $("#btnrequest").click(function (userName, amount, message) {
        // A post entry.
        var postData = {
            username: userName,
            monto: amount,
            mensaje: message
        };

        // Get a key for a new Post.
        var newPostKey = firebase.database().ref().child('transfer').push().key;

        // Write the new post's data simultaneously in the posts list and the user's post list.
        var updates = {};
        updates['/transfer/' + newPostKey] = postData;
        updates['/transfer/' + "user1" + '/' + newPostKey] = postData;
        return firebase.database().ref().update(updates);
        
         console.log("userName");
        
    }); 
    
   
    
    
});