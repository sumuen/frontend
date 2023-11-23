function longestCommonPrefix(arr) {
    if (!arr.length) return '';
    let res = '';
    let firstWord = arr[0];
    for (let i=0;i<arr.length;i++){
        //
        for (let j=0;j<arr.length;j++)
        if (firstWord[i]!==arr[j][i]){

            return res
        }
        res+=firstWord[i]
    }
}
console.log(longestCommonPrefix(["flower","flow","flight"]))