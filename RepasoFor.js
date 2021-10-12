//Ex 3 for 
function impares(num) {
    var arr;
    for (var i = 0; i < num; i++) {
        if (num % 2 != 0) {
            arr[i] = i;
        }
        ;
    }
    return arr;
}
console.log(impares(20));
//Ex 4 funcion 
var invertido = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function invert(array) {
    return array.reverse();
}
console.log(invert(invertido));
//Ex5
var color = ["rojo", "negro", "amarillo"];
function arcoiris(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == "amarillo") {
            console.log("Este color esta en arcoiris " + arr[i]);
        }
        if (arr[i] == "verde") {
            console.log("Este color esta en arcoiris " + arr[i]);
        }
        if (arr[i] == "añil") {
            console.log("Este color esta en arcoiris " + arr[i]);
        }
        if (arr[i] == "azul") {
            console.log("Este color esta en arcoiris " + arr[i]);
        }
        if (arr[i] == "violeta") {
            console.log("Este color esta en arcoiris " + arr[i]);
        }
        if (arr[i] == "rojo") {
            console.log("Este color esta en arcoiris " + arr[i]);
        }
    }
}
arcoiris(color);
//Ex7
var arr = ["Mama", "madrazos", "Mamon", "Mamazao"];
var arr2 = ["xd", "xd"];
function M(arr) {
    var contador = arr.length;
    var j = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].charAt(0).toUpperCase() == "M") {
            j = j + 1;
        }
    }
    if (contador == j) {
        return true;
    }
    else {
        return false;
    }
}
console.log("Ex7" + " " + M(arr)); // 
