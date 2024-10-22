function intersection(arr1, arr2) {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);
    const intersect = [...set1].filter(item => set2.has(item));
    return intersect;
}

console.log(intersection([1, 3, 2, 1], [3, 4]));
 