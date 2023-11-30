const arr = ['Are you OK', 'Lance', 'Jerry', '我爱你'];

// Function to calculate the byte size of a string
// Note: Simplified for characters in the Basic Multilingual Plane
const getBytes = (str) => {
    let bytes = str.length;
    for (let i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) > 255) {
            bytes++;
        }
    }
    return bytes;
}

// Sort the array based on the byte size of each string
arr.sort((a, b) => getBytes(a) - getBytes(b));

console.log(arr);
const numbers = [5, 2, 8, 1, 9];
numbers.sort((a, b) => a - b);//如果返回值为负数，表示 a 应该排在 b 前面；如果返回值为正数，表示 b 应该排在 a 前面
console.log(numbers); // 输出 [1, 2, 5, 8, 9]