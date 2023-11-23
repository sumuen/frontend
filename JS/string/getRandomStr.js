function radomStr(length) {
    let str =''
for (let i =0;i<length;i++){
    str+=Math.random().toString(36).substr(2)
}
return str.substring(0, length)
}
function randomStr2(length) {
    let str = '';
    while (str.length < length) {
        str += Math.random().toString(36).substr(2);
        // only UpperCase
        let reg = /[^a-z]/g;                
        str = str.replace(reg, '');
        str = str.toUpperCase();
        if (str.length >= length) {
            return str.substr(0, length);
        }
    }
}

console.log(randomStr2(10));

