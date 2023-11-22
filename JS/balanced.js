function balanced(s) {
    let stack = [];
    let map = {
        ')': '(',
        ']': '[',
        '}': '{'
    }
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
            stack.push(s[i])
        }else if (s[i] === ')' || s[i] === ']' || s[i] === '}') {
            if (stack.pop() !== map[s[i]]) {
                return false;
            }
        }
        
    }
    if (stack.length !== 0) {
        return false;
    }
    return true;
}
console.log(balanced('(){}[]{'));