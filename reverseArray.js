//reverse array in JS
let arr  = [1,2,5,4,8,6]
let result = [];
const reverseArr = ()=>{
    for(let i=arr.length -1; i>=0;i--){
          result.push(arr[i])
    }
    return result
}
console.log(reverseArr())

