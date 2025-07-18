const fibonacci = function(n) {
    if (n < 0) {
        return "OOPS"
    }

    
    
    let fib = [1, 1]
    for (let index = 2; index < n; index++) {
        fib.push(fib[index-1] + fib[index-2])
    }
    return fib[n-1]
};

// Do not edit below this line
module.exports = fibonacci;
