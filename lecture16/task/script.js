const para = document.querySelector("#para");

var a;
para.addEventListener("mouseenter",function(key){
    // this.style = ` 
    //     border: 2px solid black;
    //     padding: 50px;
    //     background-color: blueviolet;
    //     color:white;
    // `;
    this.classList.add("random-class")
});

para.addEventListener("mouseout" , function(key){
    this.style= "";
    para.classList.remove("random-class");
});

body = document.querySelector("#body");

// setInterval( ()=> {
//     body.classList.toggle("border");
// },1100 )





 