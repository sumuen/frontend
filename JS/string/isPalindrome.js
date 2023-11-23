const str =  'awocaonima,dwWDAMin1oacowa'
function ispalindrome(str) {
    const reg = /[^A-Z0-9a-z]/g
    const newstr = str.replace(reg,"")
    const reverseStr = newstr.split("").reverse().join("")
    return reverseStr.toLowerCase() === newstr.toLowerCase()
}
console.log(ispalindrome(str));