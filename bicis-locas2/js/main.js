// variables globales
// Contador es igual a i
var cajaInput = document.getElementsByClassName("input-box");

function validateForm(){
	/* Escribe tú código aquí */
	validarNombre();
}

function validarNombre(){
	var name = document.getElementById("name").value;
	var regexName = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
	var espacioBlanco = /^\s+$/;

	// Para validar el nombre haré una condición

	if (!(regexName.test(name) ) || (espacioBlanco.test(name) )){
		// Si no es verdad se mostrará un span con la alerta "El nombre no es correcto"
		var i = 0;
		alert("campo erroneo");
		return false; 
	}else if {
		
	}
	console.log("esta bien");
	return true;
}
