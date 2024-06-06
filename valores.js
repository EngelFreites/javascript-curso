// VALORES

// ! NUMEROS(Number)
1;

//Los números fraccionarios se escriben usando un punto
2.3;

//Lo principal que se puede hacer con los números es la aritmética.
// toman dos valores numéricos o mas y producen un nuevo número a partir de ellos

2 + 3; // 5
2 * 3; // 6
100 + 4 * 1; // 104
(4 /
  2(
    //2
    100 + 4
  )) *
  11// ! Cadenas de texto(String) // 1144

  //Las cadenas se utilizan para representar texto.
  //Se escriben encerrando su contenido entre comillas.

  `Saltos de línea (los caracteres que obtienes al presionar enter) 
solo se pueden incluir cuando la cadena está entre acentos graves`; //acentos graves

("Acostado en el océano,"); // comillas dobles
("Flotando en el \n océano"); // comillas simples

// ! Concatenar unir dos candenas

//Las cadenas no se pueden dividir, multiplicar o restar.
//El operador + se puede usar en ellas, no para sumar, sino para concatenar

"hola" + "Engelbert"; // hola Engelbert

// ! Operadores Unarios
//No todos los operadores son símbolos. Algunos se escriben como palabras.
//Un ejemplo es el operador typeof,
//que produce un valor de cadena que indica el tipo del valor que le proporcionas.

typeof "hola"; //"string"
typeof 15; //"number"

// ! Booleanos

//es útil tener un valor que distinga solo entre dos posibilidades,
//como “sí" y “no” o “verdadero” y “falso”.

// Una forma de producir valores booleanos es las comparaciones
//ejemplo

3 > 2; // si/true
3 < 2; // no/false

"ana" == "ana"; // true
"Engel" == "Angel"; // false
"Carlos" != "Pedro"; // true

// ! Operadores Logicos
//También hay algunas operaciones que se
//pueden aplicar a los propios valores
//Booleanos. JavaScript soporta tres

// ? operadores lógicos: and (y), or (o), y //not (no). Estos se pueden usar para

//“razonar” sobre valores Booleano
// ? El operador && representa el and lógico.
//Es un operador binario, y su resultado es verdadero solo si ambos valores dados son verdaderos.

3 > 2 && 6 > 5; //true
3 > 2 && 4 > 5; //false

// ? El operador || representa el O lógico. Produce verdadero si cualquiera de los valores dados es verdadero.

false || true; // true
false || false; // true
true || false; // true

// ? Es un operador unario que invierte el valor dado; !true produce false y !false produce true.
!true; // false
!false; // true
