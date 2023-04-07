const repeatString = function(string, noOfTimes) {
    let repeatedString = "";
    if (noOfTimes >= 0){
        for (let i = 1; i <=noOfTimes; i++){
            repeatedString += string;
        }
        return repeatedString;
    }
    else return "ERROR";
};

// Do not edit below this line
module.exports = repeatString;
