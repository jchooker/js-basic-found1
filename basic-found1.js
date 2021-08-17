//1. Get 1 to 255

function upTo255() {
    var upToArray = [];
    for (var i=1; i<=255; i++) {
        upToArray.push(i);
    }

    return upToArray;
}

var x = upTo255();
console.log(x);


//2. Get even 1000 (function)

function getEvens() {
    var sumOf = 0;
    for (var i=2; i<=1000; i+=2) {
        sumOf+=i;
    }
    
    return sumOf;
}

var x = getEvens();
console.log(x);

//3. Sum odd 5000 - fxn returns sum of odd numbers from 1 to 5000
