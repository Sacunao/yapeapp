$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
    
    $("#close").click(function() {
      window.location.href = "/init.html";
//        console.log("hola");
    });
  });