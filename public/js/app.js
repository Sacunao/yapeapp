firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});



var contactTemplate = "";
    

$(document).ready(function(){
    $.getJSON("http://localhost:3000/users.json", 
        function(response) {
            $("#···").html(plantilla
                             .replace("__nombre__", response.nombre)                   .replace("__apellido__", response.apellido));
        });
});