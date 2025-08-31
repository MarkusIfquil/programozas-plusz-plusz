const reverseString = function(str) {
    reversed = ""
    for (index = str.length - 1; index >= 0; index--) {
        reversed += str[index]
    }
    return reversed
};

// Do not edit below this line
module.exports = reverseString;
