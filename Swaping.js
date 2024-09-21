function swap(a, b, c) {
    c = a;
    a = b;
    b = c;
    console.log(a, b);
}

function swap2(a, b) {
    a = a+b;
    b = a-b;
    a = a-b;
    console.log(a, b);
}

function swap3(a, b) {
    a = a^b;
    b = a^b;
    a = a^b;
    console.log(a, b);
}

swap(5, 10);
swap2(5, 10);
swap3(5, 10);