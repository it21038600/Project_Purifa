const express = require('express');
const Funds = require('../models/funds');

const router = express.Router();

//create data

router.post('/fund/save',(req,res)=>{
    let newFund = new Funds(req.body);
    newFund.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            sucess:"Data saved sucessfully"
        });
    });
});
//read data
router.get('/fund',(req,res)=>{
    Funds.find().exec((err,funds)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
            return res.status(200).json({
                success:true,
                existingFunds:funds
            });
        
    });
});
//get a specific data

router.get("/fund/:id", (req, res) => {
    let fundId = req.params.id;
    
  
    Funds.findById(fundId, (err, fund) => {
      if (err) {
        return res.status(400).json({ success: false, err });
      }
      if (!fund) {
        return res.status(404).json({ success: false, message: 'Data not found' });
      }
      return res.status(200).json({ success: true, fund });
    });
  });
  


//update Data
router.put('/fund/update/:id',(req,res)=>{
    Funds.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,fund)=>{
            if(err){
                return res.status(400).json({error:err});
            }

            return res.status(200).json({
                success:"updated Sucessfully"
            });
        }
    );
});
//delete Data
router.delete('/fund/delete/:id',(req,res)=>{
    Funds.findByIdAndRemove(req.params.id).exec((err,deletedFund)=>{
        if(err)return res.status(400).json({
            message:"Delete Unsucessful",err
        });
        return res.json({
            message:"Deleted Sucessfully",deletedFund
        });
    });
});
module.exports = router;
