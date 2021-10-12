//Ex6 while
var d;
d = 0;
function par(arr) {
    while (d < arr.length) {
        if (arr[d] % 2 == 0) {
            console.log(arr[d] + "Es para");
            d = arr.length + 4;
            return true;
        }
        d++;
    }
    return false;
}
