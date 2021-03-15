/*
Este es la version mas simple que con nu numero fijo y sin arreglos ni funciones deberia poder resolverse
para 5 numeros

Ejercitación 1

Pedirle al usuario que ingrese exactamente cinco números.  Luego de los ingresos, indicar en la consola:

La cantidad de positivos
La cantidad de negativos
El promedio
El mayor
El menor

*/

let numero1=0, numero2=0, numero3=0, numero4=0, numero5=0, cpos=0, cneg=0, prom=0, mayor=0, menor=0;
let numero=-1;
let cerrores=0; //si son 3 indicar con alert()
let ingresos=0;
let strIngresos='';


mayor= -Infinity;
menor= +Infinity;

for (i=0; i<=5; i++) {

	numero=prompt("ingrese un numero...");

	strIngresos= strIngresos + (numeros!=0 ? ", " : "") + numero.toString();

	ingresos++;

	if ( !(isNaN(numero)) ) {
		numero=parseInt(numero);
		numeros++;

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
console.log("Cantidad de numeros ingresados: ", numeros);
console.log("Cantidad de numeros positivos ingresados: ", cpos);
console.log("Cantidad de numeros negativos ingresados: ", cneg);
console.log("El promedio de los numeros ingresados es: " + prom/numeros );
console.log("El mayor de los numeros ingresados es: ", mayor);
console.log("El menor de los numeros ingresados es: ", menor);

console.log("Usted ha ingresado: ", strIngresos);

if (cerrores>0) {
	if (cerrores<3) {
		console.warn("La cantidad de errores fue: ", cerrores.toString());
	} else {
		console.error("La cantidad de errores fue: ", cerrores);
		alert("La cantidad de errores fue: " + cerrores);
	}

}


