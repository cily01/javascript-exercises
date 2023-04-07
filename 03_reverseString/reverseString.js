const reverseString = function(inputString) {
    let inputSplit = inputString.split("");
    let inputSplitReversed = [];
    for (char of inputSplit){
        inputSplitReversed.unshift(char);
    }
    return inputSplitReversed.join("");

};

// Do not edit below this line
module.exports = reverseString;
