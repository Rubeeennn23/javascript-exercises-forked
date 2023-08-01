const fibonacci = function(arg) {
    let sequence = [0,1]
    let num = Number(arg)
    if (num<0) {
        return "OOPS"
    } else {
        for (let i=2; i<=num; i++) {
            sequence[i]=sequence[i-2]+sequence[i-1]
        } 
    } return sequence[num]

};
// npm test fibonacci.spec.js
// Do not edit below this line
module.exports = fibonacci;
