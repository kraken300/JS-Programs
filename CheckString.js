function checkStrStartEnd(str, startString, endString) {
    let startCheck = str.startsWith(startString);
    let endCheck = str.endsWith(endString);
    
    if(startCheck && endCheck){
        return `${str} starts with ${startString} and ends with ${endString}`;
    }

    else if(startCheck){
        return `${str} starts with ${startString} but not ends with ${endString}`;
    }
    else if(endCheck){
        return `${str} does not start with ${startString} but ends with ${endString}`;
    }
    else{
        return `${str} neither starts with ${startString} nor ends with ${endString}`;
    }
}

console.log((checkStrStartEnd("Apple Banana","Cake","Cake")));
console.log((checkStrStartEnd("Apple Banana","Apple","Banana")));