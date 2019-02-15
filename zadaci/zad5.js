const s1 = "asdf";
const s2 = "dsfa";

//5. Proveriti da li su dva stringa anagrami
function anagram(s1, s2) {
    const char1 = [];
    const char2 = [];

    if (s1.length != s2.length) return false;

    for (let i = 0; i < s1.length; i++) {
        if (char1[s1[i]])
            char1[s1[i]]++;
        else
            char1[s1[i]] = 1;

        if (char2[s2[i]])
            char2[s2[i]]++;
        else
            char2[s2[i]] = 1;
    }

    for (const ind in char1) {
        if (char1[ind] != char2[ind]) return false;
    }

    return true;
}

console.log(anagram(s1, s2));