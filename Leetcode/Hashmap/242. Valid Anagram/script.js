console.log('Hello World!');

function isAnagram(s, t) {

    if (s.length !== t.length) {
        return false;        
    }
/*
    for (const char of t) {
        s = s.replace(char, '');
    }

    if (!s) return true;
    else return false;
*/
    const sortS = s.split('').sort().toString()
    const sortT = t.split('').sort().toString();

    if (sortS !== sortT) return false;
    else return true

};

const check = isAnagram('rat', 'car');
console.log(check);