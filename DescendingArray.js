let arr  = [1,2,5,4,8,6]
let res = [];

const DescendingArr = ()=>{
    for(let i=arr.length -1; i>=0; i--){
         res.push(arr[i])
    }
    return res
}
DescendingArr();
console.log("output==>>>",res)

// const ressult = 
//     arr.sort((a,b)=>{
//         return b-a;
//     })
// console.log(ressult);