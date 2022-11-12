
let p = new Promise( (resolve, reject) => {
    setTimeout( () =>{ reject(); } ,3000 )
} );


p
.then( () => {
    console.log("Movie Downloaded completely");
}, () => {
    console.log("Movie Download Failed");
}
)






// p
// .then( () => {
//     console.log("Movie Downloaded completely");
// })
// .catch( () => {
//     console.log("Movie Download Failed");
// } )
