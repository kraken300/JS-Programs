function fibonacciSequence(num) {
    let a = 0, b = 1, c;

    if (num <= 0) {
        return;
    }

    if (num >= 1) {
        console.log(a);
    }
    if (num >= 2) {
        console.log(b);
    }

    for (let i = 2; i < num; i++) {
        c = a + b;
        console.log(c);
        a = b;
        b = c;
    }
}

fibonacciSequence(10);