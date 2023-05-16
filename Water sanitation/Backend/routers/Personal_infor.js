const express = require('express');
const { addPerson, getAllPerson, getOnePerson, updatePerson, deletePerson } = require('../controllers/Personal_Infor');
const router = express.Router();




router.post('/add',addPerson);
router.delete('/delete/:id',deletePerson);
router.put('/update/:id',updatePerson);
router.get("/get", getAllPerson);
router.get("/get/:id", getOnePerson);

module.exports = router;