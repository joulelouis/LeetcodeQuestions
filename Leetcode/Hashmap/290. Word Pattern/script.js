console.log('Hello World!');

const wordPattern = function(pattern, s) {
    // split the string and return as an array of strings (words)
    let words = s.split(' ');

    // check if the string are not equal length, if not return false
    if (pattern.length !== words.length) {
        return false;
    }

    // create a Map that will store the pattern as keys and words as values
    const wordMap = new Map();

    // loop through the array
    for (let i = 0; i < pattern.length; i++) {
        const currentChar = pattern[i];

        if (wordMap.has(currentChar)) {
            if (wordMap.get(currentChar) !== words[i]) {
                return false;
            }
        } else {
            if (Array.from(wordMap.values()).includes(words[i])) {
                return false
            }
            wordMap.set(currentChar, words[i])
        }
    }

    return true;

};

const pattern = 'abba';
const s = 'dog cat cat fish';

const isPatterned = wordPattern(pattern, s);
console.log(isPatterned);
