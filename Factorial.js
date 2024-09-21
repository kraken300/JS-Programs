function factorial(n){
    let fact=1;
    for(let i=1;i<=n;i++){
        fact = fact*i;
    }
    return fact
}

function factorial2(n){
    let fact1 = 1;
    let i = 1;
    while(i<=n){
        fact1 = fact1*i;
        i++;
    }
    return fact1
}

function recursion(n){
    if (n===0 || n===1){
        return 1;
    }
    else{
        return n*recursion(n-1);
    }
}

console.log(factorial(5));  
console.log(factorial2(5));  
console.log(recursion(5));  