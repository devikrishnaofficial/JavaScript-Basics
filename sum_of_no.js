function sumNestedArray(arr) {
    let totalSum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            totalSum += sumNestedArray(arr[i]);
        } else {
            totalSum += arr[i];
        }
    }    
    return totalSum;
}
let nestedArray = [1, [2, 3], [4, [5, 6]], 7];
console.log(sumNestedArray(nestedArray));  