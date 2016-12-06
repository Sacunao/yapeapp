$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
    
//    var montoUser = window.localStorage.getItem("monto");
//    
//        var templateAlert = "<div class='circulo-modal'>"+
//  			"<i class='material-icons'>notifications</i>"+
//  		"</div>"+"<p class='titulo-modal'>SOLICITUD DE TRANSFERENCIA</p>"+
//  		"<p class='texto-modal' id='alertas'>Hola {{nombre}}, {{name}} te solicita un pago de {{monto}}<p>";
//    
//    var database = firebase.database();
//    
//    var data = firebase.database().ref('users/'+montoUser);
//    
//
//    data.on('value', function(response) {
//    var data = response.val();
//    var alert = $("#alert");
//    var contenedorData = "";
//    
//    $.each(data, function(key, user){
//            contenedorData += contactTemplate
//                     .replace("{{nombre}}", user.contacts)                   
//                     .replace("{{name}}", user.name)
//                     .replace("{{monto}}", user.monto);
//        console.log(key);
//        });
//        alert.html(contenedorData);

    
    $("#close").click(function() {
      window.location.href = "/init.html";
//        console.log("hola");
    });
  });
    
});
