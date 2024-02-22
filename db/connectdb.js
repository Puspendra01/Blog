const mongoose = require('mongoose');

 const local_url = 'mongodb://127.0.0.1:27017/pnblog'
 const url = 'mongodb+srv://puspendrajadon142:88888888@blog.phb7ugo.mongodb.net/Blog?retryWrites=true&w=majority&appName=Blog'
const connectDB =()=>{
    //return mongoose.connect('mongodb://localhost:27017/blog_website')
    return mongoose.connect(url)
    .then(()=>{
        console.log('Connection successful')
    })
    .catch((err)=>{
        console.log(err)
    })
}

module.exports = connectDB