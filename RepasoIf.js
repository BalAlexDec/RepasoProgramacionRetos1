//Ex 1 if
function zodiacal(año, mes, dia) {
    if ((dia >= 21 && mes == 3) || (dia <= 20 && mes == 4))
        console.log('Aries');
    if ((dia >= 24 && mes == 9) || (dia <= 23 && mes == 10))
        console.log('Libra');
    if ((dia >= 21 && mes == 4) || (dia <= 21 && mes == 5))
        console.log('Tauro');
    if ((dia >= 24 && mes == 10) || (dia <= 22 && mes == 11))
        console.log('Escorpio');
    if ((dia >= 22 && mes == 5) || (dia <= 21 && mes == 6))
        console.log('G\u00E9minis');
    if ((dia >= 23 && mes == 11) || (dia <= 21 && mes == 12))
        console.log('Sagitario');
    if ((dia >= 21 && mes == 6) || (dia <= 23 && mes == 7))
        console.log('C\u00E1ncer');
    if ((dia >= 22 && mes == 12) || (dia <= 20 && mes == 1))
        console.log('Capricornio');
    if ((dia >= 24 && mes == 7) || (dia <= 23 && mes == 8))
        console.log('Leo');
    if ((dia >= 21 && mes == 1) || (dia <= 19 && mes == 2))
        console.log('Acuario');
    if ((dia >= 24 && mes == 8) || (dia <= 23 && mes == 9))
        console.log('Virgo');
    if ((dia >= 20 && mes == 2) || (dia <= 20 && mes == 3))
        console.log('Piscis');
}
//Passar Año Mes dia
zodiacal(1999, 4, 14);
//Ex 2 if
function dondeEstoy(pais) {
    if (pais.toLowerCase() == "españa") {
        console.log("Estas en continete Europeo");
    }
    if (pais.toLowerCase() == "alemania") {
        console.log("Estas en continete Europeo");
    }
    if (pais.toLowerCase() == "china") {
        console.log("Estas en continete Asiatico");
    }
    if (pais.toLowerCase() == "brasil") {
        console.log("Estas en continete America del sur");
    }
    if (pais.toLowerCase() == "marruecos") {
        console.log("Estas en continete Africano");
    }
}
dondeEstoy("alemania");
//Ex 8
var ex8 = ["hola", "hola", "Superespia"];
function sumcaracter(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i].length;
    }
    return sum;
}
console.log(sumcaracter(ex8));
//Ex 9
function esParOImpar(num) {
    if (num % 2 == 0) {
        console.log("El numero es Par");
    }
    else {
        console.log("el numero es impar");
    }
}
esParOImpar(5);
//Ex 10
function arraypar() {
    var arr = ["Casa", "Coche", "Ciudad", "Cesta"];
    var arr2 = ["Barco", "Baca", "Bicicleta", "Balon", "Bisiesto", "Brasil"];
    var arr3 = ["Venezuela", "Veneno", "Voltaje"];
    var sum1 = sumcaracter(arr);
    var sum2 = sumcaracter(arr2);
    var sum3 = sumcaracter(arr3);
    console.log("Array uno es" + sum1);
    esParOImpar(sum1);
    console.log("Array dos es" + sum2);
    esParOImpar(sum2);
    console.log("Array tres es" + sum3);
    esParOImpar(sum3);
}
arraypar();
