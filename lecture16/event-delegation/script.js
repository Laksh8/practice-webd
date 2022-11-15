
const div = document.getElementById("btn-list");

let s = ``;

for(let i=0;i<100;i++){
    s+= `<button id="tambola-btn-${i+1}" class="tambola-btn" onclick="fun(this)"> ${i+1} </button> ` 
}

div.innerHTML = s;

function fun(self){
    self.style=`
        background-color: blueviolet;
    `;
}
