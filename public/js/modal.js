$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
    
    var montoUser = window.localStorage.getItem("monto");
    console.log(montoUser);
    var destinatarioUser = window.localStorage.getItem("destinatario");
    var authUser = window.localStorage.getItem("user");
    
    var templateAlert = "<div class='circulo-modal'>" +
                        "<i class='material-icons'>notifications</i>"+
                    "</div>"+"<p class='titulo-modal'>SOLICITUD DE TRANSFERENCIA</p>"+
                    "<p class='texto-modal' id='alertas'>Hola {{name}}, tu solicitud a {{nombre}} por el monto de {{monto}} ha sido solicitada<p>"+
                    "<div class='modal-footer'>"+ "<a href='init.html' class='modal-action modal-close waves-effect waves-green btn-flat'>" + "<i class='material-icons'>cancel</i>" + "</a>" + "</div>";
 
    
    var database = firebase.database();
    
    var dataDestinatario = database.ref('users/'+destinatarioUser);
    var dataUser = database.ref('users/'+authUser);
    
    
    var destinatario;
    
    var contenedorData = "";
    dataDestinatario.on('value', function(response) {
        destinatario = response.val();
    
    var usuario = $("#alert");
    contenedorData +=  templateAlert
                     .replace("{{nombre}}", destinatario.name);  
        usuario.html(contenedorData);
    }); 

        
    var user;
    
    var contenedorDos = "";
    dataUser.on('value', function(response) {
        user = response.val();
    
    var usuario = $("#alert");
    contenedorData = contenedorData
                     .replace("{{name}}", user.name);   
    contenedorData = contenedorData.replace("{{monto}}", montoUser); 
        usuario.html(contenedorData);
        
    }); 
    

    
    $("#close").click(function() {
      window.location.href = "/init.html";
    });
    
});
