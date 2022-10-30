// console.log(this) // This is a window in browser (BOM:Brower Object Model)
// a = 10;
let x = {
    name: "Lakshit Khanna",
    "get_name" : function() {return this.name}
}


// console.log(obj.get_name());

// // Question 
// function hello(){
//     console.log("Print This ", this);
// }

// hello()


// Explicit Binding 

let y= {
    name: "Laksh",
    "get_name" : function() {return this.name}
}

console.log(y.get_name.call(x));
console.log(y.get_name());
console.log(x.get_name());


