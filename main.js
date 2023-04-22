// --------task 1---------
const maskCard = (cardNumbers, hiddenSymbol = "x") => {
    if (cardNumbers.length !== 16) {
        alert('Введите корретный номер карты!');
    }
    return ((cardNumbers.slice(0,6)) + (hiddenSymbol.repeat(6)) + (cardNumbers.slice(12,16)))
}
console.log(maskCard('9417088597965592', "*"));


// -------task 2 -----------
const padStart = (srcStr, strLength, symbolZam = ' ') => {
    if (srcStr.length >= strLength) {
        return srcStr;
    } else {
        return symbolZam.repeat(strLength - srcStr.length) + srcStr;
    }
}
console.log(padStart("7", 3, "0"));


// --------task 3----------
const mean = (...numbers) => {
    let sum = 0;
    for (const arg of numbers){
        sum += arg;
    }
    return sum;
}
console.log(mean(1, 2, 3, 4, 5), 'rest operators');

function mean2() {
    let sum = 0;
    for (const arg of arguments) {
        sum += arg;
    }
    return sum;
}
console.log(mean2(1, 2, 3, 4, 5), 'function arguments');


// ---------task 4---------------
const sumAsText = (...nums) => {
    if (nums.length === 0) {
        return "";
    }
    const sum = nums.reduce((acc, num) => acc + num);
    return `${nums.join(' + ')} = ${sum}`;
};
console.log(sumAsText(1, 4, 7));

function sumAsText2 () {
    let argList = Array.from(arguments)
    if (arguments.length === 0) {
        return "";
    }
    const sum = argList.reduce((acc, num) => acc + num);
    return `${argList.join(' + ')} = ${sum}`;
}
console.log(sumAsText2(1, 4, 7));

