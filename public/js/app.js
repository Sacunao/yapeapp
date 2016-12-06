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


//function usersObject(uid, name, phone) {
//  // A post entry.
//  var postData = {
//    author: username,
//    uid: uid,
//    body: body,
//    title: title,
//    starCount: 0,
//    authorPic: picture
//  };

//guardar tarjetas
//  var newPostKey = firebase.database().ref().child(users').push().key;

//  var updates = {};
//  updates['/users/' + newPostKey] = postData;
//  updates['/user/users' + uid + '/' + newPostKey] = postData;
//
//  return firebase.database().ref().update(updates);
//}


