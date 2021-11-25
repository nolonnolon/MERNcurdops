const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/users')
    .then(()=>{console.log("fallback function - database connection sucessful")})
    .catch((error)=>{console.log(error)});
module.exports=mongoose;
