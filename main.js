// --------------task 1----------------

function myReverse(str) {
    var reversedWord = '';
    for (var i = str.length - 1; i >= 0; i--) {
        reversedWord += str[i];
    }
    return reversedWord;
}
// console.log(myReverse('123456789'))


// --------task 2----------------------

function capitalizeString(str) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}
// console.log(capitalizeString("ЭРБОЛ"));
// console.log(capitalizeString("мЕДЕТБЕКОВ"));


// ---------task 3------------

function depersonalize(fullName) {
    var nameParts = fullName.split(' ');
    for (var i = 0; i < nameParts.length; i++){
        var name = nameParts[i]
        var deWord = []
        for (var j= 0; j < name.length; j++){
            var arrName = name.split('')
            var idx = arrName.indexOf(name[j])
            var lastIdx = name.indexOf(name[name.length - 1])
            console.log(name[j])
            console.log(arrName[j].replace(name), '_')
            idx !== 0 && idx !== lastIdx ? deWord += arrName[j].replace(name[j], '_') : deWord += name[j]
        }
    }
}
console.log(depersonalize("Медетбеков Эрбол Медетбекович"));

