const repeatString = function(str, i) {
    if (i < 0) {
        return "ERROR"
    }
    let s = ""
    for (let index = 0; index < i; index++) {
        s += str
    }
    return s
};

// Do not edit below this line
module.exports = repeatString;
