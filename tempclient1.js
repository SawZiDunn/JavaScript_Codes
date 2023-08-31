const net = require("net");
 
const client = new net.Socket();

const port = 8080;

host = "127.0.0.1";

client.connect(port, host, function(){

    console.log("Connected");

    client.write("Hello from client "+ client.address().address);
})

client.on("data", function(data){
    console.log("Server says :"+ data)
})

client.on("close", function(){

    console.log("Connection closed");
})