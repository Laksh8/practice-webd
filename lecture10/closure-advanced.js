function outerFun(){
    let a = 1;
    function inner(){
        a++;
        function innerMost(){
            a++
            return a;
        }
        return innerMost;
    }
    return inner;
}


let funGen1 = outerFun();
let fun1 = funGen1(); // 2
let fun2 = funGen1(); // 3

console.log(fun1()) // 3
console.log(fun1()) // 4
console.log(fun1()) // 5
console.log(fun2()) // 4
console.log(fun2()) // 5
