function missingNumber(arr) {
    const n = arr.length + 1;
    const expectedSum = (n * (n + 1)) / 2; 
    const actualSum = arr.reduce((acc, num) => acc + num, 0); 
    return expectedSum - actualSum; 
}
const missing = missingNumber([1, 2, 3,4, 5,7]);
console.log("The missing number is:", missing);
