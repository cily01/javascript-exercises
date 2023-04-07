const removeFromArray = function(array) {
    let removedArray = arguments[0];
    for (let i = 1; i < arguments.length; i++){
        for (let j = 0; j < arguments[0].length; j++){
            if (removedArray[j] === arguments[i]){
                removedArray.splice(j, 1);
            }
        }
    };
    return removedArray;
};
// Do not edit below this line
module.exports = removeFromArray;
