const palindromes = function (s) {
    let ogStringNoPuncLowercase = s.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\ ]/g,"");
    let revStringNoPuncLowercase = s.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\ ]/g,"").split("").reverse().join("")
    console.log(ogStringNoPuncLowercase, revStringNoPuncLowercase)
    
    return ogStringNoPuncLowercase === revStringNoPuncLowercase;
};

// Do not edit below this line
module.exports = palindromes;
