const reverseString = function(phrase) {
lettersArray = [];
phraseLength = phrase.length;
for(let i = phraseLength; i > 0; i--) {
    lettersArray[phraseLength - i] = phrase.at(i - 1);
}
const reversedString = lettersArray.join("");
return reversedString;
};

// Do not edit below this line
module.exports = reverseString;