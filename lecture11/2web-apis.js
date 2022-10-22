// console.log("Program Started");
// setTimeout((  )=>{
//     console.log("Movie Downloaded");
// },0);
// console.log("programm ended");



// setInterval( ()=>{
//     document.getElementById("div").innerHTML = `
//     <div id="div" style="
//         width:${new Date().getTime()%1000}px;
//         // margin:${new Date().getTime()%100}px;
//         height: 100px;
//         background-color: rgb(${ 255 - new Date().getTime()%253 } ,${ new Date().getTime()%253} , ${ new Date().getTime()%253 });
//     " ></div>
//     `;
//     console.log(`rgba(${ new Date().getTime()%253} , ${ 255 - new Date().getTime()%253 }, ${ new Date().getTime()%253 });`);
// } , 100 )



id = setInterval(() => {console.log("Hello")}, 10,setTimeout( ()=>{ clearInterval(id); },3000 ) )

