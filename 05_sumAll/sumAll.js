const sumAll = function() {
    let sum=0;
    if (arguments[0]<0 || arguments[1]<0 || typeof arguments[0] != 'number' || typeof arguments[1] != 'number') {
        return 'ERROR'
    } else if (arguments[0]>arguments[1]) {
        for (let i=arguments[1]; i<=arguments[0];i++) {
            sum += i;
        } return sum
    } else {
        for (let i=arguments[0]; i<=arguments[1];i++) {
            sum += i;
        } 
    } return sum
};
// npm test sumAll.spec.js
// Do not edit below this line
module.exports = sumAll;
