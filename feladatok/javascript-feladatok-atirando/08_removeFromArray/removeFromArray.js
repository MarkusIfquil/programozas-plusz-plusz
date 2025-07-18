const removeFromArray = function(array, ...nums) {
    let newArr = [];
    array.forEach(element => {
        if (!nums.includes(element)) {
            newArr.push(element);
        }
    });
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
