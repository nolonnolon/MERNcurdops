const express = require('express');
const app=express();
const mongoose=require('./database/mongoose');
/*app.listen(3000, function(){
    console.log("server started on 3000")
});*/

app.listen(3000, () =>{
    console.log("opened on port 3000")
});