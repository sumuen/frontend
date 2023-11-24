function disruptOrder(arr){
    for (let i=0;i<arr.length;i++){
        let temp = arr[i]
        let randomIndex = Math.floor(Math.random()*arr.length)
        arr[i]=arr[randomIndex]
        arr[randomIndex]=temp
    }
    return arr
}
console.log(disruptOrder([1,2,3,4,5,6,7,8,9,10]))