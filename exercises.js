// ejercicios de operadores

// a
let num1 = 10;
let num2 = 5;
let sumaNums = num1 + num2;
console.log("Suma numérica:", sumaNums);

// b
let str1 = "Hola";
let str2 = "Mundo";
let concatenado = str1 + " " + str2;
console.log("Concatenación:", concatenado);

// c
let largoTotal = str1.length + str2.length;
console.log("Suma de largos:", largoTotal);

// ejercicios de strings

// a
let texto = "javascript cool";
console.log("Mayúsculas:", texto.toUpperCase());

// b
let sub5 = texto.substring(0,5);
console.log("Primeros 5:", sub5);

// c
let ult3 = texto.substring(texto.length -3);
console.log("Últimos 3:", ult3);

// d
let cap = texto.substring(0,1).toUpperCase() + texto.substring(1).toLowerCase();
console.log("Capitalizado:", cap);

// e
let conEspacio = "programa algo";
let posEspacio = conEspacio.indexOf(" ");
console.log("Pos espacio:", posEspacio);

// f
let dosPalabras = "programacion increible";
let espacio = dosPalabras.indexOf(" ");
let primera = dosPalabras.substring(0,1).toUpperCase() + dosPalabras.substring(1, espacio).toLowerCase();
let segunda = dosPalabras.substring(espacio+1, espacio+2).toUpperCase() + dosPalabras.substring(espacio+2).toLowerCase();
let final = primera + " " + segunda;
console.log("Doble capitalizado:", final);

// ejercicios de arreglos

let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
"Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

// a
console.log("Mes 5 y 11:", meses[4], meses[10]);

// b
console.log("Ordenados:", meses.slice().sort());

// c
meses.unshift("MesInicio");
meses.push("MesFinal");
console.log("Agregado:", meses);

// d
meses.shift();
meses.pop();
console.log("Quitado:", meses);

// e
meses.reverse();
console.log("Reverso:", meses);

// f
console.log("Join:", meses.join("-"));

// g
let mayoANov = meses.slice(meses.indexOf("Mayo"), meses.indexOf("Noviembre")+1);
console.log("Slice mayo-nov:", mayoANov);

// tomas de desiciones

// a
let rand = Math.random();
if(rand >= 0.5){
    alert("Greater than 0.5");
} else {
    alert("Lower than 0.5");
}

// b
let age = Math.floor(Math.random() * 101);
console.log("Age:", age);
if (age < 2) {
    alert("Bebe");
} else if (age <= 12) {
    alert("Niño");
} else if (age <= 19) {
    alert("Adolescente");
} else if (age <= 30) {
    alert("Joven");
} else if (age <= 60) {
    alert("Adulto");
} else if (age <= 75) {
    alert("Adulto mayor");
} else {
    alert("Anciano");
}

// ejercicios de for

let palabras = ["hola", "como", "estas", "tanto", "tiempo"];
for (let i = 0; i < palabras.length; i++) {
    alert(palabras[i]);
}

for (let i = 0; i < palabras.length; i++) {
    let p = palabras[i];
    let capital = p.substring(0,1).toUpperCase() + p.substring(1);
    alert(capital);
}

// c
let sentence = "";
for (let i = 0; i < palabras.length; i++) {
    sentence += palabras[i] + " ";
}
alert("Frase completa: " + sentence.trim());

// d
let numeros = [];
for (let i = 0; i < 10; i++) {
    numeros.push(i);
}
console.log("Array del 0 al 9:", numeros);

// ejercicios de funciones

// a
function suma(a, b){
    return a + b;
}
let resultado = suma(4,5);
console.log("Suma función:", resultado);

// b
function sumaValidada(a,b){
    if(isNaN(a) || isNaN(b)){
        alert("Uno de los parámetros no es número");
        return NaN;
    }
    return a+b;
}
console.log("Suma validada:", sumaValidada(4,"no"));

// c
function validateInteger(num){
    return Number.isInteger(num);
}
console.log("¿Es entero?", validateInteger(4.5));

// d
function sumaConEnteros(a,b){
    if(isNaN(a) || isNaN(b)){
        alert("Uno no es número");
        return NaN;
    }
    if(!validateInteger(a)){
        alert("A no es entero, se redondea");
        a = Math.round(a);
    }
    if(!validateInteger(b)){
        alert("B no es entero, se redondea");
        b = Math.round(b);
    }
    return a+b;
}
console.log("Suma con enteros:", sumaConEnteros(4.3,5.7));

// e
function redondearSiNoEntero(n){
    if(!validateInteger(n)){
        alert("No es entero, se redondea");
        return Math.round(n);
    }
    return n;
}

function sumaSeparada(a,b){
    if(isNaN(a) || isNaN(b)){
        alert("Uno no es número");
        return NaN;
    }
    a = redondearSiNoEntero(a);
    b = redondearSiNoEntero(b);
    return a+b;
}
console.log("Suma final:", sumaSeparada(3.9,7.2));
