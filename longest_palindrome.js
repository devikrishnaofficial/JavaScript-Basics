function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}

function longestPalindrome(s) {
    let maxLength = 0;
    let longest = '';

    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j <= s.length; j++) {
            let substring = s.slice(i, j);

            if (isPalindrome(substring) && substring.length > maxLength) {
                maxLength = substring.length;
                longest = substring;
            }
        }
    }
    return longest;
}

let string = "babad";
console.log(longestPalindrome(string));