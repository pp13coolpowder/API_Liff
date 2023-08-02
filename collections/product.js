const mongoose = require('mongoose');
const product = mongoose.Schema({
    name:{type:String},
    details:{type:String},
    price:{type:String},
    image:{type:String},
    pcs:{type:String}

})
module.exports =mongoose.model('Product', product);