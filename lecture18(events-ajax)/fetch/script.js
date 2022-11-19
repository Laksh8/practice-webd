let ul = document.querySelector("#facts");
let facts_count = 10;
let inc = document.querySelector("#inc");
let dec = document.querySelector("#dec");
let counter_value = document.querySelector(".counter-value");


counter_value.innerText = facts_count;

let getFacts = () =>  {

}



inc.addEventListener("click", () => {
    
        facts_count += 1;
        counter_value.innerText = facts_count
        let url = `https://meowfacts.herokuapp.com/?count=${facts_count}`;
    
    
        fetch(url)
        .then( (response) => {
            return response.json()
        })
        .then( (result) => {
            ul.innerText = "";
            result.data.forEach(element => {
                
                // console.log(element);
                let li = document.createElement("li");
                li.innerText = element;
                li.classList.add("facts-li");
                ul.appendChild(li);
            });
        })
        .catch( (error) => {
            console.log("error",error)
        } )     
    })

dec.addEventListener("click", () => {
    if(facts_count > 1)
    {    
        facts_count -= 1;
        counter_value.innerText = facts_count
        let url = `https://meowfacts.herokuapp.com/?count=${facts_count}`;    
        fetch(url)
        .then( (response) => {
            return response.json()
        })
        .then( (result) => {
            ul.innerText = "";
            result.data.forEach(element => {
                // console.log(element);
                let li = document.createElement("li");
                li.innerText = element;
                li.classList.add("facts-li");
                ul.appendChild(li);
            });
        })
        .catch( (error) => {
            console.log("error",error)
        } )     
    }
})






let url = `https://meowfacts.herokuapp.com/?count=${facts_count}`;

fetch(url)
.then( (response) => {
    return response.json()
})
.then( (result) => {
    result.data.forEach(element => {
        console.log(element);
        let li = document.createElement("li");
        li.innerText = element;
        li.classList.add("facts-li");
        ul.appendChild(li);
    });
})
.catch( (error) => {
    console.log("error",error)
} )  