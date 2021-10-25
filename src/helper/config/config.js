const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async()=>{
    try {
        await  mongoose.connect(process.env.DATABASE_URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('MongoDB Connection Success')
    } catch (error) {
        console.log('MongoDB Connection Failed')
        process.exit(1)
    }
}

module.exports= connectDB;