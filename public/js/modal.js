$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
    
    var contactTemplate ="<div class='row'>"+"<div class='col s12 center-align lemarg'>"+
            			  "<h3>Nombre: {{name}}</h3>"+"</div>"+"</div>";

    var database = firebase.database();
    
    var users = firebase.database().ref('users/');

    var contenedorData = "";
    
 //    var starCountRef = firebase.database().ref('users/' + );
	// starCountRef.on('value', function(snapshot) {
 // 	updateStarCount(postElement, snapshot.val());
	// });

    users.on('value', function(response) {
    var data = response.val();
    var la = $("titulo");
    var contenedorData = "";
    
    $.each(data, function(i, user){
            contenedorData += contactTemplate
                     .replace("{{name}}", user.name)                   
            
        });
        la.html(contenedorData);


    });

	$("#close").click(function() {
        window.location.href = "/init.html";
       });
 

  });




    
    users.on('value', function(response) {
    var data = response.val();
    var la = $("#la");
    var contenedorData = "";
    
    $.each(data, function(i, user){
            contenedorData += contactTemplate
                     .replace("{{name}}", user.name)                   
            
        });
        la.html(contenedorData);


    });
