let download = ( url ) => {
    return new Promise( (resolve, reject) =>{
        if(!url.startsWith("http")){
            reject(new Error("Invalid URL"));
            return;
        }
        console.log("Downloaded start from url : ",url);
        setTimeout( ()=>{ 
            let file_name = url.split("/").pop();
            resolve(file_name); 
        } , 3000 )
    } )
}

url = "http://abc.com/file.jpg";
download(url)
.then( (file) => {
    console.log("Downloaded file success",file);
    compression(file).then( (compressed_file) => {
        console.log("File Compressed successfully");
        uploadFile(compressed_file)
        .then( () => {
            console.log("successfully uploaded");
        } )
        .catch();

    }, (error) => {
        console.log(error.message);
    } );
} )
.catch( (error) => {
    console.log(error.message);
} )


let compression = (downloadedFile) => {
    return new Promise( ( resolve , reject ) => {
        
        if(["jpg","png","webp","svg"].indexOf( downloadedFile.split(".").pop()) == -1 ){
            reject(new Error("Invalid File Type"));
        }
        console.log("File compression started");
        setTimeout( () => {
            let compressed_file = downloadedFile.split(".")[0] + ".zip";
            resolve(compressed_file);
        },3000)
    } ) 
}


let uploadFile = (compressed_file) => {
    return new Promise( (resolve,reject)=>{
        console.log("Upload Started");

        setTimeout( ()=>{
            resolve(compressed_file);
        },3000);
    } )
}

