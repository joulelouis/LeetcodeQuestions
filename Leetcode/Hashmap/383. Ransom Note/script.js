console.log('Hello World!');

function canConstruct(ransomNote, magazine) {
    // loop through each character  in the 'magazine' string
    for (const char of magazine) {
        // replace the current character 'char' in 'ransomNote' with an empty string
        ransomNote = ransomNote.replace(char, '');
    }

    // check if 'ransomNote' is empty (i.e., if all characters in 'ransomNote' were found in 'magazine')
    if (!ransomNote) return true; // if 'ransomNote' is empty, return true
    else return false; // if 'ransomNote' is not empty, return false 
};

const note = canConstruct('aaa', 'baaab');
console.log(note);