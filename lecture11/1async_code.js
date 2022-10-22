function waitASec(n=1){
    let current_time = new Date().getTime();
    console.log(current_time);
    while(true){
        let latest_time = new Date().getTime();
        if(latest_time -current_time >1000*n ){
            break;
        }
    }
    console.log("Sync delay for 3 sec");
}

waitASec(3);