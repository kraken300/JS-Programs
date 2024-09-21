function largeAmong3(a,b,c){
    if(a>b && a>c){
        return `${a} is the largest number`;
    }

    else if(b>a && b>c){
        return `${b} is the largest number`;
    }

    else{
        return `${c} is the largest number`;
    }
}

console.log(largeAmong3(25,15,10));