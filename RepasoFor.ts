//Ex 3 for 
function impares(num){
    let arr;
    for(let i=0; i<num ;i ++){
        if(num % 2 !=0){ arr[i]=i };
    }
    return arr;
}
console.log(impares(20));

//Ex 4 funcion 
let invertido = [1,2,3,4,5,6,7,8,9,10];
function invert(array){
    return array.reverse();
}
console.log(invert(invertido));

//Ex5
let color = ["rojo","negro","amarillo"];
function arcoiris(arr){
    for(let i=0; i<arr.length;i++){
        if(arr[i]=="amarillo"){
            console.log("Este color esta en arcoiris "+arr[i]);
        }
        if(arr[i]=="verde"){
            console.log("Este color esta en arcoiris "+arr[i]);
        }
        if(arr[i]=="añil"){
            console.log("Este color esta en arcoiris "+arr[i]);
        }
        if(arr[i]=="azul"){
            console.log("Este color esta en arcoiris "+arr[i]);
        }
        if(arr[i]=="violeta"){
            console.log("Este color esta en arcoiris "+arr[i]);
        }
        if(arr[i]=="rojo"){
            console.log("Este color esta en arcoiris "+arr[i]);
        }
       
    }
}
arcoiris(color);
//Ex7
let arr =["Mama","madrazos","Mamon","Mamazao"];
let arr2 = ["xd","xd"]
function M(arr){//for
    let contador = arr.length;
    let j=0 ;
    for(let i=0; i<arr.length ;i++){
       if(arr[i].charAt(0).toUpperCase()=="M"){
           j=j+1;
       }
    }
    if(contador==j){
        return true;
    }else{
        return false;
    }
}
console.log("Ex7"+" "+M(arr));// 