const express = require('express');
const router = express.Router();
const product = require('../collections/product');
module.exports = router
router.get('/product', async(req, res) => {
    try {
        const production = await product.find()
        res.send(production),console.log(production)
     }
    catch (error) { console.log(error) }
})
router.get('/product/:id', async(req, res) => {
    try {
        const id = req.params.id;
        const production = await product.findOne({ _id: id })
        res.send(production)
     }
    catch (error) { console.log(error) }
})
router.delete('/product/:id', async(req, res) => {
    try {
        const id = req.params.id;
        const production = await product.findOneAndDelete({ _id: id })
        res.send(production)
     }
    catch (error) { console.log(error) }
})
router.post('/product', async (req, res) => {
    try {
        const {name,details,price,image,pcs} = req.body;
        const again = await product.findOne({name});
        if (again) { return res.send('again'); };
        if (!(name&&details&&price&&image&&pcs)) { return res.send('broken'); };
        const production = await product.create({name,details,price,image,pcs})
        res.send(production), console.log(production)
    } catch (error) {
        console.log(error)
    }
});
router.put('/product/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const {name,details,price,image,pcs} = req.body;
        if (!(name&&details&&price&&image&&pcs)) { return res.send('broken'); };
        const production = await product.findOneAndUpdate({ _id: id },{name,details,price,image,pcs})
        res.send(production), console.log(production)
    } catch (error) {
        console.log(error)
    }
});
