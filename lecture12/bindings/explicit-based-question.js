let obj = {
    arr:[1,2,3,4,5]
}

let obj1 = {
    arr:[10,20,30,40,50]
}

function sum(){
    let su = 0;
    for(let i of this.arr){
        su += i;
    }
    return su;
}

console.log(sum.call(obj));