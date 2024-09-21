function primeCheck(n) {
    if (n === 1) {
        return `${n} is neither a prime nor a composite number`
    }
    else if (n < 0) {
        return `${n} is a negative number`
    }
    else {

        if(n===2){
            return `${n} is a prime number`
        }

        if(n%2===0){
            return `${n} is not a prime number`
        }

        for (let i = 3; i <= Math.sqrt(n); i+=2) {
            if(n%i===0){
                return "Not a Prime Number";
            }
        }
        return "Prime Number"
    }
}

console.log(primeCheck(25));