const express = require('express');
const { addSurvey, getAllSurvey,getOneSurvey} = require('../controllers/Survay01');
const router = express.Router();

router.post('/add',addSurvey);
router.get("/get", getAllSurvey);
router.get("/get/:email", getOneSurvey);

module.exports = router;