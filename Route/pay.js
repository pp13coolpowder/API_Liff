const express = require('express');
const router = express.Router();
const QRCode = require('qrcode');
const generatePayload = require('promptpay-qr');
const _ = require('lodash');
module.exports = router
router.post('/pay',async(req, res)=>{
    const amount = parseFloat(_.get(req, ["body", "amount"]));
    const mobileNumber = '0649924579';
    const payload = generatePayload(mobileNumber, { amount });
    const option = {
        color: {
            dark: '#000',
            light: '#fff'
        }
    }
    QRCode.toDataURL(payload, option, (err, url) => {
        if(err) {
            console.log('generate fail')
            return res.status(400).json({
                RespCode: 400,
                RespMessage: 'bad : ' + err
            })  
        } 
        else {
            return res.status(200).json({
                RespCode: 200,
                RespMessage: 'good',
                Result: url
            })  
        }

    })
})
