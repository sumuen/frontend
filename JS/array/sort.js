const users = [
  { name: "John", age: 20, company: "Baidu" },
  { name: "Pete", age: 18, company: "Alibaba" },
  { name: "Ann", age: 19, company: "Tecent" }
]
console.log(users.sort(byField('age')))
users.sort(byField('company'))
function byField(field) {
    return function (a,b){
        if (a[field] > b[field]) return 1;
        if (a[field] < b[field]) return -1;
    }
}