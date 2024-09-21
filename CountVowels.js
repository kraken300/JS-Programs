function countingVowels(str){
    let count = 0;
    let vowels = ["a","e","i","o","u"];
    for (let i = 0; i < str.length; i++) {
       if(vowels.includes(str[i].toLowerCase()))
        count++; 
    }
    return count;
}

console.log(countingVowels("apple"));
console.log(countingVowels("BANANA"));
console.log(countingVowels("CAKE"));
console.log(countingVowels("Mango"));