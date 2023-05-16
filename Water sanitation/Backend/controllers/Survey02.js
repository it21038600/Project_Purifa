const { response } = require('express');
const Survey02 = require('../moduls/Survey02')

exports.addSurvey = async (req, res) => {
 
 try{
      const newPerson = new Survey02({
        email:req.body.email,
        water_supply: req.body.water_supply,
        use: req.body.use,
        clean: req.body.clean,
        steps: req.body.steps,
        tested:req.body.tested,
        improvements: req.body.improvements,
        satisfied: req.body.satisfied
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
    const allPerson = await Survey02.find();
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
      const repo = await Survey02.findOne({email:email});
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