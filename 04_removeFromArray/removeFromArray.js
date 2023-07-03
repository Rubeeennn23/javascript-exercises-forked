const removeFromArray = function(array,object1,object2) {
    let length = array.length;
    for (let i=0; i<=length-1; i++) {
        if (object1===array[i]) {
            let newArray=array.splice(i,1)
        } else {
            newArray=array
        
             } if (object2===array[i]) {
            let newArray=array.splice(i,1)
        } else {
            newArray=array
        }
    } return newArray
};

// npm test removeFromArray.spec.js
// Do not edit below this line
module.exports = removeFromArray;
