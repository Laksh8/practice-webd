const para = document.querySelector("#para");

var a;
para.addEventListener("mouseenter",function(key){
    this.style = ` 
        border: 2px solid black;
        padding: 50px;
        background-color: blueviolet;;
        color:white;
    `;
});

para.addEventListener("mouseout" , function(key){
    this.style= "";
});


