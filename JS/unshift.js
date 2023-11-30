const arr = [1, 2, 3];
Array.prototype.unshift.call(arr, 4, 5);
console.log(arr); // [4, 5, 1, 2, 3]
// Array.prototype.myUnshift = function (...args) {
//   for (let i = args.length - 1; i >= 0; i--) {
//     this.splice(0, 0, args[i]);
//   }
//   return this.length;
// }
Array.prototype.myUnshift = function () {
    for (let i =arguments.length-1;i>=0;i--) {
        this.splice(0,0,arguments[i]);
    }
    return this;
}
// 在这段代码中，`arguments`和`this`分别代表以下内容：

// - `arguments`：是一个特殊的对象，它包含了函数调用时传递的所有参数。在这个代码中，`arguments`用于获取调用`myUnshift`方法时传递的参数列表。

// - `this`：是指向当前对象的引用。在这个代码中，`this`指向调用`myUnshift`方法的数组对象。通过`this`可以访问和修改数组的元素。

// 所以，`arguments`用于获取传递给`myUnshift`方法的参数，而`this`用于操作调用该方法的数组对象。
console.log(arr.myUnshift(1,2,3,4,5))