$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();

    
    var nombreUser ="<div class='row'>"+"<div class='col s12 center-align lemarg'>"+
            			  "<h3>Nombre: {{name}}</h3>"+"</div>"+"</div>";

    var database = firebase.database();   
    var starUser = firebase.database().ref('users/');
	starUser.on('value', function(response) {
 	var nombreVal = response.val();
 	var title = $("#title");
	    $.each(data, function(i, user){
            conteData += contact
                     .replace("{{name}}", user.name)  ;                 
        });
    	title.html(contenedorData);

	$("#close").click(function() {
        window.location.href = "/init.html";
    });
 

  });
});
// var usersRef = ref.child("users");
// usersRef.set({
//   alanisawesome: {
//     date_of_birth: "June 23, 1912",
//     full_name: "Alan Turing"
//   },
//   gracehop: {
//     date_of_birth: "December 9, 1906",
//     full_name: "Grace Hopper"
//   }
// });