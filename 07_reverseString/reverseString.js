const reverseString = function(phrase) {
lettersArray = [];
for(let i = phrase.length; i > 0; i--) {
    lettersArray[phrase.length - i] = phrase.at(i - 1);
}
const reversedString = lettersArray.join("");
return reversedString;
};

// Do not edit below this line
module.exports = reverseString;