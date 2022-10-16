
const arr = [1,2,3,4,5];
let ans = ""
arr.forEach( function(element,index,arr){
    if( ans)
        ans += ","+element ;
    else
        ans = element;
    console.log(`i: ${index}, value: ${element}, arr: ${arr}`);
} )

console.log(arr.toString().replaceAll(",","-").split("-"))





console.log(ans);