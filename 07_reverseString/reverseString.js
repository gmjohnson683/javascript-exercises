const reverseString = function(phrase) {
// Line 1: The test file provides a word that needs to have its individual letters reversed.
// (i.e., apple -> elppa)
// Status: Completed - see function declaration above

// Line 2: Create an empty array that will store all the individual letters of the given word.
// (i.e., apple -> [a, p, p, l, e])
// Status: Completed

// Code snippet
lettersArray = [];

// Line 3: The length of the word is stored in an variable, or data storage container. The data in this variable will used for the loop later in the code.
// Status: Completed

// Code snippet
phraseLength = phrase.length;

// Line 4: The following loop will begin by taking apart the individual letters from the given word in a back-to-front manner, and store them in the empty array created earlier.
// (i.e., apple -> [e, l, p, p, a])
// Status: Completed

// Code snippet
for(let i = phraseLength; i > 0; i--) {
    lettersArray[phraseLength - i] = phrase.at(i - 1);
}

// Line 5: The letters stored in the array will be glued together to form the reversed lettering of the given word at the beginning of the code. 
// (i.e., [e, l, p, p, a] -> elppa)
// Status: Completed
const reversedString = lettersArray.join("");

// Code snippet
return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
