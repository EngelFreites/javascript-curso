//?Una expresión es cualquier pedazo de código que genera un valor.
//?Las expresiones pueden ser sencillas o complicadas, y se usan para obtener un resultado.

42; // Una expresión que evalúa a 42
("Hola"); // Una expresión que evalúa a la cadena "Hola"
true; // Una expresión que evalúa a true

//?Operaciones Aritméticas: Sumas, restas, multiplicaciones, divisiones, etc.

5 + 3; // Una expresión que evalúa a 8
10 - 2; // Una expresión que evalúa a 8

//?Para atrapar y retener valores, JavaScript proporciona una cosa llamada variable:

let caught = 5 * 5;

//?Después de que se haya definido un variable, su nombre se puede usar como una expresión.

let ten = 10;
console.log(ten * ten);
// → 100

//?Cuando un variable apunta a un valor, eso no significa que esté atado a ese valor para siempre.

let mood = "light";
console.log(mood);
// → light
mood = "dark";
console.log(mood);
// → dark

//?hay una serie de palabras que están “reservadas para su uso” en futuras versiones de JavaScript,
//?las cuales tampoco se pueden usar como nombres de variables.

/*break case catch class const continue debugger default
delete do else enum export extends false finally for
function if implements import interface in instanceof let
new package private protected public return static super
switch this throw true try typeof var void while with yield*/

// ! Control de Flujo

//?Cuando tu programa contiene más de una sentencia, las sentencias se ejecutan como si fueran una historia, de arriba hacia abajo.

let elNumero = prompt("Elige un número"); //pedimos un numero

console.log("Tu número es la raíz cuadrada de " + elNumero * elNumero); //esto se ejecuta luego de la primera

// ! Ejecución condicional

//? La ejecución condicional se crea con la palabra clave if en JavaScript.

/*La ejecución condicional se crea con la palabra clave if en JavaScript. 
En el caso simple, queremos que cierto código se ejecute si, y solo si,
una cierta condición es verdadera.  */

let elNumero2 = Number(prompt("Elige un número"));

if (typeof elNumero != "string") {
  console.log("Tu número es la raíz cuadrada de " + elNumero2 * elNumero2);
}

//Si tienes más de dos caminos para elegir, puedes “encadenar” múltiples pares if/else. Aquí tienes un ejemplo:

let num = Number(prompt("Escoge un número"));

if (num < 10) {
  console.log("Pequeño");
} else if (num < 100) {
  console.log("Mediano");
} else {
  console.log("Grande");
}

// Bucle while

//?es una manera de ejecutar un fragmento de código múltiples veces. Esta forma de control de flujo se llama bucle.

/*El control de flujo mediante bucles nos permite regresar a algún punto 
en el programa donde estábamos antes y repetirlo con nuestro estado de programa actua */

let numero = 0;
while (numero <= 12) {
  console.log(numero);
  numero = numero + 2;
}
// → 0
// → 2
//   … etcétera
