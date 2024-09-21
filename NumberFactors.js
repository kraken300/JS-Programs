function factorOfNumber(num){
    if(num<=0){
        return [];
    }

    let factors = [];

    for (let i = 1; i <= Math.sqrt(num); i++) {
        if(num%i===0){
            factors.push(i);
            if(i !== num/i){
                factors.push(num/i);
            }
        }
        
    }
    return factors.sort((a,b)=>a-b);
}

let n = 36;
console.log(factorOfNumber(n));