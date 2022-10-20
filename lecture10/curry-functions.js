

// function add(a){
//     let val = 0;
//     function re_add(a){
//         val +=a;
//         return re_add;
//     }
//     if(!a){
//         x = val;
//     }
//     else{
//         console.log(a)
//         x = re_add;
//         re_add(a);
//     }
//     return x;
// }


function add(a){
    value  = 0;
    function re_add(a){
        if(!a){
            return value;
        }
        else{
            value+= a;
            return re_add;
        }
    }

    x = re_add(a);
    return x;   
}





console.log(add(1)(2)(4)(10)());