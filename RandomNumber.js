function randomNumber(start,end){
    return Math.floor(start +((end-start)*Math.random()));
}

console.log(randomNumber(1,100));