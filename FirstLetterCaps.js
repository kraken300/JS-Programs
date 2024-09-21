function firstLetterUpper(str){
    // return str[0].toUpperCase()+str.slice(1);
    if(typeof str === "string" && str.length>0){
        return str[0].toUpperCase()+str.slice(1);
    }
    return str;
}

console.log(firstLetterUpper("apple")); // Output: "Apple"
console.log(firstLetterUpper("hello world")); // Output: "Hello world"
console.log(firstLetterUpper("")); // Output: ""
console.log(firstLetterUpper(123)); // Output: 123 (unchanged)
console.log(firstLetterUpper(null)); // Output: null (unchanged)