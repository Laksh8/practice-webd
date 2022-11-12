/*
const arr = [1,2,3,4,5];
const newarr = arr.map( (value,index,array) => {
    return value+10;
} );

console.log(newarr);
console.log(arr);
*/
// Polyfill map

Array.prototype.mymap = function(fun){
    let new_arr = [];
    let arr = this;
    for(let i=0;i<this.length;i++ ){
        new_arr.push(
            fun(arr[i],i,arr)
        );
    }
    return new_arr;
}

const arr = [1,2,3,4,5];
const newarr = arr.mymap( (value,index,array) => {
    return value+10;
} );

console.log(newarr);
console.log(arr);

Array.prototype.new_filter = function(fun){
    let arr = this;
    let new_arr = [];
    for(let i=0;i<arr.length;i++){
        if(fun(arr[i],i,arr)){
            new_arr.push(arr[i]);
        }
    }
    return new_arr;
}

let new_arr = arr.new_filter(
    (value,index,arr) =>{
        return value>2;
    }
);

console.log(new_arr);



Array.prototype.new_reduce = function(fun,accu){
    let value = accu;
    let arr = this;
    for(let i=0;i<arr.length;i++){
        value =  (value == undefined) ? arr[0] : fun(value,arr[i],i,arr);
    }
    return value;
}

let x = arr.new_reduce( (accu,initial,index,arr) => {
    return accu+initial;
});


console.log(x);

