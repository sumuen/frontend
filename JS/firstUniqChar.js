function firstUniqChar(s) {
    for (let i = 0; i < s.length; i++) {
        if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
            return s[i];
        }
    }
    return -1; // 如果没有找到唯一的字符，返回-1
}

console.log(firstUniqChar('leetcode'));