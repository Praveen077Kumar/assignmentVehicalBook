const express = require('express');
const router = express.Router();
const ModelRoute= require('../controllers/booking');


router.post('/bookingdate',ModelRoute.bookingDate);
router.post('/main',ModelRoute.getDates);
module.exports = router;