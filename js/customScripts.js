$(function() { 
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
      || location.hostname == this.hostname) {

      var thisItem = $(this.hash);
      thisItem = thisItem.length ? thisItem : $('[name=' + this.hash.slice(1) +']');
      if (thisItem.length) {
      $('html,body').animate({
        scrollTop: thisItem.offset().top
      }, 1000);
        return false;
      }
    }
  }); 
  
});
function realizarContacto(){
	var inputNombre = document.getElementById("inputNombre").value;
	var inputDatos = document.getElementById("inputDatos").value;
	var inputComentario = document.getElementById("inputComentario").value;
	if(inputNombre.length<1 || inputDatos.length<1 ){
		aviso="<h1>Campos incompletos</h1>";
		if(inputNombre.length<1 ){aviso+="<p>El campo<b> Nombre</b> es obligatorio</p>";}
		if(inputDatos.length<1 ){aviso+="<p>El campo<b> Teléfono o Mail</b> es obligatorio</p>";}
		alertify.alert(aviso);
	}else{
			var xmlhttp;
			if (window.XMLHttpRequest)
 			 {// code for IE7+, Firefox, Chrome, Opera, Safari
  				xmlhttp=new XMLHttpRequest();
  			 }
			else
  			 {// code for IE6, IE5
  				xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
 			 }
				xmlhttp.onreadystatechange=function()
 			 {
  				if (xmlhttp.readyState==4 && xmlhttp.status==200)
   			 {
    			value=parseInt(xmlhttp.responseText);
				if(value!=0){
					alertify.success("Mail Enviado");// Si es que se cargo bien! 
					document.getElementById("inputNombre").value="";
					document.getElementById("inputDatos").value="";
					document.getElementById("inputComentario").value="";
					alertify.alert("<h1>Muchas Gracias</h1><p>El mail se envio con exito!!</p><p>En la brevedad un asistente se estara poniendo en contacto con usted</p>");
					}
				else{
					alertify.alert("<h1>Error en el envio</h1><p>Intentelo Nuevamente, de persistir verifique su conexi&oacute;n a internet. Si ese no es el inconveniente intentelo más tarde</p>");
					}
				
    		  }
     		}
			xmlhttp.open("POST","mail/enviar_mail.php",true);
			xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
			xmlhttp.send("inputNombre="+inputNombre+"&inputDatos="+inputDatos+"&inputComentario="+inputComentario);}
}
function alerta(){
	alertify.alert("Salee");
	
}