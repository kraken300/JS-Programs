function checkNumberOfOccurences(str,letter){
    let count = 0;
    for(let i = 0; i<str.length;i++){
        if(str[i] === letter){
            count++;
        }
    }
    return `The letter ${letter} is occured ${count} times in string ${str}`;
}

function checkNumberOfOccurences2(str,letter){
    return str.split(letter).length-1;
} 

console.log(checkNumberOfOccurences("Apple","p"));
console.log(checkNumberOfOccurences2("Apple","p"));