function checkArmstrong(num) {
    let stringNum = num.toString();
    let lengthNum = stringNum.length;

    let sum = 0;
    for (let i = 0; i < lengthNum; i++) {
        let singleNum = parseInt(stringNum[i], 10);
        sum += Math.pow(singleNum, lengthNum);
    }
    return sum === num;
}


function intervalArmstrong(start, end) {
    console.log(`The armstrong numbers between range ${start} and ${end} are as follows`);
    for (let i = start; i <= end; i++) {
        if (checkArmstrong(i)) {
            console.log(i);
        }
    }
}

let start = 1;
let end = 10000;
intervalArmstrong(start, end);

// let n = 400;
// if(checkArmstrong(n)){
//     console.log(`${n} is an armstrong number`);
// }
// else{
//     console.log(`${n} is not an armstrong number`);
// }