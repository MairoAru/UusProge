const { response } = require('express');
const express = require('express');
const app = express();



app.get('/',(request,response)=>{
    console.log(request);
    response.send('hello world');
});
app.get('/contact',(request,response)=>{
    response.send('name:kana tel:53240571');
});
app.get('*', (req, res)=>{
    res.send("404 not found");
});
app.listen(3000, function(){
    console.log("server is running on 3000");
});