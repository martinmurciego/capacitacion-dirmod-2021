
/*
Ejercitación 2

Aplicarle al ejercicio 1 las siguientes mejoras y agregados:

Que sea el usuario que, primeramente, indique cuántos números va a ingresar.
Validar que el ingreso sea realmente un número.  Si no lo es, advertirle al usuario y que vuelva 
a ingresarlo. Al final, además de los resultados indicados, mostrar cuántos ingresos erróneos tuvo. 
Si son más de tres, además de en la consola, mostrar un alert indicándole al usuario lo nabo que es.

*/

let numeros=0, cpos=0, cneg=0, prom=0, mayor=0, menor=0;
let numero=-1;
let cerrores=0; //si son 3 indicar con alert()
let ingresos=0;
let strIngresos='';


mayor= -Infinity;
menor= +Infinity;

while (numero =! 0) {

	numero=prompt("ingrese un numero y 0 para terminar...");

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


