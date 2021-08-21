//1. Get 1 to 255

function upTo255() {
    var upToArray = [];
    for (var i=1; i<=255; i++) {
        upToArray.push(i);
    }

    return upToArray;
}

// var a = upTo255();
// console.log(a);


//2. Get even 1000 (function)

function getEvens() {
    var sumOf = 0;
    for (var i=2; i<=1000; i+=2) {
        sumOf+=i;
    }
    
    return sumOf;
}

// var b = getEvens();
// console.log(b);

//3. Sum odd 5000 - fxn returns sum of odd numbers from 1 to 5000

function sumOdds() {
    var sumOf = 0;
    for (var i=1; i<=5000; i++) {
        if (i%2!=0) {
            sumOf += i;
        }
    }
    return sumOf;
}

// console.log(sumOdds());

//4. Iterate an array - sum of array

function sumOfArray(iterArray) {
    var sumOf = 0;
    for (var i=0; i < iterArray.length; i++) {
        sumOf += iterArray[i];
    }
    return sumOf;
}

// var c = [-1, 44, 3, -20, 0, 12];
// console.log(sumOfArray(c));

//5. Find max

function findMax(iterArray) {
    var newMax = iterArray[0];
    for (var i = 1; i < iterArray.length; i++) {
        if (iterArray[i]>newMax) {
            newMax = iterArray[i];
        }
    }
    return newMax;
}

// var d = [333, -44, 0, 3333, 22, -200, 2121212, 1];
// console.log(findMax(d));

//6. Find average

function avg(iterArray) {
    var runningSum = 0;
    for (var i = 0; i < iterArray.length; i++) {
        runningSum += iterArray[i];
    }

    return runningSum / iterArray.length;
}

// var e = [22, -55, 12, 100, 1, -2];
// console.log(avg(e));

//7. Array odd - all odds between 1 and 50

function arrayOdd() {
    var oddArray = [];
    for (var i = 1; i <= 50; i+=2) {
        oddArray.push(i);
    }
    return oddArray;
}

// console.log(arrayOdd());

//8. Greater than Y

function greaterThanCount(testVal, testArray) {
    var amtGreaterThan = 0;
    for (var i = 0; i < testArray.length; i++) {
        if (testArray[i] > testVal) {
            amtGreaterThan++;
        }
    }
    return amtGreaterThan;
}

// var f = 19;
// var g = [-2, -33, 2000, 20, 18, -1500, 0, 22, 555];
// console.log(greaterThanCount(f,g));

//9. Squares

function squareArray(iterArray) {
    for (var i = 0; i < iterArray.length; i++) {
        iterArray[i] = Math.pow(iterArray[i],2);
    }
    return iterArray;
}

// var h = [3, 22, -5, 0, 1, -4, 55];
// console.log(squareArray(h));

//10. Negatives

function negToZero(iterArray) {
    for (var i = 0; i < iterArray.length; i++) {
        if (iterArray[i] < 0 ) {
            iterArray[i] = 0;
        }
    }
    return iterArray;
}
            
// var k = [-3, 44, 1, 0, -58, -200, 101, -5];
// console.log(negToZero(k));

//11. Max/Min/Avg - uses functions from previous problems (#5 & #6), with a function explicitly added for finding minimum values

function findMin(iterArray) {
    var newMin = iterArray[0];
    for (var i = 1; i < iterArray.length; i++) {
        if (iterArray[i] < newMin) {
            newMin = iterArray[i];
        }
    }
    return newMin;
}

function maxMinAvg(iterArray) {
    var newArray = [];
    newArray.push(findMax(iterArray));
    newArray.push(findMin(iterArray));
    newArray.push(avg(iterArray));
    return newArray;
}

// var l = [2, 0, -44, 12, -9, 304, -3];
// console.log(maxMinAvg(l));

//12. Swap values

function swapEnds(arr) {
    var temp = arr[arr.length - 1];
    arr.pop();
    arr.push(arr[0]);
    arr[0] = temp;
    return arr;
}

// console.log(swapEnds([500,-3]));

//13. Number to string

function numToString(arr) {
    for (var i = 0; i < arr.length; i++) {
        if(arr[i] < 0) {
            arr[i] = "Dojo";
        }
    }
    return arr;
}

// console.log(numToString([-2, 0, 1, 33, -200, -6, 5]));