// The includes() method checks if a string contains a specified substring. It returns true if the substring is found, otherwise false.
function checkSubstring1(str,substr){
    return str.includes(substr);
}

// The indexOf() method returns the index of the first occurrence of a substring. If the substring is not found, it returns -1.
function checkSubstring2(str,substr){
    return str.indexOf(substr) !== -1;
}

console.log(checkSubstring1("Apple Cake","Apple"));
console.log(checkSubstring1("Apple Cake","Mango"));

console.log(checkSubstring2("Apple Cake","Apple"));
console.log(checkSubstring2("Apple Cake","Mango"));