const removeFromArray = function(array,... manyArgs) {
    let length = array.length;
    for (const arg of manyArgs) {
        for (let i=0; i<=length-1; i++) {
            if (array[i] === arg) {
                let newArray=array.splice(i,1)
            } else {
                newArray=array
            }
        }
    } return newArray
};
        
        

//removeFromArray([1,2,3,4],2,3);
// npm test removeFromArray.spec.js
// Do not edit below this line
module.exports = removeFromArray;
