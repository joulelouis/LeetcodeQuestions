console.log('Hello World!');

function isIsomorphic(s, t) {
    
    if (s.length !== t.length) { // check if the lengths of strings s and t are not equal
        return false // if lengths are not equal, they cannot be isomorphic
    }

    const charMappingMap = new Map(); // create a map to store the strings s and t

    for (let i = 0; i < s.length;  i++) { // iterate through the characters of strings s and t
        const original = s[i]; // get the character from string s 
        const replacement =  t[i]; // get the character from string t

        if (!charMappingMap.has(original)) { // if original character is not in the map
            // check if the replacement character is not used for any other original character
            if (!Array.from(charMappingMap.values()).includes(replacement)) {
                charMappingMap.set(original, replacement); // if not, create a mapping
            } else {
                return false;// if the replacement character is already used, return false
            }
        } else {
            const mappedCharacter = charMappingMap.get(original);
            // if the mapped character does not match the replacement, return false
            if (mappedCharacter !== replacement){
                return false;
            }
        }
    }

    return true; // if all conditions pass, return true (strings are isomorphic)
}

const result = isIsomorphic('add', 'egg');
console.log(result);
