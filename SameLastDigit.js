function checkLastDigit(n1,n2){
    let n1String = n1.toString();
    let n2String = n2.toString();

    if(n1String.slice(-1) === n2String.slice(-1)){
        return `${n1} and ${n2} have same last digits`;
    }
    else{
        return `${n1} and ${n2} do not have same last digits`;
    }

    // console.log(n1String[n1String.slice(-1)]);
    // console.log(n2String[n2String.length-1]);
}

console.log((checkLastDigit(12,123)));
