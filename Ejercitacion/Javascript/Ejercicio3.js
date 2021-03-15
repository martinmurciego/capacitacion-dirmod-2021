
/*
Ejercitación 3
Ingresar 10 personas con sus edades
contar numeros negativos, numeros positivos, 

*/

let personas=0, cpos=0, cneg=0, prom=0, mayor=0, menor=0;
let persona="";
let numero=-1;
let cerrores=0; //si son 3 indicar con alert()
let ingresos=0;
let nombresIngresados='', edadesIngresadas='';

mayor= -Infinity;
menor= +Infinity;

while (ingresos <= 10) {

	nombre=prompt("Ingrese el nombre de una persona...");
	edad=prompt("Ingrese la edad de la persona...");

	nombresIngresados= nombresIngresados + (personas!=0 ? ", " : "") + numero.toString();

	ingresos++;

	if ( !(isNaN(numero)) ) {
		numero=parseInt(numero);
		personas++;

		if (numero > mayor) {
			mayor = numero;
		} 

		if (numero < menor) {
			menor=numero;
		}

		prom =+ numero;

	} else {
		cerrores++;
		console.error("Se ha ingresado algo que no es un numero!");
		numero=-9999;
		continue;
	}

	if (numero > 0) {
		cpos++;
	} else if (numero < 0) {
		cneg++;
	} else if (numero == 0) {
		console.log("Reporte de Resultados:");
		break;
	}


}


console.log("Cantidad de valores ingresados: ", ingresos);
console.log("Cantidad de personas ingresados: ", personas);
console.log("Cantidad de personas positivos ingresados: ", cpos);
console.log("Cantidad de personas negativos ingresados: ", cneg);
console.log("El promedio de los personas ingresados es: " + prom/personas );
console.log("El mayor de los personas ingresados es: ", mayor);
console.log("El menor de los personas ingresados es: ", menor);

console.log("Usted ha ingresado: ", nombresIngresados);

if (cerrores>0) {
	if (cerrores<3) {
		console.warn("La cantidad de errores fue: ", cerrores.toString());
	} else {
		console.error("La cantidad de errores fue: ", cerrores);
		alert("La cantidad de errores fue: " + cerrores);
	}

}



// ACA EMPECE ESTE QUE ES COPIADO DE ANTERIORES

function ingresoNombrePersona() {
	let nombre=prompt("Ingrese nombre de persona...\n");
	return nombre;
}

function ingresoEdadPersona() {
	let edad=prompt("Ingrese edad de persona...\n");
	return edad;
}

function procesarPersona() {
	let nombre, edad; 

	nombre = ingresoNombrePersona();
	nombresIngresados= nombresIngresados + (personas!=0 ? ", " : "") + nombre.toString();
	
	if (nombre == undefined) {
		nombre = ingresoNombrePersona();	
		console.error("No se ha ingresado el nombre de la persona, vuelva a intentarlo...");	
	} else if (nombre.trim() == "") {
		console.error("Se ha ingresado un nombre de persona vacio o es un espacio en blanco, vuelva a intentarlo...");	
		nombre = ingresoNombrePersona();
	} 

	edad = ingresoEdadPersona();
	
	edadesIngresadas= edadesIngresadas + (personas!=0 ? ", " : "") + edad.toString();

	if (edad == undefined) {
		console.error("No se ha ingresado la edad, vuelva a intentarlo...");

		edad = ingresoEdadPersona();
	} else if( isNaN(edad) ) {
		edad = ingresoEdadPersona();
		console.error("Se ha ingresado una edad que no es un numero, vuelva a intentarlo...");
	} else if( edad < 0 ) {
		edad = ingresoEdadPersona();
		console.error("Se ha ingresado una edad negativa, vuelva a intentarlo...");
	} else if (edad > 100) {
		edad = ingresoEdadPersona();
		console.error("Se ha ingresado una edad mayor que 100, vuelva a intentarlo...");
	}

	
}

function mostrarIngresos() {
	console.info("Los valores de nombre de persona ingresados: ", nombresIngresados, "\n");
	console.info("Los valores de edad ingresados: ", edadesIngresadas, "\n");

}


function nombreMasJoven() {} {

}

function edadMasJoven() {} {

}

function nombreMasViejo() {

}


function mostrarEdadesNoNumericas() {

}

function mostrarEdadesNegativas() {

}

function mostrarEdadesMayoresQue100() {

}


function cantidadIngresosErroneos() {

}