const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6,1];
const arr3 = [7, 8, 9];
const arr4 = [10, 11, 12];
function compose(...args) {
    return args.reduce((a, b) => {
        return [...new Set(a.concat(b))];
    });
}
console.log(compose(arr1, arr2, arr3, arr4));