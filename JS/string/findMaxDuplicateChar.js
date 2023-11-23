const str ='sdawdawdhioh1ob1obdajdsbdkssidnwwwsssssssssssssswwoiq';
function findmaxDuplicatechar(str){
    if (str.length===1) {
        return str
    }
    else  {
        //遍历每一个字母，如果检测到就+1，创建一个对象，键为字母，值为次数
        let obj = {}
        for (let i = 0;i<str.length;i++){
            if(!obj[str.charAt(i)]){
                obj[str.charAt(i)]=1
            }  else {obj[str.charAt(i)]+=1}
          
        }
        //比较obj对象中所有值的大小
        let maxChars = [];
        let maxvalue = 1;
        for (const key in obj) {
            if (obj[key] > maxvalue) {
                maxChars = [key];
                maxvalue = obj[key];
            } else if (obj[key] === maxvalue) {
                maxChars.push(key);
            }
        }
        return maxChars;

    }
}
console.log(findmaxDuplicatechar(str))