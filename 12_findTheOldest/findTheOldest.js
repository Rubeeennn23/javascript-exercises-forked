const findTheOldest = function(people) {
    return people.reduce((oldest,currentPerson) => {
        const oldestAge = defineAge(oldest.yearOfBirth,oldest.yearOfDeath);
        const currentAge = defineAge(currentPerson.yearOfBirth,currentPerson.yearOfDeath);
        return oldestAge > currentAge ? oldest : currentPerson;
    });
    
    function defineAge(yearOfBirth,yearOfDeath) {
        if (!yearOfDeath) {
            yearOfDeath = new Date().getFullYear()
        } return yearOfDeath-yearOfBirth
    }
     
};
// npm test findTheOldest.spec.js
// Do not edit below this line
module.exports = findTheOldest;
