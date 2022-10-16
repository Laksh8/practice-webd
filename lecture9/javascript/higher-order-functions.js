// When a function takes function as an argument and it can return function as a value

avengers = () =>{
    console.log("I am an Avenger!");
    iron_man = () => {
        console.log("Ironman");
    }

    return iron_man;
}

iron_man = avengers();

iron_man();

dog = function(){
    console.log("Hey");
}

dog();


let testing = () =>{
    console.log("Hello");
    return testing;
}


a = testing();

b = a();
b();






