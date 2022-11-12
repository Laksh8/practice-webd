// document.onkeyup =  (key) => {
//     console.log(key);
// } 

const btn = document.querySelector("#btn");
btn.addEventListener("click",(key)=>{
    console.log(key);
})

btn.addEventListener("mousedown",( key )=>{
    console.log(key);
})

// btn.removeEventListener("mousedown",( key )=>{
//     console.log(key);
// });

 