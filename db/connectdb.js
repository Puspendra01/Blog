const mongoose = require('mongoose');

 const local_url = 'mongodb://127.0.0.1:27017/pnblog'
const connectDB =()=>{
    //return mongoose.connect('mongodb://localhost:27017/blog_website')
    return mongoose.connect(local_url)
    .then(()=>{
        console.log('Connection successful')
    })
    .catch((err)=>{
        console.log(err)
    })
}

module.exports = connectDB