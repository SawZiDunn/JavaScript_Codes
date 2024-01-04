const http = require('nodejs_start/http');
const port = 8080;
const url = require('url');

const server = http.createServer(function(req, res){

    res.writeHead(200, {'Content-Type': 'text/html'});

    const q = url.parse(req.url, true).query;

    let name = "saw";
    let pass = "saw";

    let username = q.username;
    let password = q.password;

    let result = "This is your profile :\n"+username+"\n"+password;

    if(name === username && pass === password){

    let encryptedData = "";

    for(let i = 0; i < password.length; i++){
    encryptedData += password[i];


    for(let x = 0;x<3 ;x++){

        let  rand = Math.floor((Math.random() * 27) + 97);
        let random = String.fromCharCode(rand);
        encryptedData+=random;

    }
}
        res.end(encryptedData);
        console.log(username);
        console.log(password);

    }else{
        res.end("Incorrect Registration");
    }

    

})

server.listen(port, function(error){

    if(error){
        console.log("Something went wrong.");
    }else{

        console.log("Server is running on port "+port);
    }
});