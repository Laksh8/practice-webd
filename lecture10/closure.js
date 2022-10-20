function outerFun(a=5){
    // let a = 1;
    function inner(){
        a++;
        return a;
    }
    return inner;
}



let fun1 = outerFun(5);
let fun2 = outerFun(5);

console.log(fun1());
console.log(fun1());
console.log(fun1());
console.log(fun1());
console.log(fun1());
console.log(fun2());

