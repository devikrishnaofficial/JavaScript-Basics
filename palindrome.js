function isPalindrome(str) {
    const cleanedStr = str.toLowerCase();
    const reversedStr = cleanedStr.split('').reverse().join('');    
    return cleanedStr === reversedStr;
}
let testString = "okoko"; 
if (isPalindrome(testString)) {
    console.log(`"${testString}" is a palindrome.`);
} else {
    console.log(`"${testString}" is not a palindrome.`);
}
