var txtEmail = document.getElementById("email");
var txtPassword = document.getElementById("password");
var btnLogin = document.getElementById("login");


btnLogin.addEventListener("click", function(e){
    e.preventDefault;
    var email = txtEmail.value;
    var pass = txtPassword.value;
    
   
  
     firebase.auth().signInWithEmailAndPassword(email,pass)
          .then(function(e){
            window.location.href = "/init.html";
            window.localStorage.setItem("user",e.email.replace(".","_").replace(".","_"));
         
    
            })
          .catch(function(error){
                  // Handle Errors here.
                  var errorCode = error.code;
                  var errorMessage = error.message;
                  // ...
            }); 
});

