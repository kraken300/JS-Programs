function checkPalindrome(n){
    nString = n.toString();
    reverseNString = nString.split("").reverse().join("");
    if(nString === reverseNString){
        return n;
    }
    // console.log(reverseNString);
}

function filterPalindrome(arr){
    return arr.filter(checkPalindrome);
}

let ar = [121, "radar", 12321, "level", 45654, "deified", 789, "hello", "racecar", "madam"];

console.log(filterPalindrome(ar));