const express = require('express'); 
const path = require('path');

const app = express()

app.get("",(req,res)=>{

    res.sendfile(path.join(__dirname+'/page1.html'));
})

app.get("/page2",(req,res)=>{

    res.sendfile(path.join(__dirname+'/page2.html'));

})

app.get("/page3",(req,res)=>{

    res.sendfile(path.join(__dirname+'/page3.html'));
})

app.listen(3000,()=>{

    console.log('Server starting up at: port:3000:');
})