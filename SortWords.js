function sortWords(str){
    let strArray = str.split("");
    let words = strArray.sort();
    let sortedStr = words.join("");
    console.log(sortedStr);
}

sortWords("apple");