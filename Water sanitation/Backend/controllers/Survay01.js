const { response } = require('express');
const Survey01 = require('../moduls/Survey01')

exports.addSurvey = async (req, res) => {
 
 try{
      const newPerson = new Survey01({
        email:req.body.email,
        source: req.body.source,
        treated: req.body.treated,
        issues: req.body.issues,
        access: req.body.access,
        sewage:req.body.sewage,
        waterborne: req.body.waterborne,
        quality: req.body.quality,
        resources: req.body.resources,
        treatment: req.body.treatment
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


exports.getAllSurvey = async (req, res) => {
  try {
    const allPerson = await Survey01.find();
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

exports.getOneSurvey = async (req, res) => {
    try {
      let email = req.params.email;
      const repo = await Survey01.findOne({email:email});
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