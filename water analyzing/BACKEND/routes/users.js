const router =  require("express").Router();
let user = require("../models/user");

router.route("/add").post((req,res)=>{

    const name = req.body.name;
    const status = req.body.status;       //************* boolean

    const newuser = new user({
        name,
        status
    })
    newuser.save().then(()=>{
        res.json("User Added")
    }).catch((err)=>{
        console.log(err);
    })

})





router.route("/").get((req,res)=>{

    user.find().then((users)=>{             //************* find findbyid
        res.json(users)

    }).catch((err)=>{
        console.log(err);
    })
})




router.route("/update/:id").put(async(req,res)=>{
    let userid = req.params.id;
    const {name,status} =req.body;

    const updateuser ={
        name,
        status
    }

    const update = await user.findByIdAndUpdate(userid,updateuser).then(()=>{
        res.status(200).send({status:"user updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status:"error with updating data",error: err.message})
    })

})





router.route("/delete/:id").delete(async(req,res)=>{
    let userid=req.params.id;
    await user.findByIdAndDelete(userid).then(()=>{
        res.status(200).send({status:"user deleted"});
        }).catch((err)=>{
            console.log(err.message);
            res.status(500).send({status:"error with delete user",error:err.message});
    })

})




router.route("/get/:id").get(async(req,res)=>{
    let userid = req.params.id;
    await user.findById(userid).then((user)=>{ 
        res.status(200).send({status:"user fetched",user})
    }).catch(() =>{
        console.log(err.message);
        res.status(500).send({status:"error with get user",error:err.message});
    })
})




module.exports = router;