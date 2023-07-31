const palindromes = function (string) {
    let oldtext = string
    let replacedText = oldtext.replace(/[^\w\s\']|_/g,'').replace(/\s+/g,'')
    let text = replacedText.toLowerCase()
    let length = text.length
    let newText = ''
    
    for (let i=length; i>0; i--) {
        newText += text.slice(i-1,i)
    } if (newText == text) {
        return true
    } else {
        return false
    }
};
// npm test palindromes.spec.js
// Do not edit below this line
module.exports = palindromes;
