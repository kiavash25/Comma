var realNumber;

var setKeyUp = function (id, char, num) {
    $('#'+id).keyup(function () {
        commaNumber(this, char, num);
    });
}

function commaNumber(element, char, num) {

    var number = element.value;
    var commaIndex = number.indexOf(char);
    var newNumber = [];
    while(commaIndex != -1){
        number = number.substr(0,commaIndex) + '' + number.substr((commaIndex+1), number.length);
        commaIndex = number.indexOf(char);
    }
    realNumber = number;

    Division = Math.floor(number.length/num);
    remaining = Math.floor(number.length%num);
    if(remaining == 0)
        remaining = num;
    newNumber[0] = number.substr(0,remaining);
    number = number.substr(remaining, number.length-1);

    for(i = 1; i <= Division; i++){
        newNumber[i] = number.substr(0,num);
        number = number.substr(num, number.length-1);
    }

    number = newNumber[0];
    for(i = 1; i < newNumber.length; i++){
        if(newNumber[i] != ''){
            number += char+newNumber[i];
        }
    }
    element.value = number
}