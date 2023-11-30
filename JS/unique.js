//set
const arr = [1, 2, 3, 4, 5,2];
const set = new Set(arr);
console.log(set);
Array.prototype.myUnique = function () {
    return Array.from(new Set(this));
};
console.log(arr.myUnique());