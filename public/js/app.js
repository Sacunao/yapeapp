var txtEmail = document.getElementById("email");
var txtPassword = document.getElementById("password");
var btnLogin = document.getElementById("login");

btnLogin.addEventListener("click", function(e){
    e.preventDefault;
    var email = txtEmail.value;
    var pass = txtPassword.value;
    console.log("hola", pass);
    
     firebase.auth().signInWithEmailAndPassword(email,pass)
            .then(function(e){
                window.location.href = "/init.html";
            })
          .catch(function(error){
                  // Handle Errors here.
                  var errorCode = error.code;
                  var errorMessage = error.message;
                  // ...
            });;
    
});

//
//var contactTemplate = "";
//    
//
//$(document).ready(function(){
//    $.getJSON("http://localhost:3000/users.json", 
//        function(response) {
//            $("#···").html(plantilla
//                             .replace("__nombre__", response.nombre)                   .replace("__apellido__", response.apellido));
//        });
//});
