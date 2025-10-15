/**/
console.log("conexiones correctas");

/*Edad y etapa de vida
Pide la edad de una persona.
Si es menor a 13 → “Eres un niño”.

Si tiene entre 13 y 17 → “Eres adolescente”.

Si tiene 18 o más → “Eres adulto”.

Práctica: uso de rangos con if, else if, else.
 */

function verificarEtapa(){
    let edad = parseInt(prompt("Ingrese su edad"));
    if(edad < 13){
        alert("Eres un niño");
    } else if (edad > 13 && edad < 18){
        alert("Eres adolecente")
    } else ("")
}

/*Validar contraseña exacta
Pide una contraseña.
Si el texto ingresado es exactamente "12345", muestra “Acceso permitido”.

Si no, muestra “Acceso denegado”.

Práctica: comparación exacta (===). */

function validarContraseña(){
    let contraseña = prompt("Ingresar contraseña");
    if(contraseña === 12345 ){
        alert("Acceso permitido")
    } else {
        alert("Acceso denegado");
    }
}

/*3Verificar letra en palabra
Pide una palabra.
Si contiene la letra “e” (mayúscula o minúscula) → “La palabra contiene la letra E”.
Si no → “No contiene la letra E”.
Usa: if (palabra.toLowerCase().includes('e')) { ... }*/
function verificarLetra(){

}






/* 4 Comparar dos números
Pide dos números con prompt().
Si el primero es mayor → “El primer número es mayor”.
Si el segundo es mayor → “El segundo número es mayor”.
Si son iguales → “Son iguales”.
Práctica: comparaciones dobles*/
function compararNúmeros(){

}




/*5 Determinar si el número es par o impar
Pide un número.
Si el resto al dividir por 2 (% 2) es 0 → “Número par”.
Si no → “Número impar”. Práctica: uso del operador módulo %.
*/
function parImpar(){
let par = parseInt(prompt("Ingressar un número"));
if (par % 2 == 0) {
    alert("Es par")
} else{
    alert("Número impar")
 } 
}


/*6 Revisar palabra inicial
Pide una palabra.
Si empieza con la letra “A” o “a” → “Empieza con A”.
Si no → “No empieza con A”.Puedes usar:
if (palabra[0].toLowerCase() === 'a') { ... }*/
function revisarPalabra(){
   let palabraA = prompt("Ingrese una palabra: ")
   if (palabra[0].toLowerCase() === 'a') {
    alert("Empieza con A")
   } else
    alert("No empieza con A")
   }



/*7 Temperatura ambiente
Pide una temperatura.
Si es menor a 10 → “Hace frío”.
Si es entre 10 y 25 → “Clima templado”.
Si es mayor o igual a 26 → “Hace calor”.
Práctica: comparaciones encadenadas.
*/
function temperatura(){
    let temperatura = parseInt(prompt("Ingrese la temperatura actual: "))
    if (temperatura < 10) {
        alert("Hace frio")
    } else if (temperatura > 10 && temperatura < 25) {
        alert ("Clima templado")
    } else if (temperatura => 26) {
        alert ("Hace calor")
    } else {
        alert ("Error")
    }

}

// Desafio 8
function nombreReconocido() {
    let nombre = prompt("Ingresa un nombre: ");
    if(nombre.toLocaleLowerCase().includes("dany")) {
       alert("Hola, profesor")
    } else if(nombre.toLocaleLowerCase().includes("ely")) {
       alert("Hola, mamá")
    } else {
      alert("Hola, visitante")
    }
}

// Desafio 9
function notas(){
   let nota = parseInt(prompt("Ingrese una nota del 1 al 7: "));
   if (nota >= 1 && nota <= 7) {
    if (nota < 4) {
        alert("Reprobado :(");
    } else {
        alert("Aprobado :)");
    }
   } else {
    alert("Nota invalida :/");

 }

}

// Desafio 10

function palabraClave() {
    let clave = prompt("Ingrese una palabra o frase:")
    if(clave.toLowerCase().includes('jesús')) {
        alert("Tu frase tiene la palabra clave")
    } else {
        alert("No contiene la palabra clave")
    }
}