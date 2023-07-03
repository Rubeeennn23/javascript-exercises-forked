const reverseString = function(words) {
    let length = words.length; 
    let reverseWords = ''; 
    for (let i=length-1;i>=0;i--) {
        reverseWords += words[i];
    } return reverseWords
};
// npm test reverseString.spec.js
// Do not edit below this line
module.exports = reverseString;
