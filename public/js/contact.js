$(document).ready(function(){
    var authUser = window.localStorage.getItem("user");
    

    var contactTemplate ="<div class='row'>" + 
                           "<div class='col s10' >"+
                                "<ul style='list-style-type:none'>"+
                                    "<li>{{name}}</li>"+
                                    "<li>{{phone}}</li>"+
                                "</ul>"+
                              "</div>"+
                            "<div class='col s2'>"+
                                "<a class='contactos' id='{{email}}'><i class='material-icons'>keyboard_arrow_right</i></a>"+                   
                            "</div>" +
                        "</div>";

    var database = firebase.database();
    
    var users = firebase.database().ref('users/'+authUser+'/contacts');
    
    users.on('value', function(response) {
    var data = response.val();
    var la = $("#la");
    var contenedorData = "";
    
    $.each(data, function(key, user){
            contenedorData += contactTemplate
                     .replace("{{name}}", user.name)                   
                     .replace("{{phone}}", user.phone)
                     .replace("{{email}}", key);
        console.log(key);
        });
        la.html(contenedorData);

        $(".contactos").click(function(event) {
            
            window.localStorage.setItem("destinatario", event.currentTarget.id);
             window.location.href = "/payment.html";
        });
 
    });
     
});