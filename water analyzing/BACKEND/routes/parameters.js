const router = require("express").Router();
const parameter = require("../models/parameter");

router.route("/add").post((req, res) => {
  const name = req.body.name;
  const ph = req.body.ph;
  const doParam = req.body.do;
  const conductivity = req.body.conductivity;

  const newParameter = new parameter({
    name,
    ph,
    do: doParam,
    conductivity,
  });

  newParameter
    .save()
    .then(() => {
      res.json("New parameter added");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/").get((req, res) => {
  parameter
    .find()
    .then((parameters) => {
      res.json(parameters);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/update/:id").put(async (req, res) => {
  const parameterId = req.params.id;
  const { name, ph, doParam, conductivity } = req.body;

  const updateParameter = {
    name,
    ph,
    do: doParam,
    conductivity,
  };

  try {
    await parameter.findByIdAndUpdate(parameterId, updateParameter);
    res.status(200).send({ status: "parameter updated" });
  } catch (err) {
    console.log(err);
    res.status(500).send({ status: "error with updating data", error: err.message });
  }
});

router.route("/delete/:id").delete(async (req, res) => {
  const parameterId = req.params.id;

  try {
    await parameter.findByIdAndDelete(parameterId);
    res.status(200).send({ status: "parameter deleted" });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ status: "error with delete parameter", error: err.message });
  }
});

router.route("/get/:id").get(async (req, res) => {
  const parameterId = req.params.id;

  try {
    const parameter = await parameter.findById(parameterId);
    res.status(200).send({ status: "parameter fetched", parameter });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ status: "error with get parameter", error: err.message });
  }
});

module.exports = router;
