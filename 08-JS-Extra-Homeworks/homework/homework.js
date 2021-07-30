// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var matriz = [];
  for (var propiedad in objeto) {
    matriz.push([propiedad, objeto[propiedad]]);
  };
  return matriz;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el string y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí

  let arrayString = Array.from(string);
  let cuentaLetra = {};
  
  arrayString.forEach(letra => {
    cuentaLetra[letra] = (cuentaLetra[letra] || 0) + 1;
  });
  return cuentaLetra;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let sMayus = [];
  let sMinus = [];
  let sUpperC = s.toUpperCase();
  for (let i = 0; i < s.length; i++) {
    if (sUpperC[i] === s[i]) {
      sMayus.push(s[i]);
    } else {
      sMinus.push(s[i]);
    }
  }
  let sMayMen = sMayus.concat(sMinus); 
  return sMayMen.join("");    
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  let arrayStr = str.split(" ");
  let strEspejo = [];
  for (let i = 0; i < arrayStr.length; i++) {
    let palabra = arrayStr.slice(i, (i+1)).toString().split("").reverse().join("");
    strEspejo.push(palabra);
  }
  return strEspejo.join(" ");
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  let num = numero.toString().split("").reverse().join("").valueOf();
  if (num == numero) {
    return "Es capicua";
  } else {
    return "No es capicua";
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
   let verMod = cadena.replace(/a/g, "").replace(/b/g, "").replace(/c/g, "");
   return verMod;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

  /* Se uso la funcion de comparacion para resolver.
    A la variable x se le da el valor de la longitud de a, y a la variable y, la longitud de b.
    Asi la funcion dice que si x < y es -1 indica que la longitud de b es mayor y por operacion de la funcion
    function(a,b) ordenara en manera creciente. Si la funcion fuera function(b,a) ordenaria de forma decreciente.*/

  arr.sort(function(a, b){
    let x = a.length;
    let y = b.length;
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
  });
  return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  

  let newArr = [];                            // Declare nuevo array a retornar
  for (let i = 0; i < arreglo1.length; i++) { // El primer for para barrer el arreglo1, i cambia despues de barrer
    let j = 0;                                // el segundo for, que barre el arreglo2. Siempre volver la variable j
    for (j = 0; j < arreglo2.length; j++) {   // a cero, para que compare todo arreglo2 con la posicion i del arreglo1.
      if (arreglo2[j] === arreglo1[i]) {
        newArr.push (arreglo2[j]);
      }
    }
  }
  return newArr;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

