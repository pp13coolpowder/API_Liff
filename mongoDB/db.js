const mongoose = require('mongoose')
const connectDB = async()=>{
    try{
        await mongoose.connect('mongodb+srv://Line_liff_01:1234@lineecommerce.2b404j3.mongodb.net/Store?retryWrites=true&w=majority')
        console.log('connect mongoDB....')
    }
    catch(err){
        console.log(err)
    }
}
module.exports=connectDB