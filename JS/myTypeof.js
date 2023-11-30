function myTypeof(obj) {
    const type = typeof obj;
    if (type !== 'object') {
        return type;
    }
    console.log(Object.prototype.toString.call(obj));
    const typeString = Object.prototype.toString.call(obj).replace(/^\[object (\S+)\]$/, '$1');


    return typeString
}
console.log(myTypeof([222,2221]));