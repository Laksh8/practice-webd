
const tambola = document.getElementById("tambola-numbers");
let rand = document.getElementById("random-number");
let already_visited_elements_div = document.getElementById("already-visited-numbers");
let arr = [];
let already_visited_elements = [];
console.log(rand);
let s = ``;

for(let i=0;i<100;i++){
    s+= `<button id="tambola-btn-${i+1}" class="tambola-btn"> ${i+1} </button> ` 
    arr.push(i+1);
}
tambola.innerHTML = s;


function random_item(items){
  
    return items[Math.floor(Math.random()*items.length)];
        
}


setInterval(()=>{
    let number = random_item(arr);
    if(number)
        rand.innerHTML = `<div> ${number} </div>`;
    else
        rand.innerText = "GAME OVER";    
    var index = arr.indexOf(number);
    // let index = number-1;
    if (index > -1) { // only splice array when item is found
        arr.splice(index, 1); // 2nd parameter means remove one item only

        console.log("Index Removed from ",index,arr.find( ( num )=>{ return num == number } ));
    }

    button = document.getElementById(`tambola-btn-${number}`);
    button.style = `
        background-color:gray;
        border:1px solid gray;
    `;
    already_visited_elements.push(number);
    let number_btn = document.createElement("button");
    number_btn.classList.add("already-visited-numbers");
    number_btn.id = `already-visited-number-${number}`;
    number_btn.innerText=number;
    already_visited_elements_div.appendChild(number_btn);
},3000)


