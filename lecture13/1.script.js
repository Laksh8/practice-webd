
function fun(name,activity,vehicle){
    this.name = name;
    this.activity = activity;
    this.vehicle = vehicle;
    return 1;
}

let a1 = new fun("a","b","c");
let a2 = new fun("x","y","z");

console.log(a1);
console.log(a2);



