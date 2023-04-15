const palindromes = function (string) {
    let lowerCaseString = string.toLowerCase();
    let filterLetters = lowerCaseString.replace(/[^a-z0-9]/gi,'');
    let letterArray = filterLetters.split("");
    let reversedArray = letterArray.reverse();
    let joinedString = reversedArray.join("")
    if (joinedString === filterLetters){
        return true;
    }
    else return false;
};

palindromes("hellothere");
// Do not edit below this line
module.exports = palindromes;
