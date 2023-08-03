const getTheTitles = function(books) {
    return books.map(item => item.title); 


};
// npm test getTheTitles.spec.js
// Do not edit below this line
module.exports = getTheTitles;


/*
    let length = books.length
    let titles = []
    for (let i=0; i<=length; i++) {
        titles[i] = books[i].title
    } return titles

*/