$(document).ready(function(){

    var contactTemplate ="<div class='row'>" + 
                           "<div class='col s10' id='prueba'>"+
                                "<ul style='list-style-type:none'>"+
                                    "<li>{{name}}</li>"+
                                    "<li>{{phone}}</li>"+
                                "</ul>"+
                              "</div>"+
                            "<div class='col s2'>"+
                                "<a class='contactos'><i class='material-icons'>keyboard_arrow_right</i></a>"+                   
                            "</div>" +
                        "</div>";

    var database = firebase.database();
    
    var users = firebase.database().ref('users/');
    
    users.on('value', function(response) {
    var data = response.val();
    var la = $("#la");
    var contenedorData = "";
    
    $.each(data, function(i, user){
            contenedorData += contactTemplate
                     .replace("{{name}}", user.name)                   
                     .replace("{{phone}}", user.phone);
            
        });
        la.html(contenedorData);

        $(".contactos").click(function() {
             window.location.href = "/payment.html";
        });
 
    });
     
});