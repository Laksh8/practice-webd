let grandfather = document.querySelector("#grandfather");
let father = document.querySelector("#father");
let mother = document.querySelector("#mother");


grandfather.addEventListener("click",(ev) => {
    // ev.stopPropagation();
    console.log("GrandFather");
},true) // true to execute parent before child

father.addEventListener("click",(ev) => {
    // ev.stopPropagation();

    console.log("Father");
})
mother.addEventListener("click",(ev) => {
    // ev.stopPropagation();

    console.log("Mother");
})