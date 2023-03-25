const reverseString = function(string) {
    let res = "";
    let arr = string.split("");
    for (let i = arr.length-1; i >= 0; i--) {
        res+=arr[i];
    }
    return res
};

// Do not edit below this line
module.exports = reverseString;
