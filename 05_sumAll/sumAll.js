const sumAll = function(firstInt, lastInt) {
    if (firstInt < 0 || lastInt < 0 || typeof firstInt !== "number" || typeof lastInt !== "number"){
        return "ERROR";
    }
    let smallNum = 0;
    let bigNum = 0;
    let sum = 0;
    if (firstInt > lastInt){
        smallNum = lastInt;
        bigNum = firstInt;
    }
    else {
        smallNum = firstInt;
        bigNum = lastInt;
    }
    while (smallNum <= bigNum){
        sum += smallNum;
        smallNum += 1;
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
