const express = require('express');
const Donations = require('../models/donations');


const router = express.Router();

// Create data
router.post('/donation/save', (req, res) => {
  const newDonation = new Donations(req.body); // Create a new instance of Donations model
  
  newDonation.save((err) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: "Data saved successfully",
    });
  });
});




// Read data
router.get('/donation', (req, res) => {
  Donations.find().exec((err, donations) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: true,
      existingDonations: donations,
    });
  });
});

// Get a specific data
router.get('/donation/:id', (req, res) => {
  let donationId = req.params.id;

  Donations.findById(donationId, (err, donation) => {
    if (err) {
      return res.status(400).json({ success: false, err });
    }
    if (!donation) {
      return res.status(404).json({ success: false, message: 'Data not found' });
    }
    return res.status(200).json({ success: true, donation });
  });
});

// Update Data
router.put('/donation/update/:id', (req, res) => {
  Donations.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (err, donation) => {
      if (err) {
        return res.status(400).json({ error: err });
      }

      return res.status(200).json({
        success: "Updated successfully",
      });
    }
  );
});

// Delete Data
router.delete('/donation/delete/:id', (req, res) => {
  Donations.findByIdAndRemove(req.params.id).exec((err, deletedDonation) => {
    if (err) {
      return res.status(400).json({
        message: "Delete unsuccessful",
        err,
      });
    }
    return res.json({
      message: "Deleted successfully",
      deletedDonation,
    });
  });
});

module.exports = router;