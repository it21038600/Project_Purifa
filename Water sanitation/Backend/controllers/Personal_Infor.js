const { response } = require('express');
const Person = require('../moduls/Personal_infor')

exports.addPerson = async (req, res) => {
 
 try{
      const newPerson = new Person({
        name: req.body.name,
        email: req.body.email,
        phone_number: req.body.phone_number,
        province: req.body.province,
        district: req.body.district,
        postal_code: req.body.postal_code,
        address: req.body.address,
        age: req.body.age,
        gender: req.body.gender,
        occupation: req.body.occupation,
        household_size: req.body.household_size
      });

      newPerson.save().then(()=>{
        res.json("Person Added")
    }).catch((err) => {
        console.log(err);
    })

    
  } catch (error) {
    res.status(500).json({
      message: "Somthing Went Wrong..! +",
      error: error
    })

  }
}


exports.getAllPerson = async (req, res) => {
  try {
    const allPerson = await Person.find();
    if (allPerson) {
      res.status(200).json({
        message: "Fetched Successfull..!",
        payload: allPerson
      })
    }
  }catch(error){
    console.log(error)
  }
}

exports.getOnePerson = async (req, res) => {
  try {
    let user = req.params.email;
    const repo = await Person.findOne({email:user});
    if (repo) {
      res.status(200).json({
        message: "Fetched Successfull..!",
        payload: repo
      })
    }
  }catch(error){
    console.log(error)
  }
}


exports.updatePerson =  (async(req,res)=>{
    let userId = req.params.id;

    const name = req.body.name;
    const email = req.body.email;
    const province = req.body.province;
    const district = req.body.district;
    const postal_code = req.body.postal_code;
    const address = req.body.address;
    const age = req.body.age;
    const gender = req.body.gender;
    const occupation = req.body.occupation;
    const household_size = req.body.household_size;
    const any = req.body.any;
   
    const updateReport = {
        name,
        email,
        province,
        district,
        postal_code,
        address,
        age,
        gender,
        occupation,
        household_size,
        any
    }

    const update = await Person.findByIdAndUpdate(report_id, updateReport).then(() => {
        res.status(200).send({status: "Report Updated"})
    }).catch((err) =>{
        console.log(err);
        res.status(500).send({status: "Error with updation data"});
    })

    
})

exports.deletePerson = (async (req,res) =>{
     let userId = req.params.id;

     await Person.findByIdAndDelete(userId).then(() => {
        res.status(200).send({status: "User deleted"});
     }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with delete user", error: err.message});
     })
})
