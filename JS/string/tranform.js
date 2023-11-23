function tranform(str) {
    let newstr = str.replace(/[A-Za-z]/g, char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase())
    return newstr
}
console.log(tranform('aBcD'))