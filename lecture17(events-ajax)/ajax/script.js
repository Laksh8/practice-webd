
/* 
personJSON = JSON.stringify(person); // object to json string

JSON.parse(personJson); // string to Javascript Object
*/




let facts = document.querySelector(".get-facts");
let catFactDiv = document.querySelector(".cat-facts");




const xhr = new XMLHttpRequest();

xhr.addEventListener("load", function(ev) {
    let facts = JSON.parse(this.responseText)
    let ul  = document.querySelector(".cat-facts");
    console.log("Load", facts);
    facts.forEach(data => {
        let fact = data.text;
        console.log(fact);
        // Append the fact in unordered list in browser
        let li = document.createElement("li");
        li.innerText = fact;
        ul.appendChild(li);
    });
    // catFactDiv.innerHTML = JSON.stringify(quotes) ;
    


})

xhr.addEventListener("error",function(ev){
    console.log("ERROR",this.responseText);
})




facts.addEventListener("click",(ev) => {
    xhr.open("GET", "https://cat-fact.herokuapp.com/facts");
    xhr.send();
    // req.``
})

