const router = require("express").Router();
const Analyses = require("../models/analyses");

router.route("/add").post((req, res) => {
  const { name, number, ph, do: doParam, conductivity } = req.body;

  const newAnalyses = new Analyses({
    name,
    number,
    ph,
    do: doParam,
    conductivity,
  });

  newAnalyses
    .save()
    .then(() => {
      res.json("New analyses added");
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ status: "error with adding analyses", error: err.message });
    });
});

router.route("/").get((req, res) => {
  Analyses
    .find()
    .then((analyses) => {
      res.json(analyses);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ status: "error with get all analyses", error: err.message });
    });
});

router.route("/update/:id").put(async (req, res) => {
  const analysesId = req.params.id;
  const { name, number, ph, do: doParam, conductivity } = req.body;

  const updateAnalyses = {
    name,
    number,
    ph,
    do: doParam,
    conductivity,
  };

  try {
    await Analyses.findByIdAndUpdate(analysesId, updateAnalyses);
    res.status(200).send({ status: "analyses updated" });
  } catch (err) {
    console.log(err);
    res.status(500).send({ status: "error with updating analyses", error: err.message });
  }
});

router.route("/delete/:id").delete(async (req, res) => {
  const analysesId = req.params.id;

  try {
    await Analyses.findByIdAndDelete(analysesId);
    res.status(200).send({ status: "analyses deleted" });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ status: "error with delete analyses", error: err.message });
  }
});

router.route("/get/:id").get(async (req, res) => {
  const analysesId = req.params.id;

  try {
    const analyses = await Analyses.findById(analysesId);
    res.status(200).send({ status: "analyses fetched", analyses });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ status: "error with get analyses", error: err.message });
  }
});

module.exports = router;




